export default function handler(req, res) {
  const data = {
    author: {
      name: "Nature Daily",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100",
      userSince: "2022",
      channel: "nature_daily"
    },
    images: [
      {
        name: "Misty Mountains",
        date: "2024-01-01",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "A breathtaking view of mountains covered in morning mist."
      },
      {
        name: "Forest Path",
        date: "2024-01-15",
        thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=200",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        description: "A quiet path winding through an ancient forest."
      },
      {
        name: "Ocean Sunset",
        date: "2024-02-01",
        thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        description: "Golden light reflecting off calm ocean waters."
      },
      {
        name: "Snowy Peak",
        date: "2024-02-14",
        thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
        description: "A lone snow capped peak rising above the clouds."
      },
      {
        name: "Wildflower Meadow",
        date: "2024-03-01",
        thumbnail: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=200",
        image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800",
        description: "A vast meadow bursting with colorful wildflowers."
      },
      {
        name: "Desert Dunes",
        date: "2024-03-15",
        thumbnail: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=200",
        image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800",
        description: "Rolling sand dunes stretching to the horizon."
      },
      {
        name: "Waterfall",
        date: "2024-04-01",
        thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=200",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
        description: "A powerful waterfall crashing into a crystal clear pool."
      },
      {
        name: "Dense Forest",
        date: "2024-04-15",
        thumbnail: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=200",
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800",
        description: "Dense forest of trees"
      },
      {
        name: "Rocky Coastline",
        date: "2024-05-01",
        thumbnail: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?w=200",
        image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?w=800",
        description: "Waves crashing against dramatic rocky cliffs."
      },
      {
        name: "Rolling Hills",
        date: "2024-05-15",
        thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
        description: "Gentle rolling hills covered in lush green grass."
      },
      {
        name: "Dry Climate Sunset",
        date: "2024-06-01",
        thumbnail: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=200",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        description: "A fiery sunset casting warm hues over a dry climate."
      },
      {
        name: "Northern Lights",
        date: "2024-06-15",
        thumbnail: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=200",
        image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800",
        description: "The aurora borealis dancing across a dark arctic sky."
      },
      {
        name: "Prairie Storm",
        date: "2024-07-01",
        thumbnail: "https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?w=200",
        image: "https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?w=800",
        description: "A dramatic storm rolling across wide open plains."
      },
      {
        name: "Waterfall",
        date: "2024-07-15",
        thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
        description: "A serene waterfall."
      },
      {
        name: "Bamboo Grove",
        date: "2024-08-01",
        thumbnail: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=200",
        image: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=800",
        description: "Tall bamboo stalks filtering soft light from above."
      }
    ]
  };
  res.status(200).json(data);
}