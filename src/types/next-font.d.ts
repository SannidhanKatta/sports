declare module "next/font/google" {
    import { Font } from "next/font";

    export interface NextFont extends Font {
        variable?: string;
    }

    export function Geist(options: {
        subsets?: string[];
        weight?: string;
        variable?: string;
    }): NextFont;

    export function Geist_Mono(options: {
        subsets?: string[];
        weight?: string;
        variable?: string;
    }): NextFont;

    export function Lilita_One(options: {
        subsets?: string[];
        weight?: string;
        variable?: string;
    }): NextFont;

    export function Rowdies(options: {
        subsets?: string[];
        weight?: string;
        variable?: string;
    }): NextFont;
} 