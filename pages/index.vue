<template>
  <div class="">
  <Carousel/>

  <section id="music" class="text-center">
    <h1 class="my-5">Music</h1>
  <Soundcloud/>
  </section>

  <section id="gallery" class="text-center">
    <h1 class="my-5">Gallery</h1>
  <Instafeed :posts='posts'/>
 </section>



<div id="news" class="text-center">
  <h1 class="my-5">NEWS</h1>
  <p>Lovely Text</p>
</div>

  <section id="gallery" class="text-center">
    <h1 class="my-5">Newsletter</h1>
  <Newsletter/>
 </section>
  </div>
</template>

<script>
import Newsletter from "~/components/Newsletter"
import Carousel from "~/components/Carousel"
import Soundcloud from "~/components/Soundcloud"
import Instafeed from "~/components/Instafeed"

export default {
    components:{
        Newsletter,
        Carousel,
        Soundcloud,
        Instafeed
    },
  data(){
    return{}
  },
  async asyncData({ $axios }) {
      const posts = await $axios.$get('https://api.instagram.com/v1/users/self/media/recent/?access_token=198776560.1677ed0.a4cdeee2406f4e19a517666d42390806&count=9')
      return { posts }
  },
}
</script>

<style lang="scss">
$base: black;
$comp: white;
$high: #c80963;

//layout
body {
  a, a:hover {
    color: unset;
    text-decoration: unset;
  }

}

//styling
body {
  background: $base;
  color: $comp;
  font-family: Montserrat;
}
</style>