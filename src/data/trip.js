// ─────────────────────────────────────────────────────────────
//  DRAGON'S TRAIL — 7 days across China on a ₹1,00,000 budget
//  All prices in ₹ (INR). ¥1 ≈ ₹11.8 (rate used throughout).
// ─────────────────────────────────────────────────────────────

export const CNY = 11.8 // ₹ per ¥1

export const meta = {
  title: "Dragon's Trail",
  subtitle: 'Seven Days Across China',
  tagline: 'Beijing · Xi’an · Shanghai',
  blurb:
    'Three thousand years of empire, one bullet train, and a shoestring that somehow stretches from the Great Wall to the Shanghai skyline — all inside ₹1,00,000, flights included.',
  totalBudget: 100000,
  days: 7,
  cities: 3,
  unescoSites: 6,
  kmTravelled: 12600,
  season: 'Best run: late March – mid May, or late September – early November',
  heroWiki: ['Great Wall of China', 'Mutianyu'],
}

export const cities = [
  {
    id: 'beijing',
    name: 'Beijing',
    hanzi: '北京',
    pinyin: 'Běijīng',
    nights: '2 nights + 1 night train',
    days: 'Days 1–3',
    color: '#f8451a',
    wiki: ['Forbidden City', 'Hall of Supreme Harmony'],
    coords: { x: 74, y: 33 },
    oneLiner: 'Imperial capital. Six centuries of emperors, grey hutong alleys, and the Wall on its doorstep.',
    knownFor: ['Forbidden City', 'Great Wall at Mutianyu', 'Peking duck', 'Hutong lanes'],
    stayArea: 'Qianmen / Dashilan — walkable to Tiananmen, on Metro Line 2, hutongs at your door.',
  },
  {
    id: 'xian',
    name: "Xi'an",
    hanzi: '西安',
    pinyin: 'Xī’ān',
    nights: '1 night',
    days: 'Days 4–5',
    color: '#e0a33a',
    wiki: ['Terracotta Army'],
    coords: { x: 61, y: 47 },
    oneLiner: 'Where the Silk Road began and 8,000 clay soldiers have been standing guard for 2,200 years.',
    knownFor: ['Terracotta Army', 'City Wall cycle', 'Muslim Quarter food street', 'Great Mosque'],
    stayArea: 'Inside the City Wall, near the Bell Tower — 5 minutes from the Muslim Quarter.',
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    hanzi: '上海',
    pinyin: 'Shànghǎi',
    nights: '2 nights',
    days: 'Days 5–7',
    color: '#12b886',
    wiki: ['The Bund', 'Pudong'],
    coords: { x: 80, y: 52 },
    oneLiner: 'The future, with a 1920s accent. Art-deco riverfront on one bank, sci-fi skyline on the other.',
    knownFor: ['The Bund', 'Shanghai Tower', 'Yu Garden', 'Zhujiajiao water town'],
    stayArea: "Jing'an or People's Square — central, safe, two metro lines, walkable to the Bund.",
  },
]

