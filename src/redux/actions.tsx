export enum ActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    UPDATE_VALUE = 'UPDATE_VALUE', // Nova action
  }
  
  interface UpdateValueAction {
    type: ActionTypes.UPDATE_VALUE;
    payload: string; // Tipo do novo valor
  }
  
  
  export const updateValue = (value: string): UpdateValueAction => ({
    type: ActionTypes.UPDATE_VALUE,
    payload: value,
  });

  interface IncrementAction {
    type: ActionTypes.INCREMENT;
  }
  
  interface DecrementAction {
    type: ActionTypes.DECREMENT;
  }
  
  export const increment = (): IncrementAction => ({
    type: ActionTypes.INCREMENT,
  });
  
  export const decrement = (): DecrementAction => ({
    type: ActionTypes.DECREMENT,
  });
  