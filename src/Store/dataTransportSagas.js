import axios from 'axios';
import * as actions from './action-types'
import { put, call } from 'redux-saga/effects';

export function* getMapsAsync( action ) {

   try{
   const mel = action;
   const maps = yield axios.get('http://localhost:3060/map/list/' + action.memberId) ;
  
   yield put( { type: actions.GET_MAPS_RETURNED, maplist: maps.data});
   }
   catch( error ) {

      console.log( error )
   }

};



export function* createMapAsync( ) {
   const data = {Name: "Paris", MemberId: 44}
   const map = yield axios.post('http://localhost:3060/map/create/', data);
   put( { type: actions.CREATE_MAP_RETURNED, createdmap: map });

};