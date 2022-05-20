<template>
    <vue-qrcode :value="link" />
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
name: "QrCode",
props: ["detailRecipe"],
data () {
    return {
        link: `http://localhost:8080/recipes/${this.detailRecipe.id}` 
    }
},
  components: {
    VueQrcode
  },
  created() {
        this.link = window.location.origin + this.$route.fullPath;
},
}
</script>
