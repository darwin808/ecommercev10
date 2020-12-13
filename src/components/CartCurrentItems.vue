<template>
  <div class="CartCurrentItems-container">
    <div class="CartCurrentItems-header">
      <h3>###</h3>
      <h3>Product</h3>
      <h3>Price</h3>
      <h3>QTY</h3>
      <h3>Remove</h3>
    </div>

    <div class="nav-ul">
      <div class="ul-items" :key="i" v-for="(x, i) in CartCurrentItems">
        <div class="list-items">
          <div>****</div>
          <div>{{ x.name }}</div>
          <div>${{ x.price }}</div>
          <div v-if="x.name === 'apple'">{{ appleQuantity }}</div>
          <div v-if="x.name === 'orange'">{{ orangeQuantity }}</div>
          <div v-if="x.name === 'peach'">{{ peachQuantity }}</div>
          <div>
            <v-btn icon input-value @click="delitem(i, x.name)"> X</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCurrentItems",
  data() {
    return {
      appleQ: 100,
    };
  },
  computed: {
    CartCurrentItems() {
      return this.$store.state.cardItemsList;
    },
    appleQuantity() {
      return this.$store.state.appleQuantity;
    },
    orangeQuantity() {
      return this.$store.state.orangeQuantity;
    },
    peachQuantity() {
      return this.$store.state.peachQuantity;
    },
    cartItemsNumber() {
      return this.$store.state.cartItemsNumber;
    },
  },
  methods: {
    delitem(i, fruit) {
      this.$delete(this.CartCurrentItems, i);
      if (fruit === "apple") {
        this.$store.state.cartItemsNumber -= this.$store.state.appleQuantity;
        this.$store.state.appleQuantity = 0;
      }

      if (fruit === "orange") {
        this.$store.state.cartItemsNumber -= this.$store.state.orangeQuantity;
        this.$store.state.orangeQuantity = 0;
      }

      if (fruit === "peach") {
        this.$store.state.cartItemsNumber -= this.$store.state.peachQuantity;
        this.$store.state.peachQuantity = 0;
      }
    },
  },
};
</script>

<style scoped>
.CartCurrentItems-container {
  border-radius: 5px;
  margin: 5px 0;
  height: auto;
  width: 35rem;
  border: 1px solid #e1e1e1;
  padding: 1% 2%;
}
.CartCurrentItems-header {
  display: grid;
  grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
  text-align: center;
  background-color: #e1e1e1;
  padding: 3% 2%;
  border-radius: 5px;
}

.list-items {
  border-radius: 5px;
  padding-top: 2%;
  text-align: center;
  width: auto;
  display: grid;
  grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
}

.list-items:hover {
  background-color: #eeeeee;
  border: 1px solid #eee1e1;
}
</style>
