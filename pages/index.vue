<template>
  <section class="container">
    <div>
      <h1 class="title">
        socialapp
      </h1>
      <h2 class="subtitle">
        Social Application IRAV UAM
      </h2>
      <AlbumCard :album="album" v-for="album in albums"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import env from '../config/env'
import AlbumCard from '../components/AlbumCard'

export default {
  components:{
    AlbumCard:AlbumCard
  },
  data(){
    return{
      albums:[]
    }
  },
  created(){
    axios.get(`${env.endpoint}/albums`).then(response=>{
      this.albums = response.data;
    })
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD13hX-WKrjeFYl9NoMaROsGRpxSbEUONk",
    authDomain: "socialapp-irav.firebaseapp.com",
    databaseURL: "https://socialapp-irav.firebaseio.com",
    projectId: "socialapp-irav",
    storageBucket: "socialapp-irav.appspot.com",
    messagingSenderId: "381930007179"
  };
  firebase.initializeApp(config);
</script>
