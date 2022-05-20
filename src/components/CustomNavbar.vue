<template>
<nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand" href="#"><strong>My Recipe</strong></a>
 <a class="nav-link mx-2 text-uppercase" href="#" v-if="!access_token"><router-link to="/login" class="nav-link"> Sign In</router-link></a>   
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link mx-2 text-uppercase" href="#"><i class='fas fa-home'></i> Home</a></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#" v-if="access_token"><i class="fa fa-heart icon"></i><router-link to="/bookmark"> My Favorite</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#"><i class="fas fa-birthday-cake"></i><router-link to="/anotherRecipe"> All About cake</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#" v-if="!access_token"><router-link to="/register"> Sign Up</router-link></a>
        </li>
          <li class="nav-item" v-if="access_token">
          <a class="nav-link mx-2 text-uppercase" href="#"  @click="logout">Log Out</a>
        </li>
      </ul>
    </div>
  <!-- </div> -->
</nav>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useUserStore} from '../stores/user.js'

export default {
    name: "CustomNavbar",
    computed: {
      ...mapState(useUserStore, ["access_token"])
    },
    methods: {
      ...mapActions(useUserStore, ["handleLogout"]),
      logout() {
        this.handleLogout()
      }
    }
}
</script>

<style scoped>
a {
  font-size:14px;
  font-weight:700
}
.superNav {
  font-size:13px;
}
.form-control {
  outline:none !important;
  box-shadow: none !important;
}
@media screen and (max-width:500px){
  .centerOnMobile {
    text-align:center
  }
}
</style>

