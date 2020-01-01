<template>
  <div class="social">
    <h5>5. Find me here:</h5>
    <div class="icons">
      <a href="https://twitter.com/sudotimar">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://medium.com/@timarivobatis">
        <i class="fab fa-medium"></i>
      </a>
      <a href="https://github.com/sugoidesune">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
section.social {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 75px;
  .icons {
    margin-top: -10px;
    display: flex;
    justify-content: center;
    i {
      font-size: 25px;
      margin: 10px;
    }
    a:hover {
      color: $accent;
    }
  }
}
</style>
