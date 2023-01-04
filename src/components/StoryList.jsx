import { StoryPreview } from './StoryPreview'

export function StoryList({ storys, submitComment }) {
  return (
    <div className="story-list flex justify-center">
      {storys.map((story) => (
        <StoryPreview key={story._id} story={story} submitComment={submitComment} />
      ))}
    </div>
  )
}
