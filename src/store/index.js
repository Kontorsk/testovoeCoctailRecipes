import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  namespaced: true,
  state() {
    return {
      types: ['Margarita', 'Mojito', 'A1', 'Kir'],
      drinks: [],
    };
  },
  mutations: {
    addResult(state, data) {
      Object.assign(state.drinks, data);
    },
  },
  actions: {
    async loadDrinks({ commit, state }, item) {
      if ([item] in state.drinks) {
        return state.drinks[item];
      }
      try {
        const { data } = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item}`,
        );
        const result = {
          [item]: (data?.drinks ?? []).map((drink) => ({
            strDrink: drink.strDrink,
            descriptions: {
              strCategory: drink.strCategory,
              strAlcoholic: drink.strAlcoholic,
              strGlass: drink.strGlass,
            },
            strInstructions: drink.strInstructions,
            measures: Object.keys(drink)
              .filter(
                (key) => key.includes('strMeasure') && drink[key] !== null,
              )
              .map((key) => drink[key]),
            ingredients: Object.keys(drink)
              .filter(
                (key) => key.includes('strIngredient') && drink[key] !== null,
              )
              .map((key) => drink[key]),
            strDrinkThumb: drink.strDrinkThumb,
          })),
        };
        commit('addResult', result);
        return state.drinks[item];
      } catch (e) {
        console.error(e.message);
      }
    },
  },
  getters: {},
});
