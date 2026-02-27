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
