import React from 'react';

export function ActionButtons() {
  const handleChatClick = () => {
    // TODO: Implement chat functionality
    console.log('Open chat');
  };

  return (
    <button
      onClick={handleChatClick}
      className="text-[10px] text-black hover:text-gray-700 transition-colors"
    >
      Chat
    </button>
  );
}