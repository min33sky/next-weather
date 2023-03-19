'use client';

import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import useDebounce from '@/hooks/useDebounce';
import { Weather } from '@/types/weather';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Home() {
  const searchParmas = useSearchParams();
  const [keyword, setKeyword] = useState(searchParmas.get('query') || '');
  const debouncedKeyword = useDebounce(keyword, 500);
  const [result, setResult] = useState<Weather>();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (debouncedKeyword !== '') {
      fetch(`/api/search/${debouncedKeyword}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data.cod === 200) {
            setErrorMessage('');
            setResult(res.data);
            router.replace(`/?query=${debouncedKeyword}`);
          } else {
            if (res.data.message === 'city not found') {
              setErrorMessage('도시를 찾을 수 없습니다... 🥸');
            } else {
              setErrorMessage(res.data.message);
            }
          }
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    }
  }, [debouncedKeyword]);

  return (
    <div className="flex h-full flex-col items-center justify-start">
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <div>
        {errorMessage || !result ? (
          <p className="mt-4 font-bold text-red-400">{errorMessage}</p>
        ) : (
          <WeatherCard
            description={result?.weather[0].description || ''}
            temp={result?.main.temp || 0}
            feels_like={result?.main.feels_like || 0}
            humidity={result?.main.humidity || 0}
            sunrise={result?.sys.sunrise || 0}
            sunset={result?.sys.sunset || 0}
            icon={result?.weather[0].icon || ''}
          />
        )}
      </div>
    </div>
  );
}
