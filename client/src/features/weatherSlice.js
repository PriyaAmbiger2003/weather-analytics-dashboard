import axios from "axios";

const API_KEY = "92cac5c44aa5b4ca9a3b6122fd71bcf2"; // your OpenWeather API key

export const fetchWeather = async (city) => {
  try {
    // 1️⃣ Get current weather
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const { coord, sys, main, weather, wind, clouds, name } = res.data;

    // 2️⃣ Get 5-day forecast (FREE)
    const forecastRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${API_KEY}`
    );

    return {
      name,
      country: sys.country,
      current: { main, weather, wind, clouds },
      forecast: forecastRes.data,
    };
  } catch (error) {
    console.error("Error in fetchWeather:", error);
    throw error;
  }
};
