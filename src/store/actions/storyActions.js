import { storyService } from '../../services/story.service.js'

export function loadStorys(filterBy) {
  return (dispatch) => {
    return storyService.query(filterBy).then((storys) => {
      const action = {
        type: 'SET_STORYS',
        storys,
      }
      dispatch(action)
    })
  }
}

export function saveStory(story) {
  return (dispatch) => {
    return storyService.save(story).then((savedStory) => {
      const action = {
        type: 'ADD_STORYS',
        story: savedStory,
      }
      dispatch(action)
    })
  }
}

export function removeTodo(storyId) {
  return (dispatch) => {
    return storyService.remove(storyId).then(() => {
      const action = {
        type: 'REMOVE_STORY',
        storyId,
      }
      dispatch(action)
    })
  }
}

export function updateStory(story) {
  return (dispatch) => {
    return storyService.save(story).then((savedStory) => {
      const action = {
        type: 'UPDATE_STORY',
        story: savedStory,
      }
      dispatch(action)
    })
  }
}
export function addComment(storyId, txt) {
  return (dispatch) => {
    return storyService.addComment(storyId, txt).then((savedStory) => {
      console.log('saved story', savedStory)
      const action = {
        type: 'EDIT_STORY',
        story: savedStory,
      }
      dispatch(action)
    })
  }
}

export function setSelectedStory(story) {
  return (dispatch) => {
    const action = {
      type: 'SET_SELECTED_STORY',
      story,
    }
    dispatch(action)
  }
}
