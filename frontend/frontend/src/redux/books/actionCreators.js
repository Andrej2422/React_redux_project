import * as actionTypes from './actionTypes'  // actionTypes можно заменить на а при импорте 

export const addBook = (newBook) => {
    return {
        type: actionTypes.ADD_BOOK,
        payload: newBook,
    }
}

export const deleteBook = (id) => {
    return {
        type: actionTypes.DELETE_BOOK,
        payload: id
    }
}