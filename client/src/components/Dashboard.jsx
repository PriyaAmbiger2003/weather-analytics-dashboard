import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CityCard from "./CityCard";
import CityDetail from "./CityDetail";
import Favorites from "./Favorites";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/weather/${city}/`);
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("City not found or API error.");
    }
  };

  const handleFavorite = (cityData) => {
    if (!favorites.some((f) => f.city === cityData.city)) {
      setFavorites([...favorites, cityData]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <SearchBar onSearch={fetchWeather} />
      <CityCard weather={weather} onFavorite={handleFavorite} />
      <CityDetail forecast={weather?.forecast} />
      <Favorites favorites={favorites} onSelect={fetchWeather} />
    </div>
  );
}
