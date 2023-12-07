import Image from "next/image";

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  if (!data.forecast) {
    return null;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((item, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center font-semibold gap-4"
        >
          <p>
            {new Date(item.date).toLocaleString("en-US", {
              weekday: "short",
            })}
          </p>
          <Image
            src={"https:" + item.day.condition.icon}
            alt={item.day.condition.text}
            height={50}
            width={50}
          />
          <div>
            <p>H {item.day.maxtemp_c.toFixed()}</p>
            <p>L {item.day.mintemp_c.toFixed()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
