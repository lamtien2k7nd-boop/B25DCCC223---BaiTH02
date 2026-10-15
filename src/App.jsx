import { useState, useEffect } from "react";
import cities from "./data/cities";
import CityList from "./components/cityList";
import CurrentWeather from "./components/currentWeather";
import Forecast from "./components/forecast";
import "./App.css";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("C");
  const [retryCount, setRetryCount] = useState(0);
    useEffect(() => {
    if (!selectedCity) return; // chưa chọn thì không làm gì

    let cancelled = false; // tránh cập nhật dữ liệu "cũ"

    async function fetchWeather() {
      setLoading(true);
      setError(null);
      try {
        const url =
          `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}` +
          `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m` +
          `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
          `&timezone=Asia%2FHo_Chi_Minh&forecast_days=7`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Máy chủ trả về lỗi " + res.status);
        const data = await res.json();

        if (!cancelled) setWeather(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Không thể tải dữ liệu");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchWeather();

    // cleanup: chạy khi người dùng bấm thành phố khác trước khi tải xong
    return () => {
      cancelled = true;
    };
  }, [selectedCity, retryCount]);
    function renderContent() {
    if (!selectedCity) {
      return <p className="message">👈 Hãy chọn một thành phố để xem thời tiết</p>;
    }
    if (loading) {
      return <p className="message">⏳ Đang tải dữ liệu...</p>;
    }
    if (error) {
      return (
        <div className="message error">
          <p>❌ {error}</p>
          <button onClick={() => setRetryCount(retryCount + 1)}>Thử lại</button>
        </div>
      );
    }
    if (weather) {
      return (
        <>
          <CurrentWeather cityName={selectedCity.name} current={weather.current} unit={unit} />
          <Forecast daily={weather.daily} unit={unit} />
        </>
      );
    }
    return null;
  }
    return (
    <div className="app">
      <header>
        <h1>🌤️ Thời tiết Việt Nam</h1>
        <div className="unit-toggle">
          <button className={unit === "C" ? "active" : ""} onClick={() => setUnit("C")}>°C</button>
          <button className={unit === "F" ? "active" : ""} onClick={() => setUnit("F")}>°F</button>
        </div>
      </header>

      <main className="layout">
        <aside>
          <CityList
            cities={cities}
            selectedId={selectedCity?.id}
            onSelect={setSelectedCity}
          />
        </aside>
        <section className="content">{renderContent()}</section>
      </main>
    </div>
  );
}