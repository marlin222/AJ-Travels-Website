import etoshaImg        from '../../images/etosha.jpg'
import deadvleiImg      from '../../images/deadvlei.jpg'
import skeletonImg      from '../../images/skeleton.jpg'
import sandwichImg      from '../../images/sandwich_harbor.jpg'
import fishriverImg     from '../../images/fishriver.jpg'
import ruacanaImg       from '../../images/ruacana.jpg'
import caperossImg      from '../../images/cape_Cross.jpg'
import angolaImg        from '../../images/angola.jpeg'

/**
 * Destination data for the Destinations page, Home featured section,
 * and individual DestinationDetail pages.
 *
 * Namibian destinations are listed first as the company's home-market priority,
 * followed by Dubai and international destinations.
 * Pricing is tailored per enquiry, not listed — see Contact page.
 * Images sourced from Unsplash (specific photo IDs, 800×560, cropped).
 */
export const destinations = [

  /* ── NAMIBIA (home market – top priority) ── */
  {
    id: 1,
    name: 'Etosha National Park',
    tagline: "Namibia's Wildlife Crown",
    description:
      "One of Africa's great safari destinations — a vast salt pan surrounded by savanna and waterhole-studded bush, teeming with lions, elephants, black rhino, and hundreds of bird species.",
    image: etoshaImg,
    badge: 'Top Pick',
    badgeColor: 'bg-brand-orange',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '4 Days / 3 Nights',
    bestTimeToVisit: 'May – October (dry season, best wildlife viewing)',
    weather: 'Hot and dry in summer (30–40°C); mild winters (10–25°C). Very little rainfall May–Sep.',
    difficulty: 'Easy',
    highlights: [
      'Floodlit waterhole game viewing at night — lions, elephants and rhino',
      'Open 4×4 game drives at dawn and dusk',
      'Over 340 bird species including flamingos, martial eagles, and ostriches',
      'Spot all of the Big Five within the park boundaries',
      'Black rhino sightings at Okaukuejo waterhole after dark',
      'Etosha Pan salt flat views — one of the largest in the world',
    ],
    includes: [
      '3 nights lodge accommodation (sharing)',
      'Daily breakfast & dinner',
      'Morning & afternoon game drives',
      'Etosha National Park entry fees',
      'Experienced local guide',
      'Airport / hotel transfers',
    ],
    itinerary: [
      { day: '1', title: 'Arrival & Orientation', detail: 'Transfer from Windhoek; lodge check-in; afternoon waterhole game drive; sundowner; dinner.' },
      { day: '2', title: 'Full Safari Day', detail: 'Pre-dawn game drive; breakfast at camp; midday rest; afternoon drive to Okaukuejo; floodlit night waterhole.' },
      { day: '3', title: 'Etosha East & Anderson Gate', detail: "Explore eastern Etosha — Halali to Namutoni; Fischer's Pan for flamingos; evening drive." },
      { day: '4', title: 'Morning Drive & Departure', detail: 'Early sunrise game drive; pack breakfast; transfer back to Windhoek or Hosea Kutako Airport.' },
    ],
  },
  {
    id: 2,
    name: 'Sossusvlei & Dead Vlei',
    tagline: 'Dunes Touching the Sky',
    description:
      "The rust-red dunes of Sossusvlei rank among the tallest in the world. At Dead Vlei, ancient camel-thorn trees stand bleached white against apricot dunes and a cobalt sky — utterly unforgettable.",
    image: deadvleiImg,
    badge: 'Iconic',
    badgeColor: 'bg-amber-600',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '3 Days / 2 Nights',
    bestTimeToVisit: 'April – October (cooler temperatures for dune climbing)',
    weather: 'Extreme heat in summer (up to 45°C in the vlei); ideal climbing conditions Apr–Oct with mornings around 15–25°C.',
    difficulty: 'Moderate',
    highlights: [
      'Climb Big Daddy — one of the tallest dunes in the world at 325 m',
      'Photograph the ghost trees of Dead Vlei at golden hour',
      'Pre-dawn 4×4 convoy into the dune field',
      'Hidden Vlei and Hiddenvlei hiking trail',
      'Optional sunrise hot air balloon flight over the Namib',
      'Some of the darkest skies on Earth — incredible stargazing',
    ],
    includes: [
      '2 nights desert lodge or camp (sharing)',
      'Daily breakfast',
      'Guided dune walk at Sossusvlei & Dead Vlei',
      'NamibRand Nature Reserve entry fees',
      'Pre-dawn 4×4 transfer into the vlei',
      'All ground transfers',
    ],
    itinerary: [
      { day: '1', title: 'Arrival in the Namib', detail: 'Transfer from Windhoek (~5 hrs); check in to Sesriem camp or lodge; afternoon walk to Sesriem Canyon.' },
      { day: '2', title: 'Sossusvlei & Dead Vlei', detail: 'Pre-dawn 4×4 entry (gates open at sunrise); Big Daddy dune climb; Dead Vlei photography; afternoon rest; stargazing.' },
      { day: '3', title: 'Sunrise & Departure', detail: 'Optional final sunrise walk; breakfast; transfer back to Windhoek / onward destination.' },
    ],
  },
  {
    id: 3,
    name: 'Skeleton Coast',
    tagline: 'The Wildest Shore on Earth',
    description:
      "Fog-shrouded dunes cascade into the cold Atlantic, littered with shipwrecks and whale bones. The Skeleton Coast is raw, remote, and breathtakingly dramatic — a true wilderness frontier.",
    image: skeletonImg,
    badge: 'Remote',
    badgeColor: 'bg-slate-600',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '3 Days / 2 Nights',
    bestTimeToVisit: 'Year-round; May – October for clearer skies. Coastal fog occurs throughout the year.',
    weather: 'Cool and foggy year-round due to the Benguela Current (12–22°C). Pack layers even in summer.',
    difficulty: 'Moderate',
    highlights: [
      'Fly-in access over towering dune fields and fog-covered coastline',
      'Guided walk among historic shipwrecks and whale bones',
      'Desert-adapted lion, brown hyena and black-backed jackal sightings',
      'Cape fur seal colonies stretching for kilometres',
      'Ancient San rock art sites in the Hartmann Valley',
      'Completely undisturbed wilderness — no fences, no crowds',
    ],
    includes: [
      '2 nights luxury fly-in wilderness lodge (sharing)',
      'All meals (full board)',
      'Scenic charter flight from Swakopmund or Windhoek',
      'Guided coastal and inland excursions',
      'Skeleton Coast Park permits',
      'All transfers within the park',
    ],
    itinerary: [
      { day: '1', title: 'Fly-In Arrival', detail: 'Charter flight from Swakopmund; aerial views of dune fields; lodge check-in; afternoon guided coastal walk.' },
      { day: '2', title: 'Full Exploration Day', detail: 'Shipwreck beach walk; seal colony visit; afternoon inland drive seeking desert-adapted wildlife; sundowner on the dunes.' },
      { day: '3', title: 'Morning Excursion & Departure', detail: 'Early morning birdwatch or sunrise walk; breakfast; charter flight back.' },
    ],
  },
  {
    id: 4,
    name: 'Sandwich Harbour',
    tagline: 'Dunes Meet the Ocean',
    description:
      'Where Namib Desert dunes of over 100 metres plunge directly into the cold Benguela lagoon, creating one of the most surreal and photogenic landscapes on the African continent.',
    image: sandwichImg,
    badge: 'Overnight',
    badgeColor: 'bg-teal-600',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '2 Days / 1 Night',
    bestTimeToVisit: 'Year-round; tidal access varies — best with high guide. Winter (June–Aug) for flamingo flocks.',
    weather: 'Cool coastal climate year-round (14–24°C). Morning fog is common but lifts by mid-morning.',
    difficulty: 'Easy',
    highlights: [
      '4×4 tidal corridor drive between 100 m dunes and crashing Atlantic waves',
      'Flamingo and pelican flocks on the RAMSAR-protected lagoon',
      'Photography of impossible dune-meets-ocean landscapes',
      'Swakopmund town exploration: German colonial architecture & fresh seafood',
      'Sunset from atop a sand dune overlooking the Benguela Current',
      'Knowledgeable naturalist guide throughout',
    ],
    includes: [
      '1 night boutique guesthouse in Swakopmund (sharing)',
      'Breakfast & packed lunch',
      'Full-day Sandwich Harbour 4×4 guided excursion',
      'Walvis Bay lagoon birding stop',
      'Return transfer from Swakopmund',
    ],
    itinerary: [
      { day: '1', title: 'Swakopmund Arrival & Town', detail: 'Check in to guesthouse; explore Swakopmund\'s waterfront, deli lunch, and harbour; evening seafood dinner.' },
      { day: '2', title: 'Sandwich Harbour Excursion', detail: 'Early departure south; Walvis Bay flamingo stop; tidal 4×4 drive into the Harbour; dune summit picnic; return by late afternoon.' },
    ],
  },
  {
    id: 5,
    name: 'Fish River Canyon',
    tagline: "Africa's Grand Canyon",
    description:
      "The second-largest canyon in the world stretches 160 km through southern Namibia, plunging 550 metres deep. The classic five-day hiking trail is one of Africa's most rewarding adventures.",
    image: fishriverImg,
    badge: 'Adventure',
    badgeColor: 'bg-emerald-700',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '3 Days / 2 Nights',
    bestTimeToVisit: 'May – September (hiking season); canyon views are year-round',
    weather: 'Extreme summer heat (up to 50°C in canyon floor — hiking banned Nov–Mar). Winter is ideal: 5–25°C.',
    difficulty: 'Moderate to Challenging',
    highlights: [
      'Main viewpoint — 550 m sheer drop into one of the world\'s largest canyons',
      'Optional guided rim hike along the canyon edge',
      'Hot spring pools at Ai-Ais resort (seasonal)',
      'Isolated desert landscapes — quiver trees and desert-adapted flora',
      'Stargazing in one of Namibia\'s darkest sky regions',
      'Overnight at historic Ai-Ais Hot Springs Resort',
    ],
    includes: [
      '2 nights accommodation at Ai-Ais Hot Springs Resort (sharing)',
      'Daily breakfast',
      'Guided canyon rim walk',
      'Canyon viewpoint transfers',
      'Quiver Tree Forest stop (en route)',
      'All ground transfers from/to Keetmanshoop',
    ],
    itinerary: [
      { day: '1', title: 'Arrival via Quiver Tree Forest', detail: 'Drive south from Windhoek; stop at Quiver Tree Forest and Giants Playground; arrive at Ai-Ais by evening.' },
      { day: '2', title: 'Canyon Day', detail: 'Morning drive to Hobas main viewpoint; guided rim walk; return for afternoon at hot spring pools; sunset photography.' },
      { day: '3', title: 'Departure', detail: 'Optional early morning viewpoint visit; breakfast; depart Ai-Ais back to Windhoek or Keetmanshoop.' },
    ],
  },
  {
    id: 6,
    name: 'Ruacana Falls',
    tagline: 'Power of the Kunene',
    description:
      "In full flood, the Kunene River thunders 120 metres over a 700-metre-wide ledge at Ruacana — one of southern Africa's most powerful waterfalls, set in remote northern Namibia near the Angolan border.",
    image: ruacanaImg,
    badge: 'Hidden Gem',
    badgeColor: 'bg-blue-600',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '4 Days / 3 Nights',
    bestTimeToVisit: 'February – April (peak flood season for maximum water flow)',
    weather: 'Hot and humid near the Angolan border (25–38°C); brief afternoon storms during the rainy season (Jan–Apr).',
    difficulty: 'Easy',
    highlights: [
      'Ruacana Falls at peak flood — one of southern Africa\'s most powerful waterfalls',
      'Ovahimba village cultural visit in Kaokoveld',
      'Kunene River rafting option (seasonal)',
      'Remote Kaokoland landscapes — totally off the beaten track',
      'Epupa Falls on the Kunene, bordering Angola',
      'Night sky photography in zero light-pollution environment',
    ],
    includes: [
      '3 nights lodge and/or camping accommodation',
      'Daily breakfast & dinner',
      'Ruacana Falls and Epupa Falls guided visit',
      'Ovahimba cultural experience',
      'Experienced guide and 4×4 vehicle',
      'All ground transfers',
    ],
    itinerary: [
      { day: '1', title: 'Windhoek to Kaokoveld', detail: 'Long scenic drive north; remote Kaokoland entry; overnight at Opuwo lodge.' },
      { day: '2', title: 'Ovahimba & Epupa Falls', detail: 'Sunrise Ovahimba village visit; drive to Epupa Falls on the Kunene River; riverside camp.' },
      { day: '3', title: 'Ruacana Falls', detail: 'Drive east to Ruacana; viewpoints at the thundering falls; optional river activities.' },
      { day: '4', title: 'Return', detail: 'Morning depart; scenic drive back south via Outapi or Etosha area; end Windhoek.' },
    ],
  },
  {
    id: 7,
    name: 'Cape Cross Seal Reserve',
    tagline: 'A Million Seals & Counting',
    description:
      "Home to one of the world's largest Cape fur seal colonies — up to 200,000 seals gather here year-round. A raw, sensory, and utterly unique coastal wildlife experience on the Atlantic shore.",
    image: caperossImg,
    badge: 'Wildlife',
    badgeColor: 'bg-cyan-700',
    category: 'Namibia',
    country: 'Namibia',
    /* ── Detail page data ── */
    duration: '2 Days / 1 Night',
    bestTimeToVisit: 'November – January (pupping season — thousands of newborns); year-round for adults',
    weather: 'Cool and foggy coastal climate (12–22°C). The Benguela Current keeps temperatures mild year-round.',
    difficulty: 'Easy',
    highlights: [
      'Up to 200,000 Cape fur seals — one of the largest colonies on Earth',
      'Newborn pup season (Nov–Jan) — one of Africa\'s greatest wildlife spectacles',
      'Photography at close range from boardwalks',
      'Historic Portuguese Cross (original replica) from Diogo Cão\'s 1486 voyage',
      'Coastal drive north to Cape Cross along the Skeleton Coast',
      'Henties Bay surf fishing and seafood dinner',
    ],
    includes: [
      '1 night guesthouse accommodation near Henties Bay (sharing)',
      'Breakfast',
      'Cape Cross Seal Reserve guided visit & entry fee',
      'Return transport from Swakopmund',
      'Knowledgeable coastal guide',
    ],
    itinerary: [
      { day: '1', title: 'Coastal Drive North', detail: 'Depart Swakopmund; scenic salt road coastal drive; arrive Cape Cross; 2-hour seal colony visit with guide; overnight Henties Bay.' },
      { day: '2', title: 'Morning Coast & Return', detail: 'Early morning beach walk; seafood breakfast; return south via Swakopmund or Walvis Bay.' },
    ],
  },

  /* ── DUBAI ── */
  {
    id: 8,
    name: 'Dubai, UAE',
    tagline: 'City of the Future',
    description:
      'Soaring above desert sands, Dubai blends record-breaking architecture, world-class shopping, and ancient souks with Michelin-starred dining and year-round sunshine. Luxury, reimagined.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=560&fit=crop&q=80',
    badge: 'Luxury',
    badgeColor: 'bg-yellow-600',
    category: 'Middle East',
    country: 'UAE',
    /* ── Detail page data ── */
    duration: '6 Days / 5 Nights',
    bestTimeToVisit: 'November – March (cooler weather, 18–28°C ideal for outdoor activities)',
    weather: 'Sunny year-round. Peak summer (Jun–Aug) reaches 45°C. Nov–Mar is the perfect travel window.',
    difficulty: 'Easy',
    highlights: [
      'Burj Khalifa "At the Top" observation deck — world\'s tallest building',
      'Dune bashing and Bedouin camp dinner in the Arabian Desert',
      'Dubai Creek Show at sunset',
      'Gold Souk and Spice Souk walking tour with guide',
      'Sheikh Zayed Grand Mosque day trip in Abu Dhabi',
      'Complimentary luxury hotel upgrade on arrival',
    ],
    includes: [
      'Return economy flights from Windhoek (via Johannesburg)',
      '5 nights 5-star hotel (sharing)',
      'Daily breakfast',
      'Desert safari with Bedouin dinner',
      'Abu Dhabi Grand Mosque day trip',
      'All airport and city transfers',
    ],
    itinerary: [
      { day: '1', title: 'Dubai Arrival', detail: 'Overnight flight; check-in 5-star hotel; welcome dinner.' },
      { day: '2', title: 'Modern Dubai', detail: 'Burj Khalifa At the Top; Dubai Mall; Dubai Fountain show.' },
      { day: '3', title: 'Old Dubai & Desert', detail: 'Morning: Deira Gold & Spice Souks + Creek abra crossing; evening: desert safari with Bedouin camp dinner.' },
      { day: '4', title: 'Abu Dhabi Day Trip', detail: 'Sheikh Zayed Grand Mosque; Emirates Palace; optional Ferrari World.' },
      { day: '5', title: 'Leisure & Shopping', detail: 'Free morning; afternoon JBR beach or Mall of the Emirates; farewell dinner.' },
      { day: '6', title: 'Departure', detail: 'Hotel check-out; transfer to Dubai International Airport.' },
    ],
  },

  /* ── SOUTHERN AFRICA ── */
  {
    id: 9,
    name: 'Cape Town, South Africa',
    tagline: 'Where Mountains Meet the Sea',
    description:
      'Table Mountain rising above two oceans, world-class wine estates, pristine beaches, and the Cape Peninsula — Cape Town delivers one of the most complete travel experiences on the African continent.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=560&fit=crop&q=80',
    badge: 'Must-See',
    badgeColor: 'bg-brand-blue',
    category: 'Southern Africa',
    country: 'South Africa',
    /* ── Detail page data ── */
    duration: '7 Days / 6 Nights',
    bestTimeToVisit: 'October – April (Cape summer — warm, sunny, ideal for beaches and wine estates)',
    weather: 'Mediterranean climate: warm, dry summers (25–32°C); mild, wet winters (8–18°C). The "Cape Doctor" south-easterly wind is strongest in summer.',
    difficulty: 'Easy',
    highlights: [
      'Table Mountain cable car or hike — sweeping views across the Cape Peninsula',
      'Cape of Good Hope and Boulders Beach African penguin colony',
      'Wine tasting in Stellenbosch, Franschhoek, and Paarl wine estates',
      'Sunset cruise in Table Bay with views of Robben Island',
      'V&A Waterfront — vibrant harbour dining and entertainment',
      "Chapman's Peak coastal drive — one of the world's great scenic roads",
    ],
    includes: [
      'Return economy flights from Windhoek',
      '6 nights boutique hotel or guesthouse (sharing)',
      'Daily breakfast',
      'Cape Peninsula full-day guided tour',
      'Stellenbosch wine estate tour with tastings',
      'All airport and city transfers',
    ],
    itinerary: [
      { day: '1', title: 'Arrival & V&A Waterfront', detail: 'Flight from Windhoek; hotel check-in; V&A Waterfront harbour walk; welcome seafood dinner.' },
      { day: '2', title: 'Table Mountain', detail: 'Morning cable car ascent; Table Mountain summit walk; afternoon Bo-Kaap Cape Malay quarter; Signal Hill sunset.' },
      { day: '3', title: 'Cape Peninsula', detail: "Chapman's Peak Drive; Cape of Good Hope; Boulders Beach penguins; Kalk Bay fishing village." },
      { day: '4', title: 'Stellenbosch Wine Route', detail: 'Full-day guided wine estate tour through Stellenbosch and Franschhoek; cellar tours; cheese pairings.' },
      { day: '5', title: 'Robben Island & City', detail: "Robben Island guided tour (Nelson Mandela's cell); afternoon free for shopping or museum visits." },
      { day: '6', title: 'Leisure & Sunset Cruise', detail: 'Morning Constantia wine valley; afternoon sunset cruise in Table Bay; farewell waterfront dinner.' },
      { day: '7', title: 'Departure', detail: 'Hotel check-out; transfer to Cape Town International Airport; flight back to Windhoek.' },
    ],
  },

  /* ── EAST AFRICA ── */
  {
    id: 10,
    name: 'Zanzibar, Tanzania',
    tagline: 'Spice Island Perfection',
    description:
      "Ancient Arab trading ports, clove-scented air, and powder-white beaches lapped by the warm Indian Ocean — Zanzibar is Tanzania's most seductive and storied island escape.",
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=560&fit=crop&q=80',
    badge: 'Island Escape',
    badgeColor: 'bg-cyan-600',
    category: 'East Africa',
    country: 'Tanzania',
    /* ── Detail page data ── */
    duration: '8 Days / 7 Nights',
    bestTimeToVisit: 'June – October and December – February (dry seasons; calm Indian Ocean for snorkelling)',
    weather: 'Tropical: warm year-round (26–32°C). Two dry seasons (Jun–Oct and Dec–Feb). Long rains Mar–May; short rains Nov.',
    difficulty: 'Easy',
    highlights: [
      'Stone Town UNESCO World Heritage city — Swahili architecture and spice trade history',
      'Spice plantation tour — cloves, vanilla, cinnamon, and cardamom in their natural habitat',
      'Pristine Nungwi and Kendwa beaches on the northern tip',
      'Snorkelling and diving on Mnemba Atoll coral reef — turtles, dolphins, and reef fish',
      'Traditional dhow sunset cruise on the Indian Ocean',
      'Jozani Forest — Zanzibar red colobus monkeys, endemic to the island',
    ],
    includes: [
      'Return economy flights from Windhoek (via Nairobi or Dar es Salaam)',
      '7 nights beachfront lodge or boutique hotel (sharing)',
      'Daily breakfast',
      'Stone Town guided spice and history tour',
      'Snorkelling excursion at Mnemba Atoll',
      'All airport and island transfers',
    ],
    itinerary: [
      { day: '1–2', title: 'Arrival & Stone Town', detail: 'Overnight flight; arrive Zanzibar International; guided Stone Town walking tour; rooftop Swahili dinner.' },
      { day: '3', title: 'Spice Tour & Beach', detail: 'Morning spice plantation tour; afternoon transfer north to Nungwi beach; sunset dhow cruise.' },
      { day: '4', title: 'Mnemba Atoll Snorkelling', detail: 'Full-day boat excursion to Mnemba Atoll; snorkelling with turtles and reef fish; dolphin spotting; beach BBQ lunch.' },
      { day: '5', title: 'Kendwa Beach', detail: 'Free beach day; optional sea kayaking, windsurfing, or quad biking; evening beach bonfire.' },
      { day: '6', title: 'Jozani Forest', detail: 'Guided Jozani Forest walk for Zanzibar red colobus monkeys and mangrove boardwalk.' },
      { day: '7', title: 'Leisure', detail: 'Final full day — sunrise yoga, beach breakfast, snorkel, hammock; farewell seafood dinner.' },
      { day: '8', title: 'Departure', detail: 'Transfer to Zanzibar International Airport; connecting flight home.' },
    ],
  },

  /* ── MOZAMBIQUE ── */
  {
    id: 11,
    name: 'Bazaruto Archipelago, Mozambique',
    tagline: 'Untouched Indian Ocean Paradise',
    description:
      "Five pristine islands floating in a turquoise marine national park — Bazaruto is Mozambique's crown jewel, where dugongs, manta rays, and flamingos share the most spectacular coastal wilderness in East Africa.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=560&fit=crop&q=80',
    badge: 'Remote',
    badgeColor: 'bg-teal-600',
    category: 'East Africa',
    country: 'Mozambique',
    /* ── Detail page data ── */
    duration: '7 Days / 6 Nights',
    bestTimeToVisit: 'April – November (dry season — clear skies, calm seas, best visibility for diving)',
    weather: 'Tropical coastal: warm year-round (26–32°C). Dry season Apr–Nov; wet season Dec–Mar. Cyclone risk Jan–Mar.',
    difficulty: 'Easy',
    highlights: [
      'Snorkelling and scuba diving in Bazaruto Marine National Park — dugongs, whale sharks, and manta rays',
      'Ilha de Bazaruto — towering dunes, freshwater lakes, and remote ocean beaches',
      'Deep-sea fishing for marlin, sailfish, and wahoo',
      'Pink flamingo flocks on the sheltered lagoon shores',
      'Traditional Mozambican seafood — piri piri prawns and lobster on the beach',
      'Horse riding on the beach at low tide',
    ],
    includes: [
      'Return flights from Windhoek (via Johannesburg or Maputo)',
      'Bush plane transfer to Bazaruto Island',
      '6 nights island lodge (sharing)',
      'All meals (full board)',
      'Snorkelling excursion and marine park fees',
      'All transfers',
    ],
    itinerary: [
      { day: '1', title: 'Arrival & Island Transfer', detail: 'Fly to Vilanculos; bush plane to Bazaruto; lodge check-in; welcome sundowner; fresh seafood dinner.' },
      { day: '2', title: 'Marine Park Snorkelling', detail: 'Guided snorkel trip to Two-Mile Reef; dugong spotting; dolphin encounter; afternoon beach leisure.' },
      { day: '3', title: 'Ilha de Bazaruto', detail: 'Explore the island interior — freshwater lakes, sand dunes, and indigenous forest; flamingo lagoon visit.' },
      { day: '4', title: 'Diving or Fishing', detail: 'Optional scuba diving or deep-sea fishing excursion; afternoon horse riding on the beach at low tide.' },
      { day: '5', title: 'Benguerra Island', detail: 'Day trip to neighbouring Benguerra — undisturbed beaches and pristine coral gardens; bush picnic lunch.' },
      { day: '6', title: 'Leisure & Farewell', detail: 'Final full day — beach sunrise, snorkel, hammock; piri piri lobster farewell dinner.' },
      { day: '7', title: 'Departure', detail: 'Bush plane to Vilanculos; connecting flights home.' },
    ],
  },

  /* ── ANGOLA ── */
  {
    id: 12,
    name: 'Angola',
    tagline: "Africa's Undiscovered Giant",
    description:
      "From the thundering Kalandula Falls — one of Africa's largest waterfalls — to the surreal Namibe Desert coast and the vibrant capital Luanda, Angola is Africa's last great undiscovered travel frontier.",
    image: angolaImg,
    badge: 'Off the Beaten Track',
    badgeColor: 'bg-amber-700',
    category: 'West Africa',
    country: 'Angola',
    /* ── Detail page data ── */
    duration: '8 Days / 7 Nights',
    bestTimeToVisit: 'May – October (dry season — best for Kalandula Falls and wildlife)',
    weather: 'Varies by region: Luanda coast is warm year-round (26–32°C); interior highlands are cooler (18–28°C). Dry season May–Oct.',
    difficulty: 'Moderate',
    highlights: [
      'Kalandula Falls — one of Africa\'s largest waterfalls by volume, plunging 105 m',
      'Namibe Desert coastal flamingo flocks at Arcos de Mucungo',
      'Tundavala Gap — a 1,000-metre cliff edge overlooking the Huíla escarpment',
      'Colonial Luanda waterfront — Ilha de Luanda and Bay of Luanda sunset cruise',
      'Giant Sable antelope (Angola\'s national animal) in Cangandala Reserve',
      'Traditional Mucubal village cultural encounter',
    ],
    includes: [
      'Return economy flights from Windhoek to Luanda',
      '7 nights hotels and lodges (sharing)',
      'Daily breakfast',
      'Kalandula Falls guided excursion',
      'Namibe Desert and coast day tour',
      'All airport and ground transfers',
    ],
    itinerary: [
      { day: '1', title: 'Luanda Arrival', detail: 'Short flight from Windhoek to Luanda; hotel check-in; Marginal waterfront walk; welcome dinner.' },
      { day: '2', title: 'Luanda City & Ilha', detail: 'Luanda city tour — Fortress of São Miguel, Old Town, Ilha de Luanda seafood lunch; sunset bay cruise.' },
      { day: '3', title: 'Kalandula Falls', detail: 'Drive inland to Malanje; guided visit to Kalandula Falls; afternoon Pungo Andongo Black Rocks.' },
      { day: '4', title: 'Cangandala Reserve', detail: 'Morning game drive in Cangandala seeking the Giant Sable antelope; overnight Malanje lodge.' },
      { day: '5', title: 'Namibe Desert', detail: 'Fly or drive south to Namibe; Arcos de Mucungo flamingo lagoon; Namibe Desert red dunes.' },
      { day: '6', title: 'Tundavala Gap & Lubango', detail: 'Drive to Lubango; Tundavala Gap escarpment cliff views; Serra da Leba mountain pass.' },
      { day: '7', title: 'Mucubal Village & Leisure', detail: 'Traditional Mucubal village cultural visit; return to Luanda; farewell dinner.' },
      { day: '8', title: 'Departure', detail: 'Transfer to Quatro de Fevereiro International Airport; flight back to Windhoek.' },
    ],
  },
]
