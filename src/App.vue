<template>
  <div>
  <CustomNavbar />
  <router-view></router-view>

</div>
</template>

<script>
import CustomNavbar from "./components/CustomNavbar.vue"

export default {
  name: "App",
  components: {
    CustomNavbar
  }
}
</script>
