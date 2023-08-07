/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import './NavBar.css'
import './AllPlayers.css'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './Components/AllPlayers'
import NavBar from './Components/NavBar'
import SinglePlayer from './Components/SinglePlayer'
import NewPlayerForm from './Components/NewPlayerForm'



export default function App() {
  const cohortName = '2302-ACC-PT-WEB-PT-C';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/players" element={<AllPlayers APIURL={APIURL} />} />
        <Route path="/players/:id" element={<SinglePlayer APIURL={APIURL} />} />
        <Route path="/newPlayer" element={<NewPlayerForm APIURL={APIURL} />} />
      </Routes>
    </>
  )
}