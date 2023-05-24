import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from './reducers';

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      pokemon: pokemonReducer,
    }
  });

export default store;