import { motion } from "framer-motion"
import { BiCode, BiGlobe, BiPalette } from "react-icons/bi"
import { CgSmartphone } from "react-icons/cg"

const services = [
    {
        icon: <BiCode className="w-8 h-8" />,
        title: "Web Development",
        description: "Custom web applications built with modern technologies and best practices",
    },
    {
        icon: <CgSmartphone className="w-8 h-8" />,
        title: "Responsive Design",
        description: "Mobile-first responsive designs that work perfectly on all devices",
    },
    {
        icon: <BiPalette className="w-8 h-8" />,
        title: "Mobile Development",
        description: "Custom mobile applications built with modern technologies and best practices",
    },
    {
        icon: <BiGlobe className="w-8 h-8" />,
        title: "Performance Optimization",
        description: "Fast-loading websites optimized for search engines and user experience",
    },
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Services</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow group">
                                <div className="px-6 py-10">
                                    <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}