// ── DAY-BY-DAY ────────────────────────────────────────────────
export const days = [
  {
    n: 1,
    city: 'beijing',
    date: 'Day 1',
    title: 'Straight Up the Central Axis',
    subtitle: 'Land → Peking duck → Tiananmen → Forbidden City → Jingshan sunset → hutongs → Wangfujing',
    wiki: ['Forbidden City', 'Tiananmen Square'],
    accent: '#f8451a',
    hotelId: 'beijing',
    stayCost: 2400,
    stay: 'Qianmen hutong hostel / 3★',
    walkKm: 9.6,
    spend: 5090,
    highlight:
      'Walking out of the Forbidden City’s north gate, crossing one road, and climbing fifteen minutes to watch the sun set over 980 golden roofs you were standing inside twenty minutes earlier.',
    blocks: [
      { time: '21:30', icon: 'plane', wiki: ['Chhatrapati Shivaji Maharaj International Airport'], title: 'Depart Mumbai T2 (the night before)', detail: 'There is no non-stop from Mumbai to Beijing, so you fly one-stop — Hong Kong, Bangkok or Kuala Lumpur are the sensible hubs, and the overnight departure is the one that protects your first day. Book 8–10 weeks out on a Tue/Wed for the ₹36–40k round-trip open-jaw (into Beijing PEK, out of Shanghai PVG).', cost: 0, tag: 'Flight' },
      { time: '05:15', icon: 'plane', wiki: ['Hong Kong International Airport'], title: 'Connect at the hub — 1h 45m on the ground', detail: 'Long enough to be safe, short enough that you are not sleeping in a terminal. Stay airside, do not collect bags — book it as ONE ticket so the connection is the airline’s problem, not yours.', cost: 0, tag: 'Transit' },
      { time: '10:15', icon: 'plane', wiki: ['Beijing Capital International Airport'], title: 'Land Beijing Capital (PEK), Terminal 3', detail: 'China is +2h30 ahead of IST — roughly 12h 25m door to door. Indians currently get 30-day visa-free entry, but carry a printed hotel booking and return ticket. Immigration takes 30–50 min; a self-serve kiosk fingerprints you first.', cost: 0, tag: 'Arrival' },
      { time: '11:00', icon: 'wifi', title: 'Switch on the eSIM, wake up Alipay', detail: 'Activate the international eSIM you bought before flying (it roams via Hong Kong, so it tunnels straight past the Great Firewall — Google Maps, WhatsApp and Instagram just work). Then open Alipay → Tour Pass and bind your Visa card. This is now your wallet: China is functionally cashless.', cost: 0, tag: 'Setup' },
      { time: '11:40', icon: 'train', wiki: ['Capital Airport Express', 'Beijing Subway'], title: 'Airport Express → Dongzhimen → Line 2 → Qianmen', detail: 'Buy a Yikatong transit card at the station (¥20 deposit, refundable) or just scan the Alipay transit QR. Airport Express ¥25, 20 min, then Line 2 around the old city wall to Qianmen. About 70 minutes door to door.', cost: 460, tag: 'Transport' },
      { time: '12:50', icon: 'bed', title: 'Drop bags at the hotel', detail: 'Check-in is 14:00 but every Beijing hotel will hold luggage. You are staying in Qianmen — 900 m south of Tiananmen, at the bottom of the Central Axis you are about to walk all the way up.', cost: 0, tag: 'Stay' },
      { time: '13:10', icon: 'food', wiki: ['Peking duck'], title: 'Peking duck at Siji Minfu (Qianmen branch)', detail: 'The locals’ answer to Quanjude, at half the price, and a five-minute walk from the hotel. A whole duck is ¥208 and feeds two comfortably — crisp lacquered skin dipped in caster sugar first, then meat rolled in pancakes with scallion and sweet bean sauce. Take a queue ticket the moment you arrive; the wait is 40 min at peak. Doing the duck now, on day one, means it is never the thing you ran out of days for.', cost: 1250, tag: 'Must-eat' },
      { time: '14:30', icon: 'landmark', wiki: ['Tiananmen Square'], title: 'Tiananmen Square', detail: 'Free, but you MUST reserve a passport-linked slot on the official WeChat mini-program 1–7 days ahead — walk-ups are turned away. Security is airport-grade. The square is 440,000 m²: Monument to the People’s Heroes in the middle, Mao’s Mausoleum south, the Great Hall of the People west, the National Museum east. Walk north through it toward the Gate of Heavenly Peace.', cost: 0, tag: 'Book ahead' },
      { time: '15:15', icon: 'museum', wiki: ['National Museum of China'], title: 'Add-on: National Museum of China', detail: 'On the east side of the square, free with a passport booking, and genuinely world-class — 1.4 million objects, with the Houmuwu bronze ding and the jade burial suits in the "Ancient China" basement. BUT: it needs 90 minutes minimum, last entry is 16:00, and taking it today costs you the Jingshan sunset. Do it only if your flight landed early, or on a return trip. The honest call on a seven-day itinerary is to skip it.', cost: 0, tag: 'Optional', optional: true },
      { time: '15:20', icon: 'crown', wiki: ['Forbidden City'], title: 'The Forbidden City', detail: 'Enter at the Meridian Gate (Wumen) — last admission is 16:00, so this is the hard deadline of your day. It is one-way: Gate of Supreme Harmony → the Three Great Halls on their triple marble terrace → Palace of Heavenly Purity → Imperial Garden → out at the Gate of Divine Prowess (Shenwumen). Two and a bit hours at pace. If you have time in hand, cut east into the Treasure Gallery (¥10) for the Nine Dragon Screen. 9,000 rooms, 24 emperors, 1420–1912.', cost: 830, tag: 'UNESCO' },
      { time: '17:40', icon: 'mountain', wiki: ['Jingshan Park'], title: 'Jingshan Park — the view that makes the day', detail: '¥2, and it is directly across the road from the exit you just walked out of. Fifteen minutes up an artificial hill built from the earth dug out of the palace moat, and from the Wanchun Pavilion the entire Forbidden City unrolls south beneath you in perfect symmetry, roof after golden roof, with the Beijing skyline stacked behind. Come at sunset and you share it with a crowd; it is still the single best view in the city.', cost: 30, tag: 'Best view' },
      { time: '18:40', icon: 'walk', wiki: ['Nanluoguxiang', 'Hutong'], title: 'Hutong lanes — Nanluoguxiang & the Shichahai alleys', detail: 'Walk north-east off Jingshan into the real grey-brick grid. Nanluoguxiang is the famous one — 800 years old, now busy and commercial — so use it as a spine and duck into the quieter side hutongs running off it: Mao’er, Ju’er, Qianyuan’ensi. Grandmothers playing xiangqi, courtyard doors with their original stone drums, laundry over the lanes. Keep walking west and you hit the Shichahai lakes and the Drum and Bell Towers.', cost: 0, tag: 'Free' },
      { time: '19:45', icon: 'moon', wiki: ['Wangfujing'], title: 'Wangfujing night walk', detail: 'Metro two stops south-east, or a ¥20 Didi. Beijing’s big pedestrian shopping street at full neon: the flagship Xinhua bookstore, the old Wangfujing snack lanes, tanghulu (candied hawthorn on a stick) from a cart, and the Oriental Plaza windows. A gentle, lit, entirely undemanding end to a day that started on an aeroplane.', cost: 120, tag: 'Night' },
      { time: '21:15', icon: 'bed', title: 'Line 1 → Line 2 back to Qianmen, and sleep', detail: 'Twelve minutes on the metro. You have been awake for about 26 hours and covered nine and a half kilometres on foot. Tomorrow starts at 06:15.', cost: 0, tag: 'Rest' },
    ],
    tips: [
      'Two separate passport-linked bookings are needed for today and they are the thing people get wrong: Tiananmen Square (1–7 days ahead) and the Forbidden City (exactly 7 days ahead, released 20:00 China time). Book the Forbidden City AFTERNOON slot.',
      'The Forbidden City’s last admission is 16:00 — earlier than most people expect. If your flight is delayed past 14:30, swap the Forbidden City to tomorrow morning and move the Temple of Heaven to Day 3.',
      'It is one-way through the palace, north only. Do the Treasure Gallery before you drift toward the Imperial Garden or you will exit at Shenwumen and have to pay again.',
      'Beijing tap water is not drinkable. Every hotel floor has a boiled-water dispenser; carry a 1 L flask and you will never buy a bottle.',
    ],
    eat: ['Peking duck', 'Tanghulu', 'Wangfujing street snacks'],
  },

  {
    n: 2,
    city: 'beijing',
    date: 'Day 2',
    title: 'Dawn Ritual, Imperial Garden, Olympic Neon',
    subtitle: 'Temple of Heaven at sunrise → Summer Palace → Bird’s Nest & Water Cube lit up → sesame hotpot',
    wiki: ['Temple of Heaven', 'Summer Palace'],
    accent: '#e12d0d',
    hotelId: 'beijing',
    stayCost: 2400,
    stay: 'Qianmen hutong hostel / 3★',
    walkKm: 14.8,
    spend: 4960,
    highlight:
      'Six-forty-five in the Temple of Heaven park, where a sixty-strong choir is belting revolutionary songs, couples are ballroom-dancing under the cypresses, and men are hanging upside down from the trees. The building is the postcard; this is the reason to come early.',
    blocks: [
      { time: '06:15', icon: 'food', wiki: ['Jianbing'], title: 'Breakfast: jianbing from the cart', detail: 'A crêpe of mung-bean batter cracked with an egg, painted with chilli and fermented bean paste, folded around a sheet of shattering fried cracker. ¥8. Point at what the person ahead of you got.', cost: 100, tag: 'Street food' },
      { time: '06:45', icon: 'landmark', wiki: ['Temple of Heaven'], title: 'Temple of Heaven — enter by the East Gate', detail: 'The park opens at 06:00 and the halls at 08:00, and the gap is the whole point: this is Beijing’s living room at its best hour. Then walk the raised Danbi Bridge north to the Hall of Prayer for Good Harvests — a triple-eaved cobalt-blue rotunda built in 1420, 38 m tall, and assembled without a single nail. Buy the ¥34 through-ticket, not the ¥15 park-only.', cost: 420, tag: 'UNESCO' },
      { time: '09:30', icon: 'train', wiki: ['Beijing Subway'], title: 'Cross the city: Line 5 → Line 10 → Line 4 to Beigongmen', detail: 'The long transit of the trip — about 75 minutes and ¥6 from the far south of the city to the far north-west. Sit down, charge your phone, eat the second jianbing you should have bought. Get out at Beigongmen for the Summer Palace’s North Palace Gate, which puts you at the quiet back entrance rather than the coach-park one.', cost: 60, tag: 'Transport' },
      { time: '11:00', icon: 'crown', wiki: ['Summer Palace'], title: 'The Summer Palace', detail: '¥60 through-ticket. Three-quarters of it is water. Enter at the north gate, come down over Longevity Hill past the Tower of Buddhist Incense, then walk the Long Corridor — 728 m of covered walkway with 14,000 individually painted scenes — along the shore of Kunming Lake to the Marble Boat. This was where the Qing court escaped the summer, and Cixi famously rebuilt it with money earmarked for the navy. Give it three hours; it is enormous and it deserves them.', cost: 710, tag: 'UNESCO' },
      { time: '13:00', icon: 'food', title: 'Lunch by Kunming Lake', detail: 'Tingliguan ("Listening to Orioles") inside the grounds is the atmospheric option and priced accordingly; the canteen near the Suzhou Street bridge does a good ¥40 bowl of noodles. Then take the ¥15 ferry across the lake to the Seventeen-Arch Bridge and the bronze ox rather than walking around it.', cost: 450, tag: 'Local' },
      { time: '15:30', icon: 'train', wiki: ['Beijing Subway'], title: 'Line 4 → Line 10 → Line 8 to Olympic Green', detail: 'About 55 minutes east across the top of the city. You are heading for the 2008 Olympic Park, which sits on the northern end of the same Central Axis you walked up yesterday — the line runs from the Temple of Heaven in the south, through Tiananmen and the Forbidden City, to the Bird’s Nest. Seven hundred years of city planning, one straight line.', cost: 60, tag: 'Transport' },
      { time: '16:45', icon: 'walk', wiki: ['Olympic Green'], title: 'Olympic Green — arrive in daylight first', detail: 'Free and enormous. Walk the plaza between the two buildings while it is still light so you get them both in daylight and again lit, then find the Olympic Tower and the dragon-shaped water feature. There is a food court under the plaza if you want a snack to hold you to the hotpot.', cost: 0, tag: 'Free' },
      { time: '18:30', icon: 'sparkles', wiki: ['Beijing National Stadium'], title: 'Bird’s Nest & Water Cube lit up', detail: 'The reason you came at this hour. The Bird’s Nest — 42,000 tonnes of interwoven steel by Herzog & de Meuron — glows red from inside its lattice. Two hundred metres away the Water Cube’s ETFE bubble skin cycles through blues, purples and greens on a slow loop. Exteriors are free and the plaza between them is the shot. Going inside the stadium is ¥80 and honestly unnecessary.', cost: 0, tag: 'Iconic' },
      { time: '19:40', icon: 'train', wiki: ['Beijing Subway'], title: 'Line 8 straight home to Qianmen', detail: 'One of the great conveniences of Beijing: Line 8 runs directly down the Central Axis from Olympic Green to Qianmen with no changes. Thirty-five minutes, ¥5.', cost: 40, tag: 'Transport' },
      { time: '20:20', icon: 'food', wiki: ['Instant-boiled mutton', 'Hot pot'], title: 'Beijing sesame hotpot (shuàn yángròu)', detail: 'Not the fiery Sichuan version — the Beijing one, and the sesame is the point. A brass chimney pot of clear broth with ginger and jujube arrives at the table; you swirl paper-thin hand-cut mutton for eight seconds and drop it into a bowl of sesame paste you mix yourself with fermented bean curd, chive flower sauce, coriander and chilli oil. Julong Zhai or Nanmen Shuan Rou are the old names. ₹700 a head with beer, and exactly what 15 km of walking has earned you.', cost: 720, tag: 'Must-eat' },
      { time: '22:00', icon: 'bed', title: 'Back to the hotel — repack tonight', detail: 'Tomorrow you leave for the Wall at 06:40 and board a night train at 20:37, so split your luggage now: daypack for the Wall, big bag left at reception.', cost: 0, tag: 'Rest' },
    ],
    tips: [
      'Go to the Temple of Heaven for the park, not just the hall. Between 06:00 and 08:00 it is the best free show in Beijing, and after 09:00 it is simply a nice building with a queue.',
      'The Summer Palace is 2.9 km² and mostly lake — wear the good shoes and use the ¥15 ferry rather than walking the far shore.',
      'Check the sunset time before you set the Olympic Park slot: Beijing goes dark around 19:30 in June but 17:00 in December. Arrive an hour before, whenever that is.',
      'Line 8 goes Olympic Green → Qianmen without a change, which is why the hotpot is booked near the hotel and not near the stadium.',
    ],
    eat: ['Sesame hotpot (shuàn yángròu)', 'Jianbing', 'Kunming Lake noodles'],
  },

  {
    n: 3,
    city: 'beijing',
    date: 'Day 3',
    title: 'The Great Wall, Then a Night Train',
    subtitle: 'Mutianyu ridgeline → toboggan down → back to Beijing → overnight sleeper to Xi’an',
    wiki: ['Mutianyu', 'Great Wall of China'],
    accent: '#8f1b12',
    hotelId: null,
    stayCost: 0,
    stay: 'Overnight soft-sleeper train Z19 — no hotel bill tonight',
    walkKm: 10.4,
    spend: 7430,
    highlight:
      'Watchtower 20 at 09:40, before the tour buses arrive, with the Wall snaking off into green mountains in both directions and nobody else in the frame.',
    blocks: [
      { time: '05:45', icon: 'bed', title: 'Check out, leave the big bag at reception', detail: 'You are on a night train tonight, so travel light to the Wall — daypack, 2 L water, layers. The hotel will hold the main bag until 19:00 free of charge; confirm this when you check in on Day 1.', cost: 0, tag: 'Logistics' },
      { time: '06:40', icon: 'bus', wiki: ['Huairou District'], title: 'Bus 916 Express: Dongzhimen → Huairou', detail: 'The cheapest honest way to the Wall — ¥12, 70 minutes, air-conditioned. At Huairou Beidajie, switch to the h23/h24 local bus or split a taxi (¥40 for the car) the last 12 km to Mutianyu. Ignore the men shouting "Great Wall! Great Wall!" at the bus door — they will quote ¥400.', cost: 340, tag: 'Transport' },
      { time: '08:45', icon: 'mountain', wiki: ['Mutianyu', 'Great Wall of China'], title: 'Mutianyu Great Wall — ticket + cable car up', detail: 'Mutianyu over Badaling, always: 2,250 m of fully restored Ming wall, 22 watchtowers, forested mountains on both sides, and a third of the crowd. Entry ¥45, shuttle ¥15, cable car ¥100 one-way. Take the cable car UP to Watchtower 14 and save your legs for the ridgeline.', cost: 1890, tag: 'UNESCO' },
      { time: '09:30', icon: 'walk', wiki: ['Great Wall of China'], title: 'Hike Tower 14 → 20 → 23, the "Heavenly Ladder"', detail: 'Turn LEFT (west) at the top — the crowds all turn right. Towers 14→20 is a gorgeous rolling walk. Between 19 and 20 the Wall rears up into a near-vertical 45° staircase; past Tower 20 the restoration stops and you can see the raw, crumbling wild wall running off toward Jiankou. Two hours return, and the single best ninety minutes of the trip.', cost: 0, tag: 'Adventure' },
      { time: '12:15', icon: 'zap', wiki: ['Alpine slide', 'Mutianyu'], title: 'Toboggan back down', detail: 'A 1,580 m stainless-steel luge from Tower 6 to the base, included in the ticket you already bought. You control the brake. It is unapologetically silly and you will grin the entire way. Do not get stuck behind a nervous rider — leave a gap at the top.', cost: 0, tag: 'Fun' },
      { time: '13:00', icon: 'food', wiki: ['Rainbow trout', 'Chinese cuisine'], title: 'Lunch in Mutianyu village', detail: 'The farmhouse restaurants at the base do a proper nongjia meal — trout from the mountain stream, stir-fried wild greens, hand-rolled noodles, ¥60–80 a head. Xiaolongfeng, or The Schoolhouse if you want a pricier, excellent sit-down.', cost: 780, tag: 'Local' },
      { time: '14:30', icon: 'bus', title: 'Return to Beijing', detail: 'Reverse the 916 Express. Back at Dongzhimen by about 16:30. Sleep on the bus — you have a night train ahead and it is not the restful kind.', cost: 340, tag: 'Transport' },
      { time: '17:00', icon: 'bed', title: 'Collect the bag, shower, regroup', detail: 'Back to the hotel for the big bag. Most will let you use a day-use bathroom for ¥30 even after checkout — take it. Eleven hours in a sleeper compartment is much better begun clean.', cost: 0, tag: 'Practical' },
      { time: '18:30', icon: 'food', wiki: ['Beijing railway station'], title: 'Dinner near Beijing Railway Station', detail: 'Eat properly before you board — the dining car is grim. Then stock the sleeper: instant noodles (every carriage has a boiling-water tap), fruit, water, a beer.', cost: 420, tag: 'Refuel' },
      { time: '20:37', icon: 'train', wiki: ['Sleeping car', 'China Railway'], title: 'Board Z19 — overnight soft sleeper to Xi’an', detail: 'Four berths per lockable compartment, clean bedding, a door that shuts. Departs 20:37, arrives Xi’an 08:30 — eleven hours and fifty minutes that cost you a hotel night AND a travel day. ¥310 soft sleeper. Book on Trip.com 15+ days out; take a lower berth if you can, the upper has no headroom.', cost: 3660, tag: 'Sleep saver' },
      { time: '22:00', icon: 'moon', title: 'Lights out at 22:00 sharp', detail: 'Chinese sleeper carriages kill the lights on the dot. Bring an eye mask and earplugs, keep your passport and phone in the pillowcase, and let 1,200 km of North China slide past in the dark.', cost: 0, tag: 'Sleep' },
    ],
    tips: [
      'The Wall has no shade and no shops past Tower 14. Two litres of water minimum, sunscreen, and shoes with real grip — those Ming steps are 20–35 cm high and polished slick.',
      'Cable car up + toboggan down is the sweet spot. Walking up costs you 45 minutes and both quads.',
      'Today has slack built in on purpose between 17:00 and 18:30. Resist the urge to fill it — you are about to sleep on a train.',
      'Chinese rail tickets are passport-linked. Collect at a station window or use the passport itself at the e-gate; there is no printout to lose.',
    ],
    eat: ['Nongjia farmhouse trout', 'Train-carriage instant noodles (a rite of passage)'],
  },

  {
    n: 4,
    city: 'xian',
    date: 'Day 4',
    title: "Eight Thousand Soldiers, One City Wall",
    subtitle: 'Terracotta Army → golden-hour cycle on the ramparts → Muslim Quarter food crawl',
    wiki: ['Terracotta Army'],
    accent: '#e0a33a',
    hotelId: 'xian',
    stayCost: 2300,
    stay: "Boutique hotel inside the City Wall, near the Bell Tower",
    walkKm: 13.5,
    spend: 7010,
    highlight: 'Standing at the rail of Pit 1 for the first time. Photographs do not prepare you for the scale — 6,000 figures, every face different, in a hangar the length of two football pitches.',
    blocks: [
      { time: '08:30', icon: 'train', wiki: ["Xi'an"], title: 'Arrive Xi’an, drop bags', detail: 'Metro Line 4 from the station, or a ¥20 Didi to a hotel inside the City Wall. Rooms will not be ready — leave the bags, take a shower if they offer a day-use bathroom (many do for ¥30, and after a night train it is the best ₹350 of the trip).', cost: 240, tag: 'Logistics' },
      { time: '09:00', icon: 'food', wiki: ["Rou jia mo"], title: 'Breakfast in the Muslim Quarter', detail: 'Roujiamo — the "Chinese hamburger", 2,000 years older than the other kind: slow-braised cumin lamb chopped with green chilli and stuffed into a griddled flatbread, ¥12. Chase it with hulatang, a peppery, thick beef-and-vegetable breakfast stew. The Hui Muslim community has been cooking here for 1,300 years.', cost: 320, tag: 'Must-eat' },
      { time: '10:00', icon: 'bus', wiki: ["Xi'an railway station"], title: 'Tourist Bus 5 (306) to the Terracotta Army', detail: 'From the east square of Xi’an Railway Station. ¥7, one hour, government-run — the green-and-white bus with the official number board. Ignore every private tout on that plaza; the scams here are the most persistent in China.', cost: 90, tag: 'Transport' },
      { time: '11:15', icon: 'crown', wiki: ["Terracotta Army"], title: 'Museum of the Terracotta Army', detail: '¥120. Discovered in 1974 by farmers digging a well; over 8,000 soldiers, 130 chariots and 670 horses buried in 210 BC to guard Qin Shi Huang in the afterlife. Do the pits in reverse order — Pit 3 (the command post, small, intact), Pit 2 (the kneeling archer, the excavation still in progress under dust sheets), then Pit 1 last, so the big reveal lands at the end. Finish at the Bronze Chariots hall: two half-scale carriages of 3,400 cast parts, the finest bronzes ever recovered from China.', cost: 1420, tag: 'UNESCO' },
      { time: '11:20', icon: 'info', title: 'Get a guide — share the cost', detail: 'Licensed English guides wait at the entrance for ¥150–200 for the full site. Split four ways with other travellers in the queue it is ₹500 a head, and without one the pits are just impressive holes. They will show you the four surviving traces of original pigment and the one kneeling archer that was found unbroken.', cost: 500, tag: 'Worth it' },
      { time: '14:45', icon: 'bus', title: 'Back to the city', detail: 'Same bus, one hour. Eat the persimmon cakes you bought at breakfast on the way.', cost: 90, tag: 'Transport' },
      { time: '16:15', icon: 'bike', wiki: ["Fortifications of Xi'an"], title: 'Cycle the Xi’an City Wall at golden hour', detail: 'The single best thing you will do in Xi’an. 13.7 km of complete, unbroken Ming rampart — 12 m high, 15 m wide on top, the most intact ancient city wall on earth. Entry ¥54, bike hire ¥45 for 3 hours (tandem ¥90). A full lap takes 100 minutes at a lazy pace. Start at the South Gate, ride anticlockwise, and time it so the last stretch is at sunset: old grey-tiled courtyards inside the wall on your right, glass towers outside on your left, 600 years apart and 20 metres from each other.', cost: 1170, tag: 'Unmissable' },
      { time: '18:45', icon: 'food', wiki: ["Biangbiang noodles"], title: 'Muslim Quarter food crawl — the real dinner', detail: 'Do not sit down for a meal. Graze Beiyuanmen street end to end: yangrou paomo (you tear the flatbread into your own bowl, they pour the mutton broth over — ¥35), biang biang noodles (belt-wide, hand-slapped, chilli-oil-doused, and written with the most complex character in Chinese, 58 strokes), lamb kebabs over charcoal, rou jia mo again because you want to, crystal persimmon cakes, and hot pomegranate juice. Budget ₹700 and arrive hungry.', cost: 780, tag: 'Legendary' },
      { time: '20:30', icon: 'camera', wiki: ["Bell Tower of Xi'an"], title: 'Bell Tower & Drum Tower lit up', detail: 'The two Ming towers sit floodlit in the middle of the city’s biggest roundabout, and the underground pedestrian passage puts you right beneath them. Fifteen minutes, no ticket needed for the outside view, and Xi’an’s best night photograph.', cost: 0, tag: 'Photo' },
      { time: '21:00', icon: 'sparkles', wiki: ["Giant Wild Goose Pagoda"], title: 'Big Wild Goose Pagoda fountain show', detail: 'Asia’s largest musical fountain erupts in the North Square at 21:00 (20:30 in winter), free, in front of the 652 AD pagoda that Xuanzang built to house the sutras he carried back from India. There is a nice symmetry in an Indian traveller watching that particular building.', cost: 100, tag: 'Free' },
      { time: '22:15', icon: 'bed', title: 'Hotel, finally a proper bed', detail: 'Inside the walls, near the Bell Tower. ₹2,300 gets you a genuinely good boutique room here — Xi’an is the best-value city of the three.', cost: 0, tag: 'Stay' },
    ],
    tips: [
      'The Terracotta site is huge and mostly outdoors. Go early-ish, and know that Pit 1 is the least crowded in the last hour before closing (17:30 gate, 18:35 exit).',
      'Everything in the Muslim Quarter is negotiable except the food. Persimmon cakes: pay ¥5 each, not the ¥15 first quoted.',
      "Rent the wall bike with 3 hours on the clock but return it in 2 — the deposit refund line at the South Gate is slow after sunset.",
    ],
    eat: ['Roujiamo', 'Biang biang noodles', 'Yangrou paomo', 'Persimmon cakes', 'Lamb kebabs'],
  },

  {
    n: 5,
    city: 'shanghai',
    date: 'Day 5',
    title: 'Dawn Mosque, 350 km/h, Neon Riverfront',
    subtitle: 'Great Mosque of Xi’an → bullet train east → The Bund switches on',
    wiki: ['The Bund', 'Pudong'],
    accent: '#0b9b72',
    hotelId: 'shanghai',
    stayCost: 3100,
    stay: "Jing'an / People's Square 3★",
    walkKm: 12.1,
    spend: 11740,
    highlight: 'Walking onto the Bund promenade at 18:20 as the Pudong towers light up across the water, one building at a time.',
    blocks: [
      { time: '07:00', icon: 'landmark', wiki: ["Great Mosque of Xi'an"], title: 'Great Mosque of Xi’an', detail: '¥25, and almost nobody goes. Founded in 742 AD, it looks nothing like a mosque anywhere else on earth — no dome, no minaret, just five courtyards of Chinese timber pavilions, moon gates and a pagoda that serves as the minaret, with Arabic calligraphy carved into Ming woodwork. Empty and silent at 07:00. Forty minutes well spent.', cost: 300, tag: 'Hidden gem' },
      { time: '08:15', icon: 'walk', wiki: ["Shaobing", "Chinese bread"], title: 'Beiyuanmen morning market', detail: 'The same street as last night, transformed: no tourists, just butchers, bread ovens and men drinking tea. Buy breakfast — a sesame flatbread straight off the oven wall, ¥5.', cost: 120, tag: 'Local' },
      { time: '09:10', icon: 'train', wiki: ["China Railway High-speed"], title: "Xi'an North → Shanghai Hongqiao, G-series high-speed", detail: 'Metro Line 2 to Xi’an North (25 min — leave the hotel by 08:15). Train G1974 or similar: 1,400 km in 6 hours at 350 km/h, second class ¥515. Reserve a window seat on the A or F side, buy a lunchbox from the trolley (¥45), and watch the Loess Plateau turn into the Yangtze delta. Cheaper and less hassle than flying once you count airport transfers.', cost: 6080, tag: 'Big move' },
      { time: '15:30', icon: 'train', wiki: ["Shanghai Hongqiao railway station"], title: 'Arrive Hongqiao → Metro Line 2 to the hotel', detail: 'Line 2 runs from inside the station straight to People’s Square / Jing’an. ¥5, 35 min. Shanghai’s metro is the largest in the world — 831 km of it — and you can do this entire city on it.', cost: 60, tag: 'Transport' },
      { time: '16:30', icon: 'bed', title: 'Check in, shower, change', detail: "Jing'an or People's Square. Central, safe, walkable to the Bund in 20 minutes, and two metro lines under your feet.", cost: 0, tag: 'Stay' },
      { time: '18:00', icon: 'sunset', wiki: ["The Bund"], title: 'The Bund — arrive before the lights', detail: 'Walk the 1.5 km promenade from Waibaidu Bridge south. On your right, 52 surviving 1920s buildings — neoclassical banks, art-deco hotels, the whole colonial waterfront of the "Paris of the East". On your left, across 600 m of Huangpu river, the Pudong skyline: the Oriental Pearl, the bottle-opener SWFC, and the twisting 632 m Shanghai Tower. Be there by 18:15. Nothing else in Asia does this.', cost: 0, tag: 'Iconic' },
      { time: '19:30', icon: 'food', wiki: ["Xiaolongbao"], title: 'Dinner: xiaolongbao done properly', detail: 'Jia Jia Tang Bao for the local, no-frills version (¥30, queue out the door, cash-and-carry energy) or Din Tai Fung for the polished 18-fold benchmark (¥120). The technique: nip the top, sip the soup out first, then dip in black vinegar with ginger. Bite it whole and you will burn your mouth and lose the broth — everyone does it once.', cost: 900, tag: 'Must-eat' },
      { time: '21:00', icon: 'ship', wiki: ["Huangpu River"], title: 'Huangpu River night cruise', detail: '¥120 for 50 minutes from the Bund pier. You get both banks lit at once and the only angle where the Bund’s 1920s skyline and Pudong’s 2020s one sit in the same frame. Buy the ticket at the pier, not from a tout, and stand at the bow on the upper deck.', cost: 1180, tag: 'Splurge' },
      { time: '22:15', icon: 'moon', wiki: ["Nanjing Road"], title: 'Nightcap on Nanjing East Road', detail: 'Walk back through the pedestrian strip — all lights, trams and crowds until midnight. Or a ¥60 cocktail at a Bund rooftop if the budget tracker is looking kind.', cost: 0, tag: 'Optional' },
    ],
    tips: [
      'On the G-train, second class is completely fine — 3+2 seating, more legroom than any airline economy, power sockets at every seat, and a quiet carriage.',
      'The Bund is best from the WEST bank (looking at Pudong) after dark, and from the EAST bank (looking at the old buildings) in the morning. Do both — Day 7 morning covers the second.',
      'Shanghai metro closes around 22:30–23:00. After that it is Didi, which costs ¥25–40 across the centre.',
    ],
    eat: ['Xiaolongbao', 'Shengjianbao', 'Hongshao rou (red-braised pork)'],
  },

  {
    n: 6,
    city: 'shanghai',
    date: 'Day 6',
    title: 'Water Town, Old Gardens, and the 118th Floor',
    subtitle: 'Zhujiajiao canals → Yu Garden → Tianzifang lanes → sunset from Shanghai Tower',
    wiki: ['Zhujiajiao', 'Water towns in China', 'Suzhou'],
    accent: '#12b886',
    hotelId: 'shanghai',
    stayCost: 3100,
    stay: "Jing'an / People's Square 3★",
    walkKm: 15.7,
    spend: 7980,
    highlight: 'A 1,700-year-old canal town at 09:15 with the mist still on the water — then, nine hours later, looking down on the whole of Shanghai from 546 m.',
    blocks: [
      { time: '07:00', icon: 'food', wiki: ["Shengjian mantou"], title: "Breakfast: Yang's Fry Dumplings", detail: 'Shengjianbao — pork buns pan-fried until the bottoms are lacquered mahogany, the tops soft, the insides full of scalding soup, finished with sesame and spring onion. Four for ¥8. Shanghai’s single best breakfast and it costs ₹95.', cost: 160, tag: 'Must-eat' },
      { time: '08:00', icon: 'train', wiki: ["Shanghai Metro"], title: 'Metro Line 17 to Zhujiajiao', detail: '¥7, about an hour from Hongqiao. Get on at the front of the train and out at Zhujiajiao station, then a 10-minute walk or the ¥1 shuttle to the old town. Going early is the whole trick — by 11:00 the day-tour coaches from the city arrive and it becomes a different, worse place.', cost: 180, tag: 'Transport' },
      { time: '09:15', icon: 'ship', wiki: ["Zhujiajiao"], title: 'Zhujiajiao ancient water town', detail: 'A 1,700-year-old canal settlement on the edge of Shanghai: 36 stone bridges, whitewashed Ming and Qing houses standing directly in the water, laundry on poles over the canals. Walk to the five-arched Fangsheng Bridge (1571), duck into Kezhi Garden (¥30), then take a wooden rowing boat — ¥120 for the boat, split it, 20 minutes, and it is the only way to see the town from the height it was built for.', cost: 620, tag: 'Day trip' },
      { time: '12:30', icon: 'train', title: 'Back into the city', detail: 'Line 17 → Line 2 → Line 10 to Yuyuan Garden station. About 75 minutes; eat a zongzi on the train.', cost: 90, tag: 'Transport' },
      { time: '14:00', icon: 'landmark', wiki: ["Yu Garden"], title: 'Yu Garden & the Old City bazaar', detail: '¥40. A Ming scholar-official’s private garden from 1559, two acres of deliberately disorienting rockeries, dragon-topped walls, carp ponds and moon gates, all folded into a space you can cross in 90 seconds — the point is that you never can. Outside it, the Yuyuan Bazaar is loud, fake-antique and fun; the Huxinting teahouse on its zigzag bridge (zigzagged because evil spirits can only travel in straight lines) is worth the ¥60 pot.', cost: 620, tag: 'Classic' },
      { time: '16:00', icon: 'palette', wiki: ["Tianzifang"], title: 'Tianzifang', detail: 'Free. A block of 1930s shikumen stone-gate lane houses in the French Concession, now a warren of alleys barely two metres wide packed with studios, tiny bars, ceramics and coffee. Laundry still hangs from the upper windows because people genuinely live above the shops. Get lost on purpose for an hour.', cost: 240, tag: 'Free' },
      { time: '17:30', icon: 'building', wiki: ["Shanghai Tower"], title: 'Shanghai Tower, Observation Deck 118F', detail: '¥180, and book the 17:45–18:00 slot online days ahead — you want to go up in daylight and come down in the dark. 632 m, the second-tallest building on earth, and the lift does 118 floors in 55 seconds at 20.5 m/s. From the top the Oriental Pearl looks like a toy and the Huangpu is a silver thread. Cheaper alternative: the SWFC "bottle opener" 100F at ¥180, which has a glass floor.', cost: 2130, tag: 'Splurge' },
      { time: '19:30', icon: 'food', wiki: ["Xintiandi"], title: 'Dinner in Xintiandi or Found158', detail: 'Xintiandi is restored shikumen turned upmarket dining; Found158 is a sunken plaza of bars and kitchens off Julu Road that Shanghai’s own twenty-somethings actually use. Either way, ₹600–800 for a proper sit-down meal with a drink.', cost: 700, tag: 'Dinner' },
      { time: '21:15', icon: 'moon', wiki: ["Shanghai French Concession"], title: 'French Concession night walk', detail: 'Wuyuan Road and Anfu Road — plane trees, art-deco villas, wine bars and the quietest, most European corner of the city. Walk it, do not metro it. Home by 23:00.', cost: 140, tag: 'Chill' },
    ],
    tips: [
      'Swap Zhujiajiao for Suzhou if you want the bigger classical gardens — 25 min by bullet train, ¥40 each way, but it eats the whole day and you lose Yu Garden and the Tower.',
      'Shanghai Tower sells a timed slot and enforces it. Miss it and you buy again.',
      'Tianzifang is a maze with three entrances on Taikang Road. Drop a pin at the metro exit before you go in.',
    ],
    eat: ['Shengjianbao', 'Zongzi', 'Crab-shell pastry', 'Yellow-wine braised anything'],
  },

  {
    n: 7,
    city: 'shanghai',
    date: 'Day 7',
    title: 'Last Bites, and 431 km/h to the Plane',
    subtitle: 'Tai chi on the Bund → Jing’an Temple → Nanjing Road → the Maglev → home',
    wiki: ['Shanghai maglev train', 'Shanghai Pudong International Airport'],
    accent: '#3fd6a4',
    hotelId: null,
    stayCost: 0,
    stay: '— (overnight flight home)',
    walkKm: 9.3,
    spend: 3590,
    highlight: 'Hitting 431 km/h on the Maglev seven minutes before the airport, which is a genuinely absurd way to end a trip.',
    blocks: [
      { time: '07:00', icon: 'sunrise', wiki: ["Tai chi"], title: 'Sunrise on the Bund, the other version', detail: 'Come back at dawn and it is a completely different place: no crowds, soft light on the 1920s facades, and dozens of Shanghainese doing tai chi, fan dancing and ballroom on the promenade. This is the Bund photograph nobody comes home with.', cost: 0, tag: 'Free' },
      { time: '08:30', icon: 'food', wiki: ["Youtiao"], title: 'Breakfast: the classic Shanghai four', detail: 'Doujiang (warm soy milk, savoury version with dried shrimp and pickles), youtiao (fried dough stick, for dunking), cifantuan (sticky-rice roll wrapped around a crushed youtiao and pork floss) and a scallion pancake. Any corner shop, ₹150 total.', cost: 180, tag: 'Local' },
      { time: '09:45', icon: 'landmark', wiki: ["Jing'an Temple"], title: "Jing'an Temple", detail: '¥50. A 1,780-year-old Buddhist temple rebuilt in gold and Burmese teak, sitting in a hollow surrounded on all four sides by glass office towers and a Prada store. The contrast is the point, and it is the most Shanghai image in Shanghai. Alternative: the Shanghai Museum East in Pudong — free, colossal, book ahead, and needs three hours you may not have.', cost: 600, tag: 'Pick one' },
      { time: '11:15', icon: 'shopping', wiki: ["Longjing tea"], title: 'Nanjing Road + the souvenir run', detail: 'What to actually buy: loose tea from a proper shop (Longjing green or a pressed pu-erh cake), a carved stone name-chop with your name in seal script (¥80, cut while you wait), silk scarves, a Jingdezhen porcelain cup. What to skip: anything sold by someone who approached you first.', cost: 1600, tag: 'Shopping' },
      { time: '13:00', icon: 'food', title: 'Last lunch: whatever you liked most', detail: 'Mine would be one more round of xiaolongbao and a bowl of scallion-oil noodles. Yours might be hotpot. Either way, eat it slowly — you are about to be on a plane for six hours.', cost: 560, tag: 'Farewell' },
      { time: '14:30', icon: 'train', title: 'Collect bags, Metro Line 2 to Longyang Road', detail: 'Hotel checkout is usually noon; leave the bags in the morning and swing back. Line 2 to Longyang Road, ¥5, 30 minutes.', cost: 60, tag: 'Logistics' },
      { time: '15:20', icon: 'zap', wiki: ["Shanghai maglev train"], title: 'The Maglev: Longyang Road → Pudong Airport', detail: '¥50 with a boarding pass (¥50 single, ¥40 with same-day air ticket). 30 km in 7 minutes 20 seconds, topping out at 431 km/h — the fastest commercial train on the planet, magnetically levitated 10 mm off the guideway. There is a speedometer in each carriage. Everybody films it. Do the 15:00–15:30 departures; they run the full-speed schedule.', cost: 590, tag: 'Do it' },
      { time: '15:45', icon: 'plane', wiki: ["Shanghai Pudong International Airport"], title: 'Pudong International (PVG), Terminal 2', detail: 'Be at check-in three hours before an international departure. There is a decent noodle bar airside past security in T2, and the duty-free baijiu is cheaper than the city if you want a bottle of Moutai to explain to Indian customs.', cost: 0, tag: 'Airport' },
      { time: '18:40', icon: 'plane', title: 'Depart Shanghai → Mumbai', detail: 'One stop again, about 10h 15m in total, landing at CSMIA in the small hours (you gain 2h30 back). Seven days, three cities, four UNESCO World Heritage sites, and change left from a lakh.', cost: 0, tag: 'Flight' },
    ],
    tips: [
      'Do a currency sweep: spend leftover ¥ in the airport, or keep a ¥10 note. Alipay balances can be withdrawn back to your card but it takes 3–5 days.',
      'Chinese customs limit outbound antiques — anything genuinely pre-1949 needs a red wax seal and paperwork. Souvenir "antiques" are not antiques.',
      'Keep the Alipay Tour Pass card open for 7 days after you land home in case of hotel refunds.',
    ],
    eat: ['Cifantuan', 'Scallion-oil noodles', 'One last xiaolongbao'],
  },
]

