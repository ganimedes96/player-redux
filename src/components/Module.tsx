import { ChevronDown } from "lucide-react"
import { Lesson } from "./lesson"
import * as Collapsible from '@radix-ui/react-collapsible';
import { useAppDispatch, useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModuleProps {
  title: string
  amountOfLessons: number
  moduleIndex: number
}

export const Module = ({amountOfLessons, moduleIndex, title}: ModuleProps) => {
  const dispatch = useAppDispatch()

  const {currentLessonIndex, currentModuleIndex} = useAppSelector(state => {
    const {currentLessonIndex, currentModuleIndex} = state.player
    return {currentModuleIndex, currentLessonIndex}
  })

  const lessons =useAppSelector(state => state.player.course?.modules[moduleIndex].lessons)
  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      
        <Collapsible.Trigger  className="flex w-full items-center gap-3 bg-zinc-800 p-4">
          <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950  text-xs">
            {moduleIndex + 1}
          </div>
          <div className="flex flex-col text-left">
            <strong className="text-sm">{title}</strong>
            <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
          </div>
          <ChevronDown className="group-data-[state=open]:rotate-180  transition  w-5 h-5 ml-auto text-zinc-400" />
        </Collapsible.Trigger>
      <Collapsible.Content >
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons && lessons.map((lesson, lessonIndex) => (
            <Lesson 
              key={lesson.id}
              isCurrent={currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex}
              duration={lesson.duration} 
              title={lesson.title}
              onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
            />
          ))}
        </nav>
      </Collapsible.Content>

    </Collapsible.Root>
  )
}