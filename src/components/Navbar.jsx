import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "experience", "services", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }
    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        Portfolio
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {["home", "about", "skills", "projects", "experience", "services", "contact"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-colors hover:text-blue-600 ${activeSection === item ? "text-blue-600 font-semibold" : "text-slate-600 dark:text-slate-300"
                                        }`}
                                >
                                    {item}
                                </button>
                            ),
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700"
                    >
                        {["home", "about", "skills", "projects", "experience", "services", "contact"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left py-2 capitalize text-slate-600 dark:text-slate-300 hover:text-blue-600"
                                >
                                    {item}
                                </button>
                            ),
                        )}
                    </motion.div>
                )}
            </div>
        </nav>
    );
}