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
    <article className="mt-8 flex flex-col rounded-lg bg-white px-3 py-2 shadow-lg">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
      <p className="">{description}</p>
      <p>현재 온도 : {temp}</p>
      <p>체감 온도 : {feels_like}</p>
      <p>습도: {humidity}%</p>
      <p>일출 : {formatTime(sunrise)}</p>
      <p>일몰 : {formatTime(sunset)}</p>
    </article>
  );
}
