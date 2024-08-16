import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  imagePath: string;
  alt: string
  iconClassName: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={props.className} onClick={props.onClick}>
        <Image
          src={props.imagePath}
          width={560}
          height={560}
          alt={props.alt}
          className={props.iconClassName}
        />
      </button>
  );
}