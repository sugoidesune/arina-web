<template>
  <div >
    <Navbar></Navbar>
    <div class="navbar-offset">
    <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/global/Navbar"

export default {
  components : {
    Navbar
  }
  
}
</script>

<style lang="scss">
.navbar-offset {
  padding-top: 60px;
}


</style>
