import { put } from 'redux-saga/effects';
import * as actionCreators from './../Actions/authActionCreators'

// saga uses generators - indicated by start
// the are functions that pause and continue 
// yield indicates that you wait for the statement to 
// complete before continuing

// use put to dispatch an action

export function* logoutSaga ( action ) {
    yield localStoreage.removeItem('token');
    yield localStorage.removeItem('expireationDate';
    yield localStorage.removeItem('userId');
    put ( actionCreators.logoutSucceed() )
}


export function* checkAuthTimeoutSaga( action ) {
    

}