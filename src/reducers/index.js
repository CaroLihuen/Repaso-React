import {
    ADD_QUOTE,
    GET_CHARACTERS,
    GET_CHARACTER_DETAIL,
    GET_EPISODES,
    EMPTY_CHARACTER_DETAIL,
    GET_EPISODE_DETAIL,
    EMPTY_EPISODE_DETAIL
}
    from "../actions";

//==== Setear Estado Global Inicial ======//

const initialState = {
    quote: {},
    characters:[],
    characterDetail: {},
    episodes: [],
}

//==== Setear Reducers ======//
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_QUOTE:
          return {
            ...state,
            quote: action.payload,
          };
        case GET_CHARACTERS:
          return {
            ...state,
            characters: action.payload,
          };
        case GET_CHARACTER_DETAIL:
          return {
            ...state,
            characterDetail: action.payload,
          };
        case EMPTY_CHARACTER_DETAIL:
          return {
            ...state,
            characterDetail: {},
          };
        case GET_EPISODES:
          return {
            ...state,
            episodes: action.payload,
          };
    
        default:
    return state;
    }
}

export default rootReducer;
