export default function formattedTime (time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timeFormatted = [
    minutes.toString().padStart(2, '0'),
     seconds.toString().padStart(2, '0')
  ].join(':');
  
  return timeFormatted
}