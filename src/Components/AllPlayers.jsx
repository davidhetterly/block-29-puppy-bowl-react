/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function AllPlayers({ APIURL }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 

  async function handleClick(playerId) {
    try {
      const response = await fetch(`${APIURL}players/${playerId}/`, {
        method: 'DELETE'
      });
      const result = await response.json();
      // Assuming the deletion was successful, update the players list in the state
      setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
    } catch (error) {
      console.log(error);
    }
  }
        
  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        setPlayers(result.data.players);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchAllPlayers();
  }, [APIURL]); 

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List of Players</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search players..."
        value={search}
        onChange={handleSearchChange}
      />
      {filteredPlayers.length === 0 ? (
        <p>No players found.</p>
      ) : (
        
        <div className= "allPlayersContainer">
          {filteredPlayers.map((player) => (
            <div className="playerCard" key={player.id}>
                <p>{player.name}</p>
                <img 
                src={player.imageUrl} 
                alt={player.name} 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src="https://i.etsystatic.com/8104547/r/il/e80dec/995392536/il_570xN.995392536_3r85.jpg";
                }}
                />
              
              <div className= "button-container">
              <button className= "detailsButton" onClick={() => navigate(`/players/${player.id}`)}>Details</button>
              <button className="removeButton" onClick={() => handleClick(player.id)}>Remove Player</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}