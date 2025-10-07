async function getData() {
    const res = await fetch(`https://snowtooth-hotel-api.fly.dev`);
    return res.json();
}

function HotelBlock({ name, capacity }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{capacity}</p>
        </div>
    );
}

export default async function Hotels() {
    const data = await getData();

    return (
        <main>
            <h1>Hotels Page</h1>
            <div>
                {data.map((hotel) => (
                    <HotelBlock key={hotel.id} name={hotel.name} capacity={hotel.capacity} />
                ))}
            </div>
        </main>
    );
}