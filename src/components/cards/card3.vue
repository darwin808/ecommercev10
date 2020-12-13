<template>
  <div class="card3-container">
    <v-card class="mx-auto" max-width="344">
      <v-img src="./peache.jpg" height="200px"></v-img>

      <v-card-title>
        PEACH
      </v-card-title>

      <v-btn elevation="2" @click="addcartplusone"> Add to cart </v-btn>
      <v-card-subtitle>
        $10 Peach
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
  name: "card3",
  data: () => ({
    show: false,
  }),

  methods: {
    addcartplusone() {
      this.$store.state.cartItemsNumber += 1;
      this.$store.state.peachQuantity += 1;
      let y = this.$store.state.cardItemsList;

      /***check for instance pf items */
      if (y.some((e) => e.name === "peach")) {
        console.log("xxx");
      } else {
        y.push({ name: "peach", price: 10 });
      }
    },
  },
};
</script>

<style scoped>
.card3-container {
  margin: 0 10px;
}
</style>
