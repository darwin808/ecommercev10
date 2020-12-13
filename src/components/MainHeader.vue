<template>
  <div class="mainHeader-containter">
    <div class="sitename" @click="gotohome">
      SAMPLE
    </div>
    <ul class="navlinks">
      <li>Login</li>

      <li><i class="fas fa-user"></i></li>
      <li @click="cartPage"><i class="fas fa-shopping-cart"></i></li>

      <v-badge v-if="cartItemsNumber >= 1" right color="red">
        <span slot="badge">{{ cartItemsNumber }}</span>
        <v-icon><i class="fas fa-shopping-cart"></i></v-icon>
      </v-badge>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return { scrollPosition: 0 };
  },
  computed: {
    cartItemsNumber() {
      return this.$store.state.cartItemsNumber;
    },
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
    },
    cartPage() {
      this.$router.push("/cart");
    },
    gotohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.change_color {
  background-color: red;
}
.mainHeader-containter {
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #eeeeee;
  height: 7vh;
  padding: 1% 10%;
  color: black;
  font-family: "Nunito", sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.navlinks {
  display: flex;
  list-style: none;
  margin-right: 10%;
}

.sitename:hover {
  cursor: pointer;
}

ul:hover {
  cursor: pointer;
}

ul li {
  padding-left: 25%;
}
</style>
