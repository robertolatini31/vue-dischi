<template>
  <main>
      <div class="container">
          <div class="row row-cols-5 align-items-center justify-content-center">
              <div class="col p-4">
                  <div class="album_card p-3 text-center">
                      <img src="https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg" alt="">
                      <h4 class="text-uppercase text-white mt-2">new jersey</h4>
                      <p class="m-0">Bon Jovi</p>
                      <span class="m-0">1988</span>
                  </div>
                  <!-- /.album_card -->
              </div>
              <!-- /.col -->
          </div>
          <!-- /.row row-cols-5 -->
      </div>
      <!-- /.container -->
  </main>
</template>

<script>
export default {
name: 'SiteMain'
}
</script>

<style lang="scss" scoped>
main {
    background-color: #1E2D3B ;
    .album_card {
        background-color: #2E3A46;
    }
}
</style>