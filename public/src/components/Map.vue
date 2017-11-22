<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-card-text>
      Map coming soon, with nodes from <a href="https://www.ethernodes.org" target="_blank"> ethernodes.org</a>, meetups from <a href="https://www.meetup.com/topics/ethereum/" target="_blank">Meetup.com</a>, as well as ether-cash trades from <a href="https://dether.io/" target="_blank">Dether</a> and <a href="https://localethereum.com/" target="_blank">localethereum</a>
      </v-card-text>
    </v-layout>
    <v-layout row wrap>
      <v-card-media>
        <gmap-map
          :center = "center"
          :zoom = 3
          style="width:600px; height: 400px;"
        >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center=m.position">
            </gmap-marker>
        </gmap-map>
      </v-card-media>
      </v-layout>
  </v-container>
  
</template>

<script>
  export default {
    name: 'Map',
    data () {
      return {
        name: 'map',
        // dialog: false,
        center: {lat: 10.123, lng: 10.44321},
        markers: [{
          position: {lat: 54.0, lng: 21.0}
        }, {
          position: {lat: 54.2, lng: 10.2}
        }, {
          position: {lat: 50.2, lng: 16.2}
        }, {
          position: {lat: 49.2, lng: 11.2}
        }, {
          position: {lat: 32.2, lng: 22.2}
        }, {
          position: {lat: 39.2, lng: 30.2}
        }, {
          position: {lat: 41.2, lng: 40.2}
        }, {
          position: {lat: 12.2, lng: 8.2}
        }, {
          position: {lat: 25.2, lng: 40.2}
        }]
      }
    },
    beforeCreate(){
      
    },
    created () {
      function setCenter () {
        return new Promise((resolve,reject)=>{
          var userLat;
          var userLng;
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function(position, error){
              console.log(position);
              console.log(error);
              userLat = position.coords.latitude;
              userLng = position.coords.longitude;
              resolve({lat: userLat, lng: userLng});
            })  
          } else {
            // this on does not work yet
            console.log('Geolocation is disabled fallback to London coords');
            resolve({lat: 51, lng: 0});
          }
        })   
      }    
      
      setCenter().then((centerObj) => {
        this.center = centerObj;
      });
                   
    },
    
  }

</script>
<style>
  .wechat-image {
    max-width: 290px;
  }
  gmap-map {
    width: 500px;
    height: 300px;
  }
</style>
