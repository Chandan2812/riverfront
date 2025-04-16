import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import logo from "../assets/logo-riverfront.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Insights",
      links: [
        { label: "Why Invest in Dubai", path: "/insights/why-invest-in-dubai" },
        { label: "About Dubai", path: "/insights/about-dubai" },
        { label: "Buyer’s Guide", path: "/insights/buyers-guide" },
        { label: "Seller’s Guide", path: "/insights/sellers-guide" },
        { label: "Relocating to Dubai", path: "/insights/relocating-to-dubai" },
        { label: "FAQ", path: "/insights/faq" },
      ],
    },
    {
      title: "Sell / Rent",
      links: [
        { label: "Sell Your Property", path: "/sell/sell-property" },
        { label: "Lease Your Property", path: "/sell/lease-property" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Interior Design", path: "/ServicesSection#interior_design" },
        { label: "Holiday Homes", path: "/ServicesSection#holiday_homes" },
        {
          label: "Conveyancing Services",
          path: "/ServicesSection#real_estate",
        },
        { label: "PRO Services", path: "/ServicesSection#pro_services" },
        {
          label: "Property Management",
          path: "/ServicesSection#property_management",
        },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Company Overview", path: "/about" },
        { label: "Awards", path: "/awards" },
      ],
    },
    {
      title: "Featured",
      links: [
        { label: "Properties For Sale", path: "/forsale" },
        { label: "Properites For Rent", path: "/forrent" },
        { label: "Off-Plan", path: "/OffplanPropertyCard" },
      ],
    },
    {
      title: "Media",
      links: [{ label: "Blogs", path: "viewblogs" }],
    },
    {
      title: "Contact Us",
      links: [
        { label: "Reach Out", path: "/contact" },
        { label: "Careers", path: "/career" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--secondary-color)] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Social Icons */}
        <div className="text-center md:text-left ">
          <img
            src={logo}
            alt=""
            className=" w-40 py-2 rounded-xl mx-auto md:mx-0"
          />
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61557679590505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/rfredubai?igsh=cm5xcXpjdXRpMW1y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="cursor-pointer" />
            </a>
          </div>

          <p className="mt-4 text-sm md:block hidden">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy & Cookies
            </a>
          </p>
          <p className="text-sm mt-2 md:block hidden">Copyright © RIVERFront</p>
        </div>

        {/* Mobile View Accordion */}
        <div className="md:hidden mt-6">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-gray-700 py-2">
              <button
                className="flex justify-between w-full text-left text-sm font-semibold"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                {openSection === section.title ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </button>
              {openSection === section.title && (
                <ul className="mt-2 text-sm space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.path} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
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
            <li>
              <Link
                to="/insights/why-invest-in-dubai"
                className="hover:underline"
              >
                Why Invest in Dubai
              </Link>
            </li>
            <li>
              <Link to="/insights/about-dubai" className="hover:underline">
                About Dubai
              </Link>
            </li>
            <li>
              <Link to="/insights/buyers-guide" className="hover:underline">
                Buyer’s Guide
              </Link>
            </li>
            <li>
              <Link to="/insights/sellers-guide" className="hover:underline">
                Seller’s Guide
              </Link>
            </li>
            <li>
              <Link
                to="/insights/relocating-to-dubai"
                className="hover:underline"
              >
                Relocating to Dubai
              </Link>
            </li>
            <li>
              <Link to="/insights/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
          <h3 className="font-semibold text-xl mb-3">Sell / Rent</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/sell/sell-property" className="hover:underline">
                Sell Your Property
              </Link>
            </li>
            <li>
              <Link to="/sell/lease-property" className="hover:underline">
                Lease Your Property
              </Link>
            </li>
          </ul>
        </div>

        {/* Services & About Us */}
        <div className="md:block hidden">
          <h3 className="font-semibold text-xl mb-3">Services</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a
                href="/ServicesSection#interior_design"
                className="hover:underline"
              >
                Interior Design
              </a>
            </li>
            <li>
              <a
                href="/ServicesSection#holiday_homes"
                className="hover:underline"
              >
                Holiday Homes
              </a>
            </li>
            <li>
              <a
                href="/ServicesSection#real_estate"
                className="hover:underline"
              >
                Conveyancing Services
              </a>
            </li>
            <li>
              <a
                href="/ServicesSection#pro_services"
                className="hover:underline"
              >
                PRO Services
              </a>
            </li>
            <li>
              <a
                href="/ServicesSection#property_management"
                className="hover:underline"
              >
                Property Management
              </a>
            </li>
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                Company Overview
              </a>
            </li>
            <li>
              <a href="/awards" className="hover:underline">
                Awards
              </a>
            </li>
          </ul>
        </div>

        {/* Featured & Contact */}
        <div className="md:block hidden">
          <h3 className="font-semibold text-xl mb-3">Featured</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a href="/forsale" className="hover:underline">
                Properties For Sale
              </a>
            </li>
            <li>
              <a href="/forrent" className="hover:underline">
                Properties For Rent
              </a>
            </li>
            <li>
              <a href="/OffplanPropertyCard" className="hover:underline">
                Off-Plan
              </a>
            </li>
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-3">Media</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a href="/viewblogs" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:underline">
                Reach Out
              </a>
            </li>
            <li>
              <a href="/career" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="md:block hidden text-center text-sm px-12 mt-10 border-t border-gray-700 pt-4">
        <p>
          RIVERFront Real Estate Broker is a company registered in Dubai. We are
          regulated by the Real Estate Regulatory Agency.
        </p>
        <p className="italic mt-2">Designed and marketed by Bigwig Digital</p>
      </div>

      <div className="md:hidden block text-center text-sm px-12 mt-4">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Privacy & Cookies
        </a>
        <p className="text-sm mt-2">Copyright © RIVERFront</p>
        <a
          href="https://bigwig-digital-one.vercel.app/"
          className="italic mt-3 cursor-pointer"
        >
          Designed and marketed by Bigwig Digital
        </a>
      </div>
    </footer>
  );
};

export default Footer;
