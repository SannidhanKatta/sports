"use client";
import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }: { text: string }) {
    // Updated vibrant gradient combinations
    const gradients = [
        "bg-gradient-to-r from-[#FF0080] via-[#FF0000] to-[#FF8C00]", // Hot pink to Orange
        "bg-gradient-to-r from-[#00FFFF] via-[#0080FF] to-[#0000FF]", // Cyan to Blue
        "bg-gradient-to-r from-[#FFD700] via-[#FF6B6B] to-[#FF1493]", // Gold to Pink
        "bg-gradient-to-r from-[#00FF00] via-[#00FFB3] to-[#00BFFF]", // Neon Green to Sky Blue
        "bg-gradient-to-r from-[#FF3366] via-[#FF6B6B] to-[#FFAF40]", // Rose to Peach
    ];

    const [currentGradients, setCurrentGradients] = React.useState(gradients);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const shuffled = [...gradients].sort(() => Math.random() - 0.5);
            setCurrentGradients(shuffled);
            setCount((prev) => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-black tracking-tighter font-['Russo_One']">
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${count}-${index}`}
                    initial={{ y: 0 }}
                    animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1],
                        filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                        opacity: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 1,
                        delay: index * 0.08,
                        repeat: Infinity,
                        repeatDelay: 10,
                    }}
                    className={`inline-block whitespace-pre ${currentGradients[index % currentGradients.length]} bg-clip-text text-transparent`}
                    style={{
                        textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
} 