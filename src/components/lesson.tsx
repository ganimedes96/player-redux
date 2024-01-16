import { PlayCircleIcon, Video } from "lucide-react"

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export const Lesson = ({duration, title, onPlay, isCurrent = false}: LessonProps) => {


  return (  
      <button
        disabled={isCurrent}
        data-active={isCurrent} 
        onClick={onPlay} 
        className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-500 enabled:hover:text-zinc-100"
      >
        {isCurrent ? <PlayCircleIcon className="w-4 h-4 text-emerald-500" /> : <Video className="w-4 h-4" />}
        <span>{title}</span>
        <span className="ml-auto text-xs text-zinc-400 font-mono">{duration}</span>
      </button>
     
  )
}