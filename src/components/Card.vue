<script setup>
const props = defineProps({
  inCart: Boolean,
  template: String,
  card: Object
})


function setValue(target) {


  const localStorageItems = JSON.parse(localStorage.getItem('products'));

  localStorageItems.map(item => {
    if (item.id === props.card.id) {
      item.count = target.srcElement.value;
    }
  })

  localStorage.setItem('products', JSON.stringify(localStorageItems));
}

function getImageUrl() {
  return new URL(`../assets/images/${props.card.image}`, import.meta.url)
}

function removeFromCart() {
  const localStorageItems = JSON.parse(localStorage.getItem('products'));

  const deleteItemIndex = localStorageItems.findIndex(card => props.card.id === card.id);

  localStorageItems.splice(deleteItemIndex, deleteItemIndex + 1);
  localStorage.setItem('products', JSON.stringify(localStorageItems));
}

function addToCart() {
  props.card.count = 1;
  if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([props.card]));

  } else {

    const localStorageItems = JSON.parse(localStorage.getItem('products'));

    localStorageItems.push(props.card);

    localStorage.setItem('products', JSON.stringify(localStorageItems));
  }
}


</script>

<template>
  <div class="product-card">

    <div class="product-card-image">
      <img :src="getImageUrl()">
    </div>

    <div class="card__info">
      <div class="product-card-name">{{ props.card.name }}</div>

      <div class="product-card-info">
        <div class="product-card-price">{{ props.card.price }} ₽</div>
        <div>
          <div class="count" v-if="props.template === 'cart'">
            <span>Количество</span>
            <input type="number" :value="props.card.count" min="1" max="15" v-on:input="setValue">
          </div>

          <button class="button" v-if="props.template === 'cart'"
                  v-on:click="removeFromCart"
                  @click="$emit('removeItem', props.card)">Удалить
          </button>

          <button class="button" v-if="(props.template === 'catalog' && props.inCart === false)"
                  v-on:click="addToCart"
                  @click="$emit('addItem', props.card)">В корзину
          </button>

          <button class="button inCart" v-if="(props.template === 'catalog' && props.inCart === true)"
                  @click="$emit('removeItem', props.card)" v-on:click="removeFromCart"
                  text="В корзине" hover-text="Удалить"/>
        </div>

      </div>
    </div>

  </div>
</template>

<style>
.count {
  margin-bottom: 5px;
  display: flex;
}

.count span {
  margin-right: 10px;
}

.count input {
  width: 20px;
  outline: none;
  text-align: center;
  border: 2px solid #6CAC72;
  border-radius: 5px;
}

.count input::-webkit-outer-spin-button,
.count input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.product-card {
  margin: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  width: 291px;
  height: 424px;
  box-sizing: border-box;
}

.product-card-image {
  width: 291px;
  height: 291px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
}

.card__info {
  padding: 0 20px;
}

.product-card-name {
  height: 52px;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #3d6240;
  margin-top: 15px;
}

.product-card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-bottom: 20px;
}

.product-card-price {
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  color: #3d6240;
}

.button {
  color: black;
  border-radius: 5px;
  width: 166px;
  height: 20px;
  background-color: #6CAC72;
  border: none;
  cursor: pointer;
}

.button:hover {
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 2px 2px;
}

.inCart {
  background-color: #b6b6b6;
}

.inCart::before {
  content: attr(text);
}

.inCart:hover::before {
  content: attr(hover-text);
}
</style>
