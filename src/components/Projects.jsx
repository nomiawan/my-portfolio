import { motion } from "framer-motion"
import { BsGithub } from "react-icons/bs"
import { FaExternalLinkAlt } from "react-icons/fa"
import { projects } from "../lib/constants"

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-48 object-cover mt-5 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                        <button className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md px-3 py-1 text-sm">
                                            <BsGithub className="w-4 h-4 mr-2" />
                                            Code
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md px-3 py-1 text-sm">
                                            <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                                            Live
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="bg-black/5 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}