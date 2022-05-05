<template>
  <main class="py-5">
      <div class="container">
          <div class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 align-items-center justify-content-center">
              <div class="col p-4 d-flex justify-content-center" v-for="(Album, index) in Albums" :key="index">
                  <div class="album_card p-3 text-center">
                      <img :src="Album.poster" alt="">
                      <h4 class="text-uppercase text-white mt-2">{{Album.title}}</h4>
                      <p class="m-0">{{Album.author}}</p>
                      <span class="m-0">{{Album.year}}</span>
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
import axios from 'axios';

export default {
    name: 'SiteMain',
    data() {
        return {
            Albums: null,
            Success: false,
            ApiUrl: 'https://flynn.boolean.careers/exercises/api/array/music',
        };
    },
    methods: {
        callApi() {
            axios.get(this.ApiUrl).then((response) => {
                console.log(response);
                this.Albums = response.data.response;
                this.Success = response.data.success;
            }).catch((error) => {
                console.log(error);
            })
        },
    },
    mounted() {
        this.callApi();
    }
}
</script>

<style lang="scss" scoped>
main {
    background-color: #1E2D3B ;
    .album_card {
        background-color: #2E3A46;
        height: 370px;
        width: 320px;
        img {
           width: 200px!important;
           height: 200px!important;
           object-fit: cover;
        }
    }
}
</style>