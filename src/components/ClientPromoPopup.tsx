'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Only load when we need to show it
const PromoPopup = dynamic(() => import('./PromoPopup'), {
  ssr: false,
  loading: () => null
});

export default function ClientPromoPopup() {
  const [shouldLoad, setShouldLoad] = useState(false);
  
  useEffect(() => {
    // Load popup component after a short delay on every visit
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Only render when needed
  if (!shouldLoad) {
    return null;
  }
  
  return <PromoPopup />;
} 