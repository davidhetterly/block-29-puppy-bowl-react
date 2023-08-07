/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BreedImage = ({ breed }) => {
  // Image URLs for various dog breeds
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
goldenPup: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Brady_EWF_0158.jpg.rend.hgtvcom.966.966.suffix/1641529001772.jpeg",
unknown: "https://s3.awkwardfamilyphotos.com/wp-content/uploads/2018/07/15131216/Screen-Shot-2018-07-23-at-5.37.51-PM-1024x684.jpg",


  };

  // Check if the breed exists in the breedImages object, otherwise use the generic image
  const breedKeys = Object.keys(breedImages);

  // Check if the breed exists in the breedImages object
  const imageUrl =
    breedImages[breed.toLowerCase()] ||
    // If breed does not match, randomly choose one of the URLs
    
    breedImages.unknown;

  return <img src={imageUrl} alt={`Image of a ${breed}`} />;
};

export default BreedImage;