<template>
  <v-container fluid grid-list>
    <v-layout row wrap>
      <v-card-text>
      Map coming soon, with nodes from <a href="https://www.ethernodes.org" target="_blank"> ethernodes.org</a>, meetups from <a href="https://www.meetup.com/topics/ethereum/" target="_blank">Meetup.com</a>, as well as ether-cash trades from <a href="https://dether.io/" target="_blank">Dether</a> and <a href="https://localethereum.com/" target="_blank">localethereum</a>
      </v-card-text>
    </v-layout>
    
    <v-layout row wrap>
      <v-flex xs6 sm8>
        <v-card>
        <v-card-title primary-title>
          <div class="Headline">Interactive map of nodes, meetups etc.</div>
        </v-card-title>
        <v-card-actions>
          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn flat color="default">Nodes</v-btn>
            <v-btn flat color="default">Groups</v-btn>
            <v-btn flat color="default">Etc</v-btn>
          </v-btn-toggle>
        </v-card-actions>
        <v-card-media class="ma-1 text-xs-center" id="mapHolder" style="width: 100%; height: 400px;">
          <gmap-map id = "gmap"
            :center = "center"
            :zoom = 4
            style="width: 99%; height: 100%;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              @click="toggleInfoWindow(m, index)">
            </gmap-marker>
            <gmap-info-window
              :opened = "infoWinOpen"
              :currentMidx = 'currentMidx'
              :position = 'infoWindowPos'
              :options = 'infoOptions'
              @closeclick = 'closeMarker()'
            >
                        
            </gmap-info-window>
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
        center: {lat: 10.123, lng: 10.44321},
        markers: [],
        apiRoutes: ['nodes', 'meetups', 'misc'],
        infoWindowPos: {lat: 0, lng: 0},
        infoWinOpen: false,
        currentMidx: null,
        infoOptions: {
          pixelOffset: {height: -35, width: 0},
          content: ''
        }
      }
    },
    methods: {
      toggleInfoWindow: function(m, idx){
        this.infoWindowPos = {lat: m.position.lat, lng: m.position.lng};
        this.infoOptions.content = m.infoText;
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        } else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
      closeMarker: function (){
        console.log('Close click event fired');
         this.infoWinOpen = false;
      }
    },
    watch: {
      toggle_exclusive: function (newValue) {
        if (Number.isInteger(newValue)){
          fetch('/api/map/'+ this.apiRoutes[newValue])
            .then((response) => {
              return response.json() })
            .then((data) =>{
              this.markers = data;
          });
        } else {
          console.log('Skipping same fecth');
          return;
        }
      }
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
      
      // getting markers to start with
      fetch('/api/map/'+ this.apiRoutes[this.toggle_exclusive])
        .then((response) => {
          return response.json() })
        .then((data) =>{
          this.markers = data;
        });
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