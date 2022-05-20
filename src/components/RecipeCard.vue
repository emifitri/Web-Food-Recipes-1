<template>
    <div class="card shadow card-product">
    <img :src="recipe.imgUrl" class="card-img-top" alt="..." height="300" width="250"/>
    <div class="card-body">
      <h5 class="card-title"><center>{{ recipe.title }}</center></h5>
      <h5 class="card-title"><center>Category: {{ recipe.Category.name }}</center></h5>
     
      <!-- <router-link class="btn btn-success" :to="'/foods/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link> -->
    <button @click="getDetail(recipe.id)">See Detail</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <button @click="postBookmark(recipe.id)"><i class="fa fa-bookmark icon" float="right"></i></button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'pinia'
import {useRecipeStores} from '../stores/counter'

export default {
    name: "RecipeCard",
    props: ["recipe"],
    methods: {
        ...mapActions(useRecipeStores, ["getDetailRecipe", "addBookmark"]),
        postBookmark(recipeId) {
            this.addBookmark(recipeId)
             this.$router.push({
              name: "login"
        })
        },
        getDetail(recipesId) {
            this.getDetailRecipe(recipesId)
        }
    }
}
</script>
<style scoped>
img {
    width: 300;
}
</style>