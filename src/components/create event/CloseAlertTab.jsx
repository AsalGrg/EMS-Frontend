import React, { useEffect, useRef } from 'react';

const CloseAlertTab = ({ setDirty }) => {
  const isDirty = useRef(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty.current) {
        // Prompt the user with a confirmation message only if there are unsaved changes
        event.preventDefault();
        // Chrome requires returnValue to be set
        event.returnValue = '';

        // Prompt the user with a confirmation message
        const message = 'Are you sure you want to leave?';
        event.returnValue = message; // For some browsers
        return message; // For other browsers
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  const handleSaveDraft = () => {
    // Your save draft logic here
    console.log('Draft saved');
    isDirty.current = false; // Reset dirty flag after saving
  };

  const handleDiscard = () => {
    // Your discard logic here
    console.log('Changes discarded');
    isDirty.current = false; // Reset dirty flag after discarding
  };

  const handleInputChange = () => {
    // Set dirty flag when there are changes
    isDirty.current = true;
    setDirty(); // Call the function passed from the parent component
  };

  return (
    <div>
      <p>Close Tab Alert Component</p>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSaveDraft}>Save Draft</button>
      <button onClick={handleDiscard}>Discard</button>
    </div>
  );
};

export default CloseAlertTab;
