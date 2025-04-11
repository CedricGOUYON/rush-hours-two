import React, { useEffect, useState } from "react";

const PEXELS_API_KEY = "QSnxIJucj0YgcYUUAnVsJSXbkNL3uYROuNvLcedlIkGx6xXOanSx6NRf";

const PexelsGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("nature");

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=30`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch Pexels :", err);
      });
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Galerie Pexels - "{query}"</h2>
      <input type="text" placeholder="Rechercher..." value={query} onChange={(e) => setQuery(e.target.value)} style={{ marginBottom: "20px", padding: "8px", width: "100%" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.medium} alt={photo.alt} style={{ width: "100%", borderRadius: "12px" }} />
        ))}
      </div>
    </div>
  );
};

export default PexelsGallery;
