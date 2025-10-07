export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Nome */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-white">Gabriel Yamakishi</h1>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-center md:text-left">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yourname@email.com"
            className="hover:text-white transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Gabriel Yamakishi. All rights reserved.
      </div>
    </footer>
  );
}
