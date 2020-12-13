<template>
  <div class="BodyCards-container">
    <card1 />
    <card2 />
    <card3 />
  </div>
</template>

<script>
import card1 from "./cards/card1";
import card2 from "./cards/card2";
import card3 from "./cards/card3";
export default {
  name: "BodyCards",
  components: { card1, card2, card3 },
};
</script>

<style scoped>
.BodyCards-container {
  justify-content: space-evenly;
  padding: 1% 10%;
  display: flex;
  align-items: center;
  height: 500px;
}
</style>
