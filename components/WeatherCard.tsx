import { formatTime } from '@/utils/format';
import React from 'react';

interface Props {
  description: string;
  temp: number;
  feels_like: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  icon: string;
}

export default function WeatherCard({
  description,
  temp,
  feels_like,
  humidity,
  sunrise,
  sunset,
  icon,
}: Props) {
  return (
    <article className="mt-8 flex w-64 flex-col rounded-lg bg-white px-5 pb-6 shadow-2xl">
      <img
        className="w-full"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      />
      <p className="-mt-10 text-center text-3xl font-bold">{temp}℃</p>
      <p className="mt-2 text-center text-lg font-bold text-brand-500">
        {description}
      </p>
      <p className="mt-2 text-sm">체감 온도 : {feels_like}℃</p>
      <p className="mt-2 text-sm">습도: {humidity}%</p>
      <table className="mt-2 border-separate border border-slate-200 text-center">
        <thead className="">
          <tr className="bg-slate-200">
            <th className="">일출</th>
            <th className="">일몰</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm">
            <td>{formatTime(sunrise)}</td>
            <td>{formatTime(sunset)}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
