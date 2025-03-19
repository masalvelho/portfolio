import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 22000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="fixed z-40 md:right-4 md:top-32 w-full md:w-[320px]"
      style={{
        top: 'calc(var(--subtitle-bottom) + 16rem)',
        transform: `translateX(${isVisible ? '0' : '100%'})`,
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="bg-black/50 backdrop-blur-lg border border-yellow-300/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
        
        <div className="space-y-4">
          <a 
            href="mailto:contact@example.com" 
            className="flex items-center group hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 mr-3" />
            <span className="flex-1">contact@example.com</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a 
            href="tel:+1234567890" 
            className="flex items-center group hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 mr-3" />
            <span className="flex-1">+1 (234) 567-890</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center group hover:text-white transition-colors"
          >
            <MapPin className="w-5 h-5 mr-3" />
            <span className="flex-1">Helsinki, Finland</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;