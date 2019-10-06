const INITIAL_STATE = {
  notify: '',
  type: ''
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@toast/OPEN':
      return action.payload;
    default:
      return state;
  }
}
