'use client';

import { HiMail, HiPhone } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { ShimmerButton } from '../ui/shimmer-button';

export default function ContactSection() {
    const contactInfo = {
        staffPhones: [
            {
                name: "N. Vignesh (Physical Director)",
                number: "+91 77021 76414"
            },
            {
                name: "A. Santhosh (Physical Director)",
                number: "+91 99087 80670"
            },
            {
                name: "K. Kranthi Kumar (Assistant Professor)",
                number: "+91 91334 17900"
            }
        ],
        studentCoordinators: [
            {
                name: "K. Keerthana",
                position: "President",
                number: "+91 90597 43915"
            },
            {
                name: "Ch. Vamshi Krishna",
                position: "Vice President",
                number: "+91 63045 37662"
            },
            {
                name: "S. Vishishta",
                position: "Secretary",
                number: "+91 87905 40942"
            },
            {
                name: "M. Vishnu",
                position: "General Secretary",
                number: "+91 90321 03306"
            },
            {
                name: "M. Deepak",
                position: "Treasurer",
                number: "+91 70758 20301"
            }
        ],
        emails: [
            "sportsclubjbit@gmail.com"
        ],
        social: {
            instagram: "https://www.instagram.com/sportsclub_jbiet/"
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 font-rowdies mb-4">
                    CONTACT US
                </h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Email Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-900">
                                <HiMail className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-semibold">Email Us</h3>
                            </div>
                            {contactInfo.emails.map((email) => (
                                <a
                                    key={email}
                                    href={`mailto:${email}`}
                                    className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 pl-9"
                                >
                                    {email}
                                </a>
                            ))}
                        </div>

                        {/* Staff Phone Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-900">
                                <HiPhone className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-semibold">Staff Contact</h3>
                            </div>
                            {contactInfo.staffPhones.map((staff) => (
                                <div key={staff.number} className="pl-9 space-y-1">
                                    <p className="text-gray-900 font-medium">{staff.name}</p>
                                    <a
                                        href={`tel:${staff.number.replace(/\s+/g, '')}`}
                                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {staff.number}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Student Coordinators Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-900">
                                <HiPhone className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-semibold">Student Coordinators</h3>
                            </div>
                            {contactInfo.studentCoordinators.map((coordinator) => (
                                <div key={coordinator.number} className="pl-9 space-y-1">
                                    <p className="text-gray-900 font-medium">
                                        {coordinator.name} ({coordinator.position})
                                    </p>
                                    <a
                                        href={`tel:${coordinator.number.replace(/\s+/g, '')}`}
                                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {coordinator.number}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map and Social Media Section */}
                    <div className="space-y-6">
                        {/* Map Section */}
                        <div className="bg-gray-100 rounded-lg overflow-hidden h-fit">
                            <div className="w-full h-[250px] rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8474604797647!2d78.29507647489513!3d17.331374088691592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95515c784b7d%3A0x73a884f17edcfeca!2sJb%20institute%20of%20engineering%20and%20technology%20(JBIET)!5e0!3m2!1sen!2sin!4v1706799161599!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                                <p className="text-gray-600">
                                    J.B. Institute of Engineering & Technology<br />
                                    Bhaskar Nagar, Yenkapally<br />
                                    Moinabad, RR District<br />
                                    Hyderabad - 500075
                                </p>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="bg-gray-100 rounded-lg p-4">
                            <div className="flex items-center gap-3 text-gray-900 mb-4">
                                <FaInstagram className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-semibold">Follow Us</h3>
                            </div>
                            <a
                                href={contactInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <ShimmerButton>
                                    Follow on Instagram
                                </ShimmerButton>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Footer Note */}
                <div className="text-center text-gray-600 mt-16">
                    <p>© 2025 JBIET Sports Club. All rights Reserved. Developed with ❤️ by {' '}
                        <a
                            href="https://sannidhan.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        >
                            Sannidhan Katta
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
} 