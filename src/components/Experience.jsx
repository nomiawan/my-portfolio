import { motion } from "framer-motion"
import { experiences } from "../lib/constants"

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            <div className="absolute left-2 top-4 w-0.5 h-full bg-slate-200 dark:bg-slate-700 last:hidden"></div>

                            <div className="py-12 px-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <span className="bg-black/5 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg">{exp.period}</span>
                                </div>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
                                <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}