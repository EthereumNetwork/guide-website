<template>
  <v-container fluid grid-list>
    <v-layout row wrap>
      <v-card-text>
      Map coming soon, with nodes from <a href="https://www.ethernodes.org" target="_blank"> ethernodes.org</a>, meetups from <a href="https://www.meetup.com/topics/ethereum/" target="_blank">Meetup.com</a>, as well as ether-cash trades from <a href="https://dether.io/" target="_blank">Dether</a> and <a href="https://localethereum.com/" target="_blank">localethereum</a>
      </v-card-text>
    </v-layout>
    
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
        <v-card-title primary-title>
          <div class="Headline">Interactive map of nodes, meetups etc.</div>
        </v-card-title>
        <v-card-actions>
          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn flat color="primary" @click="nodesMap">Nodes</v-btn>
            <v-btn flat color="default" @click="meetupMap">MeetUps</v-btn>
            <v-btn flat color="default" @click="etcMap">Etc</v-btn>
          </v-btn-toggle>
        </v-card-actions>
        <v-card-media class="ma-1 text-xs-center" id="mapHolder" style="width: 100%; height: 300px;">
          <gmap-map id = "gmap"
            :center = "center"
            :zoom = 3
            style="width: 99%; height: 100%;"
          >
            <!--<gmap-cluster>-->
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position">
              </gmap-marker>
            <!--</gmap-cluster>-->
          </gmap-map>
        </v-card-media>
        </v-card>
      </v-flex>  
    </v-layout>
  </v-container>
  
</template>

<script>
  export default {
    name: 'Map',
    data () {
      return {
        toggle_exclusive: 0,
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
    methods: {
      nodesMap: function(event){
        // A fetch('api/maps/nodes') should be here

        this.markers = [{
          position: {lat: 54.0, lng: 21.0}
        }, {
          position: {lat: 54.0, lng: 22.0}
        }, {
          position: {lat: 54.0, lng: 23.0}
        }, {
          position: {lat: 54.0, lng: 24.0}
        }]
        // change data source
        // change data vizualization
        // set selected active
      },
      meetupMap: function(event){
        // A fetch('api/maps/meetups') should be here
        this.markers = [{
          position: {lat: 50.0, lng: 21.0}
        }, {
          position: {lat: 51.2, lng: 22.2}
        }, {
          position: {lat: 52.2, lng: 23.2}
        }, {
          position: {lat: 53.2, lng: 24.2}
        }]
      },
      etcMap: function(event){
        // A fetch('api/maps/somethingElse') should be here
        this.markers = [{
          position: {lat: 55.0, lng: 31.0}
        }, {
          position: {lat: 54.2, lng: 32.2}
        }, {
          position: {lat: 53.2, lng: 33.2}
        }, {
          position: {lat: 52.2, lng: 34.2}
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
    mounted () {
      // var mapHolder = document.getElementById('mapHolder');
      // var mapHheight = mapHolder.offsetHeight;
      // var mapHwidth = mapHolder.offsetWidth;
      // console.log('Parent dimensions: ');
      // console.log(mapHheight, mapHwidth);
      // var map = document.getElementById('gmap');
      // map.style.height = mapHheight - 20;
      // map.style.width = mapHwidth - 20;
      
    },
    
  }

</script>
<style>
  .wechat-image {
    max-width: 290px;
  }
  #gmap {
    width: 500px;
    height: 300px;
  }
  
</style>