// ── BUDGET ───────────────────────────────────────────────────
export const budget = {
  currency: '₹',
  total: 100000,
  modes: {
    shoestring: { label: 'Shoestring', mult: 0.82, note: 'Hostel dorms, all street food, no cruise, no Tower ticket.' },
    balanced: { label: 'Balanced', mult: 1, note: 'The itinerary exactly as written. This is the plan.' },
    comfort: { label: 'Comfort', mult: 1.28, note: '4★ hotels, first-class rail, private Wall car, all the splurges.' },
  },
  items: [
    { cat: 'Flights', label: 'Mumbai → Beijing / Shanghai → Mumbai (open-jaw, 1 stop)', amount: 38000, color: '#f8451a', note: 'Booked 8–10 weeks out. An open-jaw costs the same as a return and saves a 1,200 km backtrack.' },
    { cat: 'Stay', label: '5 hotel nights — Beijing ×2, Xi’an ×1, Shanghai ×2', amount: 13300, color: '#e0a33a', note: '₹2,300–3,100 a night for clean, central 3★. The 6th night happens on the train, free.' },
    { cat: 'Entries', label: 'Every ticket: Wall, Forbidden City, Terracotta, Tower, gardens', amount: 13140, color: '#ff9a75', note: 'Six UNESCO sites now — the Summer Palace and the Temple of Heaven are ₹1,130 of this. Every rupee is itemised in the day plans.' },
    { cat: 'Intercity', label: 'Overnight sleeper + 350 km/h bullet train', amount: 9740, color: '#12b886', note: 'Beijing→Xi’an sleeper ₹3,660 · Xi’an→Shanghai G-train ₹6,080.' },
    { cat: 'Food', label: '7 days of eating, properly', amount: 7320, color: '#3fd6a4', note: '≈₹1,045/day. Street breakfasts, one big meal a day — Peking duck and sesame hotpot included.' },
    { cat: 'Local transport', label: 'Metro, buses, Didi, airport links, the Maglev', amount: 2700, color: '#7ee8c0', note: 'Chinese metro rides cost ₹35–70, and Day 2 crosses the whole city twice. The 431 km/h Maglev is ₹590 of this.' },
    { cat: 'Visa & docs', label: 'Visa handling, travel insurance, photos', amount: 5200, color: '#ffdc8a', note: 'Indians currently get 30-day visa-free entry — budgeted anyway, in case the policy moves.' },
    { cat: 'Connectivity', label: 'International eSIM, 15 GB / 7 days', amount: 1400, color: '#ff6b3d', note: 'Roams via Hong Kong, so it tunnels past the Great Firewall. Simpler than a VPN.' },
    { cat: 'Shopping & buffer', label: 'Souvenirs, tea, one splurge, contingency', amount: 9200, color: '#bb8125', note: 'Real slack: ₹1,600 earmarked for souvenirs, ₹7,600 of genuine untouched buffer.' },
  ],
}

