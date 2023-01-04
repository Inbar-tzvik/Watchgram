const initialState = {
  storys: [],
}

export function storyReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STORYS':
      return {
        ...state,
        storys: action.storys,
      }
    case 'REMOVE_STORY':
      const storys = state.storys.filter((story) => story._id !== action.id)
      return { ...state, storys }
    case 'ADD_STORY':
      let newStorys = state.storys.slice()
      newStorys.push(action.story)
      return { ...state, storys: newStorys }
    case 'EDIT_STORY': {
      const storyIdx = state.storys.findIndex((story) => story._id === action.story._id)
      const updateStorys = state.storys.slice()
      updateStorys[storyIdx] = action.story
      return { ...state, storys: updateStorys }
    }
    default:
      return state
  }
}
