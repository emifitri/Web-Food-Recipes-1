

     <!-- <div class="card shadow card-product"> -->
         <!-- <div v-for="(recipe, i) in bookmark" :key="i"> -->
    <!-- <img :src="recipe.imgUrl" class="card-img-top" alt="..." /> -->
    <!-- <div class="card-body"> -->
      <!-- <h5 class="card-title"><center>{{ recipe.title }}</center></h5> -->
      <!-- <p
        class="card-text"
      >Type : {{ recipe.Category.name }}</p> -->
      <!-- <router-link class="btn btn-success" :to="'/foods/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link> -->
    <!-- <button @click="getDetail(recipe.id)">See Detail</button> -->
    <!-- <button @click="postBookmark(recipe.id)"><i class="fa fa-bookmark icon" float="right"></i></button> -->
    <!-- </div>
  </div>
  </div>
</template> -->

<template>
    <!-- <div class="container">
       <div class="row mt-3">
        <div class="col-md-6" v-for="(recipe, i) in bookmark" :key="i">
          <img :src="recipe.imgUrl" class="img-fluid shadow" />
          <h2>
            <strong>{{ recipe.title }}</strong>
          </h2>
        </div>
        <div class="col-md-6">
          </div>
          </div>
          </div> -->
        <div class="container">
           <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="(recipe, i) in bookmark" :key="i">
    <div class="card shadow card-product">
    <img :src="recipe.imgUrl" class="card-img-top" alt="..." height="300" width="250"/>
    <div class="card-body">
      <h5 class="card-title"><center>{{ recipe.title }}</center></h5>
      <h5 class="card-title"><center>Category: {{ recipe.Category.name }}</center></h5>
     
      <!-- <router-link class="btn btn-success" :to="'/foods/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link> -->
    <button @click="getDetail(recipe.id)">See Detail</button>
    
    </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useRecipeStores } from '../stores/counter'

export default {
    name: "BookmarkPage",
    computed: {
        ...mapState(useRecipeStores, ["bookmark", "recipe"])
    },
    methods: {
        ...mapActions(useRecipeStores, ["getBookmark", "getDetailRecipe"]),
        getDetail(recipeId) {
            this.getDetailRecipe(recipeId)
        }
    },
    created() {
        this.getBookmark()
    }
}
</script>
<style scoped>
img {
    width: 300;
}
</style>
