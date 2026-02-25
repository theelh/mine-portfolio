import React from "react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    external?: boolean;
  }[];
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const menuItems: MenuItem[] = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
        { text: "Projects", url: "/projects" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Portfolio Resources",
      links: [
        {
          text: "GitHub",
          url: "https://github.com/theelh",
          external: true,
        },
      ],
    },
    {
      title: "Social Links",
      links: [
        {
          text: "Instagram",
          url: "https://www.instagram.com/codeaurum77/",
          external: true,
        },
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/marwane-elhosni/",
          external: true,
        },
      ],
    },
  ];

  return (
    <section className={className}>
      <footer className="mx-auto w-full max-w-7xl px-6">

        {/* Top Divider */}
        <div className="flex items-center text-[#7af298] font-bold justify-between gap-3 mb-16">
          {"</"}
          <div className="h-px bg-[#505559] w-full" />
          {">"}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div>
            <img
              src="./img/logo/portfolio-logo.jpg"
              className="rounded-2xl w-40 h-40 object-cover"
              alt="Marwane Elhosni Logo"
            />
            <p className="mt-4 font-semibold text-[#e8e8e6] text-lg">
              Marwane Elhosni
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Building modern, scalable web experiences.
            </p>
          </div>

          {/* Dynamic Menu Sections */}
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-5 font-semibold text-lg text-white">
                {section.title}
              </h3>
              <ul className="space-y-3 text-[#bcb0b0]">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="transition-colors duration-200 hover:text-white hover:underline"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-[#2a2a2a] pt-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear} Marwane Elhosni. All rights reserved."
          </p>
          <p className="text-xs text-gray-500">
            Built with React + Tailwind
          </p>
        </div>

      </footer>
    </section>
  );
};

export { Footer };
