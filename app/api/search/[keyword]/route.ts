import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const city = request.url.split('/').pop();

  console.log('***** city : ', city);

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&lang=kr&appid={API key}&units=metric
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID}&units=metric`,
    );
    const data = await response.json();

    return NextResponse.json(
      { data },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log('***** Server Error : ', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
