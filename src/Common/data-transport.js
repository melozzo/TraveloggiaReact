import axios from 'axios';


export function getMaps( memberId ) {

   return axios.get('http://localhost:3060/map/list/memberId')
};