import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return { copiedField, handleCopy };
};