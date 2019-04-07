import { takeEvery, fork, all } from 'redux-saga/effects'
import * as sagas from './dataTransportSagas';
import * as actionTypes from './action-types'



function* createMapAsync(  ) {
  const action =   yield takeEvery(actionTypes.CREATE_MAP_ASYNC, sagas.createMapAsync )
}


function* getMapsAsync(  ) {
   const action =  yield takeEvery(actionTypes.GET_MAPS_ASYNC, sagas.getMapsAsync )
}




export function* watcherSagas() {

    yield all ([
        createMapAsync(),
        getMapsAsync()


    ] )

}