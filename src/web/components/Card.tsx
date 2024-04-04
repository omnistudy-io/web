import React, { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
    link?: string;
}

export default function Card(props: CardProps) {
    return (
        <div className={`border-r-[10px] shadow-md p-5
            ${"card"} ${props.className || ""}`}
        >
            {props.children}
        </div>
    );
}
