<template>
  <main class="py-5">
      <div class="container">
          <div class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 align-items-center justify-content-center">
              <AlbumList :Album="Album" v-for="(Album, index) in Albums" :key="index"/>
              
          </div>
          <!-- /.row row-cols-5 -->
      </div>
      <!-- /.container -->
  </main>
</template>

<script>
import axios from 'axios';
import AlbumList from '@/components/AlbumListComponent.vue';

export default {
    name: 'SiteMain',
    components: {
        AlbumList,
    },
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
}
</style>