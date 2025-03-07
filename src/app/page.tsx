'use client';

import { useState, useEffect } from 'react';

interface DuckApiResponse {
  url: string;
}

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImage = async () => {
    try {
      setImageUrl('');
      setLoading(true);
      const res = await fetch('/api/duck');
      const data: DuckApiResponse = await res.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: 0,
    }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        imageUrl && (
          <img 
            src={imageUrl} 
            alt="Random Duck" 
            style={{ maxWidth: '50%', height: 'auto', borderRadius: '20px' }} 
          />
        )
      )}
      <button 
        onClick={fetchImage} 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontFamily: 'var(--font-inter)',
          fontSize: '16px',
          cursor: 'pointer',
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '5px',
          border: 'none',
          fontWeight: 'bold',
        }}
      >
        New Image
      </button>
    </div>
  );
}
