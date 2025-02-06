'use client';

import { ImagesSlider } from "@/components/ui/images-slider";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
    const images = [
        "/bg-1.jpg",
        "/bg-2.png",
        "/bg-3.jpg",
        "/bg-4.jpg",
        "/bg-5.jpg",
    ];

    const [sliderHeight, setSliderHeight] = useState('100vh');

    const scrollToEvents = () => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full">
            <ImagesSlider images={images}>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center space-y-4 md:space-y-8 max-w-4xl mx-auto px-4 py-8 md:py-0">
                        <h1 className={cn(
                            "font-['Lilita_One'] tracking-wider",
                            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
                            "text-white",
                            "drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",
                            "transition-all duration-300 hover:scale-105",
                        )}>
                            SPORTS CLUB JBIET
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
                            Unleashing Athletic Excellence
                        </p>
                        <div className="mt-4 md:mt-8">
                            <ShimmerButton>
                                Explore Events
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </ImagesSlider>
        </div>
    );
} 