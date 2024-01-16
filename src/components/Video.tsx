import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector } from "../store"
import { next, useCurrentLesson } from "../store/slices/player"

export const VideoPlayer = () => {

  const dispatch = useAppDispatch()

  const {currentLesson} = useCurrentLesson()
  
  const handlePlayNext = () => {
    dispatch(next())
  }

 if (!currentLesson) return null
  

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        width={"100%"}
        height={"100%"}
        controls
        playing
        onEnded={handlePlayNext}
      />
    </div>
  )
}