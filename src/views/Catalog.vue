<script>
import {CatologService as CatalogService} from "@/services/CatologService.js";
import Card from "@/components/Card.vue";

export default {
  components: {Card},
  data() {
    return {
      cardsAll: CatalogService.getProducts(),
      cardsInCart: CatalogService.getCartProducts(),
      cardsIds: [],
    }
  },
  methods: {

    removeFromCart(post) {
      this.cardsAll.map(item => {
        if (item.id === post.id) {
          item.inCart = false;
        }
      })
    },

    addToCart(post) {
      this.cardsAll.map(item => {
        if (item.id === post.id) {
          item.inCart = true;
        }
      })
    }

  },
  beforeMount() {
    this.cardsInCart.forEach(item => {
      this.cardsIds.push(item.id);
    })

    this.cardsAll.forEach(item => {
      item.inCart = false;

      this.cardsIds.forEach(id => {
        if (item.id === id) {
          item.inCart = true;
          return;
        }
      })
    })
  },
}
</script>

<template>
  <section class="catalog">
    <Card v-for="card in cardsAll" :template="'catalog'" :inCart="card.inCart" :card="card" :key="card.id"
          @removeItem="removeFromCart" @addItem="addToCart"/>
  </section>
</template>

<style>

.catalog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 100px;
}

@media (min-width: 1024px) {
}

</style>
