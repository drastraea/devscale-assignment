"use client";

import SideNav from "@/components/SideNav";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main>
            <SideNav />
            <div className="home-content">
                <h1>About Me</h1>
                <p>
                    Hi, I&rsquo;m Samuel Sitorus, also known as &rdquo;dras&rdquo; and
                    &rdquo;mayicu&rdquo;.
                </p>
                <p>
                    I&rsquo;m a self-employed web-app developer, primarily using the PHP
                    framework CodeIgniter in my previous projects.
                </p>
                <div className="flex gap-4 mt-4 mb-6">
                    <motion.a
                        href="https://github.com/drastraea"
                        className="py-2 px-3 rounded-md bg-slate-700 text-white hover:bg-slate-950 hover:text-slate-300 transition-colors duration-200"
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        Github
                    </motion.a>
                    <motion.a
                        href="https://mayicu.id/"
                        className="py-2 px-3 rounded-md bg-slate-700 text-white hover:bg-slate-950 hover:text-slate-300 transition-colors duration-200"
                        whileHover={{ rotate: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        My Page
                    </motion.a>
                </div>
                <h1>About This Site</h1>
                <p>
                    This web app is built with Next.js, featuring a minimalist design. For
                    styling, I used Tailwind CSS, PrismJS, Typography, and Aspect Ratio.
                    The backend is powered by Appbackend as a demo database. The site is
                    open source.
                </p>
            </div>
        </main>
    );
}
