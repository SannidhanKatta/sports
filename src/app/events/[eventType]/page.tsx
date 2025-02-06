'use client';

import Image from "next/image";
import { useParams } from "next/navigation";
import { FocusCards } from "@/components/ui/focus-cards";

const eventData = {
    nationals: {
        title: "Nationals Gallery",
        description: "Our achievements and moments from National level competitions",
        images: [
            {
                url: "/Nat-1.jpg",
                caption: "P. BHASKER – 22675A0101 –B. TECH – CIVIL – 4/4 Participated CHESS (Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-2.png",
                caption: "K. HARSHAVARDHAN – 21671A7318 –B. TECH – AI&ML – 4/4 Participated VOLLEYBALL (Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-3.png",
                caption: "P. CHANDRA VAMSHI– 21671A1925 –B. TECH - ECM – 4/4 Participated WRESTLING (Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-4.jpg",
                caption: "V. SANTHOSH– 24675A0311 –B. TECH - MEC – 2/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-5.png",
                caption: "P. VAISHNAVI – 22671A1934 –B. TECH - ECM - III/IV Participated KABADDI (Women)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-6.jpg",
                caption: "V. RUCHITHA – 22671A0455 –B. TECH - ECE - III/IV Participated TENNIS (Women)got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-7.jpg",
                caption: "G. HARSHA VARDHAN- 21671A7318 - B TECH – AI&ML- 3/4 Participated in VOLLEYBALL (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-8.jpg",
                caption: "RATHOD VASANTH - 20671A0466 – B TECH - CSE-3/4 Participated in BASEBALL(Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-9.png",
                caption: "RATHOD BANTHILAL - 20671A0466 – B TECH - ECE-4/4 Participated in BASEBALL(Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-10.jpg",
                caption: "B. UDBHAV ROY- 20671A0203 - B TECH - EEE- 4/4 Participated in KABADDI (Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-11.png",
                caption: "K. KEERTHANA - 21671A7220-AI&DS -3/4, Selected for 47th Senior National Throwball Championship-2024., Telangana State Throwball Association, Hyderabad."
            },
            {
                url: "/Nat-12.png",
                caption: "B. SRAVAN KUMAR – 18671A0150 -  CIVIL- 4/4 Participated in VOLLEYBALL(Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-13.jpg",
                caption: "K. VINOD– 20671A0117 -  CIVIL- 3/4 Participated in HOCKEY(Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
            {
                url: "/Nat-14.jpg",
                caption: "CH. SUBHASH – 20675A0118 -  CIVIL- 4/4 Participated in NETBALL(Men)  got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD."
            },
        ]
    },
    // aarambh: {
    //     title: "Aarambh Sports Fest Gallery",
    //     description: "Highlights from JBIET's premier sports festival",
    //     images: [
    //         "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",  // Football
    //         "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070",  // Basketball
    //         "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070",  // Stadium
    //         "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070",  // Athletics
    //         "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",  // Team huddle
    //         "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070",     // Sports equipment
    //         "https://images.unsplash.com/photo-1515523110019-9fc706046360?q=80&w=2070",  // Running
    //         "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=2070",  // Volleyball
    //         "https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?q=80&w=2070"   // Trophy
    //     ]
    // },
    // "jb-cup": {
    //     title: "JB Cup Gallery",
    //     description: "Inter-institute championship moments",
    //     images: [
    //         "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070",  // Athletics
    //         "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",  // Football
    //         "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070",  // Stadium
    //         "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070",  // Basketball
    //         "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",  // Team huddle
    //         "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070",     // Sports equipment
    //         "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070",     // Medal ceremony
    //         "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2070",  // Trophy celebration
    //         "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=2070"   // Team celebration
    //     ]
    // },
    achievements: {
        title: "Achievements Gallery",
        description: "Celebrating our champions and their victories",
        images: [
            {
                url: "/ach-1.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-2.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-3.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-4.jpg",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-5.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-6.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-7.jpg",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-8.jpg",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-9.jpg",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-10.jpg",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-11.jpg",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-12.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-13.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            {
                url: "/ach-14.png",
                // caption: "P. CHANDRA VAMSHI - 21671A1925 - B.TECH ECM - 4/4 Participated WRESTLING (Men) got Selected to the Nationals for Team Player in JNT UNIVERSITY HYDERABAD.",
                year: "2024"
            },
            // ... more achievements with detailed captions
        ]
    }
};

export default function EventGalleryPage() {
    const params = useParams();
    const eventType = params.eventType as string;
    const event = eventData[eventType as keyof typeof eventData];

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-900 font-rowdies mb-4">
                    {event.title}
                </h1>
                <p className="text-gray-600 text-center mb-12">{event.description}</p>

                <FocusCards items={event.images} />
            </div>
        </div>
    );
} 