<template>
  <div class="home-container">
    <MainHeader />
    <HomeBody />
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <BodyParagraph />
    </div>

    <div class="products-header">
      Products
    </div>
    <div
      class="card1-container"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <BodyCards />
    </div>

    <div data-aos="zoom-in" data-aos-delay="5550" data-aos-duration="3000">
      <HomeBeforeFooter />
    </div>

    <HomeFooter />
  </div>
</template>

<script>
import MainHeader from "./MainHeader";
import HomeBody from "./HomeBody";
import BodyParagraph from "./BodyParagraph";
import BodyCards from "./BodyCards";
import HomeFooter from "./HomeFooter";
import HomeBeforeFooter from "./HomeBeforeFooter";
export default {
  name: "Home",
  components: {
    HomeBeforeFooter,
    HomeFooter,
    MainHeader,
    HomeBody,
    BodyParagraph,
    BodyCards,
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;

  background-size: auto;
}

.products-header {
  font-size: 500%;
  position: relative;
  font-family: "Nunito", sans-serif;
  margin: auto;
}
</style>