export const savings = [
  { icon: 'train', title: 'Sleep on the train', save: 2400, text: 'The Beijing→Xi’an overnight sleeper replaces a hotel night AND a travel day. One decision, two savings.' },
  { icon: 'plane', title: 'Fly open-jaw', save: 5500, text: 'In to Beijing, out of Shanghai, same price as a return — and you skip a 1,400 km backtrack that would cost a full day.' },
  { icon: 'food', title: 'Eat where the queue is Chinese', save: 4000, text: '₹150 breakfasts and ₹300 lunches on the street, then spend properly on one meal a day. The street food is better anyway.' },
  { icon: 'ticket', title: 'Book entries on the mini-programs', save: 1200, text: 'Official WeChat mini-programs sell Forbidden City, Tiananmen and museums at face value. Third-party resellers add 30–60%.' },
  { icon: 'bus', title: 'Bus 916 to the Great Wall', save: 2800, text: '₹340 return instead of ₹3,000+ for a tour seat, and you arrive an hour before the coaches do.' },
  { icon: 'calendar', title: 'Avoid Golden Week', save: 9000, text: 'Oct 1–7 and Chinese New Year double hotel prices and quadruple queues. Late March–May or late Sept is the sweet spot.' },
]

// ── BEIJING TRAIL MAP ────────────────────────────────────────
// Real WGS-84 coordinates, projected in the component. Beijing is laid out
// on a single north-south Central Axis and a set of concentric ring roads,
// and once you see that, the whole city makes sense.
export const beijingContext = {
  centralAxis: { lon: 116.3972, latFrom: 39.8650, latTo: 40.0030 },
  secondRing: { latMin: 39.8655, latMax: 39.9548, lonMin: 116.3556, lonMax: 116.4400 },
}

