<template>
  <div class="card1-container">
    <v-card class="mx-auto" max-width="344">
      <v-img src="./apple.jpeg" height="200px"></v-img>

      <v-card-title>
        APPLE
      </v-card-title>

      <v-btn elevation="2" @click="addcartplusone"> Add to cart </v-btn>
      <v-card-subtitle>
        $30 Apple
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
  name: "card1",
  data: () => ({
    show: false,
  }),

  methods: {
    addcartplusone() {
      this.$store.state.cartItemsNumber += 1;
      let y = this.$store.state.cardItemsList;
      this.$store.state.appleQuantity += 1;
      /***check for instance pf items */
      if (y.some((e) => e.name === "apple")) {
        console.log("xxx");
      } else {
        y.push({ name: "apple", price: 30 });
      }
    },
  },
};
</script>

<style scoped>
.card1-container {
  margin: 0 10px;
}
</style>
