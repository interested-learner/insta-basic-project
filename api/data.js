export default function handler(req, res) {
  const data = {
    author: {
      name: "Nature Daily",
      image: "https://picsum.photos/100/100?random=99",
      userSince: "2022",
      channel: "nature_daily"
    },
    images: [
      { name: "Misty Mountains", date: "2024-01-01", thumbnail: "https://picsum.photos/200/200?random=1", image: "https://picsum.photos/800/800?random=1", description: "A breathtaking view of mountains covered in morning mist." },
      { name: "Forest Path", date: "2024-01-15", thumbnail: "https://picsum.photos/200/200?random=2", image: "https://picsum.photos/800/800?random=2", description: "A quiet path winding through an ancient forest." },
      { name: "Ocean Sunset", date: "2024-02-01", thumbnail: "https://picsum.photos/200/200?random=3", image: "https://picsum.photos/800/800?random=3", description: "Golden light reflecting off calm ocean waters." },
      { name: "Snowy Peak", date: "2024-02-14", thumbnail: "https://picsum.photos/200/200?random=4", image: "https://picsum.photos/800/800?random=4", description: "A lone snow capped peak rising above the clouds." },
      { name: "Wildflower Meadow", date: "2024-03-01", thumbnail: "https://picsum.photos/200/200?random=5", image: "https://picsum.photos/800/800?random=5", description: "A vast meadow bursting with colorful wildflowers." },
      { name: "Desert Dunes", date: "2024-03-15", thumbnail: "https://picsum.photos/200/200?random=6", image: "https://picsum.photos/800/800?random=6", description: "Rolling sand dunes stretching to the horizon." },
      { name: "Waterfall", date: "2024-04-01", thumbnail: "https://picsum.photos/200/200?random=7", image: "https://picsum.photos/800/800?random=7", description: "A powerful waterfall crashing into a crystal clear pool." },
      { name: "Autumn Leaves", date: "2024-04-15", thumbnail: "https://picsum.photos/200/200?random=8", image: "https://picsum.photos/800/800?random=8", description: "A canopy of red and orange leaves in full autumn color." },
      { name: "Rocky Coastline", date: "2024-05-01", thumbnail: "https://picsum.photos/200/200?random=9", image: "https://picsum.photos/800/800?random=9", description: "Waves crashing against dramatic rocky cliffs." },
      { name: "Lake Reflection", date: "2024-05-15", thumbnail: "https://picsum.photos/200/200?random=10", image: "https://picsum.photos/800/800?random=10", description: "A perfectly still lake mirroring the mountains above." },
      { name: "Jungle Canopy", date: "2024-06-01", thumbnail: "https://picsum.photos/200/200?random=11", image: "https://picsum.photos/800/800?random=11", description: "Looking up through layers of dense tropical jungle." },
      { name: "Northern Lights", date: "2024-06-15", thumbnail: "https://picsum.photos/200/200?random=12", image: "https://picsum.photos/800/800?random=12", description: "The aurora borealis dancing across a dark arctic sky." },
      { name: "Prairie Storm", date: "2024-07-01", thumbnail: "https://picsum.photos/200/200?random=13", image: "https://picsum.photos/800/800?random=13", description: "A dramatic storm rolling across wide open plains." },
      { name: "Tidal Pools", date: "2024-07-15", thumbnail: "https://picsum.photos/200/200?random=14", image: "https://picsum.photos/800/800?random=14", description: "Tiny ecosystems hidden among coastal rocks at low tide." },
      { name: "Bamboo Grove", date: "2024-08-01", thumbnail: "https://picsum.photos/200/200?random=15", image: "https://picsum.photos/800/800?random=15", description: "Tall bamboo stalks filtering soft light from above." }
    ]
  };
  res.status(200).json(data);
}