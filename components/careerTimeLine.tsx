interface CareerTimeLineProps {
  Post: string;
  Company: string;
  Tenure: string;
  Description: React.ReactNode[]; // Change string[] to React.ReactNode[]
}

const CareerTimeLine = ({
  Post,
  Company,
  Tenure,
  Description,
}: CareerTimeLineProps) => {
  return (
    <ol className="relative border-s border-gray-200 mt-6">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full -start-3 ring-4 ring-gray-400">
          <svg
            className="w-2.5 h-2.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-400">
          {Post} at {Company}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {Tenure}
        </time>
        {Description.map((description, index) => (
          <div
            key={index}
            className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            {description}
          </div>
        ))}
      </li>
    </ol>
  );
};

export default CareerTimeLine;
