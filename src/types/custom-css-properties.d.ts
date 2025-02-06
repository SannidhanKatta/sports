import * as React from "react";

declare module "react" {
    interface CSSProperties {
        "--m-x"?: string;
        "--m-y"?: string;
        "--r-x"?: string;
        "--r-y"?: string;
        "--bg-x"?: string;
        "--bg-y"?: string;
        "--duration"?: string;
        "--foil-size"?: string;
        "--opacity"?: string;
        "--radius"?: string;
        "--easing"?: string;
        "--transition"?: string;
        "--step"?: string;
        "--foil-svg"?: string;
        "--pattern"?: string;
        "--rainbow"?: string;
        "--diagonal"?: string;
        "--shade"?: string;
    }
} 