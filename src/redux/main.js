import { createStore } from "redux";

const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export default function getStore() {
  return createStore(reducerFunction);
}

const initialState = {
  person: [{ name: "Pedro", lastName: "Blanco" }]
};

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload
});

export function reducerFunction(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        person: [
          ...state.person,
          { name: action.payload.name, lastName: action.payload.lastName }
        ]
      };
    default:
      return state;
  }
}
