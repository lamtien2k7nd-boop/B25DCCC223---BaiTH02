import { describeWeather, formatTemp, formatUpdateTime } from "../utils/weather";
function currentWeather({cityName, current, unit}) {
    const { text, icon } = describeWeather(current.weather_code);
    return (
        <div className="current">
        <h2>{cityName}</h2>
        <div className="current-main">
            <span className="big-icon">{icon}</span>
            <span className="big-temp">{formatTemp(current.temperature_2m, unit)}</span>
        </div>
        <p>{text}</p>
        <p>Độ ẩm: {current.relative_humidity_2m}%</p>
        <p>Gió: {current.wind_speed_10m} km/h</p>
        <p className="muted">Cập nhật: {formatUpdateTime(current.time)}</p>
        </div>
    );
}
export default currentWeather;
