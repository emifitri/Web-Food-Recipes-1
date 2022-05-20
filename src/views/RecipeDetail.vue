<template>
<div class="container">
       <div class="row mt-3">
        <div class="col-md-6">
          <img :src="detailRecipe.imgUrl" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ detailRecipe.title }}</strong>
          </h2>
          <hr />
          <h4>
            Langkah-Langkah :
            <strong>{{ detailRecipe.description }}</strong>
          </h4>
           <h4>
            Bahan-Bahan :
            <strong>{{ detailRecipe.ingredients }}</strong>
          </h4>
  
          <QrCode :detailRecipe="detailRecipe"/>
          <a href="#" class="btn btn-primary" @click.prevent="backToHome">Back</a>
            </div>
            </div>
            </div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import {useRecipeStores} from '../stores/counter'
import QrCode from '../components/QrCode.vue'

export default {
    name: "RecipeDetail",
    methods: {
        ...mapActions(useRecipeStores, ["getDetailRecipe"]),
          backToHome() {
          this.$router.push({ name: "home" });
      }
    },
    computed: {
        ...mapState(useRecipeStores, ["detailRecipe"])
    },
    components: {
      QrCode
    },
    created() {
        this.getDetailRecipe(this.$route.params.id)
    }
}
</script>

<style scoped>
img {
    width: 300;
}
</style>
