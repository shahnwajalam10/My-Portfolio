import { Github, Linkedin, Mail } from "lucide-react";

const  Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-8 bg-white border-t-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-black font-bold uppercase tracking-wide">
          &copy; {new Date().getFullYear()} Shahnwaj alam. All Rights Reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <a
            href="https://github.com/shahnwajalam10"
            className="flex items-center justify-center w-12 h-12 bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6 text-black group-hover:scale-110 transition-transform duration-200" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
            className="flex items-center justify-center w-12 h-12 bg-blue-400 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6 text-black group-hover:scale-110 transition-transform duration-200" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:shahnwajalam10@gmail.com"
            className="flex items-center justify-center w-12 h-12 bg-green-400 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
            aria-label="Email Address"
          >
            <Mail className="h-6 w-6 text-black group-hover:scale-110 transition-transform duration-200" />
            <span className="sr-only">Email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}


export default Footer;