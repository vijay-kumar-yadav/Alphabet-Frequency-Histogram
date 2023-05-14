import React, { useState } from 'react';
import fetchApi from './api';
import { calculateWordFrequencies } from './utils/processData';
import HistogramChart from './components/HistogramChart';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchApi();
      const data =  calculateWordFrequencies(response)
      setData(data.slice(0, 20));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Word Frequency Histogram</h1>
      <button 
        className="fetch-button"
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Fetch Data'}
      </button>
      {
        data ? <HistogramChart data={data} /> : null
      }
    </div>
  );
}

export default App;
