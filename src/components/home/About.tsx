'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3">
                        <Image
                            src="/logo.jpg"
                            alt="JBIET Sports Logo"
                            width={400}
                            height={400}
                            className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] mx-auto lg:w-full lg:h-auto"
                        />
                    </div>

                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-1 w-20 bg-blue-600"></div>
                            <h2 className="text-4xl font-bold text-gray-900 font-rowdies">
                                ABOUT US
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                The significance of sports and games as an essential part of the curriculum, emphasizing their role in shaping both mental and physical capabilities. Engaging in sports helps individuals face various challenges, fostering mental strength, confidence, team spirit, leadership qualities, and a sense of responsibility.
                            </p>
                            <p>
                                At JBIET, we believe in nurturing not just academic excellence but also physical prowess. Our sports facilities and dedicated coaching staff ensure that students have every opportunity to excel in their chosen sports disciplines.
                            </p>
                            <p>
                                The Sports Club at JBIET organizes various inter-college and intra-college tournaments throughout the academic year, providing platforms for students to showcase their talents and compete at different levels.
                            </p>
                        </div>

                        <Link
                            href="#"
                            className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 