import { StaticImageData } from "next/image";

export interface ProjectCardsProps {
    name: string;
    description: string;
    url: string;
    image?: StaticImageData;
    buttonText?: string;
    varient?: "card" | "detailed";
    width?: number;
    height?: number;
  }