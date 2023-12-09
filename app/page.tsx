"use client";
import { FormEvent, useState } from "react";
import Input from "@/components/Input";
import Current from "@/components/Current";
import WeekForecast from "@/components/WeekForecast";
import WeatherDetails from "@/components/WeatherDetails";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=c977ffdd00104ab395e91413230212&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;

  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to the WeatherApp
        </h2>
        <p className="text-xl">Enter a city name</p>
      </div>
    );
  } else if (error != "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-semibold mb-4">City Not Found</p>
        <p className="text-xl">Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex flex-col md:flex-row p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white/25 w-full flex flex-col md:h-screen sm:h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl font-bold">
            Weath Now App
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
}
