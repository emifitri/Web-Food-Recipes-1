<script>
  import {
    mapActions,
    mapState
  } from 'pinia'
  import {
    useRecipeStores
  } from '../stores/counter'
  import RecipeCard from '../components/RecipeCard.vue'

  export default {
    name: "HomePage",
    data: () => {
      return {
        title: "",
        description: ""
      }
    },
    computed: {
      ...mapState(useRecipeStores, ["recipe", "count"])
    },
    methods: {
      ...mapActions(useRecipeStores, ["getAllRecipes", "getSearch", "getPagination", "getAnotherrecipe"]),
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
    components: {
      RecipeCard
    },
    created() {
      this.getAllRecipes()
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
            My Food
            <strong>Recipes</strong>
          </h2>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination pagination-sm justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item" v-for="n in count" :key="n">
            <a class="page-link" href="#" @click.prevent="getPage(n - 1)">{{ n }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <form class="d-flex" @submit.prevent="handleSearch">
              <input class="form-control me-2" v-model="title" type="search" placeholder="Search by title"
                aria-label="Search" />
              <input class="form-control me-2" v-model="description" type="search" placeholder="Search by description"
                aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>&ensp;
              <button class="btn btn-outline-success" @click.prevent="clearSearch" type="submit">clear</button>
            </form>
        </div>
      </nav>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="recipe in recipe" :key="recipe.id">
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>

</template>

