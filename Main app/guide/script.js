document.addEventListener("DOMContentLoaded", function () {
  const cropData = [
    {
      name: "tea",
      nitrogen: "67",
      phosphorus: "55",
      potassium: "47",
      temperature: "18",
      humidity: "85",
      pH: "5.5",
      rainfall: "180.65",                   

    },
    {
      name: "Coffee",
      nitrogen: "51",
      phosphorus: "34",
      potassium: "34",
      temperature: "20",
      humidity: "80.36",
      pH: "6.0",
      rainfall: "165.63",
    },                                            
    {
      name: "Cardamom",
      nitrogen: "43",
      phosphorus: "51",
      potassium: "49",
      temperature: "19",
      humidity: "88",
      pH: "5.5",
      rainfall: "167.88",                                                                                     
    },
	{
      name: "Clove",
      nitrogen: "70",
      phosphorus: "49",
      potassium: "30",
      temperature: "22",
      humidity: "78",
      pH: "6.0",
      rainfall: "180"
    },
    {
      name: "Black Pepper",
      nitrogen: "79",
      phosphorus: "51",
      potassium: "33",
      temperature: "23",
      humidity: "75",
      pH: "6.2",
      rainfall: "170"
    },
    {
      name: "Cinnamon",
      nitrogen: "35",
      phosphorus: "34",
      potassium: "40",
      temperature: "24",
      humidity: "70",
      pH: "6.5",
      rainfall: "160"
    },
    {
      name: "Ginger",
      nitrogen: "42",
      phosphorus: "37",
      potassium: "56",
      temperature: "21",
      humidity: "72",
      pH: "6.0",
      rainfall: "180"
    },
    {
      name: "Turmeric",
      nitrogen: "53",
      phosphorus: "46",
      potassium: "48",
      temperature: "22",
      humidity: "70",
      pH: "6.3",
      rainfall: "170"
    },
    {
      name: "Garlic",
      nitrogen: "54",
      phosphorus: "50",
      potassium: "69",
      temperature: "17",
      humidity: "68",
      pH: "6.5",
      rainfall: "140"
    },
    {
      name: "Onion",
      nitrogen: "73",
      phosphorus: "58",
      potassium: "68",
      temperature: "18",
      humidity: "70",
      pH: "6.2",
      rainfall: "150"
    },
    {
    name: "Leek",
    nitrogen: "39",
    phosphorus: "48",
    potassium: "29",
    temperature: "16",
    humidity: "75",
    pH: "6.5",
    rainfall: "160"
    },
    {
    name: "Carrot",
    nitrogen: "46",
    phosphorus: "43",
    potassium: "42",
    temperature: "17",
    humidity: "70",
    pH: "6.8",
    rainfall: "150"
    },
    {
    name: "Radish",
    nitrogen: "60",
    phosphorus: "27",
    potassium: "37",
    temperature: "18",
    humidity: "68",
    pH: "6.5",
    rainfall: "140"
    },
    {
    name: "Beetroot",
    nitrogen: "47",
    phosphorus: "50",
    potassium: "69",
    temperature: "18",
    humidity: "72",
    pH: "6.5",
    rainfall: "150"
    },
    {
    name: "Potato",
    nitrogen: "80",
    phosphorus: "60",
    potassium: "30",
    temperature: "16",
    humidity: "75",
    pH: "5.8",
    rainfall: "180"
    },
   {
    name: "Sweet Potato",
    nitrogen: "48",
    phosphorus: "35",
    potassium: "56",
    temperature: "20",
    humidity: "70",
    pH: "6.0",
    rainfall: "160"
    },
    {
    name: "Cabbage",
    nitrogen: "45",
    phosphorus: "55",
    potassium: "55",
    temperature: "15",
    humidity: "78",
    pH: "6.5",
    rainfall: "170"
    },
    {
    name: "Cauliflower",
    nitrogen: "64",
    phosphorus: "26",
    potassium: "61",
    temperature: "16",
    humidity: "75",
    pH: "6.5",
    rainfall: "160"
    },
    {
    name: "Broccoli",
    nitrogen: "80",
    phosphorus: "48",
    potassium: "48",
    temperature: "17",
    humidity: "72",
    pH: "6.8",
    rainfall: "150"
    },
    {
    name: "Kale",
    nitrogen: "32",
    phosphorus: "52",
    potassium: "62",
    temperature: "18",
    humidity: "70",
    pH: "6.5",
    rainfall: "140"
    },
    {
    name: "Spinach",
    nitrogen: "76",
    phosphorus: "27",
    potassium: "52",
    temperature: "19",
    humidity: "68",
    pH: "6.8",
    rainfall: "140"
    },
    {
    name: "Lettuce",
    nitrogen: "70",
    phosphorus: "21",
    potassium: "34",
    temperature: "18",
    humidity: "70",
    pH: "6.5",
    rainfall: "130"
    },
    {
    name: "Mustard Greens",
    nitrogen: "39",
    phosphorus: "33",
    potassium: "55",
    temperature: "20",
    humidity: "68",
    pH: "6.5",
    rainfall: "130"
    },
    {
    name: "Spring Onion",
    nitrogen: "46",
    phosphorus: "41",
    potassium: "46",
    temperature: "18",
    humidity: "70",
    pH: "6.5",
    rainfall: "140"
    },
    {
    name: "Fenugreek",
    nitrogen: "77",
    phosphorus: "35",
    potassium: "60",
    temperature: "19",
    humidity: "65",
    pH: "6.8",
    rainfall: "120"
    },
    {
    name: "French Beans",
    nitrogen: "55",
    phosphorus: "37",
    potassium: "23",
    temperature: "20",
    humidity: "70",
    pH: "6.5",
    rainfall: "150"
    },
    {
    name: "Peas",
    nitrogen: "43",
    phosphorus: "55",
    potassium: "28",
    temperature: "17",
    humidity: "75",
    pH: "6.8",
    rainfall: "150"
    },
  ];


  const tableBody = document
    .getElementById("crop-table")
    .getElementsByTagName("tbody")[0];
  cropData.forEach((crop) => {
    let row = tableBody.insertRow();
    Object.values(crop).forEach((text) => {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(text));
    });
  });
});

