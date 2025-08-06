import { BiMailSend } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        Portfolio
                    </div>
                    <p className="text-slate-400 mb-6">
                        Thank you for visiting my portfolio. Let's create something amazing together!
                    </p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                            <BsGithub className="w-5 h-5" />
                        </button>
                        <button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                            <BsLinkedin className="w-5 h-5" />
                        </button>
                        <button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                            <BiMailSend className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="border-t border-slate-800 pt-8">
                        <p className="text-slate-400">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}