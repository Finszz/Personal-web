import React from 'react';

export default function AboutPage() {
    return (
        <div id="about" className="bg-gray-300 text-gray-800 px-6 py-12 sm:py-16">
            <div className="max-w-5xl mx-auto pt-20 md:pt-64 space-y-10">

                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">About Me</h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Get to know me better — who I am, what I do, and what Im really like about.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <img
                        src="/mylegofoto.jpeg"
                        alt="Profile"
                        className="w-38 h-38 rounded-full border-3 black"
                    />
                    <div className="text-base sm:text-lg leading-relaxed text-gray-700">
                        <p>
                            Hi! Iam <strong>Irfan Akbar</strong>, a web developer focused on building career, responsive, and
                            user-friendly interfaces using modern programs like <span className="text-green-400 shadow font-medium">React.js</span> and <span className="text-green-400 shadow font-medium">Tailwind CSS</span> based on what clients wishes.
                        </p>
                        <p className="mt-4">
                            I love learning new things, solving any problems, and contributing to event projects.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl mt-10 font-semibold text-blue-600 mb-4">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm sm:text-base">
                    {['React.js', 'Tailwind CSS', 'JavaScript/Typescript', 'Figma', 'Deutsch (C1)', 'English (C1)'].map((skill) => (
                        <span
                            key={skill}
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-center shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Experience</h3>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>Full-stack Web Developer</strong> – Purwadhika (Agustus, 2025)
                        <p className="text-sm text-white">Web Developer Bootcamp</p>
                    </li>
                    <li>
                        <strong>Computer Science Student</strong> – Queen&apos;s University of Belfast (now)
                        <p className="text-sm text-white">Currently learning Computer Science</p>
                    </li>
                </ul>
            </div>
        </div>

    );
}