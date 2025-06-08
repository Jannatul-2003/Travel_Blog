export interface TravelDestination {
  id: string
  title: string
  location: string
  image: string
  description: string
  fullDescription?: string
}

export interface BlogPost {
  id: string
  title: string
  date: string
  image: string
  excerpt: string
  content?: string
}

export const destinations: TravelDestination[] = [
  // First batch - Water and boats
  {
    id: "sundarbans-wildlife",
    title: "Sundarbans Wildlife",
    location: "Bangladesh",
    image: "/images/photo_2025-06-08_14-42-07.jpg",
    description: "Witnessing the incredible biodiversity of the Sundarbans mangrove forests",
    fullDescription:
      "The Sundarbans, a UNESCO World Heritage site, offers an incredible glimpse into one of the world's largest mangrove forests. Here, I captured a magnificent flock of waterfowl in their natural habitat, showcasing the rich biodiversity that makes this region so special.",
  },
  {
    id: "traditional-boats",
    title: "Traditional Fishing Boats",
    location: "Cox's Bazar, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-05.jpg",
    description: "Colorful traditional boats that tell stories of generations of fishermen",
    fullDescription:
      "These beautifully crafted traditional fishing boats represent centuries of maritime heritage. Each boat is hand-painted with vibrant colors and unique designs, reflecting the artistic spirit of the local fishing communities along Bangladesh's longest natural beach.",
  },
  {
    id: "river-journey",
    title: "River Steamer Journey",
    location: "Padma River, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-09.jpg",
    description: "Epic river journeys on traditional steamers through Bangladesh's waterways",
    fullDescription:
      "River travel is the lifeline of Bangladesh. This massive passenger steamer carries hundreds of people across the mighty rivers, connecting remote villages to urban centers. The journey offers breathtaking views of lush green landscapes and a glimpse into the daily life of river communities.",
  },
  {
    id: "river-terminal",
    title: "Bustling River Terminal",
    location: "Dhaka, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-08.jpg",
    description: "The vibrant chaos and energy of Bangladesh's river transport hubs",
    fullDescription:
      "River terminals in Bangladesh are hubs of incredible energy and activity. These orange and white passenger boats serve as the primary means of transportation for millions, creating a fascinating blend of organized chaos that perfectly captures the spirit of this water-rich nation.",
  },
  {
    id: "sailing-heritage",
    title: "Sailing Heritage",
    location: "Chittagong, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-06.jpg",
    description: "Traditional sailing boats with their iconic red sails and colorful flags",
    fullDescription:
      "The traditional sailing boats of Bangladesh are works of art in motion. With their distinctive red sails and colorful prayer flags, these vessels have been navigating the Bay of Bengal for generations, carrying both cargo and the dreams of seafaring communities.",
  },
  {
    id: "pristine-beach",
    title: "Pristine Beach Solitude",
    location: "Saint Martin's Island, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-04.jpg",
    description: "Finding peace and solitude on Bangladesh's most beautiful beaches",
    fullDescription:
      "Saint Martin's Island offers some of the most pristine beaches in South Asia. This solitary fishing boat on the endless stretch of golden sand represents the perfect harmony between human activity and natural beauty that defines Bangladesh's coastal regions.",
  },
  {
    id: "living-root-bridges",
    title: "Living Root Bridges",
    location: "Meghalaya, India",
    image: "/images/photo_2025-06-08_14-42-01.jpg",
    description: "Discovering the incredible living root bridges in the forests of Northeast India",
    fullDescription:
      "Deep in the forests of Meghalaya, I discovered one of nature's most incredible engineering marvels - living root bridges. These bridges, grown over decades by the Khasi people, represent a perfect harmony between human ingenuity and natural growth.",
  },
  {
    id: "mountain-lake-serenity",
    title: "Mountain Lake Serenity",
    location: "Chittagong Hill Tracts",
    image: "/images/photo_2025-06-08_14-41-58.jpg",
    description: "Finding peace in the tranquil mountain lakes",
    fullDescription:
      "The Chittagong Hill Tracts offer some of the most serene landscapes in Bangladesh. This mountain lake, surrounded by rolling hills and dotted with colorful boats, provided the perfect escape from the bustling city life.",
  },
  {
    id: "fishermen-life",
    title: "Life of River Fishermen",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-42-02.jpg",
    description: "Spending time with local fishermen and learning their ancient traditions",
    fullDescription:
      "I spent several days with local fishermen, learning about their traditional methods and the challenges they face. This moment of rest on calm waters perfectly captures the peaceful yet hardworking nature of river life in Bangladesh.",
  },
  {
    id: "colorful-boats-lake",
    title: "Colorful Boats at Lake",
    location: "Rangamati, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-57.jpg",
    description: "Vibrant boats lined up along peaceful lake shores",
    fullDescription:
      "The lakes of Rangamati are dotted with these beautifully painted boats that serve both as transportation and livelihood for the local communities. The peaceful setting under the shade of ancient trees creates a perfect harmony between human activity and nature.",
  },

  // Second batch - Adventure and culture
  {
    id: "paragliding-adventure",
    title: "Paragliding Adventures",
    location: "Hill Tracts, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-09.jpg",
    description: "Soaring through the skies and experiencing the thrill of paragliding",
    fullDescription:
      "The hills of Bangladesh offer incredible opportunities for paragliding. This exhilarating experience of soaring through the sky with the wind beneath your wings provides a unique perspective of the beautiful landscape below. The teamwork and preparation required make every flight a memorable adventure.",
  },
  {
    id: "camping-under-stars",
    title: "Camping Under the Stars",
    location: "Remote Hills, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-08.jpg",
    description: "Magical nights camping with colorful tents illuminated under the starry sky",
    fullDescription:
      "There's something magical about camping in the wilderness with nothing but colorful tents and a campfire for company. These illuminated tents create a beautiful contrast against the dark night sky, while the warmth of the fire brings people together to share stories and create lasting memories.",
  },
  {
    id: "river-exploration",
    title: "River Stream Adventures",
    location: "Chittagong Hill Tracts",
    image: "/images/photo_2025-06-08_14-41-11.jpg",
    description: "Exploring crystal clear mountain streams and rocky river beds",
    fullDescription:
      "The mountain streams of the Chittagong Hill Tracts offer perfect spots for exploration and play. These crystal-clear waters flowing between ancient rocks create natural playgrounds where children and adults alike can connect with nature and experience the pure joy of mountain stream adventures.",
  },
  {
    id: "simple-boat-life",
    title: "Simple Boat Life",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-13.jpg",
    description: "The simple beauty of traditional boat life on sparkling waters",
    fullDescription:
      "Sometimes the most beautiful moments are found in simplicity. This lone fishing boat with its blue covering represents the peaceful, unhurried pace of river life in Bangladesh. The sparkling water reflects the sun like diamonds, creating a scene of pure tranquility.",
  },
  {
    id: "group-adventures",
    title: "Group Adventures",
    location: "Forest Bridges, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-07.jpg",
    description: "Team building and friendship through shared outdoor adventures",
    fullDescription:
      "Adventure is always better when shared with friends. This group of adventurers in their matching red shirts represents the spirit of teamwork and camaraderie that makes outdoor exploration so special. Crossing forest bridges together creates bonds that last a lifetime.",
  },
  {
    id: "indigenous-culture",
    title: "Indigenous Heritage",
    location: "Tribal Communities, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-02.jpg",
    description: "Connecting with indigenous communities and their rich cultural heritage",
    fullDescription:
      "The indigenous communities of Bangladesh preserve ancient traditions and wisdom. This touching moment between grandmother and grandchild represents the passing down of cultural knowledge through generations. Their traditional clothing and way of life offer insights into a rich heritage that spans centuries.",
  },
  {
    id: "ocean-fishing",
    title: "Ocean Fishing Expeditions",
    location: "Bay of Bengal",
    image: "/images/photo_2025-06-08_14-41-01.jpg",
    description: "Joining local fishermen on their daily expeditions into the Bay of Bengal",
    fullDescription:
      "The Bay of Bengal provides livelihood for thousands of fishermen who venture out daily in their traditional boats. Joining these hardworking crews offers a glimpse into the challenging yet rewarding life of ocean fishing, where teamwork and knowledge of the sea are essential for survival.",
  },
  {
    id: "village-children",
    title: "Village Life",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-03.jpg",
    description: "Discovering the innocent joy and curiosity of village children",
    fullDescription:
      "The children of rural Bangladesh possess an infectious curiosity and joy that reminds us of life's simple pleasures. Their bright eyes peering through traditional bamboo structures tell stories of a childhood filled with natural play and community bonds that urban life often lacks.",
  },
  {
    id: "golden-sunrise",
    title: "Golden Sunrise",
    location: "Cox's Bazar Beach",
    image: "/images/photo_2025-06-08_14-41-00.jpg",
    description: "Witnessing breathtaking sunrises over the longest natural beach",
    fullDescription:
      "Cox's Bazar offers some of the most spectacular sunrises in the world. This golden moment captures the silhouette of fishing boats and nets against the rising sun, creating a scene that perfectly embodies the peaceful beauty of Bangladesh's coastal life. The warm light transforms the entire landscape into a golden paradise.",
  },
  {
    id: "flooded-forests",
    title: "Monsoon Forests",
    location: "Sundarbans, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-04.jpg",
    description: "Exploring the mystical flooded forests during monsoon season",
    fullDescription:
      "During monsoon season, the forests of Bangladesh transform into mystical waterlands where trees stand like sentinels in the flood waters. This ethereal landscape creates a unique ecosystem where land and water merge, offering a glimpse into the incredible adaptability of nature in this river-rich country.",
  },

  // Third batch - Previous new images
  {
    id: "fishing-net-carriers",
    title: "Traditional Net Carriers",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_14-41-20.jpg",
    description: "Fishermen carrying traditional nets across green fields to the sea",
    fullDescription:
      "This powerful image captures the daily routine of coastal fishermen as they carry their traditional fishing nets across vast green fields to reach the sea. The teamwork and physical strength required for this ancient practice showcases the dedication of fishing communities who have sustained this livelihood for generations.",
  },
  {
    id: "palm-sunset",
    title: "Tropical Sunset",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_14-41-23.jpg",
    description: "Magical sunset through palm fronds painting the sky in warm hues",
    fullDescription:
      "The tropical sunsets of Bangladesh create some of the most breathtaking natural displays. This intimate view through swaying palm fronds captures the warm pink and orange hues that paint the sky each evening, creating a moment of pure tranquility and natural beauty.",
  },
  {
    id: "flood-shelter",
    title: "Flood Season Shelter",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-22.jpg",
    description: "Traditional bamboo shelter standing resilient in flood waters",
    fullDescription:
      "During Bangladesh's annual flood season, traditional bamboo and thatch shelters like this one demonstrate the incredible resilience and adaptation of rural communities. These structures, built to withstand flooding, represent centuries of indigenous knowledge about living in harmony with the natural flood cycles.",
  },
  {
    id: "riverside-contemplation",
    title: "Riverside Contemplation",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-21.jpg",
    description: "A moment of peaceful reflection watching river life unfold",
    fullDescription:
      "Sometimes the most profound travel experiences come from simply sitting and observing. This peaceful moment captures the essence of river life in Bangladesh, where time moves at a different pace and the simple act of watching boats and people creates a deep connection with the local rhythm of life.",
  },
  {
    id: "child-meal",
    title: "Simple Childhood",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-19.jpg",
    description: "A child enjoying a simple meal under the shade of a tree",
    fullDescription:
      "This touching scene captures the simplicity and contentment of rural childhood in Bangladesh. The child's peaceful meal under the tree shade represents the basic joys of life and the strong connection between people and nature that defines rural communities.",
  },
  {
    id: "urban-homelessness",
    title: "Urban Reality",
    location: "City Streets, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-17.jpg",
    description: "Documenting the harsh realities of urban homelessness",
    fullDescription:
      "Travel photography isn't always about beautiful landscapes. This powerful image documents the harsh reality of urban homelessness, showing the human side of city life that often goes unseen. The companionship between the person and dog highlights the universal need for connection even in the most difficult circumstances.",
  },
  {
    id: "golden-fishing-nets",
    title: "Golden Hour Fishing",
    location: "Cox's Bazar Beach",
    image: "/images/photo_2025-06-08_14-41-14.jpg",
    description: "Fishermen preparing nets during the magical golden hour",
    fullDescription:
      "The golden hour transforms ordinary fishing activities into scenes of extraordinary beauty. This image captures fishermen preparing their nets as the warm light creates silhouettes and reflections, turning their daily work into a masterpiece of natural lighting and human activity.",
  },
  {
    id: "urban-tent-life",
    title: "Urban Survival",
    location: "City Streets, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-18.jpg",
    description: "Resourceful urban living with modern adaptations like solar panels",
    fullDescription:
      "This image shows the resourcefulness of urban communities, where even in temporary shelters, people adapt modern technology like solar panels to improve their living conditions. It represents the resilience and ingenuity of people facing urban challenges.",
  },
  {
    id: "ship-chains",
    title: "Port Worker",
    location: "Chittagong Port, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-16.jpg",
    description: "The hard work of port laborers handling massive ship chains",
    fullDescription:
      "The ports of Bangladesh are powered by the incredible strength and dedication of workers who handle massive equipment like these ship chains. This image captures the industrial side of Bangladesh's economy and the human effort that keeps the country's maritime trade flowing.",
  },
  {
    id: "cattle-silhouette",
    title: "Rural Silhouette",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-15.jpg",
    description: "Peaceful silhouette of cattle drinking water at golden hour",
    fullDescription:
      "This serene silhouette captures the timeless rhythm of rural life in Bangladesh. The cattle drinking water as the golden light reflects on the surface creates a scene that has remained unchanged for centuries, representing the deep connection between agriculture, animals, and the land.",
  },

  // Fourth batch - Latest new images
  {
    id: "fisherman-fresh-catch",
    title: "Fresh Catch of the Day",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_14-41-40.jpg",
    description: "Fisherman carrying his fresh catch across the muddy shores",
    fullDescription:
      "This powerful image captures the essence of coastal fishing life in Bangladesh. The fisherman, carrying his fresh catch on a traditional pole across his shoulders, represents the daily struggle and reward of those who make their living from the sea. The muddy shores and his weathered hands tell the story of generations of fishing families.",
  },
  {
    id: "boat-silhouettes",
    title: "Boat Silhouettes",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-32.jpg",
    description: "Dramatic silhouettes of traditional fishing boats with bamboo poles",
    fullDescription:
      "The calm waters of Bangladesh's rivers create perfect reflections for these traditional fishing boats. The bamboo poles extending from the boats are used for various fishing techniques that have been passed down through generations. This silhouette captures the timeless beauty of river fishing culture.",
  },
  {
    id: "island-fishing-boat",
    title: "Island Fishing Expedition",
    location: "Bay of Bengal",
    image: "/images/photo_2025-06-08_14-41-34.jpg",
    description: "Traditional fishing boat with bamboo framework near a small island",
    fullDescription:
      "This scene showcases the traditional fishing boats that venture into the Bay of Bengal. The bamboo framework visible on the boat is used for drying nets and storing equipment. The small island in the background represents the many chars (river islands) that dot Bangladesh's waterways.",
  },
  {
    id: "multiple-fishing-boats",
    title: "Fleet of Fishing Boats",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-35.jpg",
    description: "Multiple fishing boats with crews silhouetted against the water",
    fullDescription:
      "This image captures the community aspect of fishing in Bangladesh. Multiple boats work together, sharing knowledge about fishing spots and weather conditions. The silhouettes of people standing on the boats show the active nature of river fishing, where constant vigilance and teamwork are essential.",
  },
  {
    id: "rice-field-farmer",
    title: "Rice Field Agriculture",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-29.jpg",
    description: "Farmer with water buffalo in lush green rice fields",
    fullDescription:
      "Agriculture is the backbone of Bangladesh's economy, and this image perfectly captures the traditional farming methods still used today. The farmer with his water buffalo in the vast green rice field represents the timeless relationship between humans, animals, and the land that feeds the nation.",
  },
  {
    id: "golden-hour-bathing",
    title: "Golden Hour Bathing",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-26.jpg",
    description: "People enjoying the water during the magical golden hour",
    fullDescription:
      "The rivers of Bangladesh serve not just as transportation routes but as community gathering places. This golden hour scene captures people enjoying the water, whether for bathing, playing, or simply cooling off. The warm light creates a magical atmosphere that transforms everyday activities into moments of beauty.",
  },
  {
    id: "blue-sky-reeds",
    title: "Sky and Reeds",
    location: "Wetlands of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-24.jpg",
    description: "Beautiful blue sky with white clouds framed by tall reeds",
    fullDescription:
      "The wetlands of Bangladesh are home to vast expanses of reeds and grasses that sway in the wind. This upward view captures the contrast between the earthbound reeds and the infinite blue sky dotted with white clouds, representing the connection between land and sky that defines the flat landscape of Bangladesh.",
  },
  {
    id: "sunset-through-grass",
    title: "Sunset Through Grass",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-25.jpg",
    description: "Dramatic sunset viewed through tall grass and reeds",
    fullDescription:
      "This intimate view of sunset through tall grass creates a natural frame for the golden sky. The silhouetted grass in the foreground adds depth and texture to the image, while the warm orange and golden hues of the sunset paint the sky in colors that are quintessentially Bangladeshi.",
  },
  {
    id: "women-by-sea",
    title: "Contemplation by the Sea",
    location: "Cox's Bazar Beach",
    image: "/images/photo_2025-06-08_14-41-28.jpg",
    description: "Two women in traditional dress sitting peacefully by the ocean",
    fullDescription:
      "This powerful image captures a moment of quiet contemplation as two women in traditional black dress sit by the endless ocean. The contrast between their dark silhouettes and the bright waves creates a striking composition that speaks to the universal human connection with the sea and the importance of peaceful reflection.",
  },
  // Fifth batch - Latest new images
  {
    id: "ferry-seagulls",
    title: "Ferry with Seagulls",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_14-41-47.jpg",
    description: "Passenger ferry surrounded by graceful seagulls on the river",
    fullDescription:
      "This vibrant scene captures the daily life of river transport in Bangladesh. The passenger ferry, packed with travelers, is accompanied by a flock of seagulls that follow the boat hoping for food. The interaction between human transportation and wildlife creates a beautiful harmony that defines Bangladesh's river culture.",
  },
  {
    id: "lakeside-boat-parking",
    title: "Lakeside Boat Parking",
    location: "Rangamati, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-54.jpg",
    description: "Colorful boats neatly arranged along the peaceful lakeside",
    fullDescription:
      "Under the shade of ancient trees, these beautifully painted boats rest along the shores of Rangamati's pristine lakes. The orderly arrangement of blue and red boats creates a stunning visual pattern, while the mountains in the background add to the serene atmosphere of this hill district paradise.",
  },
  {
    id: "grandfather-grandchild",
    title: "Generations of Love",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-41-49.jpg",
    description: "Tender moment between grandfather and grandchild",
    fullDescription:
      "This heartwarming image captures the beautiful bond between generations. The grandfather's weathered hands and gentle smile tell stories of a lifetime, while the young child represents hope and continuity. These moments of intergenerational love are the foundation of Bangladesh's strong family traditions.",
  },
  {
    id: "child-playing-beach",
    title: "Childhood Joy",
    location: "Cox's Bazar Beach",
    image: "/images/photo_2025-06-08_14-41-48.jpg",
    description: "Child playing with a toy car on the beach in black and white",
    fullDescription:
      "Captured in timeless black and white, this image shows the pure joy of childhood play. The child running with a toy car on the vast beach represents the simple pleasures that transcend time and place. The monochrome treatment emphasizes the universal nature of childhood happiness.",
  },
  {
    id: "boat-line-formation",
    title: "Boat Line Formation",
    location: "Phewa Lake, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-51.jpg",
    description: "Perfect line of colorful boats creating a stunning water formation",
    fullDescription:
      "This artistic arrangement of boats in perfect formation creates a mesmerizing pattern on the calm water. The variety of colors - blue, yellow, green, and red - reflects the vibrant spirit of Bangladesh's boat culture. The willow branches framing the scene add a natural border to this aquatic masterpiece.",
  },
  {
    id: "father-son-beach-walk",
    title: "Father and Son Beach Walk",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_14-41-44.jpg",
    description: "Father and young son walking together on the beach",
    fullDescription:
      "This touching scene captures a father and his young son walking together on the beach. The father carries his work tools, showing how family life and livelihood intertwine in coastal communities. The vast beach stretching behind them represents the endless possibilities that lie ahead for the next generation.",
  },
  {
    id: "tropical-palm-beach",
    title: "Tropical Paradise",
    location: "Saint Martin's Island",
    image: "/images/photo_2025-06-08_14-41-46.jpg",
    description: "Classic tropical scene with palm tree and beach activities",
    fullDescription:
      "This quintessential tropical scene showcases the natural beauty of Bangladesh's coastal areas. The graceful palm tree frames a view of the beach where people enjoy various activities. The combination of clear blue sky, calm waters, and tropical vegetation creates the perfect paradise setting.",
  },
  {
    id: "spectacular-ocean-sunset",
    title: "Spectacular Ocean Sunset",
    location: "Bay of Bengal",
    image: "/images/photo_2025-06-08_14-41-43.jpg",
    description: "Breathtaking sunset over the Bay of Bengal with dramatic clouds",
    fullDescription:
      "This spectacular sunset over the Bay of Bengal showcases nature's most dramatic daily performance. The sky erupts in brilliant oranges and reds, with clouds creating layers of color that reflect on the calm water below. These sunsets are among the most beautiful in the world, making Bangladesh's coast a photographer's paradise.",
  },
  {
    id: "lone-fisherman-mountains",
    title: "Lone Fisherman",
    location: "Kaptai Lake, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-45.jpg",
    description: "Solitary fisherman in traditional boat with mountain backdrop",
    fullDescription:
      "This peaceful scene shows a lone fisherman in his traditional wooden boat on the calm waters of Kaptai Lake. The misty mountains in the background create a serene atmosphere, while the fisherman's quiet concentration represents the meditative nature of traditional fishing practices in Bangladesh's hill districts.",
  },
  {
    id: "fishing-fleet-sunset",
    title: "Fishing Fleet at Sunset",
    location: "Cox's Bazar, Bangladesh",
    image: "/images/photo_2025-06-08_14-41-41.jpg",
    description: "Silhouettes of fishing boats against a golden sunset sky",
    fullDescription:
      "As the day ends, the fishing fleet returns to harbor, creating dramatic silhouettes against the golden sunset sky. This image captures the timeless rhythm of coastal life, where fishermen have followed the same patterns for generations. The boats' silhouettes tell stories of hard work, tradition, and the eternal relationship between humans and the sea.",
  },
  // Sixth batch - Latest additions
  {
    id: "children-technology",
    title: "Digital Generation",
    location: "Urban Bangladesh",
    image: "/images/photo_2025-06-08_14-42-25.jpg",
    description: "Children embracing technology in modern Bangladesh",
    fullDescription:
      "This touching scene captures the new generation of Bangladesh as they engage with modern technology. Two children sharing a tablet represents the digital transformation happening across the country, where traditional life meets the modern world. Their focused attention shows how technology is becoming an integral part of childhood, even in the most traditional settings.",
  },
  {
    id: "rice-field-worker",
    title: "Rice Field Labor",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_14-42-30.jpg",
    description: "Traditional rice planting in the fertile fields of Bangladesh",
    fullDescription:
      "This powerful image captures the backbone of Bangladesh's agriculture - the hardworking farmers who plant rice by hand in the flooded fields. The woman in her traditional turquoise sari represents millions of agricultural workers who feed the nation through their dedicated labor. The neat rows of green rice seedlings show the precision and skill required for this ancient farming practice.",
  },
  {
    id: "mountain-lodge-snow",
    title: "Mountain Lodge in Snow",
    location: "Himalayan Foothills",
    image: "/images/photo_2025-06-08_14-42-21.jpg",
    description: "Remote mountain lodge covered in pristine snow",
    fullDescription:
      "High in the mountains, this remote lodge provides shelter for trekkers and adventurers. The red roofs covered in snow create a striking contrast against the white landscape, while the colorful prayer flags add spiritual significance to this high-altitude refuge. These lodges are lifelines for mountain travelers, offering warmth and community in the harsh mountain environment.",
  },
  {
    id: "flood-season-boat",
    title: "Flood Season Navigation",
    location: "Haor Region, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-10.jpg",
    description: "Traditional boat navigation during flood season",
    fullDescription:
      "During Bangladesh's annual flood season, vast areas become navigable waterways where boats become the primary means of transportation. This scene from the haor region shows how communities adapt to seasonal flooding, using traditional wooden boats to navigate between patches of land that emerge like islands from the floodwaters.",
  },
  {
    id: "mountain-hiking-snow",
    title: "Solo Mountain Hiking",
    location: "Snowy Mountains",
    image: "/images/photo_2025-06-08_14-42-14.jpg",
    description: "Solitary hiker traversing snowy mountain terrain",
    fullDescription:
      "This atmospheric image captures the solitude and challenge of mountain hiking in winter conditions. The lone figure making their way through the snowy landscape with bare trees and misty conditions represents the spirit of adventure and the personal journey that mountain trekking provides. The harsh beauty of the winter mountains tests both physical endurance and mental resilience.",
  },
  {
    id: "traditional-rickshaws",
    title: "Traditional Rickshaws",
    location: "Old Dhaka, Bangladesh",
    image: "/images/photo_2025-06-08_14-42-15.jpg",
    description: "Colorful rickshaws waiting for passengers on city streets",
    fullDescription:
      "The iconic rickshaws of Bangladesh are more than just transportation - they're mobile works of art. These traditional three-wheeled vehicles, with their colorful decorations and protective covers, represent the ingenuity and artistic spirit of Bangladeshi culture. Each rickshaw is uniquely decorated, making them moving galleries that bring color and character to the bustling city streets.",
  },
  // Seventh batch - Final additions
  {
    id: "traditional-sailing",
    title: "Traditional Green Sail",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_16-41-01.jpg",
    description: "Traditional sailing boat with distinctive green sail navigating river waters",
    fullDescription:
      "This beautiful traditional sailing boat with its large green sail represents the ancient art of wind-powered river navigation in Bangladesh. The skilled boatman uses centuries-old techniques to harness the wind, creating a sustainable and peaceful way to travel through the country's extensive waterway network.",
  },
  {
    id: "mountain-pack-animals",
    title: "Mountain Pack Animals",
    location: "Himalayan Foothills",
    image: "/images/photo_2025-06-08_16-40-56.jpg",
    description: "Traditional pack animals carrying supplies through mountain terrain",
    fullDescription:
      "In the remote mountain regions, pack animals like these donkeys and mules are essential for transporting goods to villages that roads cannot reach. Each animal carries carefully balanced wicker baskets, representing a transportation method that has remained unchanged for centuries in these challenging terrains.",
  },
  {
    id: "jungle-boat-tour",
    title: "Jungle Waterway Adventure",
    location: "Sundarbans, Bangladesh",
    image: "/images/photo_2025-06-08_16-41-15.jpg",
    description: "Eco-tourism boat navigating through lush jungle waterways",
    fullDescription:
      "This eco-tourism adventure takes visitors deep into the heart of Bangladesh's jungle waterways. The red boat, equipped with safety gear, carries tourists through narrow channels surrounded by dense tropical vegetation, offering an intimate experience with the country's incredible biodiversity and natural beauty.",
  },
  {
    id: "waterfall-dam",
    title: "Cascading Waterfall",
    location: "Hill Districts, Bangladesh",
    image: "/images/photo_2025-06-08_16-41-09.jpg",
    description: "Powerful waterfall cascading over concrete spillway structure",
    fullDescription:
      "This impressive waterfall demonstrates the power of water as it cascades over a concrete spillway structure. The force and volume of water create a spectacular display, while the engineering structure shows how humans work with natural water flow for irrigation and flood control in Bangladesh's hilly regions.",
  },
  {
    id: "mountain-caravan",
    title: "Mountain Caravan",
    location: "Remote Mountain Paths",
    image: "/images/photo_2025-06-08_16-40-54.jpg",
    description: "Caravan of pack animals traversing rocky mountain paths",
    fullDescription:
      "This mountain caravan represents the lifeline of remote communities, where pack animals carry essential supplies along treacherous rocky paths. The traditional wicker baskets and the sure-footed animals demonstrate the ingenuity and resilience required for life in mountainous terrain where modern transportation cannot reach.",
  },
  {
    id: "solitary-hill",
    title: "Solitary Hill",
    location: "Rural Landscape",
    image: "/images/photo_2025-06-08_16-40-48.jpg",
    description: "Lone tree crowning a green hill in misty landscape",
    fullDescription:
      "This solitary tree standing proudly atop a green hill creates a powerful symbol of resilience and solitude. The misty atmosphere and rolling hills in the background capture the serene beauty of rural landscapes, where single trees often serve as landmarks and gathering points for local communities.",
  },
  {
    id: "peaceful-river-village",
    title: "Peaceful River Village",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_16-40-52.jpg",
    description: "Tranquil river scene with village life and traditional boats",
    fullDescription:
      "This peaceful river scene captures the essence of rural Bangladesh, where rivers serve as the main highways connecting communities. The traditional boats, lush trees, and simple buildings along the riverbank represent the harmonious relationship between people and water that defines much of Bangladeshi rural life.",
  },
  {
    id: "sunset-tree-silhouette",
    title: "Sunset Tree Silhouette",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_14-40-43.jpg",
    description: "Dramatic tree silhouette against golden sunset over water",
    fullDescription:
      "This artistic composition captures the dramatic silhouette of a bare tree against a golden sunset over water. The interplay of light and shadow creates a moody atmosphere that speaks to the contemplative moments found in nature, where simple scenes become profound through the magic of golden hour lighting.",
  },
  {
    id: "golden-seascape",
    title: "Golden Hour Seascape",
    location: "Bay of Bengal",
    image: "/images/photo_2025-06-08_14-40-58.jpg",
    description: "Sparkling golden water with boat silhouette during sunset",
    fullDescription:
      "The Bay of Bengal transforms into liquid gold during sunset, with countless sparkles of light dancing on the water's surface. This magical moment captures a lone boat silhouetted against the shimmering sea, representing the timeless connection between fishermen and the ocean that provides their livelihood.",
  },
  {
    id: "tropical-boat-paradise",
    title: "Tropical Boat Paradise",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_14-40-50.jpg",
    description: "Traditional wooden boats resting under palm trees on green grass",
    fullDescription:
      "This idyllic tropical scene shows traditional wooden boats resting on lush green grass under the shade of palm trees. The perfect blue sky and peaceful setting create a paradise-like atmosphere that showcases the natural beauty of Bangladesh's coastal areas, where land and sea meet in perfect harmony.",
  },
  // Eighth batch - Latest additions
  {
    id: "grass-field-umbrellas",
    title: "Colorful Umbrellas in Grass Fields",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_17-44-57.jpg",
    description: "Vibrant umbrellas creating a beautiful contrast against swaying grass fields",
    fullDescription:
      "This artistic scene captures the beauty of colorful umbrellas - blue and purple - standing out against a field of tall, swaying grass. The cloudy sky and natural setting create a perfect harmony between human-made objects and nature, representing the simple joys found in rural Bangladesh landscapes.",
  },
  {
    id: "island-lake-boats",
    title: "Island Lake Paradise",
    location: "Kaptai Lake, Bangladesh",
    image: "/images/photo_2025-06-08_17-44-19.jpg",
    description: "Serene lake with boats anchored near a tree-covered island",
    fullDescription:
      "This breathtaking view of Kaptai Lake showcases the perfect harmony between water, land, and sky. The small island covered with lush green trees serves as a natural sanctuary, while the colorful boats provide a glimpse into the local life that depends on these pristine waters for both livelihood and recreation.",
  },
  {
    id: "modern-bridge-contemplation",
    title: "Modern Bridge Architecture",
    location: "Urban Bangladesh",
    image: "/images/photo_2025-06-08_17-44-54.jpg",
    description: "Contemporary bridge design with a moment of peaceful contemplation",
    fullDescription:
      "This modern architectural marvel represents Bangladesh's rapid urban development. The sleek bridge design contrasts beautifully with the natural water below, while a solitary figure sits in contemplation, representing the balance between progress and peaceful reflection that defines modern Bangladesh.",
  },
  {
    id: "white-pier-waterfront",
    title: "Elegant Waterfront Pier",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_17-44-24.jpg",
    description: "Beautiful white pier structure extending into calm blue waters",
    fullDescription:
      "This elegant white pier structure creates a stunning contrast against the deep blue waters. The architectural design combines functionality with beauty, serving as both a practical waterfront facility and a scenic spot for visitors to enjoy the tranquil coastal environment.",
  },
  {
    id: "historic-palace-reflection",
    title: "Historic Palace Reflection",
    location: "Sonargaon, Bangladesh",
    image: "/images/photo_2025-06-08_17-44-27.jpg",
    description: "Magnificent historic palace with perfect water reflection",
    fullDescription:
      "This stunning historic palace showcases the architectural grandeur of Bangladesh's rich heritage. The ornate white and orange buildings create a perfect mirror image in the still water, while the surrounding palm trees add to the tropical elegance of this magnificent cultural landmark.",
  },
  {
    id: "purple-sunset-reflection",
    title: "Purple Sunset Serenity",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_17-44-18.jpg",
    description: "Magical purple and pink sunset reflected in calm waters",
    fullDescription:
      "This ethereal sunset scene captures the magical moment when the sky transforms into shades of purple and pink. The perfect reflection in the calm water doubles the beauty, while the silhouetted trees create a natural frame for this breathtaking display of nature's artistry.",
  },
  {
    id: "traditional-fire-ceremony",
    title: "Traditional Fire Ceremony",
    location: "Cultural Site, Bangladesh",
    image: "/images/photo_2025-06-08_17-44-11.jpg",
    description: "Sacred fire ceremony with traditional performers in red and white",
    fullDescription:
      "This powerful cultural ceremony showcases the rich spiritual traditions of Bangladesh. The performers in traditional red and white costumes hold flaming torches, creating a mesmerizing display that connects the present with ancient rituals. The gathered crowd represents the community's continued reverence for these sacred traditions.",
  },
  {
    id: "fishing-fleet-operations",
    title: "Fishing Fleet Operations",
    location: "Coastal Waters, Bangladesh",
    image: "/images/photo_2025-06-08_17-45-06.jpg",
    description: "Multiple fishing boats working together with nets and equipment",
    fullDescription:
      "This scene captures the coordinated effort of a fishing fleet as they work together in the coastal waters. The multiple boats with their nets and equipment represent the collaborative nature of fishing communities, where teamwork and shared knowledge are essential for successful catches.",
  },
  {
    id: "riverside-observer",
    title: "Riverside Observer",
    location: "River Banks, Bangladesh",
    image: "/images/photo_2025-06-08_17-45-11.jpg",
    description: "Peaceful moment of observation by the riverside",
    fullDescription:
      "This contemplative scene shows a person in an orange shirt sitting peacefully by the river, watching the daily activities unfold. The boats in the background and the green landscape represent the constant flow of life along Bangladesh's rivers, where observation and reflection are part of the daily rhythm.",
  },
  {
    id: "mountain-lake-tourism",
    title: "Mountain Lake Tourism",
    location: "Hill Districts, Bangladesh",
    image: "/images/photo_2025-06-08_17-44-03.jpg",
    description: "Tourist boats and facilities at a scenic mountain lake",
    fullDescription:
      "This vibrant mountain lake scene showcases the growing eco-tourism industry in Bangladesh's hill districts. The colorful boats, tourist facilities, and dramatic mountain backdrop create a perfect setting for adventure and relaxation, representing the country's diverse landscape beyond its famous rivers and plains.",
  },
  // Ninth batch - Latest additions
  {
    id: "children-boat-learning",
    title: "Young River Navigators",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_18-16-20.jpg",
    description: "Children learning traditional boat navigation skills on calm waters",
    fullDescription:
      "This heartwarming scene captures the next generation learning the ancient art of boat navigation. The young boy standing confidently with his pole while his friends sit in the traditional wooden boat represents the passing down of essential river skills that have sustained communities for generations. These children are learning not just how to navigate, but how to connect with their water-rich heritage.",
  },
  {
    id: "umbrella-by-water",
    title: "Umbrella by the Riverside",
    location: "Rural Bangladesh",
    image: "/images/photo_2025-06-08_18-16-17.jpg",
    description: "Artistic scene of a black umbrella positioned by the peaceful riverbank",
    fullDescription:
      "This artistic composition shows a solitary black umbrella positioned by the riverbank, creating a contemplative scene that speaks to the quiet moments found along Bangladesh's waterways. The umbrella, perhaps left by a fisherman or traveler, stands as a silent witness to the constant flow of river life, representing both shelter and the temporary nature of human presence in these timeless landscapes.",
  },
  {
    id: "covered-fishing-boat",
    title: "Sheltered Fishing Vessel",
    location: "Coastal Bangladesh",
    image: "/images/photo_2025-06-08_18-16-22.jpg",
    description: "Traditional fishing boat with blue shelter on sparkling golden waters",
    fullDescription:
      "This traditional fishing boat with its distinctive blue covering represents the practical ingenuity of Bangladesh's fishing communities. The shelter protects both fishermen and equipment from the elements, while the sparkling water surface, illuminated by golden sunlight, creates a magical atmosphere that transforms this working vessel into a scene of natural beauty.",
  },
  {
    id: "children-stream-adventure",
    title: "Stream Adventure",
    location: "Hill Streams, Bangladesh",
    image: "/images/photo_2025-06-08_18-16-19.jpg",
    description: "Two children holding hands while exploring a mountain stream",
    fullDescription:
      "This touching image captures two children holding hands as they wade through a clear mountain stream, with large rocks bearing blue markings visible in the background. Their careful steps and mutual support represent the spirit of adventure and friendship that defines childhood exploration in Bangladesh's hill regions, where natural streams provide endless opportunities for discovery and play.",
  },
  {
    id: "boat-flower-formation",
    title: "Artistic Boat Formation",
    location: "Rivers of Bangladesh",
    image: "/images/photo_2025-06-08_18-16-07.jpg",
    description: "Traditional boats arranged in a beautiful flower-like pattern on water",
    fullDescription:
      "This stunning aerial view shows traditional wooden boats arranged in a perfect flower-like formation on the muddy waters of a Bangladesh river. This artistic arrangement, whether intentional or coincidental, creates a mesmerizing pattern that showcases the beauty that can emerge from everyday objects when viewed from a different perspective. The symmetrical design represents the harmony and order that can be found in traditional river life.",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "paragliding-thrills",
    title: "Taking Flight: Paragliding Adventures",
    date: "April 20, 2024",
    image: "/images/photo_2025-06-08_14-41-09.jpg",
    excerpt: "Discovering the thrill of paragliding in the hills of Bangladesh...",
    content:
      "The moment you step off that hill with a parachute strapped to your back, everything changes. The ground falls away, and suddenly you're soaring like a bird over the beautiful landscape of Bangladesh. This adventure taught me that sometimes you have to take a leap of faith to see the world from a completely new perspective.",
  },
  {
    id: "camping-magic",
    title: "Nights Under the Stars",
    date: "April 15, 2022",
    image: "/images/photo_2025-06-08_14-41-08.jpg",
    excerpt: "The magic of camping in the wilderness with illuminated tents...",
    content:
      "There's something truly magical about setting up camp in the wilderness. As darkness falls and the tents light up like colorful lanterns, the campfire becomes the heart of our temporary community. These are the moments when strangers become friends and stories are shared under the vast starry sky.",
  },
  {
    id: "indigenous-wisdom",
    title: "Learning from Indigenous Communities",
    date: "April 10, 2021",
    image: "/images/photo_2025-06-08_14-41-02.jpg",
    excerpt: "Connecting with the rich heritage of Bangladesh's tribal communities...",
    content:
      "Spending time with indigenous communities has been one of the most enriching experiences of my travels. Their deep connection to the land, their traditional knowledge, and the way they pass down wisdom through generations offers profound lessons about sustainable living and community bonds.",
  },
  {
    id: "fishing-traditions",
    title: "Traditional Fishing Heritage",
    date: "April 5, 2018",
    image: "/images/photo_2025-06-08_14-41-20.jpg",
    excerpt: "Following fishermen as they carry nets across fields to the sea...",
    content:
      "Witnessing the daily ritual of fishermen carrying their traditional nets across green fields to reach the sea opened my eyes to the physical dedication required for this ancient livelihood. The teamwork, strength, and community spirit involved in this practice represents the backbone of coastal Bangladesh's fishing industry.",
  },
  {
    id: "urban-stories",
    title: "Stories from the Streets",
    date: "March 30, 2017",
    image: "/images/photo_2025-06-08_14-41-17.jpg",
    excerpt: "Documenting the untold stories of urban life in Bangladesh...",
    content:
      "Not all travel stories are about beautiful destinations. Some of the most important stories come from documenting the realities of urban life, including homelessness and poverty. These experiences remind us of our shared humanity and the importance of compassion in our travels.",
  },
  {
    id: "golden-hour-magic",
    title: "Chasing Golden Hour",
    date: "March 25, 2016",
    image: "/images/photo_2025-06-08_14-41-14.jpg",
    excerpt: "The magical transformation of ordinary scenes during golden hour...",
    content:
      "Golden hour has the power to transform the most ordinary activities into extraordinary scenes. Watching fishermen prepare their nets as the warm light creates perfect silhouettes taught me that timing in photography, as in life, can make all the difference between ordinary and magical.",
  },
  {
    id: "fresh-catch-stories",
    title: "Stories of the Fresh Catch",
    date: "March 20, 2014",
    image: "/images/photo_2025-06-08_14-41-40.jpg",
    excerpt: "Following fishermen as they bring their daily catch to shore...",
    content:
      "There's something deeply satisfying about witnessing the completion of a fishing cycle - from the early morning departure to the triumphant return with fresh catch. This fisherman's weathered hands and determined stride across the muddy shore tell the story of countless generations who have made their living from the sea.",
  },
  {
    id: "cultural-ceremonies",
    title: "Sacred Fire Ceremonies",
    date: "March 15, 2013",
    image: "/images/photo_2025-06-08_17-44-11.jpg",
    excerpt: "Witnessing ancient fire ceremonies that connect communities to their spiritual roots...",
    content:
      "The sacred fire ceremonies of Bangladesh represent a living connection to ancient spiritual traditions. Watching the performers in their traditional red and white costumes, holding flaming torches high, I was struck by the power of these rituals to bring communities together. The gathered crowd, representing all ages, shows how these traditions continue to thrive in modern Bangladesh.",
  },
  {
    id: "mountain-lake-adventures",
    title: "Mountain Lake Discoveries",
    date: "March 10, 2012",
    image: "/images/photo_2025-06-08_17-44-03.jpg",
    excerpt: "Exploring the stunning mountain lakes of Bangladesh's hill districts...",
    content:
      "The hill districts of Bangladesh offer some of the most spectacular mountain lake experiences in South Asia. These pristine waters, surrounded by lush green hills, provide the perfect setting for both adventure and relaxation. The growing eco-tourism industry here represents Bangladesh's commitment to sustainable travel and environmental conservation.",
  },
  {
    id: "historic-architecture",
    title: "Architectural Marvels",
    date: "March 5, 2011",
    image: "/images/photo_2025-06-08_17-44-27.jpg",
    excerpt: "Discovering the magnificent historic palaces and their perfect reflections...",
    content:
      "The historic palaces of Bangladesh stand as testaments to the country's rich architectural heritage. This particular palace, with its ornate design and perfect water reflection, represents the sophisticated craftsmanship of bygone eras. The combination of Mughal and colonial influences creates a unique architectural style that is distinctly Bangladeshi.",
  },
]
