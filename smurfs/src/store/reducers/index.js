import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_DATA_START,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,
    DELETE_DATA_START,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE,DELETE
} from '../actions'


const initialState = {
    error: '',
    isFetching: false,
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                smurfs: []
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                smurfs: []
            }
        case ADD_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                smurfs: []
            }
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            }
        case ADD_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                smurfs: []
            }
        case DELETE_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                smurfs: []
            }
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            }
        case DELETE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                smurfs: []
            }
        default: 
            return state

    } 

}