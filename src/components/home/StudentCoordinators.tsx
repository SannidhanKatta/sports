'use client';

import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import Link from "next/link";

const coordinators = [
    {
        name: "K. Keerthana",
        position: "President",
        image: "/K. Keerthana president.jpg",
        link: "#"
    },
    {
        name: "Ch. Vamshi Krishna",
        position: "Vice President",
        image: "/Ch.vamshi krishna -vice president.jpg",
        link: "#"
    },
    {
        name: "M. Vishnu",
        position: "General Secretary",
        image: "/M.vishnu -general secretary.jpg",
        link: "#"
    },
    {
        name: "M. Deepak",
        position: "Treasurer",
        image: "/M.Deeepak- treasurer.jpg",
        link: "#"
    },
    {
        name: "S. Vishista",
        position: "Secretary",
        image: "/Vishista.jpg",
        link: "#"
    }
];

export default function StudentCoordinatorsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 font-rowdies mb-4">
                    STUDENT COORDINATORS
                </h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {coordinators.map((coordinator) => (
                        <Link href={coordinator.link} key={coordinator.name}>
                            <GlareCard className="relative cursor-pointer">
                                <div className="p-4 flex flex-col items-center">
                                    <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden">
                                        <Image
                                            src={coordinator.image}
                                            alt={coordinator.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {coordinator.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {coordinator.position}
                                    </p>
                                </div>
                            </GlareCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 