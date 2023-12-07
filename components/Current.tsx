import { getCurrentDate } from "@/utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const weatherIcon = data.current
    ? "https:" + data.current.condition.icon
    : null;
  const currentDate = getCurrentDate();
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <Image
              className="w-[50px] object-contain"
              src={weatherIcon}
              alt={"weather icon"}
              width={50}
              height={50}
            />
          </div>
        )}
      </div>
      <div>
        {data.current ? (
          <p className="text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? (
          <span className="text-white">{data.current.condition.text}</span>
        ) : null}
      </div>
      <div>
        {data.location ? (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <IoLocationSharp />
            <span>
              {data.location.name}, {data.location.region}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Current;
