import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const CityDetailPage = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "92cac5c44aa5b4ca9a3b6122fd71bcf2";

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: { q: city, units: "metric", appid: API_KEY },
        });
        setData(res.data);
        setError("");
      } catch (err) {
        console.error("City detail fetch error:", err);
        setError("City not found or API error ❌");
      }
    };
    fetchCityData();
  }, [city]);

  const chartData =
    data?.list?.slice(0, 8).map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      temp: item.main.temp,
    })) || [];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Link to="/">⬅ Back to Dashboard</Link>
      <h2>🌆 {city} Detailed View</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <>
          <p>City: {data.city.name}</p>
          <p>Country: {data.city.country}</p>
          <p>Population: {data.city.population}</p>

          <h3>📊 Temperature Forecast (Next 8 Hours)</h3>
          <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CityDetailPage;