export const beijingTrail = [
  {
    n: 1,
    label: 'Day 1',
    name: 'The Central Axis',
    color: '#f8451a',
    summary:
      'Almost all of today is one straight walk north. From the hotel at Qianmen to the hutongs behind Jingshan is 4.2 km in a line — you cross Tiananmen Square, walk through the Forbidden City, and climb the hill behind it, all on the axis the city was built around in 1420.',
    walkKm: 9.6,
    metroMins: 30,
    stops: [
      { name: 'Hotel, Qianmen', zh: '前门', lat: 39.8994, lon: 116.3958, time: '12:50', kind: 'stay', side: 'left', note: 'Drop bags' },
      { name: 'Siji Minfu', zh: '四季民福', lat: 39.8998, lon: 116.4000, time: '13:10', kind: 'food', side: 'right', note: 'Peking duck' },
      { name: 'Tiananmen Square', zh: '天安门广场', lat: 39.9055, lon: 116.3976, time: '14:30', kind: 'sight', side: 'left', note: 'Booked slot' },
      { name: 'National Museum', zh: '国家博物馆', lat: 39.9047, lon: 116.4022, time: '15:15', kind: 'optional', side: 'right', note: 'Optional add-on' },
      { name: 'Forbidden City', zh: '故宫', lat: 39.9163, lon: 116.3972, time: '15:20', kind: 'sight', side: 'left', note: 'Last entry 16:00' },
      { name: 'Jingshan Park', zh: '景山公园', lat: 39.9280, lon: 116.3966, time: '17:40', kind: 'sight', side: 'left', note: 'Sunset viewpoint' },
      { name: 'Nanluoguxiang hutongs', zh: '南锣鼓巷', lat: 39.9370, lon: 116.4030, time: '18:40', kind: 'sight', side: 'right', note: 'Grey-brick lanes' },
      { name: 'Wangfujing', zh: '王府井', lat: 39.9145, lon: 116.4108, time: '19:45', kind: 'night', side: 'right', note: 'Night walk' },
      { name: 'Back to Qianmen', zh: '前门', lat: 39.8994, lon: 116.3958, time: '21:15', kind: 'stay', side: 'left', note: 'Sleep' },
    ],
    legs: [
      { mode: 'walk', mins: 5, km: 0.4, via: 'Qianmen East Ave' },
      { mode: 'walk', mins: 12, km: 0.9, via: 'north up the axis' },
      { mode: 'walk', mins: 4, km: 0.3, via: 'east side of the square' },
      { mode: 'walk', mins: 12, km: 1.0, via: 'through the Gate of Heavenly Peace' },
      { mode: 'walk', mins: 6, km: 0.4, via: 'out of Shenwumen, cross the road' },
      { mode: 'walk', mins: 20, km: 1.4, via: 'north-east into the lanes' },
      { mode: 'metro', mins: 18, km: 3.4, via: 'Line 6 → Line 5' },
      { mode: 'metro', mins: 12, km: 2.4, via: 'Line 1 → Line 2' },
    ],
  },
  {
    n: 2,
    label: 'Day 2',
    name: 'The Big Loop',
    color: '#e0a33a',
    summary:
      'The opposite shape: today you throw yourself at the two far corners of the city. Far south at dawn for the Temple of Heaven, then 24 km north-west to the Summer Palace, then 15 km east to the Olympic Park — and Line 8 brings you straight back down the same Central Axis to the hotpot. Roughly 52 km of metro, all of it for ¥16.',
    walkKm: 14.8,
    metroMins: 183,
    stops: [
      { name: 'Hotel, Qianmen', zh: '前门', lat: 39.8994, lon: 116.3958, time: '06:15', kind: 'stay', side: 'right', note: 'Jianbing on the way' },
      { name: 'Temple of Heaven', zh: '天坛', lat: 39.8822, lon: 116.4066, time: '06:45', kind: 'sight', side: 'right', note: 'Dawn, east gate' },
      { name: 'Summer Palace', zh: '颐和园', lat: 39.9999, lon: 116.2688, time: '11:00', kind: 'sight', side: 'left', note: 'North gate, 3 hrs' },
      { name: 'Water Cube', zh: '水立方', lat: 39.9925, lon: 116.3833, time: '16:45', kind: 'sight', side: 'left', note: 'Arrive in daylight' },
      { name: 'Bird’s Nest', zh: '鸟巢', lat: 39.9928, lon: 116.3906, time: '18:30', kind: 'night', side: 'right', note: 'Lit up after dark' },
      { name: 'Sesame hotpot, Qianmen', zh: '涮羊肉', lat: 39.8994, lon: 116.3958, time: '20:20', kind: 'food', side: 'right', note: 'Line 8 straight home' },
    ],
    legs: [
      { mode: 'metro', mins: 18, km: 3.2, via: 'Line 2 → Line 5' },
      { mode: 'metro', mins: 75, km: 24.0, via: 'Line 5 → Line 10 → Line 4' },
      { mode: 'metro', mins: 55, km: 15.2, via: 'Line 4 → Line 10 → Line 8' },
      { mode: 'walk', mins: 8, km: 0.6, via: 'across the Olympic plaza' },
      { mode: 'metro', mins: 35, km: 13.0, via: 'Line 8, no changes' },
    ],
  },
  {
    n: 3,
    label: 'Day 3',
    name: 'North to the Wall',
    color: '#12b886',
    summary:
      'One long line north and back. Mutianyu is 70 km beyond the city on the Huairou mountain ridge, and the whole day is built around getting there before the coaches and back in time for a 20:37 train. Nothing else happens in Beijing today, on purpose.',
    walkKm: 10.4,
    metroMins: 27,
    stops: [
      { name: 'Hotel, Qianmen', zh: '前门', lat: 39.8994, lon: 116.3958, time: '05:45', kind: 'stay', side: 'right', note: 'Check out, bag stays' },
      { name: 'Dongzhimen', zh: '东直门', lat: 39.9418, lon: 116.4342, time: '06:40', kind: 'transport', side: 'right', note: 'Bus 916 Express' },
      { name: 'Mutianyu Great Wall', zh: '慕田峪长城', lat: 40.4319, lon: 116.5704, time: '08:45', kind: 'sight', side: 'left', note: 'Towers 14 → 20 → 23' },
      { name: 'Dongzhimen', zh: '东直门', lat: 39.9418, lon: 116.4342, time: '16:30', kind: 'transport', side: 'left', note: 'Back in the city' },
      { name: 'Beijing Railway Station', zh: '北京站', lat: 39.9026, lon: 116.4270, time: '18:30', kind: 'transport', side: 'right', note: 'Z19 at 20:37' },
    ],
    legs: [
      { mode: 'metro', mins: 15, km: 5.8, via: 'Line 2 anticlockwise' },
      { mode: 'bus', mins: 125, km: 70.0, via: 'Bus 916 Express + h23' },
      { mode: 'bus', mins: 120, km: 70.0, via: 'the same bus, reversed' },
      { mode: 'metro', mins: 12, km: 4.6, via: 'Line 2 → hotel → Line 2' },
    ],
  },
]

