import React from 'react';
import './App.css';
import Header from './components/Header';
import RoomList from './components/RoomList';
import RoomForm from './components/RoomForm';
import RoomSchedule from './components/RoomSchedule';

function App() {
  return (
    <div className="App">
      <Header />
      <RoomList />
      <RoomForm />
      <RoomSchedule />
    </div>
  );
}

export default App;
