import React from 'react';

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  textToCopy,
}) => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <button
      className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-1 px-2 text-sm rounded"
      onClick={handleCopyClick}
    >
      Copy
    </button>
  );
};

export default CopyToClipboardButton;
