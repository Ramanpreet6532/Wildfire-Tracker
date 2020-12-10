import './App.css';
import Map from './components/Map';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Loader from "../src/components/Loader"

function App() {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
    console.log({ eventData })

  }, [])

  return (
    <div>

      { !loading ? <>
        <Header />
        <Map eventData={eventData} />
      </> : <Loader />}
    </div>
  );
}

export default App;
