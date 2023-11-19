import { FC } from "react";

export interface IMessage {
  isYour: boolean;
  town: string;
}

const Message: FC<IMessage> = ({
  isYour = true,
  town,
}): JSX.Element => {

  return (
    <div
      className={isYour ? `` : ``}
    >
      <p>
        {town}
      </p>
    </div>
  )
}

export default Message