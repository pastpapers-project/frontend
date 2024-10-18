export const CourseScreen = ({selectedCourse}:any) => {
    return (
        <div className="mx-10 my-20 flex">
            <p className="text-gray-600 text-2xl">{'A Levels > '}</p> 
            <p className="text-2xl pl-2">{selectedCourse?.name}</p>
        </div>
    )
}