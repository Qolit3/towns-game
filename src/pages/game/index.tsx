import Message from "@/ui/message";
import formattedTime from "@/utils/func";
import { towns } from "@/utils/towns";
import { useEffect, useState } from "react";


export default function Game() {
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [messages, setMessages] = useState<{isYour: boolean, town: string}[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const buttonHandler = () => {
    setMessages([...messages, {isYour: true, town: inputValue}]);
    setTimeLeft(120);
    setInputValue('');
    setIsDisabled(true);
  }

  const inputHandle = (text: string) => {
    setInputValue(text);
    
    const searchResult = towns.find((item) => item.name === text)
    
    if(searchResult) {      
      setIsDisabled(false)
    }
  }
  
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
          {messages.length !== 0 ? 
              messages.map((item) => {
                return <Message isYour={item.isYour} town={item.town} />
              })
            : 
              <p>
                Ожидаю первого игрока
              </p>
          }
        </div>
        
        <div>
          <input
            value={inputValue}
            type="text"
            onChange={(event) => inputHandle(event.target.value)}  
          />
          <button
            onClick={buttonHandler}
            type="button"
            disabled={isDisabled}
          >
            Отправить
          </button>
        </div>
      </div>
    </main>
  )
}