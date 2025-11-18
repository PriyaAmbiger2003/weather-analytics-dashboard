import React from "react";

export default function Favorites({ favorites, onSelect }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl mt-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-3">⭐ Favorite Cities</h3>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map((fav, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 mb-1"
              onClick={() => onSelect(fav.city)}
            >
              {fav.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