// ── WHERE TO SLEEP ───────────────────────────────────────────
// Real, long-established properties in the exact neighbourhoods this
// itinerary is built around. Rates are indicative for a double room in
// shoulder season and MUST be re-checked — see the note in the UI.
export const hotels = [
  {
    id: 'beijing',
    city: 'Beijing',
    hanzi: '北京',
    nights: 'Nights 1 & 2',
    wiki: ['Qianmen', 'Zhengyangmen'],
    area: 'Qianmen / Dashilan',
    why:
      'Inside a real hutong grid, 900 m walk to Tiananmen and the Forbidden City’s south gate, Qianmen station on Metro Line 2 at the end of the street, and the duck restaurant from Day 1 around the corner.',
    avoid:
      'Do not book in Chaoyang CBD or near the airport to save ₹400 a night — you will hand back 45 minutes each way, twice a day, to everything on this plan.',
    options: [
      {
        pick: false,
        name: 'Leo Hostel',
        kind: 'Hostel · Dashilan hutong',
        price: 1000,
        priceNote: 'dorm bed · twin from ₹2,100',
        why: 'The long-running Beijing backpacker institution, in a courtyard building right off Qianmen. Bar, laundry, and staff who book Great Wall transport for you.',
      },
      {
        pick: true,
        name: 'JI Hotel — Qianmen / Tiananmen South',
        kind: '3★ chain · the plan’s pick',
        price: 2400,
        priceNote: 'double room',
        why: 'Huazhu’s mid-tier brand: spotless, silent, hot water that works, and a front desk that handles a foreign passport without drama. Several branches sit around Qianmen — take whichever is closest to the metro exit.',
      },
      {
        pick: false,
        name: 'The Emperor Beijing Qianmen',
        kind: 'Boutique 4★',
        price: 6800,
        priceNote: 'double room',
        why: 'Design hotel with a rooftop bar looking straight at the floodlit Zhengyangmen gate. If you upgrade one night of this trip, make it this one.',
      },
    ],
  },
  {
    id: 'xian',
    city: "Xi'an",
    hanzi: '西安',
    nights: 'Night 4',
    wiki: ["Bell Tower of Xi'an", "Fortifications of Xi'an"],
    area: 'Inside the City Wall, near the Bell Tower',
    why:
      'Everything on Day 4 and Day 5 is within walking distance: the Muslim Quarter is four minutes away, the Bell and Drum Towers are on your doorstep, and the South Gate bike hire is a 15-minute stroll.',
    avoid:
      'Anywhere in the High-Tech Zone or near Xi’an North station. The station is 25 minutes out by metro and there is nothing to walk to.',
    options: [
      {
        pick: false,
        name: 'Han Tang Inn Hostel',
        kind: 'Hostel · near the South Gate',
        price: 950,
        priceNote: 'dorm bed · twin from ₹2,100',
        why: 'Xi’an’s best-known travellers’ hostel. Genuinely useful staff, cheap shared transfers to the Terracotta Army, and a courtyard that makes it easy to find people to split a guide with.',
      },
      {
        pick: true,
        name: 'Atour / JI Hotel — Xi’an Bell Tower',
        kind: '3★ chain · the plan’s pick',
        price: 2300,
        priceNote: 'double room',
        why: 'Xi’an is the best-value city of the three: the same money buys a noticeably better room than in Beijing or Shanghai. Both chains have Bell Tower branches inside the wall.',
      },
      {
        pick: false,
        name: 'Sofitel Legend People’s Grand Hotel',
        kind: 'Heritage 5★',
        price: 9500,
        priceNote: 'double room',
        why: 'A restored 1953 Soviet-era state guesthouse set in its own gardens. Far above this budget, but worth knowing about if you decide Xi’an deserves the splurge.',
      },
    ],
  },
  {
    id: 'shanghai',
    city: 'Shanghai',
    hanzi: '上海',
    nights: 'Nights 5 & 6',
    wiki: ['The Bund', 'Nanjing Road'],
    area: "Jing'an / People's Square",
    why:
      'Dead centre of the city, two metro lines under your feet, a 20-minute walk to the Bund, and Line 2 runs straight to both Hongqiao (where you arrive) and Longyang Road (where you catch the Maglev out).',
    avoid:
      'Pudong. The skyline is prettier looked at than lived in, and you will cross the river twice a day for no reason.',
    options: [
      {
        pick: false,
        name: 'Blue Mountain Bund Youth Hostel',
        kind: 'Hostel · near the Bund',
        price: 1100,
        priceNote: 'dorm bed · private from ₹2,600',
        why: 'The reliable Shanghai backpacker option, walkable to the Bund and on the metro. Book the private if you want the ₹3,100 budget line to go further elsewhere.',
      },
      {
        pick: true,
        name: "JI Hotel — Shanghai People's Square / Nanjing West Rd",
        kind: '3★ chain · the plan’s pick',
        price: 3100,
        priceNote: 'double room',
        why: 'Shanghai is the most expensive of the three cities, and this is the point where reliable stops being cheap. Central, quiet, and five minutes from a metro entrance.',
      },
      {
        pick: false,
        name: 'Le Royal Méridien Shanghai',
        kind: '5★ · People’s Square',
        price: 9500,
        priceNote: 'double room',
        why: 'A 66-floor tower directly on People’s Square with Nanjing Road at its feet. The high-floor city views are the reason to book it.',
      },
    ],
  },
]

