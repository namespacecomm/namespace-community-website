import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import {
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsGithub,
  BsTwitterX,
  BsWhatsapp,
  BsDiscord,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: <BsInstagram className="w-5 h-5" />,
      href: "http://instagram.com/namespacecomm",
      label: "Instagram",
    },
    {
      icon: <BsLinkedin className="w-5 h-5" />,
      href: "http://www.linkedin.com/company/namespacecomm/",
      label: "LinkedIn",
    },
    {
      icon: <BsYoutube className="w-5 h-5" />,
      href: "https://www.youtube.com/@namespacecomm",
      label: "YouTube",
    },
    {
      icon: <BsGithub className="w-5 h-5" />,
      href: "https://github.com/namespacecomm",
      label: "GitHub",
    },
    {
      icon: <BsTwitterX className="w-5 h-5" />,
      href: "https://twitter.com/namespacecomm",
      label: "Twitter",
    },
    {
      icon: <BsWhatsapp className="w-5 h-5" />,
      href: "https://whatsapp.com/channel/0029VabtgrVKLaHjzSXEL52f",
      label: "WhatsApp",
    },
    {
      icon: <BsDiscord className="w-5 h-5" />,
      href: "https://discord.gg/z2fTnXjKMm",
      label: "Discord",
    },
    {
      icon: <BsTelegram className="w-5 h-5" />,
      href: "https://t.me/namespacecomm",
      label: "Telegram",
    },
  ];

  const quickLinks = [
    { text: "Partner with us", href: "#" },
    { text: "Brand Guidelines", href: "#" },
    { text: "Code of Conduct", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ];

  return (
    <footer
      className={`bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section - Logo, Description, and Social Links */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                NAMESPACE
              </h3>
              <p className="text-gray-300">
                Made with
                <span className="inline-block mx-1 animate-pulse">❤️</span>
                by{" "}
                <a
                  href="https://github.com/namespacecomm/namespace-community-website"
                  className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Team NAMESPACE
                </a>
              </p>
            </div>

            {/* Email Section */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Write to us</h4>
              <a
                href="mailto:contact@namespacecomm.in"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contact@namespacecomm.in</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Follow us on</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-all duration-300 hover:text-pink-400"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-4 lg:ml-12">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Tagline */}
          <div className="flex flex-col justify-between text-center space-y-4">
            <div className="">
              <h2 className="text-2xl md:text-3xl md:text-right font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Building India's largest tech community
              </h2>
              <p className="text-lg md:text-xl md:text-right text-gray-300 mt-2 italic">
                One event at a time
              </p>
            </div>

            <div className="">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold md:text-right">
                    Join Our Newsletter
                  </h4>
                  <p className="text-gray-300 text-sm md:text-right">
                    Join 16,000+ readers for weekly tech updates
                  </p>
                </div>

                <div className="md:text-right">
                  <a
                    href="https://namespacecomm.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {year} The NAMESPACE Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
