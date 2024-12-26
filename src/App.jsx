import React, { useState } from 'react';

function App() {
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [ipAddress, setIpAddress] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false)

  const fetchTrendingTopics = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://patient-firefly-fun.ngrok-free.app/api/scrape', {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      const data = await response.json();
      setTrendingTopics(data);
    } catch (error) {
      console.error('Error fetching trending topics:', error);
    }
    setLoading(false);
  };

  const fetchIpAddress = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://patient-firefly-fun.ngrok-free.app/api/my-ip', {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
    setLoading(false);
  };

  const fetchDateTime = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true };
    const formattedDateTime = now.toLocaleString('en-IN', options);
    setDateTime(formattedDateTime);
  };

  const saveToDB = async () => {
    setSaving(true)
    const payload = {
      trendingTopics,
      ipAddress,
      dateTime
    };
  
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (response.ok) {
        console.log('Data saved:', result.message);
      } else {
        console.error('Error saving data:', result.message);
      }
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
    setSaving(false);
  };

  const handleClick = async () => {
    await fetchTrendingTopics();
    await fetchIpAddress();
    fetchDateTime();
    await saveToDB()
  };

  return (
    <div className="App">
      <button onClick={handleClick} disabled={loading} className="fetch-button">
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {loading && <p className="loading-text">Loading...</p>}
      <h2 className="header">Trending Topics</h2>
      <ul className="trending-list">
        {trendingTopics.map((topic, index) => (
          <li key={index} className="list-item">{topic}</li>
        ))}
      </ul>
      <h2 className="header">IP Address</h2>
      <p className="ip-address">{ipAddress}</p>
      <h2 className="header">Date and Time (IST)</h2>
      <p className="ip-address">{dateTime}</p>
      {saving && <p>Saving to database....</p>}
    </div>
  );
}

export default App;
