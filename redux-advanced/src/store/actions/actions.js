export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (num) => {
    return {
        type: ADD,
        payload: num
    }
};

export const substract = (num) => {
    return {
        type: SUBTRACT,
        payload: num
    }
};

export const storeResults = (result) => {
    return dispacth => {
        
    };
    return {
        type: STORE_RESULT,
        payload: result
    }
};

export const deleteResults = (id) => {
    return {
        type: DELETE_RESULT,
        payload: id
    }
};