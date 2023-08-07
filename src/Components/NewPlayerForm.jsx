/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreedImage from "./BreedImage";

export default function NewPlayerForm({ APIURL }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [teamId, setTeamId] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const newPlayer = { name, breed, status, imageUrl, teamId };

    if (status !== "bench" && status !== "field") {
      delete newPlayer.status;
    }
    if (imageUrl === "") {
      delete newPlayer.imageUrl;
    }
    if (teamId === "") {
      delete newPlayer.teamId;
    }

    console.log(newPlayer);
    try {
      const response = await fetch(`${APIURL}players/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const handleBreedChange = (event) => {
    const selectedBreed = event.target.value;
    setBreed(selectedBreed);

    // Get the corresponding image URL for the selected breed
    const breedImages = {
      poodle:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Firework_EWF_0020.jpg.rend.hgtvcom.966.966.suffix/1641529012269.jpeg", // URL for poodle image
      pug: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Baxter_EWF_1192.jpg.rend.hgtvcom.966.966.suffix/1641528997011.jpeg", // URL for chihuahua image
      chihuahua:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Marcus_EWF_9959.jpg.rend.hgtvcom.966.966.suffix/1641529024557.jpeg",
      dachshund:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Hera_EWF_0113.jpg.rend.hgtvcom.966.966.suffix/1641529015963.jpeg",
      chow: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Glaze_EWF_1004.jpg.rend.hgtvcom.966.966.suffix/1641529014704.jpeg",
      mastiff:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Forrest_EWF_2250.jpg.rend.hgtvcom.966.966.suffix/1641529012824.jpeg",
      pomeranian:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20ChubbyBear_EWF_0689.jpg.rend.hgtvcom.966.966.suffix/1641529006144.jpeg",
      beagle:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Brooke_EWF_1863.jpg.rend.hgtvcom.966.966.suffix/1641529002370.jpeg",
      maltese:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Biff_EWF_9764.jpg.rend.hgtvcom.966.966.suffix/1641528998235.jpeg",
      pit: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Banjo_EWF_2864.jpg.rend.hgtvcom.966.966.suffix/1641528996495.jpeg",
      bigPoodle: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Benny_EWF_2805.jpg.rend.hgtvcom.966.966.suffix/1641528997533.jpeg",
      staffordshire: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Billie_EWF_1116.jpg.rend.hgtvcom.966.966.suffix/1641528998854.jpeg",



    };
    setImageUrl(breedImages[selectedBreed.toLowerCase()] || "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br></br>
      <label>
        Breed:
        <input
          type="text"
          placeholder="Enter Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </label>
      <br></br>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="bench">bench</option>
          <option value="field">field</option>
        </select>
      </label>
      <br></br>
      <label>
        TeamId:
        <select value={teamId} onChange={(e) => setTeamId(e.target.value)} required>
          <option value="">Select Team</option>
          <option value="679">Ruff</option>
          <option value="680">Fluff</option>

        </select>

      </label>
      <br></br>
      <label>
        Image URL:
        <input
          type="text"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <br></br>
      <img 
        src={imageUrl} 
        alt="dog"                 
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src="https://i.etsystatic.com/8104547/r/il/e80dec/995392536/il_570xN.995392536_3r85.jpg";
        }}
      />
      <br></br>
      <button type="submit" onClick={() => navigate(-1)}>
        Submit
      </button>
    </form>
    
  );
}