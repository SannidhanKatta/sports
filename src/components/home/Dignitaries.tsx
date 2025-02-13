'use client';

import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import Link from "next/link";

const dignitaries = [
    {
        name: "Sri J.V. Krishna Rao",
        position: "Secretary JBES",
        image: "/jv sir.jpg",
        link: "https://www.jbiet.edu.in/category.php?mnlnks=12&catid=99"
    },
    {
        name: "Dr. P. C. Krishnamachary",
        position: "Principal JBIET",
        image: "/p.jpg",
        link: "https://www.jbiet.edu.in/category.php?mnlnks=12&catid=31"
    },
    {
        name: "Mr. N. Vignesh",
        position: "Physical Director",
        image: "/v.jpg",
        link: "https://www.jbiet.edu.in/category.php?mnlnks=8&catid=105"
    },
    {
        name: "Mr. A. Santhosh",
        position: "Physical Director",
        image: "/s.jpg",
        link: "https://www.jbiet.edu.in/category.php?mnlnks=8&catid=105"
    },
    {
        name: "Mr. K. Kranthi Kumar",
        position: "Sports Assistant",
        image: "/Kran.jpg",
        link: "https://www.jbiet.edu.in/category.php?mnlnks=8&catid=105"
    }
];

export default function DignitariesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 font-rowdies mb-4">
                    PILLARS OF STRENGTH
                </h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {dignitaries.map((dignitary) => (
                        <Link href={dignitary.link} key={dignitary.name}>
                            <GlareCard className="relative cursor-pointer">
                                <div className="p-4 flex flex-col items-center">
                                    <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden">
                                        <Image
                                            src={dignitary.image}
                                            alt={dignitary.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {dignitary.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {dignitary.position}
                                    </p>
                                    <div className="px-3 py-1 bg-blue-600 text-xs text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                                        Know More
                                    </div>
                                </div>
                            </GlareCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 