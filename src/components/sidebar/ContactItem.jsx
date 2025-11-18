import React from "react";
import { RiFileCopyLine } from "@remixicon/react";

const ContactItem = ({ icon, title, value, href, onCopy, isCopied }) => {
  return (
    <div className="hover:bg-white/5 flex items-start gap-3 p-3 rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center text-yellow-400 shrink-0">
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-xs uppercase font-medium mb-1">
          {title}
        </p>
        <div className="flex items-center justify-between gap-3">
          {href ? (
            <a
              href={href}
              className="text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-300 break-all"
            >
              {value}
            </a>
          ) : (
            <span className="text-white text-sm font-medium break-all">
              {value}
            </span>
          )}

          <button
            onClick={onCopy}
            className={`p-1 rounded transition-colors duration-200 shrink-0 ${
              isCopied
                ? "text-green-400"
                : "text-gray-500 hover:text-yellow-400"
            }`}
            aria-label={`Copy ${title}`}
          >
            <RiFileCopyLine size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
