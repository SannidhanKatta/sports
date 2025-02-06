'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useState } from "react";

const sportsEvents = [
    {
        title: "Nationals",
        image: "/Nat-Card.jpg",
        description: "Celebrating excellence in national-level sports competitions. Our students have represented and brought laurels in various national championships.",
        link: "/events/nationals",
        hasBrochure: false
    },
    {
        title: "Achievements",
        image: "/Ach-card.jpg",
        description: "Showcasing our students' remarkable accomplishments in various sports competitions, from state-level tournaments to national championships.",
        link: "/events/achievements",
        hasBrochure: false
    },
    {
        title: "AARAMBH 25",
        image: "/Aar-card.png",
        description: "JBIET's flagship sports festival that brings together athletic talent from across colleges, fostering competition and sportsmanship.",
        link: "https://google.com",
        hasBrochure: true,
        brochureLink: "/aarambh -brochure.png"
    },
    {
        title: "BHASKAR MEMORIAL CUP - 2025",
        image: "/JBcup-card.jpg",
        description: "An inter-institute sports championship where JBIET Group institutions compete in various sports disciplines for the prestigious JB Cup.",
        link: "https://google.com",
        hasBrochure: true,
        brochureLink: "/JB cup- Brochure.png"
    }
];

const EventCard = ({ event }: { event: typeof sportsEvents[0] }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 h-full border border-gray-200">
        <div className="relative h-48">
            <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {event.title}
            </h3>
            <p className="text-gray-600 mb-6">
                {event.description}
            </p>
            <div className="flex justify-between items-center">
                <Link href={event.link}>
                    {event.title.includes("AARAMBH") || event.title.includes("BHASKAR MEMORIAL") ? (
                        <ShimmerButton>
                            Register Now
                        </ShimmerButton>
                    ) : (
                        <ShimmerButton>
                            View Gallery
                        </ShimmerButton>
                    )}
                </Link>
                {event.hasBrochure && (
                    <Link href={event.brochureLink} target="_blank">
                        <ShimmerButton className="bg-emerald-600 hover:bg-emerald-700">
                            View Brochure
                        </ShimmerButton>
                    </Link>
                )}
            </div>
        </div>
    </div>
);

export default function EventsShowcaseSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="events-section" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 font-rowdies">
                    SPORTS EVENTS
                </h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>

                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {sportsEvents.map((event) => (
                        <EventCard key={event.title} event={event} />
                    ))}
                </div>

                {/* Mobile View with Swiper */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'inline-block w-3 h-3 rounded-full bg-gray-400 mx-1 cursor-pointer transition-colors duration-200',
                            bulletActiveClass: 'bg-blue-600',
                            renderBullet: (index, className) => {
                                const isActive = index === activeIndex;
                                return `<span class="${className} ${isActive ? 'bg-blue-600' : 'bg-gray-400'}"></span>`;
                            },
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="pb-16"
                    >
                        {sportsEvents.map((event) => (
                            <SwiperSlide key={event.title} className="pb-8">
                                <EventCard event={event} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
} 