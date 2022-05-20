<script>
  import {
    mapActions,
    mapState
  } from 'pinia'
  import {
    useRecipeStores
  } from '../stores/counter'
//   import RecipeCard from '../components/RecipeCard.vue'

  export default {
    name: "AnotherRecipesVue",
    // props: ["anotherRecipe"],
    computed: {
      ...mapState(useRecipeStores, ["anotherRecipe"])
    },
    methods: {
      ...mapActions(useRecipeStores, ["getAnotherrecipe", "getDetailAnother"]),
      detailAnother(id){
          this.getDetailAnother(id)
      },
      getPage(n) {
        this.getPagination(n);
      },
      handleSearch() {
        this.getSearch(this.title, this.description)
      },
      clearSearch() {
        this.litle = ""
        this.description = ""
        this.getSearch("", "")
        this.$router.push({
          name: "home"
        })
      }
    },
    created() {
      this.getAnotherrecipe()
    }
  }
</script>

<template>
   <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            List About
            <strong>Cake</strong>
          </h2>
        </div>
      </div>      

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="el in anotherRecipe" :key="el.id">
           <div class="card shadow card-product">
          <img :src="el.image" class="card-img-top" alt="..." height="300" width="250"/>
          <div class="card-body">
            <h5 class="card-title"><center>{{ el.title }}</center></h5>
            <h5 class="card-title"><center>Type: {{ el.imageType }}</center></h5>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>


</template>

