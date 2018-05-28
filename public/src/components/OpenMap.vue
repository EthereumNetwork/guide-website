<template>
  <v-container fluid grid-list>
    <v-layout row wrap>
      <v-card-text>
      Map in development process, with nodes from <a href="https://www.ethernodes.org" target="_blank"> ethernodes.org</a>, meetup groups from <a href="https://www.meetup.com/topics/ethereum/" target="_blank">Meetup.com</a>, as well as ether-cash trades from <a href="https://dether.io/" target="_blank">Dether</a> and <a href="https://localethereum.com/" target="_blank">localethereum</a>
      </v-card-text>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <v-card>
        <v-card-actions>
          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn flat color="default">Groups</v-btn>
            <v-btn flat color="default" disabled>Nodes</v-btn>
            <v-btn flat color="default" disabled>Cash trades</v-btn>
          </v-btn-toggle>
        </v-card-actions>
        <v-card-media class="ma-1 text-xs-center" style="width: 100%; height: 400px;">
          <l-map  :zoom="zoom" :center="center" style="width:99%; height:100%">
            <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
            <l-marker :key="index" v-for="(marker, index) in markers" :lat-lng="marker.position">
              <l-popup :content="marker.infoText"></l-popup>
            </l-marker>
          </l-map>
        </v-card-media>
    </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'OpenMap',
    data () {
      return {
        zoom:10,
        center: L.latLng(51.5, -0.09),
        url:'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG1pYWxjaCIsImEiOiJjamg3bmJueWQwZGZjMzJxeWR6M3RkNWh2In0.ZdYQfU68vneoPdo6ekiBdw',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        markers: [],
        toggle_exclusive: 0,
        apiRoutes: ['meetups', 'nodes', 'misc']
      }
    },
    methods: {},
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
              userLat = position.coords.latitude;
              userLng = position.coords.longitude;
              resolve({lat: userLat, lng: userLng});
            })
          } else {
            // this on does not work yet
            console.log('Geolocation is disabled fallback to London coords');
            resolve({lat: 51.5, lng: -0.09});
          }
        })
      }
      setCenter().then((centerObj) => {
        this.center = centerObj;
      });

      fetch('/api/map/'+ this.apiRoutes[this.toggle_exclusive])
        .then((response) => {
          return response.json() })
        .then((data) =>{
          this.markers = data;
        });
    }
}
</script>
<style>

</style>
