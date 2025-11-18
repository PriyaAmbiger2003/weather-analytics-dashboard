import React from "react";

export default function CityCard({ weather, onFavorite }) {
  if (!weather) return null;

  const { city, current } = weather;

  return (
    <div className="bg-white shadow-lg p-4 rounded-xl text-center max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{city}</h2>
      <p className="text-gray-700 text-lg capitalize">{current.weather}</p>
      <p className="text-4xl font-bold">{current.temp}°C</p>
      <p className="text-gray-600">💧 {current.humidity}% | 💨 {current.wind} m/s</p>
      <button
        onClick={() => onFavorite(weather)}
        className="mt-3 bg-yellow-400 px-4 py-1 rounded-lg hover:bg-yellow-500"
      >
        ⭐ Add to Favorites
      </button>
    </div>
  );
}
