import formattedTime from "@/utils/func";
import { useEffect, useState } from "react";

export default function Game() {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  
  return(
    <main
      className={`flex min-h-screen items-center justify-center bg-tg-gray-200`}
    >
      <div
      className={`max-w-xl bg-tg-white rounded-16`}
      >
        <div
          className={`flex w-576 h-464 flex-row tg-shadow-base justify-between realtive`}
        >
          <p
            className={`my-20 ms-16`}
          >
            Сейчас ваша очередь
          </p>
          <p
            className={`mt-17 me-16`}
          >
            {formattedTime(timeLeft)}
          </p>
          <div
            className={`absolute`}
          >
            {/* таймлайн */}
          </div>
        </div>
        <div>
          <p>
            Первый участник вспоминает города...
          </p>
        </div>
        <div>
          <input type="text" />
          <button />
        </div>
      </div>
    </main>
  )
}