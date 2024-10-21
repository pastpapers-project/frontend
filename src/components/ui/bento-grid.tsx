import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  header,
  index,// New prop for background image
}: {
  className?: string;
  title?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index: number;
}) => {


  const backgroundImageClass = (() => {
    switch (index) {
      case 1:
        return "bg-[url('./public/images/ai.png')]";
      case 2:
        return "bg-[url('./public/images/largest.png')]";
      case 3:
        return "bg-[url('./public/images/bookmark.png')]";
      case 4:
        return "bg-[url('./public/images/check.png')]";
      default:
        return "bg-[url('./public/images/ai.png')]";
    }
  })();


  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black  border-transparent justify-between flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 w-full h-full z-0 transition-transform duration-200 group-hover/bento:scale-110 bg-opacity-85",
          backgroundImageClass
        )}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-20">
        <div className=" text-white text-opacity-100 mb-2 mt-2 text-5xl font-thin">
          {title}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </div>
  );
};