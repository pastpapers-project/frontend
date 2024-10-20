import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  



export const CourseScreen = ({selectedCourse}:any) => {
    return (
        <div className="mx-10 my-20 flex">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">O levels</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">{selectedCourse?.name}</BreadcrumbLink>
                    </BreadcrumbItem>                    
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}