<template>
  <header>
      <div class="my_container d-flex justify-content-between align-items-center p-3">
        <img src="https://grafica-facile.com/wp-content/uploads/2022/01/spotify-logo.png" alt="">
      <form class="d-flex align-items-center">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      <!-- /.my_container -->
  </header>
</template>

<script>
export default {
name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
header {
    background-color: #2E3A46;
    img {
    width: 60px;
    } 
    form {
      height: 30px;
    }
    button {
      border-color: #1ED760!important;
      color: #1ED760!important;
    }
}

</style>