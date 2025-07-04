/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from 'react';
import { getDictionary } from './../dictionaries';

const WhitepaperPage = ({ params }: { params: Promise<{ lang: 'en-US' | 'de-ES' | 'de' }> }) => {
  const [dict, setDict] = useState<any>(null);
  const [currentLang, setCurrentLang] = useState<string>('en-US');

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      let langFromParams = resolvedParams.lang;

      // Handle German language variations
      if (langFromParams === 'de' || langFromParams === 'de-ES') {
        langFromParams = 'de-ES';
        setCurrentLang('de-ES');
      } else {
        setCurrentLang('en-US');
      }

      // Load the dictionary for the selected language
      const dictionary = await getDictionary(langFromParams);
      setDict(dictionary);
    };

    fetchParams();
  }, [params]);

  if (!dict) return null;

  // Use currentLang instead of dict.lang for PDF path
  const whitepaperLink = currentLang === 'de-ES' 
    ? '/de-ES/Whitepaper.pdf'  // German PDF path
    : '/en-US/Whitepaper.pdf'; // English PDF path

  return (
    <div className='pt-5 pb-10 bg-gray-100'>
      <iframe
        src={whitepaperLink}
        width="100%"
        height="800px"
        frameBorder="0"
        title="Whitepaper"
      />
    </div>
  );
};

export default WhitepaperPage;