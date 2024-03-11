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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md  justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// name="Menteor - A platform for skill based one-to-one mentorship"
//               description="Menteor is a one-of-a-kind platform for personalised mentorship, combining the simplicity of a dating app with a focus on skill-based knowledge transfer. Ideal for self-motivated individuals seeking professional guidance or expertise in a specific field, Menteor connects you with a variety of skilled professionals, creatives, and craftsmen to support you on your journey."
//               url="https://www.menteor.space/"
//               image={menteor_mockup}
//               varient="detailed"
//               buttonText="View Project"
//               width={457}
//               height={565}
