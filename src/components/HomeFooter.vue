<template>
  <div class="HomeFooter-container">
    <div class="soscialMediaico">
      <i class="fab fa-facebook-square fa-2x"></i>
      <i class="fab fa-twitter-square fa-2x"></i>
      <i class="fab fa-google-plus-g fa-2x"></i>
      <i class="fab fa-linkedin fa-2x"></i>
      <i class="fab fa-instagram fa-2x"></i>
    </div>
    <div class="ecomText"><h3>Ecommerce Sekeleton © 2020</h3></div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>

<style scoped>
.HomeFooter-container {
  height: 10%;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  padding: 3% 10%;
}

.soscialMediaico {
  display: grid;
  grid-template-columns: 50% 50% 50% 50% 50%;
}
</style>
