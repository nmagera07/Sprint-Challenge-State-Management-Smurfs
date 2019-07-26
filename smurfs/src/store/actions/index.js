import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const ADD_DATA_START = 'ADD_DATA_START'
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS'
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE'

export const DELETE_DATA_START = 'DELETE_DATA_START'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE'

export const EDIT_DATA_START = 'EDIT_DATA_START'
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS'
export const EDIT_DATA_FAILURE = 'EDIT_DATA_FAILURE'


export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => console.log(err.response))
    }

export const addData = (smurf) => dispatch => {
    dispatch({ type: ADD_DATA_START})
    axios
        .post(`http://localhost:3333/smurfs`, smurf)
        .then(response => {
            console.log(response)
            dispatch({ type: ADD_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => console.log(err.response))
    }

export const deleteData = (id) => dispatch => {
    dispatch({ type: ADD_DATA_START})
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: ADD_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => console.log(err.response))
    }

export const editData = (id, editSmurf) => dispatch => {
    dispatch({ type: EDIT_DATA_START})
    axios
        .put(`http://localhost:3333/smurfs/${id}`, editSmurf)
        .then(response => {
            console.log(response)
            dispatch({ type: EDIT_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => console.log(err.response))
    }