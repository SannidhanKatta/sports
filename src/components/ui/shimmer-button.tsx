"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const ShimmerButton = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(
            "inline-flex",
            className
        )}>
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-colors",
                    "text-white",
                    "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600",
                    "hover:from-blue-500 hover:via-blue-400 hover:to-blue-500",
                    "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                    "hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]",
                    "relative overflow-hidden",
                    "before:absolute before:inset-0",
                    "before:-translate-x-full before:animate-[shimmer_2s_infinite]",
                    "before:bg-gradient-to-r",
                    "before:from-transparent before:via-white/20 before:to-transparent",
                    className
                )}
            >
                {children}
            </button>
        </div>
    );
}; 