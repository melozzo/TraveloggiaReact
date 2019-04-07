import * as actionTypes from './action-types';

const initialState= {
    mapList: [{Name: 'Italy'}, {Name: 'France'}],
    userId: 44
}

const reducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case actionTypes.CREATE_MAP_RETURNED:
        return {
            ...state,
            mapList: {
                ...state.mapList.concat( action.map )
            }
        }

        case actionTypes.GET_MAPS_RETURNED:
        return {
            ...state, 
            mapList : action.maplist 
        }
        
        default:
            return state;

    }


}

export default reducer;