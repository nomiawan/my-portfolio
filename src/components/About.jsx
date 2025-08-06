import { motion } from "framer-motion"
import { BiUser } from "react-icons/bi"
import { personalInfo } from "../lib/constants"

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Background gradient card */}
                            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl"></div>

                            {/* Foreground image container */}
                            <div className="absolute inset-4 bg-white dark:bg-slate-700 rounded-xl overflow-hidden flex items-center justify-center">
                                <img
                                    className="w-full h-full object-cover rounded-xl"
                                    src="images/noman.jfif"
                                    alt="Profile"
                                />
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">{personalInfo.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {personalInfo.description}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            I stay up-to-date with the latest technologies and best practices, always looking for ways to improve my
                            skills and deliver better solutions for my clients.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Location</h4>
                                <p className="text-slate-600 dark:text-slate-300">{personalInfo.location}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Experience</h4>
                                <p className="text-slate-600 dark:text-slate-300">{personalInfo.experience}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Projects</h4>
                                <p className="text-slate-600 dark:text-slate-300">{personalInfo.projectsCompleted}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Clients</h4>
                                <p className="text-slate-600 dark:text-slate-300">{personalInfo.happyClients}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}