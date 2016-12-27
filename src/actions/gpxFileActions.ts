import * as types from '../constants/actionTypes';

export function saveWaypointsSuccess(waypoints:any[]) : any
{
    return {
        type: types.SAVE_GPX_FILE,
        waypoints
    };
}

export function saveWaypoints(waypoints:any[]) {
    return saveWaypointsSuccess(waypoints);
    // return function (dispatch : any){
    //         dispatch(saveWaypointsSuccess(waypoints));
    // };
}

// example of a thunk using the redux-thunk middleware
//export function saveFuelSavings(settings : any) {
//  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
//    return dispatch({
//      type: types.SAVE_FUEL_SAVINGS,
//      dateModified: dateHelper.getFormattedDateTime(),
//      settings
//    });
//  };
//}

//export function calculateFuelSavings(settings:any, fieldName:any, value:any) {
//  return {
//    type: types.CALCULATE_FUEL_SAVINGS,
//    dateModified: dateHelper.getFormattedDateTime(),
//    settings,
//    fieldName,
//    value
//  };
//}
