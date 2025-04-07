import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            title: "Insights",
            links: [
                "Why Invest in Dubai",
                "About Dubai",
                "Buyer’s Guide",
                "Seller’s Guide",
                "Relocating to Dubai",
                "Area Guide",
                "Floor Plans",
                "FAQ"
            ]
        },
        {
            title: "Sell / Rent",
            links: ["Sell Your Property", "Lease Your Property"]
        },
        {
            title: "Services",
            links: ["Interior Design", "Conveyancing Services", "PRO Services", "Property Management"]
        },
        {
            title: "About Us",
            links: ["Company Overview", "Message from CEO", "Message from Partner", "Awards"]
        },
        {
            title: "Featured",
            links: ["Off-Plan", "Resale", "Rental", "Communities", "Developers"]
        },
        {
            title: "Media",
            links: ["Blogs"]
        },
        {
            title: "Contact Us",
            links: ["Reach Out", "Careers"]
        }
    ];

    return (
        <footer className="bg-[var(--secondary-color)] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Social Icons */}
                <div className="text-center md:text-left">
                    <h1 className="text-9xl font-serif italic">U.</h1>
                    <div className="flex justify-center md:justify-start gap-4 mt-4 text-lg">
                        <FaFacebookF className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedinIn className="cursor-pointer" />
                        <FaTiktok className="cursor-pointer" />
                        <FaYoutube className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                    </div>
                    <p className="mt-4 text-sm md:block hidden">
                        <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy & Cookies</a>
                    </p>
                    <p className="text-sm mt-2 md:block hidden">Copyright © Unique Properties</p>
                </div>

                {/* Mobile View Accordion */}
                <div className="md:hidden mt-6">
                    {sections.map((section) => (
                        <div key={section.title} className="border-b border-gray-700 py-2">
                            <button className="flex justify-between w-full text-left text-sm font-semibold" onClick={() => toggleSection(section.title)}>
                                {section.title}
                                {openSection === section.title ? <MdExpandLess /> : <MdExpandMore />}
                            </button>
                            {openSection === section.title && (
                                <ul className="mt-2 text-sm space-y-2">
                                    {section.links.map((link, index) => (
                                        <li key={index}><a href="#" className="hover:underline">{link}</a></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop View Sections */}
                 {/* Insights */}
        <div className="md:block hidden">
          <h3 className="font-semibold text-xl mb-3">Insights</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:underline">Why Invest in Dubai</a></li>
            <li><a href="#" className="hover:underline">About Dubai</a></li>
            <li><a href="#" className="hover:underline">Buyer’s Guide</a></li>
            <li><a href="#" className="hover:underline">Seller’s Guide</a></li>
            <li><a href="#" className="hover:underline">Relocating to Dubai</a></li>
            <li><a href="#" className="hover:underline">Area Guide</a></li>
            <li><a href="#" className="hover:underline">Floor Plans</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
          <h3 className="font-semibold text-xl mb-3">Sell / Rent</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Sell Your Property</a></li>
            <li><a href="#" className="hover:underline">Lease Your Property</a></li>
          </ul>
        </div>

        
        {/* Services & About Us */}
        <div className="md:block hidden">
          <h3 className="font-semibold text-xl mb-3">Services</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:underline">Interior Design</a></li>
            <li><a href="#" className="hover:underline">Conveyancing Services</a></li>
            <li><a href="#" className="hover:underline">PRO Services</a></li>
            <li><a href="#" className="hover:underline">Property Management</a></li>
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Company Overview</a></li>
            <li><a href="#" className="hover:underline">Message from CEO</a></li>
            <li><a href="#" className="hover:underline">Message from Partner</a></li>
            <li><a href="#" className="hover:underline">Awards</a></li>
          </ul>
        </div>
        
        {/* Featured & Contact */}
        <div className="md:block hidden">
          <h3 className="font-semibold text-xl mb-3">Featured</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:underline">Off-Plan</a></li>
            <li><a href="#" className="hover:underline">Resale</a></li>
            <li><a href="#" className="hover:underline">Rental</a></li>
            <li><a href="#" className="hover:underline">Communities</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-3">Media</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Reach Out</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
      
            </div>

            {/* Bottom Text */}
            <div className="md:block hidden text-center text-sm px-12 mt-10 border-t border-gray-700 pt-4">
                <p>Unique Properties Real Estate Broker is a company registered in Dubai, United Arab Emirates (License No. 605653), The Bay Gate Tower, 31st Floor, Business Bay, Dubai, PO Box 191630. We are regulated by the Real Estate Regulatory Agency under office number 1085.</p>
            </div>
            <div className="md:hidden block text-center text-sm px-12 mt-4">
                <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy & Cookies</a>
                <p className="text-sm mt-2">Copyright © Unique Properties</p>
            </div>
        </footer>
    );
};

export default Footer;
