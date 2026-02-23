import React from 'react';
import { Link } from 'react-router-dom';
// Cpu icon hata diya kyunki ab logo image use kar rahe hain
import { ArrowUpRight } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  // Page ke top par scroll karne ka function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'AI in Workflow', path: '/ai-workflow' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Implementation & Usage Notes', path: '/implementation-notes' }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#F4F4F2] pt-24 pb-8 px-6 rounded-t-[4rem] mt-2">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: Big Brand Typography & Logo --- */}
        <div className="mb-20 flex flex-col items-center text-center">
          
          {/* Logo Aligned Perfectly */}
          <Link 
            to="/" 
            onClick={handleScrollToTop} 
            className="mb-8 hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={logo} 
              alt="Balaji Info Techline Logo" 
              className="h-20 md:h-28 w-auto object-contain filter drop-shadow-lg" 
            />
          </Link>

          <h2 className="text-5xl md:text-[90px] font-black tracking-tighter leading-none mb-6">
            BALAJI INFO <br className="hidden md:block" />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(244, 244, 242, 0.3)' }}>TECHLINE</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Your Business Runs on Technology. We Make Sure It Never Stops.
          </p>
        </div>

        {/* --- MIDDLE SECTION: Links & Info --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16 mb-16">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[#E9EDC9] text-xs font-black uppercase tracking-[0.3em] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    onClick={handleScrollToTop}
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-lg font-medium w-fit"
                  >
                    {link.name}
                    <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E9EDC9] text-xs font-black uppercase tracking-[0.3em] mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-white/70 text-lg">
              <li>61, Vaishno Vihar, 3rd Block C,</li>
              <li>Kokawas, Sanganer Bazar,</li>
              <li>Jaipur, Rajasthan - 302029</li>
              <li className="pt-4">
                <a href="mailto:hello@infotechbalaji.in" className="hover:text-white transition-colors">hello@infotechbalaji.in</a>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-black tracking-tight mb-2">Ready to upgrade your IT?</h4>
              <p className="text-white/50 text-sm mb-8">Schedule a free consultation with our engineers today.</p>
            </div>
            <Link 
              to="/contact"
              onClick={handleScrollToTop}
              className="bg-[#E9EDC9] text-[#1A1A1A] px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs text-center hover:bg-white transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Legal & Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm font-medium text-center md:text-left">
            &copy; 2026 Balaji Info Techline Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {legalLinks.map((link, i) => (
              <Link 
                key={i} 
                to={link.path}
                onClick={handleScrollToTop}
                className="text-white/40 hover:text-[#E9EDC9] text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;