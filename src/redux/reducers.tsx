import { ActionTypes } from './actions';


const initialState = {
  value: null,
};

const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // ...

    case ActionTypes.UPDATE_VALUE:
      return {
        ...state,
        value: action.payload,
      };

    // ...

    default:
      return state; // Retorna o estado atual se nenhuma ação correspondente for encontrada
  }
};

export default pokemonReducer;
