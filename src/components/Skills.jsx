import { motion } from "framer-motion"

const skills = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "🔺" },
    { name: "TypeScript", level: 88, icon: "📘" },
    { name: "JavaScript", level: 95, icon: "💛" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "Git", level: 90, icon: "📚" },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white border border-gray-200 text-center rounded-lg hover:shadow-lg transition-shadow">
                                <div className="p-6">
                                    <div className="text-4xl mb-4">{skill.icon}</div>
                                    <h3 className="font-semibold mb-4">{skill.name}</h3>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                                        />
                                    </div>
                                    <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}