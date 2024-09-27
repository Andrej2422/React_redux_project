import * as actionTypes from './actionTypes'  // actionTypes можно заменить на а при импорте 

export const addBook = (newBook) => {
    return {
        type: actionTypes.ADD_BOOK,
        payload: newBook,
    }
}