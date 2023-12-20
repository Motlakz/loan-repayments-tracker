import React from 'react';

const FlashMessage = ({ flashMessage }) => {
  if (!flashMessage) {
    return null; // Don't render anything if flashMessage is null
  }

  let messageTypeClass = 'green-500'; // Default to green if message type is unknown
  if (flashMessage.type === 'success') {
    messageTypeClass = 'green-500';
  } else if (flashMessage.type === 'error') {
    messageTypeClass = 'red-500';
  } else if (flashMessage.type === 'info') {
    messageTypeClass = 'lime-500';
  }

  return (
    <div className={`fixed top-0 left-0 right-0 bg-${messageTypeClass} text-white p-4 text-center`}>
      {flashMessage.message}
    </div>
  );
};

export default FlashMessage;
