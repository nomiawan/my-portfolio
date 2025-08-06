import { motion } from "framer-motion"
import { BiMailSend, BiMapPin, BiPhone, BiSend } from "react-icons/bi"
import { BsGithub, BsLinkedin, BsMailbox, BsMailbox2 } from "react-icons/bs"
import { personalInfo } from "../lib/constants"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Let's work together!</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
                            discuss your next project.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                    <BiMailSend className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-slate-600 dark:text-slate-300">{personalInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                    <BiPhone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-slate-600 dark:text-slate-300">{personalInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                    <BiMapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-slate-600 dark:text-slate-300">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 pt-6">
                            <button className=" p-2 border border-gray-200 hover:bg-gray-200 duration-300 rounded-md">
                                <BsGithub className="w-5 h-5" />
                            </button>
                            <button className=" p-2 border border-gray-200 hover:bg-gray-200 duration-300 rounded-md">
                                <BsLinkedin className="w-5 h-5" />
                            </button>
                            <button className=" p-2 border border-gray-200 hover:bg-gray-200 duration-300 rounded-md">
                                <BiMailSend className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white border border-gray-200 rounded-lg">
                            <div className="p-6">
                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Name</label>
                                            <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your name" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your.email@example.com" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Subject</label>
                                        <input type="subject" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="project inquiry" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell me about your project..."></textarea>
                                    </div>
                                    <button className="flex justify-center items-center rounded-md h-[35px] text-white w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                        <BiSend className="w-4 h-4 mr-2" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}