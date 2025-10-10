import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { contactDetails } from '../../data/portfolioData';

const Footer = () => (
  <footer className="mt-16 border-t border-[#22397120] bg-[#0f1a38]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-300">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Let's connect</h3>
          <p className="mt-2 text-gray-300">
            I love collaborating on robotics, mechatronics and control projects. Reach out anytime!
          </p>
        </div>

        <div className="space-y-3">
          <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 hover:text-[#CC1E4A] transition-colors">
            <Mail className="w-4 h-4" />
            <span>{contactDetails.email}</span>
          </a>
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-[#CC1E4A] transition-colors">
            <Phone className="w-4 h-4" />
            <span>{contactDetails.phone}</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4" />
            <span>{contactDetails.location}</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#CC1E4A] transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#CC1E4A] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} Jagriti Jain. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default Footer;