// Book in this order. The dates that actually bite are the top three.
export const bookingPlan = [
  { when: '10 weeks out', what: 'Flights', detail: 'Open-jaw: into Beijing PEK, out of Shanghai PVG. Tuesday/Wednesday departures run ₹4–6k cheaper. This is the single biggest lever on the whole budget.', critical: true },
  { when: '8 weeks out', what: 'Visa or entry check', detail: 'Confirm the current rule for Indian passports with the Chinese Embassy. If a visa is needed, the L tourist visa takes 4–7 working days and wants flights and hotels already booked.', critical: true },
  { when: '6 weeks out', what: 'Hotels', detail: 'All five nights. Free-cancellation rates cost a little more and are worth it while the visa is still in the air.', critical: false },
  { when: '4 weeks out', what: 'Travel insurance + international eSIM', detail: 'Buy the eSIM now and install the profile at home — do not leave it until the airport.', critical: false },
  { when: '15 days out', what: 'Trains', detail: 'The Chinese booking window opens exactly 15 days ahead. Book the Z19 sleeper and the Xi’an→Shanghai G-train the day it opens; soft sleepers sell out first.', critical: true },
  { when: '7 days out', what: 'Forbidden City', detail: 'Tickets release 7 days ahead at 20:00 China time on the official WeChat mini-program. Saturday slots are gone in under four minutes.', critical: true },
  { when: '5 days out', what: 'Shanghai Tower + Shanghai Museum', detail: 'Timed slots, enforced at the door. Book the 17:45 Tower slot so you go up in daylight and come down after dark.', critical: false },
  { when: '3 days out', what: 'Tiananmen Square', detail: 'Free, but needs a passport-linked reservation 1–7 days ahead. People are turned away at the barrier every single day.', critical: true },
  { when: 'Night before', what: 'Alipay + WeChat Pay', detail: 'Install both, bind your Visa/Mastercard, and top up the Alipay Tour Pass. Test a payment before you fly — a card that will not bind is a problem you want to find at home.', critical: true },
]

// ── ESSENTIALS ───────────────────────────────────────────────
export const essentials = [
  {
    id: 'visa',
    icon: 'passport',
    title: 'Entry & paperwork',
    points: [
      'Indian passport holders: check the current visa-free / visa-on-arrival policy before booking — China extended 30-day visa-free entry to a widening list of countries through 2025–26 and the rules move.',
      'If a visa is needed: L (tourist) visa via the Chinese Visa Application Service Centre. Roughly ₹3,500–4,500 all-in, 4–7 working days, needs flights + hotels + bank statements.',
      'Carry PRINTED copies: hotel confirmations, return ticket, first night’s address in Chinese characters. Immigration asks.',
      'Passport must have 6 months validity and two blank pages.',
      'Travel insurance is not legally required but medical care is expensive. ₹1,200 for 7 days is cheap peace of mind.',
    ],
  },
  {
    id: 'money',
    icon: 'wallet',
    title: 'Money — China is cashless',
    points: [
      'Install Alipay AND WeChat Pay before you fly, and bind an international Visa/Mastercard. Both now accept foreign cards; this is the single most important prep step.',
      'Alipay’s "Tour Pass" is a prepaid wallet that works everywhere including street carts and metro gates.',
      'Carry ¥500–800 cash as backup for tiny rural vendors (the Mutianyu village, Zhujiajiao boatmen).',
      'ATMs: Bank of China and ICBC accept foreign cards. ¥2,500 max per withdrawal, ¥15–30 fee.',
      'Rate used through this plan: ¥1 ≈ ₹11.8. Check before you go — it moves 3–5% a year.',
      'Tipping is not a thing in mainland China. Do not.',
    ],
  },
  {
    id: 'internet',
    icon: 'wifi',
    title: 'Internet & the Great Firewall',
    points: [
      'Blocked in China: Google (all of it — Search, Maps, Gmail, Drive), WhatsApp, Instagram, Facebook, X, YouTube, most Western news.',
      'BEST FIX: buy an international roaming eSIM (Airalo, Nomad, Holafly) before you fly. It routes traffic through Hong Kong or Singapore, so everything just works with no VPN. 15 GB / 7 days ≈ ₹1,400.',
      'A VPN as backup — install and TEST it before you land, because VPN websites are blocked from inside China. Astrill and LetsVPN are the ones that actually hold up.',
      'Chinese apps that work brilliantly and need no VPN: Amap (maps), Didi (cabs), Trip.com (trains/hotels, English), Pleco (offline dictionary), Baidu Translate (camera mode reads menus).',
      'Hotel wifi exists everywhere but sits behind the firewall — the eSIM is what saves you.',
    ],
  },
  {
    id: 'booking',
    icon: 'calendar',
    title: 'What to book, and when',
    points: [
      'Flights — 8 to 10 weeks out. Tuesday/Wednesday departures are ₹4–6k cheaper.',
      'Trains — 15 days ahead the moment the window opens, on Trip.com (English, passport-linked, ₹100 booking fee) or 12306 (official, painful).',
      'Forbidden City — exactly 7 days ahead at 20:00 China time via the official WeChat mini-program. Saturday slots sell out in minutes.',
      'Tiananmen Square — free but requires a passport-linked reservation 1–7 days ahead. People get turned away daily.',
      'Shanghai Tower & Shanghai Museum — 2–5 days ahead, timed slots, enforced.',
      'Terracotta Army & the Great Wall — walk-up is fine, no booking needed.',
    ],
  },
  {
    id: 'etiquette',
    icon: 'handshake',
    title: 'Ground rules & etiquette',
    points: [
      'Nobody speaks much English outside hotels. Screenshot every address in Chinese characters; Pleco and Baidu Translate carry the rest.',
      'Queues are loose and personal space is smaller. It is not rudeness.',
      'Do not stick chopsticks upright in rice — it mimics funeral incense.',
      'Slurping noodles is fine. Blowing your nose at the table is not.',
      'Bargain hard in markets (start at 30% of the asking price), never in shops or restaurants.',
      'Carry your passport at all times. Hotels, trains and major sights all scan it.',
      'Public toilets are often squat-style and BYO paper. Always have tissues.',
    ],
  },
  {
    id: 'safety',
    icon: 'shield',
    title: 'Safety & health',
    points: [
      'China is exceptionally safe for solo and female travellers, including late at night in all three cities.',
      'The real risks are scams, not crime: the "tea ceremony" invite, the "art student gallery", and fake-ticket touts outside Xi’an Railway Station. If a friendly stranger with excellent English approaches you, walk on.',
      'Tap water is not drinkable anywhere. Every hotel floor and every train carriage has boiled water — carry a flask.',
      'Air quality in Beijing can hit AQI 150+. Check before the Wall day and carry an N95 if you are asthmatic.',
      'Emergency numbers: 110 police, 120 ambulance, 119 fire.',
      'Save the Indian Embassy Beijing (+86 10 8531 2500) and Consulate Shanghai (+86 21 6275 8885) in your phone.',
    ],
  },
]

