import { ReactNode } from "react";
import './styles.css';

interface Props {
  onClick: () => void;
  text: string;
  icon?: ReactNode;
}

function Button({ text, icon, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}

export default Button;