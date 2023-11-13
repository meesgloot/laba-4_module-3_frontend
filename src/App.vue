<template>
  <div id="prev">
    <img src="@/assets/foto1.jpg" @click="dofoto(1)">
    <img src="@/assets/foto2.jpg" @click="dofoto(2)">
    <img src="@/assets/foto3.jpg" @click="dofoto(3)">
    <img src="@/assets/foto4.jpg" @click="dofoto(4)">
    <br>
    <img src="@/assets/foto5.jpg" @click="dofoto(5)">
    <img src="@/assets/foto6.jpg" @click="dofoto(6)">
    <img src="@/assets/foto7.jpg" @click="dofoto(7)">
    <img src="@/assets/foto8.jpg" @click="dofoto(8)">
  </div>
  <TheGallery :number="k"/>
</template>


<script>
import TheGallery from './components/Gallery.vue';

export default {
  name: 'App',
  components: {
    TheGallery,
  },
  data(){
    return{
      k: 0,
    }
  },
  methods:{
    dofoto(chislo){
      this.k = chislo;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}

body {
  background-color: black;
  color: white;
}

#prev img{
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1em solid white;
  cursor: pointer;
  margin: 2px;
}
</style>
