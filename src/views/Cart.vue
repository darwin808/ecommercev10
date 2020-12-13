<template>
  <div class="cart-container">
    <MainHeader />

    <div class="cart-container-subheader">
      <div class="cartBody">
        <h1>Cart items({{ cartItemsNumber }} items)</h1>
      </div>

      <div class="cartFooter-hid" v-if="cartItemsNumber == 0">
        <h1>No items in Cart</h1>
      </div>
      <div class="cartFooter" v-if="cartItemsNumber >= 1">
        <CartCurrentItems />
      </div>

      <div class="computedCartItems">
        <h1 class="orderHeader">Order Summary</h1>
        <div class="subtotal-container">
          <h3>Subtotal:</h3>
          <h3>
            ${{ totalappleprice + totalorangeprice + totalpeachprice }}.00
          </h3>
        </div>

        <v-btn class="checkout-btn" block color="blue">
          Checkout
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
import CartCurrentItems from "../components/CartCurrentItems";
export default {
  name: "Cart",
  data() {
    return {
      container: [],
    };
  },
  components: { MainHeader, CartCurrentItems },
  computed: {
    cartItemsNumber() {
      return this.$store.state.cartItemsNumber;
    },
    cardItemsList() {
      return this.$store.state.cardItemsList;
    },
    totalappleprice() {
      return this.$store.state.appleQuantity * this.$store.state.applePrice;
    },
    totalorangeprice() {
      return this.$store.state.orangeQuantity * this.$store.state.orangePrice;
    },
    totalpeachprice() {
      return this.$store.state.peachQuantity * this.$store.state.peachPrice;
    },
  },
  methods: {
    send() {
      //this.container.push({ name: this.name, crush: this.crush });
      // console.log(this.container);
    },
  },
  created: {
    subtotal() {
      this.cardItemsList.price.reduce((a, b) => a + b);
    },
  },
};
</script>

<style scoped>
.orderHeader {
  font-size: 2rem;
  margin-bottom: 10%;
  padding-top: 5%;
}
.checkout-btn {
  color: white;
}
.cart-container {
  display: flex;
  flex-direction: column;
}
.cartBody {
  height: 10vh;
  width: auto;
  background-color: #e1e1e1;
  border-radius: 5px;
  padding: 2% 3%;
  font-size: 2rem;
}

.cart-container-subheader {
  padding: 10% 10%;
}

.cartFooter-hid {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 10vh;
  width: 35rem;
  border: 1px solid #e1e1e1;
  text-align: center;
  padding-top: 2rem;
  border-radius: 5px;
}

.computedCartItems {
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30vh;
  width: 35rem;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.subtotal-container {
  display: flex;
  justify-content: space-between;
  padding: 5% 5%;

  border: 1px solid #e1e1e1;
}
</style>
