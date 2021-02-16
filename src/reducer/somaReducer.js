import React, {useReducer} from  'react';

const STATE_INITIAL ={
    result: '',
}

const somaReducer = (state = STATE_INITIAL, action) => {
    switch (action.type){
        case 'SOMA':
            return{...state, result: action.payload}
        default:
            return state;
    }
}

const useStore = () => useReducer(somaReducer, STATE_INITIAL)

export default useStore;