// EventListing.js
import React, { useState, useEffect } from 'react';
import { db } from './utils/firebaseConfig'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Upcomingevents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'users'); // Assuming 'users' is your collection name
        const querySnapshot = await getDocs(eventsCollection);
        const eventData = [];
        querySnapshot.forEach((doc) => {
          eventData.push({ id: doc.id, ...doc.data() });
        });
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='container'>
      <h1><center>UPCOMING  EVENTS</center></h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.Description}</p>
          </li>
        ))}

      </ul>
      <button>
        <Link to={"/Eventcreation"}>CREATE EVENT</Link>
        </button>
    </div>
  );
};

export default Upcomingevents;
