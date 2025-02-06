"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
    images,
    children,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true,
    direction = "up",
}: {
    images: string[];
    children: React.ReactNode;
    overlay?: boolean;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
    direction?: "up" | "down";
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const img = new Image();
        img.src = images[currentIndex];
        img.onload = () => {
        };
    }, [currentIndex, images]);

    useEffect(() => {
        if (!autoplay) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [autoplay, images.length]);

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden",
                // Use different heights based on screen size
                // Keep current mobile heights
                "min-h-[400px] sm:min-h-[500px]",
                // For larger screens, use aspect-ratio to maintain image proportions
                "md:min-h-[800px] lg:min-h-[900px]",
                "max-h-screen",
                className
            )}
        >
            {overlay && (
                <div className={cn(
                    "absolute inset-0 bg-black/40 z-10",
                    overlayClassName
                )} />
            )}
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "up" ? { y: 100, opacity: 0 } : { y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={direction === "up" ? { y: -100, opacity: 0 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        // Adjust object-fit behavior for desktop
                        "object-cover md:object-contain lg:object-cover",
                        // Center the image
                        "object-center"
                    )}
                    alt="Slider image"
                />
            </AnimatePresence>
            {children}
        </div>
    );
}; 