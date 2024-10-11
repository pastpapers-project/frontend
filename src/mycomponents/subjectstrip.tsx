import { samplesubjects } from "@/app/appconfig/config"

export const SubjectStrip = () => {
    return (
        <div className="flex justify-evenly items-center w-full h-20 bg-neutral-950 text-gray-400 font-bold text-2xl opacity-70">
          {samplesubjects.map((i) => <div><i.icon className="mr-1"/>{i.name}</div>)}
        </div>
    )
}