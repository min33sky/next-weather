/**
 * 시간 포맷
 * @param timestamp
 */
export function formatTime(timestamp: number) {
  return new Intl.DateTimeFormat('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(timestamp * 1000);
}
