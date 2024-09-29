import React from "react"

export type TeamProps = {
    name : string,
    age : number,
    skill : string,
    isMarried? : true
}


export type ButtonProps = {
    title : string;
    style? : React.CSSProperties;
}



export type CardProps = {
    children: React.ReactNode;
}