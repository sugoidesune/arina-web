<template>
    <nav id="home">
        <a class='nav-item' href="#home">HOME</a>
        <a class='nav-item' href="#music">MUSIC</a>
    <div class='logo-nav'>
        <img  src="https://i.ibb.co/t8yBLD5/logo.png" alt="logo" border="0">
    </div>

        <a class='nav-item' href="#news">NEWS</a>
        <a class='nav-item' href="#news">NEWSLETTER</a>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    nav {
    padding: 15px 0;
    background: $base;
    a.nav-item {
      @extend %text-hover;
    }
  }


//layout
  nav {
    position: fixed;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; //or flex-end;
    .nav-item {
      width: 115px;
      text-align: center;
    }
     .logo-nav {
       width: 200px;
       img {
        height: 30px;
        margin: auto;
        display: block;
       }
      }
  }
</style>