function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function showCrop(crop) {
  const cropInfo = document.getElementById("cropInfo");
  let content = "";

if (crop === "tea") {
    content = `
    <h2>Tea Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Tea is a perennial plantation crop grown mainly in highland and mid-country regions. It is cultivated for its tender leaves used in beverage production.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Cool and humid (18–30°C)</li>
        <li>Soil: Well-drained acidic soil (pH 4.5–5.5)</li>
        <li>Rainfall: 1500–2500 mm annually</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant certified tea seedlings with 1–1.5 m spacing. Mulch to retain moisture.</p>

    <h3>4. Maintenance</h3>
    <p>Regular pruning, fertilizer application (NPK), and weed control are essential.</p>

    <h3>5. Harvesting</h3>
    <p>Pluck two leaves and a bud every 7–14 days.</p>
    `;
}

if (crop === "Cardamom") {
    content = `
    <h2>Cardamom Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Cardamom is a spice crop grown in shaded, humid areas.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: 15–30°C</li>
        <li>Soil: Rich loamy soil</li>
        <li>Shade: Partial shade required</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant suckers or seedlings at 2 m spacing during monsoon.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest capsules when mature but still green.</p>
    `;
}

if (crop === "Coffee") {
    content = `
    <h2>Coffee Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Coffee is a plantation crop grown under shade for its beans.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: 18–28°C</li>
        <li>Soil: Well-drained, slightly acidic</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant seedlings with 2–3 m spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest red ripe cherries manually.</p>
    `;
}
if (crop === "Rice") {
    content = `
    <h2>Rice Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Rice is a staple cereal crop grown in flooded fields.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Warm (20–35°C)</li>
        <li>Water: Continuous irrigation</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Transplant seedlings into puddled fields.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when grains turn golden yellow (3–4 months).</p>
    `;
}
if (crop === "Potato") {
    content = `
    <h2>Potato Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Potato is a cool-season tuber crop.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: 15–25°C</li>
        <li>Soil: Loose sandy-loam</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant seed tubers 5–10 cm deep.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest 90–120 days after planting.</p>
    `;
}

if (crop === "Tomato") {
    content = `
    <h2>Tomato Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Tomato is a popular vegetable crop grown year-round.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: 20–30°C</li>
        <li>Soil: Fertile, well-drained soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Transplant seedlings with 45–60 cm spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when fruits turn red or mature green.</p>
    `;
}
if (crop === "Maize") {
    content = `
    <h2>Maize Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Maize is a cereal crop used for food and feed.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: 18–27°C</li>
        <li>Soil: Well-drained loam</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Sow seeds 3–5 cm deep in rows.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when cobs are fully developed and dry.</p>
    `;
}
if (crop === "Mango") {
    content = `
    <h2>Mango Cultivation</h2>
    <h3>1. Introduction</h3>
    <p>Mango is a tropical fruit tree grown in warm climates.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: 24–30°C</li>
        <li>Soil: Deep, well-drained soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant grafted seedlings with 8–10 m spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest fruits at mature green stage.</p>
    `;
}
if (crop === "Clove") {
    content = `
    <h2>Clove Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Clove is an aromatic spice obtained from dried flower buds. It is widely used in culinary and medicinal applications.</p>

    <h3>2. Climate & Soil Requirements</h3>
    <ul>
        <li>Climate: Warm humid tropical (20–35°C)</li>
        <li>Rainfall: 1500–2500 mm annually</li>
        <li>Soil: Rich loamy soil with good drainage</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant healthy seedlings during monsoon season with 6–7 m spacing.</p>

    <h3>4. Fertilization</h3>
    <p>Apply organic manure and NPK fertilizers annually.</p>

    <h3>5. Harvesting</h3>
    <p>Harvest unopened pink flower buds and dry them in sunlight.</p>
    `;
}

if (crop === "Blackpepper") {
    content = `
    <h2>Black Pepper Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Black pepper is known as the “King of Spices” and is grown as a climbing vine crop.</p>

    <h3>2. Climate & Soil</h3>
    <ul>
        <li>Climate: Tropical humid (23–32°C)</li>
        <li>Rainfall: 2000–3000 mm</li>
        <li>Soil: Well-drained red or laterite soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant cuttings near support trees at 2–3 m spacing.</p>

    <h3>4. Care</h3>
    <p>Provide shade, irrigation, and organic manure regularly.</p>

    <h3>5. Harvesting</h3>
    <p>Harvest spikes when berries start turning red.</p>
    `;
}

if (crop === "Cinnamon") {
    content = `
    <h2>Cinnamon Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Cinnamon is a spice obtained from the inner bark of trees.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Warm and humid (20–30°C)</li>
        <li>Soil: Sandy loam with good drainage</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant seedlings at 2–3 m spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest bark after 2–3 years and dry properly.</p>
    `;
}

if (crop === "Ginger") {
    content = `
    <h2>Ginger Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Ginger is a rhizome crop widely used as spice and medicine.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Warm humid (25–30°C)</li>
        <li>Soil: Loose, well-drained loamy soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant seed rhizomes during early monsoon.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest after 8–9 months when leaves turn yellow.</p>
    `;
}

if (crop === "Turmeric") {
    content = `
    <h2>Turmeric Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Turmeric is a rhizomatous herb known for its medicinal and coloring properties.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Warm humid (20–30°C)</li>
        <li>Soil: Well-drained sandy loam</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant rhizomes at 30–45 cm spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest after 9–10 months when foliage dries.</p>
    `;
}

if (crop === "Garlic") {
    content = `
    <h2>Garlic Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Garlic is a bulb crop used widely for flavor and medicinal benefits.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Cool season crop (12–25°C)</li>
        <li>Soil: Fertile, well-drained loamy soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant cloves 10 cm apart in rows.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when tops turn yellow and dry.</p>
    `;
}

if (crop === "Onion") {
    content = `
    <h2>Onion Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Onion is a widely grown bulb vegetable used globally.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Mild climate (13–24°C)</li>
        <li>Soil: Well-drained loamy soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Transplant seedlings 15 cm apart.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when 50–70% tops fall over.</p>
    `;
}

if (crop === "Leek") {
    content = `
    <h2>Leek Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Leek is a cool-season vegetable related to onion and garlic.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Cool climate (13–24°C)</li>
        <li>Soil: Fertile, well-drained soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Transplant seedlings into trenches 15 cm apart.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when stalks reach desired thickness.</p>
    `;
}

if (crop === "Carrot") {
    content = `
    <h2>Carrot Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Carrot is a root vegetable rich in beta-carotene.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Cool climate (15–20°C)</li>
        <li>Soil: Loose sandy loam soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Sow seeds directly with 30 cm row spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest after 70–90 days depending on variety.</p>
    `;
}

if (crop === "Radish") {
    content = `
    <h2>Radish Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Radish is a fast-growing root vegetable.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Cool season crop</li>
        <li>Soil: Light sandy soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Sow seeds directly 10 cm apart.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest 25–40 days after sowing.</p>
    `;
}

if (crop === "Beetroot") {
    content = `
    <h2>Beetroot Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Beetroot is a root crop valued for its edible taproot.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Cool (15–25°C)</li>
        <li>Soil: Sandy loam soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Sow seeds 2–3 cm deep.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest after 60–80 days.</p>
    `;
}

if (crop === "Capsicum") {
    content = `
    <h2>Capsicum Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Capsicum is a vegetable crop grown for its colorful fruits.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Warm (20–30°C)</li>
        <li>Soil: Well-drained fertile soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Transplant seedlings 45 cm apart.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest when fruits reach full size and color.</p>
    `;
}

if (crop === "Brinjal") {
    content = `
    <h2>Brinjal Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Brinjal (eggplant) is a popular vegetable grown in warm climates.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Warm (21–30°C)</li>
        <li>Soil: Well-drained loamy soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Transplant seedlings at 60 cm spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest fruits 70–90 days after transplanting.</p>
    `;
}

if (crop === "Avocado") {
    content = `
    <h2>Avocado Cultivation</h2>

    <h3>1. Introduction</h3>
    <p>Avocado is a nutrient-rich tropical fruit tree.</p>

    <h3>2. Requirements</h3>
    <ul>
        <li>Climate: Subtropical (20–30°C)</li>
        <li>Soil: Deep, well-drained soil</li>
    </ul>

    <h3>3. Planting</h3>
    <p>Plant grafted seedlings at 7–8 m spacing.</p>

    <h3>4. Harvesting</h3>
    <p>Harvest mature fruits when skin changes color.</p>
    `;
}

  cropInfo.innerHTML = content;
  cropInfo.style.display = content ? "block" : "none";
}
