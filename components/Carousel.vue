<template>
<div>
  <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
        <b-carousel-slide v-for="(slide, i) in slideImages" :img-src="slide" v-bind:key="i"></b-carousel-slide>
    </b-carousel>
</div>

</template>

<script>
export default {

    data(){return {
            slideImages: ['/img/carousel/header3.jpg', '/img/carousel/header1.jpg', '/img/carousel/header2.jpg']
    }},
}
</script>

<style>

</style>