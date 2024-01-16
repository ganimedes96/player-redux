import { MessageCircle } from "lucide-react"
import { useCurrentLesson } from "../store/slices/player"

export const Header = () => {

  const {currentModule, currentLesson} = useCurrentLesson()

  if (!currentModule || !currentLesson) return null

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">Modulo "{currentModule.title}"</span>
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium ">
        <MessageCircle className="w-4 h-4" />
        Deixar Feedback
      </button>
    </div>
  )
}