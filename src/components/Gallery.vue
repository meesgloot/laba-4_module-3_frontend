<template>
  <!-- применяем миксин -->
  <img class="img" @click="prevImage" :src="$imageLink(img1)" alt="img1" />

  <img id="new" v-if="count !== 0" :src="$imageLink('@/assets/foto' + count + '.jpg')" />
  <img id="new" v-if="number && count == 0" :src="$imageLink('@/assets/foto' + number + '.jpg')" />
  

  <img class="img" @click="nextImage" :src="$imageLink(img2)" alt="img2"/>
</template>

<script>
// импортируем миксины
import { imageLink } from "@/mixins";

export default {
  name: 'TheGallery',
  props: {
    number: Number,
  },
  data(){
    return{
      images: ['./foto1.jpg','./foto2.jpg','./foto3.jpg','./foto4.jpg','./foto5.jpg','./foto6.jpg','./foto7.jpg','./foto8.jpg'],
      // путь к изображению
      img1: '@/assets/maxresdefaultLeft.jpg',
      img2: '@/assete/maxresdefaultRight.jpg',
      count: this.number,
      aaa: 0,
    }
  },
  mounted(){
    this.count = this.number;
  },
  // подключаем миксины
  mixins: [imageLink],
  methods:{
    doCount(){
      this.count = this.number;
      return this.count;
    },
    prevImage(){
      if(this.aaa === 0){
        this.doCount();
        this.aaa++;
      }
      if(this.count === 1){
        this.count = 8;
      }else{
        this.count--;
      }
    },
    nextImage(){
      if(this.aaa === 0){
        this.doCount();
        this.aaa++;
      }
      if(this.count === 8){
        this.count = 1;
      }else{
        this.count++;
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .img {
  width: 100px;
  object-fit: cover;
  cursor: pointer;
  margin: 2px;
  }
  #new{
    height: 400px;
    width: auto;
  }
</style>
