import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecipeStores = defineStore({
  id: "recipe",
  state: () => {
    return {
      recipe: [],
      count: 0,
      detailRecipe: {},
      bookmark: [],
      anotherRecipe: [],
      detailAnother: {}
    }
  },
  actions: {
    getAllRecipes() {
      this.recipe = []
      axios({
        url: "/recipes",
        method: "GET"
      })
      .then((result) => {
        this.recipe = result.data.rows
        // console.log(result.data.count, 'data ni');
        this.count = Math.ceil(result.data.count / 6)
        // this.recipe = data.rows;
         // result.data.rows.forEach(el => {
          //   this.transportation.push(el)
          // })
      }).catch((err) => {
        console.log(err)
      });
    },
    getDetailRecipe(idRecipe) {
      axios({
        url : "/recipes/"+idRecipe,
        method: "GET"
      })
      .then((result) => {
        this.detailRecipe = result.data
        console.log(result.data);
        this.router.push(`/recipes/${idRecipe}`)
      }).catch((err) => {
        console.log(err);
      });
    },
    getPagination(n) {
      this.recipe = []
      axios({
          url: '/recipes?page=' + n,
          method: 'GET'
        })
        .then((result) => {
          this.count = Math.ceil(result.data.count / 6)
          result.data.rows.forEach(el => {
            this.recipe.push(el)
          })
        }).catch((err) => {
          console.log(err.response);
        });
    },
    getSearch (title, description) {
      this.recipe = []
      axios({
        url: `/recipes?title=${title}&description=${description}`,
        method: "GET"
      })
      .then((result) => {
        // this.recipe = data
          this.recipe = result.data.rows
        // console.log(result.data.count, 'data ni');
        this.count = Math.ceil(result.data.count / 6)
      }).catch((err) => {
        console.log(err.response);
      });
    },
    getAnotherrecipe() {
      axios({
        url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=5faddafbae48427f9452b766f17a3aef&query=cake",
        method: "GET"
      })
      .then(({data}) => {
        // this.anotherRecipe = result.data.data.results
        this.anotherRecipe = data.results
      }).catch((err) => {
        console.log(err);
      });
    },
    getDetailAnother(idApi) {
      axios({
        url: `https://api.spoonacular.com/recipes/${idApi}/information?apiKey=5faddafbae48427f9452b766f17a3aef`,
        method: "GET"
      })
      .then((result) => {
        this.detailAnother = result
        this.router.push({name: "detailAnother", params : {id : idApi}})
        console.log(result, "ini detail store another recipes");
      }).catch((err) => {
        console.log(err);
      });
    },
    getBookmark () {
      this.bookmark = []
      axios({
        url: '/bookmark',
        method: 'GET',
        headers: {
          'access_token' : localStorage.getItem('access_token')
        }
      })
      .then((result) => {
        console.log(result.data);
        result.data.forEach(element => {
          this.bookmark.push(element.Recipe)
        })
        // console.log(this.bookmark);
      }).catch((err) => {
        console.log(err);
      });
    },
    addBookmark (recipeId) {
      // console.log(localStorage.access_token);
      axios({
        url: '/bookmark/' + recipeId,
        method: "POST",
        headers: {
          'access_token' : localStorage.getItem('access_token')
        }
      })
      .then((result) => {
        console.log(result);
        // this.router.push({
        //   name: 'bookmark'
        // })
        Swal.fire({
          icon: 'success',
          title: 'Add Bookmark successfully'
      })
      }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      });
    },
  }
})