
import React, { useState } from 'react';
import { db } from './utils/firebaseConfig'; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


const Eventcreation = () => {

  const navigate =useNavigate()
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');;
  const [location, setLocation] = useState('');
  const [Description, setDescription] = useState('');

  const handleAddEvent = async() => {
    const docRef = await addDoc(collection(db, "users"),{
      title,
      date,
      time,
      location,
      Description,
    })
    .then(() => {
      // Event added successfully
      console.log('Event added to Firestore!');
      navigate("/Upcomingevents")
      
      // Optionally, reset form fields
      setTitle('');
      setDate('');
      setTime('');
      setLocation('');
      setDescription('');
    })
    .catch((error) => {
      // Handle error
      console.error('Error adding event:', error);
    });
  };

  return (
    <div className='container'>
    <div className="sub-container">
    
    <div>
      <h2><center>Create Event</center></h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <input
        type="text"
        placeholder="Description"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
    </div>
    </div>
  );
};

export default Eventcreation;
