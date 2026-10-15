function cityList({ cities, selectedId, onSelect }) {
    return (
        <ul className="city-list">
            {cities.map((city) => (
                <li key={city.id}>
                    <button className={city.id === selectedId ? "city active" : "city"}
                    onClick={() => onSelect(city)}>
                        {city.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default cityList;
