import { describeWeather, formatDay, formatTemp } from "../utils/weather";
function forecast({ daily, unit }) {
  return (
    <div className="forecast">
      <h3>Dự báo 7 ngày</h3>
      <ul>
        {daily.time.map((day, i) => {
          const { weekday, date } = formatDay(day);
          const { icon } = describeWeather(daily.weather_code[i]);
          return (
            <li key={day} className="forecast-item">
              <strong>{weekday}</strong>
              <span className="muted">{date}</span>
              <span className="icon">{icon}</span>
              <span>{formatTemp(daily.temperature_2m_max[i], unit)}</span>
              <span className="muted">{formatTemp(daily.temperature_2m_min[i], unit)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default forecast;