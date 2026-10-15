export function describeWeather(code) {
    if (code === 0) return { text: "Trời quang", icon: "☀️" };
    if (code <= 2) return { text: "Ít mây", icon: "🌤️" };
    if (code === 3) return { text: "Nhiều mây", icon: "☁️" };
    if (code === 45 || code === 48) return { text: "Sương mù", icon: "🌫️" };
    if (code >= 51 && code <= 57) return { text: "Mưa phùn", icon: "🌦️" };
    if (code >= 61 && code <= 67) return { text: "Mưa", icon: "🌧️" };
    if (code >= 71 && code <= 77) return { text: "Tuyết", icon: "❄️" };
    if (code >= 80 && code <= 82) return { text: "Mưa rào", icon: "🌧️" };
    if (code >= 95) return { text: "Dông", icon: "⛈️" };
    return { text: "Không rõ", icon: "❓" };
}
export function formatTemp(celcius, unit) {
    const value = unit === "F" ? (celcius * 9) / 5 + 32 : celcius;
    return `${Math.round(value)}°${unit}`;
}
const WEEKDAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
export function formatUpdateTime(isoTime) {
    const [date,time] = isoTime.split("T");
    const [y,m,d] = date.split("-");
    return `${time} ${d}/${m}/${y}`;
}
export function formatDay(isoDate) {
    const d = new Date(isoDate);
    const [month, day] = isoDate.split("-");
    return {weekday: WEEKDAYS[d.getDay()], date: `${day}/${month}`};
}