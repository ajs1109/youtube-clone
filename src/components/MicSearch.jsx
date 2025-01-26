import { Mic } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MicSearch = () => {
  const navigate = useNavigate();

  const startVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log('Voice recognition started');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        navigate(`/search/${transcript}`);
      };

      recognition.onerror = (event) => {
        console.error('Voice recognition error', event.error);
      };

      recognition.start();
    } else {
      alert('Speech recognition not supported');
    }
  };

  return (
    <button 
      onClick={startVoiceSearch} 
      className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
    >
      <Mic />
    </button>
  );
};

export default MicSearch;