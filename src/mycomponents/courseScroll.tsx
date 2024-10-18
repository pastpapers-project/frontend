import { Course, courses } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const CourseScroll = ({setSelectedCourse}:any) => {
  return (
    <ScrollArea className="w-52 h-20 m-5">
      {courses.map((course) => (
        <div className="flex justify-between hover:cursor-pointer hover:bg-gray-400 transition-all rounded-xl hover:text-black" onClick={() => {setSelectedCourse(course)}}>
          <p>{course.name}</p>
          <p>{course.files.length}</p>
        </div>
      ))}
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  );
};
