<template>
  <div class="HomeBody-container">
    <div class="h1-tag">Do you Like Fruits</div>
  </div>
</template>
<script>
export default {
  name: "HomeBody",
};
</script>

<style scoped>
.HomeBody-container {
  background-image: url(./bg3.jpg);
  height: 120vh;
  background-size: cover;
}

.h1-tag {
  position: absolute;
  top: 10%;
  left: 20%;
  color: rgb(7, 5, 5);
  font-size: 950%;
  font-family: "Lobster", cursive;
  z-index: 99;
}
</style>
