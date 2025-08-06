import { motion, useScroll, useTransform } from "framer-motion"
import { BiChevronDown, BiDownload } from "react-icons/bi"

export default function Hero({ scrollToSection }) {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold"
                    >
                        NA
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Noman Ahmed</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8"
                    >
                        Frontend Developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
                    >
                        Crafting beautiful, responsive, and user-friendly web experiences with modern technologies
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-white font-medium rounded-lg text-sm px-6 py-2.5 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            View My Work
                        </button>
                        <button
                            className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                            onClick={() => scrollToSection("contact")}
                        >
                            <BiDownload size={20} />
                            Download CV
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <BiChevronDown className="w-6 h-6 text-slate-400" />
            </motion.div>
        </section>
    )
}