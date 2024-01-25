<script>

import Card from "@/components/Card.vue";
import {CatologService as CatalogService} from "@/services/CatologService.js";

export default {
  components: {Card},
  data() {
    return {
      cards: CatalogService.getCartProducts()
    }
  },
  methods: {
    removeFromCart(post) {
      this.cards = this.cards.filter(item => {
        return item.id !== post.id;
      })
    }
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
