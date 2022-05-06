<template>
  <header>
    <div
      class="my_container d-flex justify-content-between align-items-center p-3"
    >
      <img
        src="https://grafica-facile.com/wp-content/uploads/2022/01/spotify-logo.png"
        alt=""
      />
      <SearchBox v-model="genSelected" @selectChange="search" />
    </div>
    <!-- /.my_container -->
  </header>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import state from "@/state.js";
export default {
  name: "SiteHeader",
  components: {
    SearchBox,
  },
  data() {
    return {
      genSelected: "",
    };
  },
  methods: {
    search() {
      console.log("Searching ...");
      state.genSelected = this.genSelected;
      console.log(state.genSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #2e3a46;
  img {
    width: 60px;
  }
  form {
    height: 30px;
  }
  button {
    border-color: #1ed760 !important;
    color: #1ed760 !important;
  }
}
</style>