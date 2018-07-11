import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
      //similar: state.concat([action.payload.data])
      //NEVER WRITE state.push (bc we're manipilating state w/o setState)
  }
  return state;
}
