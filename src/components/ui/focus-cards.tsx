"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FocusCards = ({
    items,
    className,
}: {
    items: {
        url: string;
        caption?: string;
        year?: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item.url}
                    className="relative group h-80 m-4"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.div
                        className="relative h-full w-full rounded-2xl overflow-hidden"
                        animate={{
                            scale: hoveredIndex === idx ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={item.url}
                            alt={item.caption || "Gallery image"}
                            fill
                            className="object-cover"
                        />
                        {item.caption && (
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                                <p className="text-white text-sm">
                                    {item.caption}
                                </p>
                                {item.year && (
                                    <p className="text-blue-400 text-sm mt-2">
                                        {item.year}
                                    </p>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            ))}
        </div>
    );
};