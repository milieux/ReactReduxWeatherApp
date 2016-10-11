import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
  }

  return state;
}


// don't ever mutate state like so: state.push(action.payload.data);
// you can do: state.concat(action.payload.data)
// or similarly: [action.payload.data, ...state] but it inserts on first location
