import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addComment, loadStorys } from '../store/actions/storyActions'
import { StoryList } from '../components/StoryList'
// import {
//   HashRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom'

export const StoryApp = () => {
  // const [robot, handleChange, setRobot] = useForm()
  const storys = useSelector((state) => {
    return state.storyModule.storys
  })
  const dispatch = useDispatch()

  //calling the data
  useEffect(() => {
    dispatch(loadStorys())
    // eslint-disable-next-line
  }, [])

  const submitComment = (event, story) => {
    console.log('hola')
    event.preventDefault()
    dispatch(addComment(story, event.target[0].value))
    // textInput.current.value = ''
  }
  return (
    <section>
      <StoryList storys={storys} submitComment={submitComment} />
    </section>
  )
}
