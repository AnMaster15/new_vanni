'use client'
import React, { useState } from 'react';
import { Mic, Headphones, Globe, VolumeX, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TextToAudioConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('Hindi');
  const [targetLanguage, setTargetLanguage] = useState('English (United States)');
  const [voice, setVoice] = useState('Female, age 30');

  const handleConvert = () => {
    // Implement conversion logic here
    console.log('Converting:', { text, sourceLanguage, targetLanguage, voice });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-red-100 px-6 py-12 md:px-40 flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl w-full border-4 border-yellow-500">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-red-700">
            Text to Audio Converter
          </h1>
          <Link href="/audio-translate" className="inline-flex items-center text-red-700 hover:text-red-800">
            Go to Audio to Text
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
        <p className="text-lg text-orange-700 mb-8 text-center">Bring your words to life</p>
        
        <div className="mb-8">
          <label className="block text-orange-800 text-lg font-semibold mb-3">
            Enter your text
          </label>
          <textarea
            className="w-full p-4 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition duration-200 resize-none h-44 placeholder-gray-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard 
            icon={<Globe size={24} />} 
            title="Source Language" 
            description={
              <select 
                className="w-full p-3 border border-orange-300 rounded-md text-orange-800 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
              >
                <option>Hindi</option>
                <option>English</option>
                <option>Tamil</option>
                <option>Bengali</option>
              </select>
            } 
          />
          <InfoCard 
            icon={<Globe size={24} />} 
            title="Target Language" 
            description={
              <select 
                className="w-full p-3 border border-orange-300 rounded-md text-orange-800 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                <option>English (United States)</option>
                <option>Hindi (India)</option>
                <option>Tamil (India)</option>
                <option>Bengali (India)</option>
              </select>
            } 
          />
          <InfoCard 
            icon={<VolumeX size={24} />} 
            title="Voice" 
            description={
              <select 
                className="w-full p-3 border border-orange-300 rounded-md text-orange-800 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
              >
                <option>Female, age 30</option>
                <option>Male, age 40</option>
                <option>Neutral, age 25</option>
              </select>
            } 
          />
        </div>

        <div className="flex justify-center mb-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-yellow-100 font-semibold py-3 px-8 rounded-full transition duration-200 flex items-center shadow-lg"
            onClick={handleConvert}
          >
            Convert to Audio <Headphones className="ml-3" size={20} />
          </button>
        </div>

        <div className="text-center text-orange-700">
          <button className="flex items-center justify-center mx-auto text-red-600 hover:text-red-700 transition duration-200 font-semibold">
            <Mic className="mr-2" size={20} />
            Or record your voice
          </button>
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-orange-400 bg-orange-50 p-5 transition duration-200 hover:border-orange-500 hover:bg-orange-100 shadow-sm">
    <div className="text-red-600">{icon}</div>
    <h2 className="text-orange-800 text-lg font-semibold text-center">{title}</h2>
    <div className="w-full text-orange-700 text-sm text-center">{description}</div>
  </div>
);

export default TextToAudioConverter;