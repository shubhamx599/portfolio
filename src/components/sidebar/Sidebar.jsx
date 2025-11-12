import React, { useState } from 'react';
import { 
  RiMailLine, 
  RiPhoneLine, 
  RiMapPinLine, 
  RiArrowDownSLine,
  RiDownloadLine,
  RiCodeSSlashLine
} from '@remixicon/react';
import myAvatar from '../../assets/images/my-avatar.jpg';
import { CONTACT_INFO } from '../../constants/contact';
import { SOCIAL_LINKS } from '../../constants/social';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import ContactItem from './ContactItem';
import SocialLink from './SocialLink';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { copiedField, handleCopy } = useCopyToClipboard();

  return (
    <div className="glass-card-dark border border-white/10 w-full max-w-md mx-auto lg:max-w-none lg:w-auto lg:sticky lg:top-6">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 border-2 border-gray-900">
                <img 
                  src={myAvatar}
                  alt="Shubham Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>

          {/* Name and Title */}
          <div className="flex-1 min-w-0">
            <h1 className="text-white text-xl font-bold truncate">Shubham Kumar</h1>
            <div className="flex items-center gap-2 mt-1">
              <RiCodeSSlashLine size={14} className="text-yellow-400 shrink-0" />
              <p className="text-yellow-400 text-sm font-medium bg-black/40 px-3 py-1 rounded-full truncate">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mb-6">
          <a
            href="/Resume_Shubham_Kumar_Frontend_@shubhamx599.pdf"
            download
            className="w-full glass-card py-3 rounded-xl flex items-center justify-center gap-2 text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300 group"
          >
            <RiDownloadLine size={16} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold">Download Resume</span>
          </a>
        </div>

        {/* Mobile Expand Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden w-full glass-card py-2 rounded-xl flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300 mb-4 group"
        >
          <RiArrowDownSLine size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} group-hover:scale-110`} />
          <span className="text-sm font-medium ml-2">
            {isExpanded ? 'Hide Contacts' : 'Show Contacts'}
          </span>
        </button>

        {/* Contact Information */}
        <div className={`space-y-3 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
          <ContactItem 
            icon={<RiMailLine size={18} />} 
            title="Email" 
            value={CONTACT_INFO.email}
            href={`mailto:${CONTACT_INFO.email}`}
            onCopy={() => handleCopy(CONTACT_INFO.email, "email")}
            isCopied={copiedField === "email"}
          />
          <ContactItem 
            icon={<RiPhoneLine size={18} />} 
            title="Phone" 
            value={CONTACT_INFO.phone}
            href={`tel:${CONTACT_INFO.phone}`}
            onCopy={() => handleCopy(CONTACT_INFO.phone, "phone")}
            isCopied={copiedField === "phone"}
          />
          <ContactItem 
            icon={<RiMapPinLine size={18} />} 
            title="Location" 
            value={CONTACT_INFO.location}
            onCopy={() => handleCopy(CONTACT_INFO.location, "location")}
            isCopied={copiedField === "location"}
          />

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-gray-400 text-xs uppercase font-medium mb-3 text-center">Connect With Me</p>
            <div className="flex justify-center space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <SocialLink 
                  key={social.name}
                  href={social.href}
                  name={social.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;