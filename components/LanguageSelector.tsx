'use client'; // Add this directive to mark the component as a client component

import React from 'react';
import { useRouter } from 'next/router';
import AppRouterInstance from 'next/app';
import { NextRouter } from 'next/router';
const LanguageSelector = () => {
 
  
  const router: NextRouter = useRouter();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'bn', name: 'বাংলা' }, // Bengali
    { code: 'mr', name: 'मराठी' }  // Marathi
  ];

  return (
    <div className="absolute top-4 right-4 z-10">
      <select
        onChange={(e) => {
          router.push(router.asPath, router.asPath, { locale: e.target.value });
        }}
        value={router.locale}
        className="bg-[#F5E6D3] text-[#4A0E0E] px-4 py-2 rounded-md border-2 border-[#4A0E0E] focus:outline-none focus:ring-2 focus:ring-[#4A0E0E] appearance-none cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
