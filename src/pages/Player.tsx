import { Header } from "../components/Header";
import { VideoPlayer } from "../components/Video";
import { Module } from "../components/Module";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { loadCourse, useCurrentLesson } from "../store/slices/player";


export function Player() {
  const modules = useAppSelector(state => state.player.course?.modules)
  const dispatch = useAppDispatch()
  const {currentLesson} = useCurrentLesson()

  useEffect(() => {
    document.title = `Assistindo: ${currentLesson?.title}`
  }, [currentLesson])

  useEffect(() => {
      dispatch(loadCourse())
  }, [])

  return (
    <div className="h-screen bg-zinc-950  text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6 px-2">
        <Header />
        <main className="relative flex overflow-hidden rounded-lg border pr-80 border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          <aside className="w-80 divide-y-2 divide-zinc-900 scrollbar scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 border-l overflow-y-scroll absolute right-0 bottom-0 top-0 border-zinc-800 bg-zinc-900 ">
            {modules && modules.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length} />
            ))}
          </aside>




        </main>
      </div>

    </div>
  )
}