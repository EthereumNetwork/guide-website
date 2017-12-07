// 1. create timer with an action every 30 mnites
// 2. Make request to meetup.com
// 3. Make request to other sites
// 4. form so they fit google-map marker form
const path = require('path');
const fs = require('fs');
const axios = require('axios');

let pathToEnv = path.join(__dirname, '..', '.env');
require('dotenv').config({path: pathToEnv});

// console.log(process.env.meetupApiKey);
let uri = 'http://api.meetup.com/2/groups/?topic=ethereum&key='+process.env.meetupApiKey+'&sign=true&only=city,link,description,lon,lat,name';

async function getData(uri){
    // console.log('making axois request to: ',uri);
    let page = await axios.get(uri).catch((e) => {
        if (e) {
          console.log('http request error, status:', e.response.status);
          return false;
        }
    });
    if (page){
    //   console.log(page);
        return page.data.results;
    } else {
      return false;
    }
}

formatMarkers = (data) =>{
    return new Promise ((resolve, reject) => {
        let markers = [];
        data.forEach(element => {
            let description = element.description;
            description = description.split('<br>');
            description = description.join('');
            let singleMarker = {
                "position": {"lat": element.lat,"lng": element.lon},
                "infoText": "<h6>" + element.name + "</h6>" +
                            "<a href=" + element.link + " target='blank'>" + element.link + "</a>" +
                            "<div>" + description + "</div>" 
            }
            markers.push(singleMarker);
        });
        resolve(markers);
    });
}
saveToFile = (data, filename ) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(`${filename}`, JSON.stringify(data,2,2), (err) => {
            if (err) {
              console.log('error occured writing file', err);
              return false;
            };
            console.log('File has been saved');
            return;
          });
    });
}


wrapper = async () => {
    let response = await getData(uri);
    if (response) {
        let markers = await formatMarkers(response);
        if (Array.isArray(markers)){
            let savedSuccessfully = await saveToFile(markers,  path.join(__dirname, '..', '/public/src/assets/groups.json'));
            console.log('Saved new markers to file: ', savedSuccessfully);
        }
    } else {
        console.log('Failed to obtain data from API');
    }
}
wrapper();

