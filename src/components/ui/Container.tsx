import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
  link?: string;
};

export default function Container(props: ContainerProps) {
  return (
    <div
      className={`container w-full h-full flex flex-col justify-center items-center mr-auto ml-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]
            ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
}
