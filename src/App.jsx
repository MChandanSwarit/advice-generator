import { useEffect, useState } from 'react';
import Card from './Card';

const App = () => {
  const [advice, setAdvice] = useState({ adviceNumber: null, adviceText: '' });
  const [loading, setLoading] = useState(true);
  const [showCard, setShowCard] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    setShowCard(false);

    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice({ adviceNumber: data.slip.id, adviceText: data.slip.advice });
    } catch (error) {
      console.error('Error fetching advice:', error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowCard(true);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="bg-dark-blue flex items-center justify-center h-screen">
      {loading || !showCard ? (
        <p className="text-light-cyan font-bold">Loading advice...</p>
      ) : (
        <Card
          adviceNumber={advice.adviceNumber}
          adviceText={advice.adviceText}
          fetchAdvice={fetchAdvice} // Pass fetchAdvice to Card
        />
      )}
    </main>
  );
};

export default App;
