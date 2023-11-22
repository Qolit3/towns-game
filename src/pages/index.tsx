export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center bg-tg-gray-200`}
    >
      <div
        className={`bg-tg-white max-w-xl rounded-16 tg-shadow-base`}
      >
        <div
          className={`h-64 border-b border-b-tg-gray-100`}
        >
          <h1
            className={`text-center font-semibold text-lg pt-16`}
          >
            Игра в города на время
          </h1>
        </div>
        <div
          className={`m-24`}
        >
          <p
            className={`text-base text-tg-gray-700`}
          >
            Цель: Назвать как можно больше реальных городов.
          </p>
          <ul
            className={`text-base mt-24 ms-24 list-disc text-tg-gray-700`}
          >
            <li>
              Запрещается повторение городов.
            </li>
            <li>
              Названий городов на твёрдый "ъ" и мягкий "ь" знак нет. Из-за этого мы пропускаем эту букву и игрок должен назвать город на букву стоящую перед ъ или ь знаком.
            </li>
            <li>
              Каждому игроку даётся 2 минуты на размышления, если спустя это время игрок не вводит слово он считается проигравшим.
            </li>
          </ul> 
          <a
            className={`text-lg bg-tg-violet-600 rounded-4 mt-24 mx-auto pt-8 text-center  text-tg-white w-126 h-40 block`}
            href="/game"
          >
            Начать игру
          </a>
        </div>
      </div>
    </main>
  )
}
