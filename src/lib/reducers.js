import { actions } from './actions';

const initiaState = {
  items: null
};

export default function BM(state = initiaState, action) {

  switch (action.type) {
      case 'value':
        return state
      default:
          return state
  }
}
