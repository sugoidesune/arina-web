<template>
  <div class="soundcloud">
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/585044484&color=%231200000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .soundcloud {
      justify-content: center;
      display: flex;
      padding: 50px 10px;
      iframe {
        height: 145px;
        max-width: 600px;
        filter: grayscale(00%) contrast(120%) hue-rotate(335deg) saturate(150%);;
      }
      
    }
</style>
