<template>
  <div class="card2-container">
    <v-card class="mx-auto" max-width="344">
      <v-img src="./orange.jpg" height="200px"></v-img>

      <v-card-title>
        ORANGE
      </v-card-title>

      <v-btn elevation="2" @click="addcartplusone"> Add to cart </v-btn>
      <v-card-subtitle>
        $20 Orange
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          About Fruits
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "card2",
  data: () => ({
    show: false,
  }),

  methods: {
    addcartplusone() {
      this.$store.state.cartItemsNumber += 1;
      this.$store.state.orangeQuantity += 1;
      let y = this.$store.state.cardItemsList;

      /***check for instance pf items */
      if (y.some((e) => e.name === "orange")) {
        console.log("xxx");
      } else {
        y.push({ name: "orange", price: 20 });
      }
    },
  },
};
</script>

<style scoped>
.card2-container {
  margin: 0 10px;
}
</style>
