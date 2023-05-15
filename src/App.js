import React, { useState } from 'react';
import fetchApi from './api';
import { calculateWordFrequencies, downloadData } from './utils/processData';
import HistogramChart from './components/HistogramChart';
import './App.css';

function App() {
  const [wordArray, setWordArray] = useState('');
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchApi();
      const data = calculateWordFrequencies(response);
      setWordArray(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <h1>Word Frequency Histogram</h1>
      <button className='fetch-button' onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch Data'}
      </button>
      {wordArray ? (
        <>
          <HistogramChart data={wordArray} />
          <button
            className='fetch-button'
            onClick={downloadData(wordArray)}
            style={{ marginTop: '2rem' }}
          >
            Download CSV
          </button>
        </>
      ) : null}
    </div>
  );
}

export default App;
