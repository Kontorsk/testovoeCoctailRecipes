<template>
  <div class="card">
    <div class="card-nav">
      <ul class="list">
        <li
          v-for="item in store.state.types"
          :key="item"
          @click="() => selectDrink(item)"
          class="list-itemLeft"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="card-body">
      <app-cocktail-body
        v-if="cocktail"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppCocktailBody from '@/components/AppCocktailBody.vue';

const props = defineProps({
  cocktailId: {
    type: String,
    default: 'Margarita',
  },
});

const router = useRouter();
const store = useStore();
const cocktail = ref();
const selectDrink = async (item) => {
  cocktail.value = await store.dispatch('loadDrinks', item);
  router.push(`/${item}`);
};

selectDrink(props.cocktailId);
</script>

<style>
.card {
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 0;
  margin: 5% auto;
  max-width: 1024px;
  min-width: 360px;
  border: 2px solid;
}

.card-nav {
  width: 25%;
  border-right: 1px solid;
}

.card-body {
  width: 100%;
  margin: 0 10px 20px 20px;
}

.list {
  margin: 20px 0 10px 0;
  padding: 0;
  list-style: none;
}

.list-itemLeft {
  cursor: pointer;
  padding: 3px 10px 0 20px;
}

.list-itemLeft:hover {
  background: #eee;
  border: 1px hsla(0, 2%, 40%, 0.349) solid;
}

.list-itemLeft a {
  color: #2c3e50;
}

.list-itemLeft a.active {
  color: #3eaf7c;
  font-weight: bold;
}

.container-list {
  display: flex;
}

.container-body {
  display: flex;
  justify-content: space-between;
}

.list-ingridients {
  list-style: none;
  margin: 0 10px 0 0;
  padding: 0;
}

.container-body {
  display: flex;
  justify-content: space-between;
}

.block-img {
  width: 200px;
  text-align: center;
}

@media (max-width: 510px) {
  .container-body {
    display: block;
  }
  .block-img {
    display: block;
  }
}
</style>
