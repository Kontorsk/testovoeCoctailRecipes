<template>
  <div class="container-body">
    <div>
      <p class="title">{{ currCoctail.strDrink }}</p>
      <p
        v-for="description in currCoctail.descriptions"
        :key="description"
        class="body"
      >
        {{ description }}
      </p>
      <div class="body-block">
        <p class="body">Inctructions:</p>
        <p class="body">{{ currCoctail.strInstructions }}</p>
      </div>
      <p class="title-list">List of ingredients:</p>
      <div class="container-list">
        <ul class="list-ingridients">
          <li
            v-for="measure in currCoctail.measures"
            :key="measure"
          >
            {{ measure }}
          </li>
        </ul>
        <ul class="list-ingridients">
          <li
            v-for="ingredient in currCoctail.ingredients"
            :key="ingredient"
          >
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div class="block-img">
      <img
        :src="currCoctail.strDrinkThumb"
        alt="коктейль"
        class="picture"
        loading="lazy"
      />
      <button
        @click="() => changeVariation()"
        class="btn"
      >
        Изменить вариант
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  coctail: {
    type: Object,
    required: true,
  },
});
const currVariation = ref(0);

const currCoctail = computed(() => {
  return props.coctail[currVariation.value];
});

function changeVariation() {
  if (props.coctail.length > currVariation.value + 1) {
    currVariation.value++;
  } else {
    currVariation.value = 0;
  }
}
</script>

<style scoped>
.container-list {
  display: flex;
}

.list-ingridients {
  list-style: none;
  margin: 0 10px 0 0;
  padding: 0;
}

.title {
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.body {
  margin: 0;
}

.body-block {
  margin-top: 10px;
  margin-right: 10px;
}

.title-list {
  margin: 10px 0 5px 0;
}

.picture {
  width: 200px;
  border: 2px solid;
  margin-top: 20px;
}

.btn {
  color: #000000;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  border: 1px solid #040706;
  text-decoration: none;
  margin-top: 5px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
  cursor: pointer;
}
</style>
