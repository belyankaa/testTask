<script>

import Card from "@/components/Card.vue";
import {CatologService as CatalogService} from "@/services/CatologService.js";

export default {
  components: {Card},
  data() {
    return {
      cards: []
    }
  },
  methods: {
    removeFromCart(post) {
      this.cards = this.cards.filter(item => {
        return item.id !== post.id;
      })
    }
  },
  beforeMount() {
    this.cards = CatalogService.getCartProducts();
  }
}
</script>

<template>
  <section class="cart">
    <div v-if="!cards.length > 0">Коризну пуста</div>
    <Card v-for="card in cards" :template="'cart'" :card="card" @removeItem="removeFromCart"/>
  </section>
</template>

<style>
.cart {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 100px;
}
</style>
