export default function (state = null, action){
  switch(action.type) {
  case 'NEIGHBORHOOD_SELECTED':
    return action.payload;
  }

  return state;
}