export const phrases = [
  { zh: '你好', py: 'Nǐ hǎo', en: 'Hello' },
  { zh: '谢谢', py: 'Xièxie', en: 'Thank you' },
  { zh: '多少钱？', py: 'Duōshao qián?', en: 'How much?' },
  { zh: '太贵了', py: 'Tài guì le', en: 'Too expensive' },
  { zh: '我不要肉', py: 'Wǒ bú yào ròu', en: "I don't want meat" },
  { zh: '不要辣', py: 'Bú yào là', en: 'Not spicy' },
  { zh: '厕所在哪里？', py: 'Cèsuǒ zài nǎlǐ?', en: 'Where is the toilet?' },
  { zh: '我听不懂', py: 'Wǒ tīng bù dǒng', en: "I don't understand" },
  { zh: '可以用支付宝吗？', py: 'Kěyǐ yòng Zhīfùbǎo ma?', en: 'Can I pay with Alipay?' },
  { zh: '请帮我', py: 'Qǐng bāng wǒ', en: 'Please help me' },
  { zh: '好吃！', py: 'Hǎochī!', en: 'Delicious!' },
  { zh: '再见', py: 'Zàijiàn', en: 'Goodbye' },
]

export const foodBucket = [
  { city: 'Beijing', wiki: ['Peking duck', 'Forbidden City'], dish: 'Peking Duck', zh: '北京烤鸭', price: '₹1,200 / whole duck', why: 'Lacquered skin dipped in sugar first, then meat, scallion and sweet bean sauce rolled in a pancake. Siji Minfu, Qianmen.' },
  { city: 'Beijing', wiki: ['Zhajiangmian', 'Chinese noodles'], dish: 'Zhajiangmian', zh: '炸酱面', price: '₹260', why: 'Hand-pulled noodles under a fermented soybean sauce and eight little dishes of raw vegetables you tip in yourself.' },
  { city: 'Beijing', wiki: ['Jianbing', 'Chinese street food'], dish: 'Jianbing', zh: '煎饼', price: '₹95', why: 'The great street breakfast — mung-bean crêpe, egg, chilli, and a sheet of fried cracker that shatters when you bite.' },
  { city: "Xi'an", wiki: ['Rou jia mo', 'Chinese hamburger'], dish: 'Roujiamo', zh: '肉夹馍', price: '₹140', why: 'The original hamburger, 2,000 years older than the other one. Cumin-braised lamb chopped into a griddled flatbread.' },
  { city: "Xi'an", wiki: ['Biangbiang noodles', 'Chinese noodles'], dish: 'Biang Biang Noodles', zh: '𰻞𰻞面', price: '₹230', why: 'Belt-wide hand-slapped noodles under sizzling chilli oil. The character has 58 strokes and no keyboard can type it.' },
  { city: "Xi'an", wiki: ['Paomo', "Xi'an cuisine"], dish: 'Yangrou Paomo', zh: '羊肉泡馍', price: '₹410', why: 'You tear the flatbread into your own bowl by hand — the smaller the pieces, the better the result — and they pour mutton broth over it.' },
  { city: 'Shanghai', wiki: ['Xiaolongbao', 'Tangbao'], dish: 'Xiaolongbao', zh: '小笼包', price: '₹350', why: 'Soup dumplings, 18 folds each. Nip, sip the broth, dip in black vinegar and ginger. Jia Jia Tang Bao.' },
  { city: 'Shanghai', wiki: ['Shengjian mantou', 'Baozi'], dish: 'Shengjianbao', zh: '生煎包', price: '₹95', why: 'Pan-fried pork buns, mahogany crisp underneath and full of scalding soup. The best ₹95 in China.' },
  { city: 'Shanghai', wiki: ['Red braised pork belly', 'Shanghai cuisine'], dish: 'Hongshao Rou', zh: '红烧肉', price: '₹480', why: 'Pork belly braised in soy, sugar and yellow wine until it collapses. Mao’s favourite dish, and reasonably so.' },
]

export const packing = [
  { group: 'Documents', items: ['Passport (6 months validity)', 'Visa / entry approval printout', 'Printed hotel bookings', 'Printed return ticket', 'Travel insurance PDF', '2 passport photos', 'Photocopy of passport, kept separately'] },
  { group: 'Tech', items: ['International eSIM activated', 'VPN installed AND tested', 'Type-A/I plug adapter (China uses both)', '20,000 mAh power bank (carry-on only)', 'Charging cables ×2', 'Offline maps downloaded', 'Pleco + Amap + Didi + Alipay installed'] },
  { group: 'Clothing', items: ['Broken-in walking shoes — you will do 85+ km', 'Layers: Beijing mornings are 10°C colder than Shanghai afternoons', 'Light rain shell', 'One smart outfit for the Bund', 'Warm hat + gloves if travelling Oct–Mar'] },
  { group: 'Health & misc', items: ['Tissues (public toilets rarely have paper)', 'Hand sanitiser', 'Personal medication + prescription copy', 'Sunscreen SPF 50 for the Wall', 'Refillable 1 L flask', 'N95 mask for high-AQI days', 'Small daypack with a zip'] },
]

export const faq = [
  { q: 'Is ₹1,00,000 genuinely enough for 7 days in China including flights?', a: 'Yes, with discipline and this exact structure. Flights eat ₹38,000, leaving ₹62,000 for the ground — which is comfortable in China if you stay in central 3★ hotels, use trains rather than internal flights, eat street breakfasts and take the public bus to the Great Wall. The plan as written lands at ₹92,400 — ₹47,800 on the ground plus ₹44,600 of flights, visa, insurance and eSIM — leaving ₹7,600 of real buffer. The two things that will blow it are booking flights late and taking taxis everywhere.' },
  { q: 'Do Indians need a visa for China right now?', a: 'The policy has been moving fast — China rolled out and repeatedly extended 30-day visa-free entry for a growing list of countries through 2025 and 2026. Check the Chinese Embassy in India site 10–12 weeks before you fly, and budget for the L tourist visa (₹3,500–4,500, 4–7 working days) so that you are covered either way. The budget in this plan assumes you pay.' },
  { q: 'Will my phone actually work? Google and WhatsApp are blocked.', a: 'They are, and the fix is simpler than everyone makes it sound: buy an international roaming eSIM before you fly. Because it routes your data through a Hong Kong or Singapore carrier, it sits outside the Great Firewall and Google Maps, WhatsApp and Instagram all work normally. About ₹1,400 for 15 GB over 7 days. Install a VPN as a backup, and install it before you land, because VPN sites are blocked from inside.' },
  { q: 'Is 7 days too rushed for three cities?', a: 'It is fast but not frantic, because the two long moves happen while you sleep or on a train you were going to sit on anyway. You get two and a half full days in Beijing, a properly packed day in Xi’an, and two days in Shanghai. If you would rather go slower, cut Xi’an: do four days in Beijing and three in Shanghai, and put the ₹9,700 of train fares into better hotels.' },
  { q: 'Do I need to speak Mandarin?', a: 'No, but you need to prepare for the fact that very few people outside hotels speak English. Screenshot every address in Chinese characters, install Pleco and Baidu Translate (its camera mode reads menus in real time), and learn the twelve phrases in the phrasebook on this page. That combination is genuinely enough.' },
  { q: 'When is the best time to go?', a: 'Late March to mid-May, or late September to early November. Beijing summers are 38°C and humid, winters hit −10°C with wind off the Gobi. Avoid the two blackout windows absolutely: Chinese New Year (late Jan / Feb, everything moves and nothing is bookable) and Golden Week (Oct 1–7, when 700 million people travel at once).' },
  { q: 'Is it safe, especially solo or for women?', a: 'Exceptionally. Violent crime against tourists is close to nonexistent and walking alone at night in all three cities is normal. The risk is financial, not physical: tea-ceremony scams, "art student" galleries, and fake ticket touts outside Xi’an Railway Station. The rule that solves 95% of it — if a friendly stranger with unusually good English approaches you first, keep walking.' },
  { q: 'Can I do this itinerary vegetarian?', a: 'Yes, but plan for it. Buddhist restaurants (素菜馆 sùcàiguǎn) are excellent and everywhere; Xi’an’s Muslim Quarter has superb vegetarian noodles and breads; Shanghai and Beijing both have full vegetarian menus at chains like Songyuelou. Learn 我吃素 (wǒ chī sù — "I am vegetarian") and be aware that "no meat" often does not exclude pork stock or lard, so 不要肉，不要猪油 is the safer phrase.' },
]

export const gallery = [
  { wiki: 'Great Wall of China', caption: 'Mutianyu, before the coaches', city: 'Beijing' },
  { wiki: ['Forbidden City', 'Hall of Supreme Harmony'], caption: '980 buildings, 24 emperors', city: 'Beijing' },
  { wiki: 'Temple of Heaven', caption: 'Built in 1420 without a nail', city: 'Beijing' },
  { wiki: ['Terracotta Army'], caption: '8,000 soldiers, every face different', city: "Xi'an" },
  { wiki: ["Fortifications of Xi'an", 'Xi’an', 'Bell Tower of Xi’an'], caption: '13.7 km of Ming rampart, by bicycle', city: "Xi'an" },
  { wiki: ["Great Mosque of Xi'an", 'Drum Tower of Xi’an'], caption: 'A mosque with a pagoda for a minaret', city: "Xi'an" },
  { wiki: ['The Bund', 'Pudong'], caption: 'The 1920s, looking at the 2020s', city: 'Shanghai' },
  { wiki: 'Shanghai Tower', caption: '632 m, 118 floors, 55 seconds', city: 'Shanghai' },
  { wiki: 'Yu Garden', caption: 'Two acres you can never quite cross', city: 'Shanghai' },
  { wiki: ['Zhujiajiao', 'Water towns in China', 'Suzhou'], caption: '1,700 years old, 36 stone bridges', city: 'Shanghai' },
  { wiki: 'Summer Palace', caption: 'The emperors’ escape from the summer', city: 'Beijing' },
  { wiki: 'Giant Wild Goose Pagoda', caption: 'Built in 652 for sutras carried from India', city: "Xi'an" },
]
