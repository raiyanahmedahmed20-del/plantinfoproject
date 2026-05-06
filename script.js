const plants = [
  { name: "Banyan Tree", sci: "Ficus benghalensis", uses: "Shade, medicinal", details: "Large tree with aerial roots." },
  { name: "Mango", sci: "Mangifera indica", uses: "Fruit, timber", details: "King of fruits." },
  { name: "Moringa", sci: "Moringa oleifera", uses: "Nutrition, medicine", details: "Highly nutritious tree." },
  { name: "Ashoka", sci: "Saraca asoca", uses: "Ornamental, medicinal", details: "Sacred flowering tree." },
  { name: "Peepal", sci: "Ficus religiosa", uses: "Religious, medicinal", details: "Sacred fig tree." },
  { name: "Neem", sci: "Azadirachta indica", uses: "Medicine, pesticide", details: "Antibacterial properties." },
  { name: "Lemon", sci: "Citrus limon", uses: "Fruit, medicine", details: "Rich in vitamin C." },
  { name: "Curry Leaves", sci: "Murraya koenigii", uses: "Cooking, medicine", details: "Used in Indian cuisine." },
  { name: "Bougainvillea", sci: "Bougainvillea", uses: "Ornamental", details: "Colorful flowering plant." },
  { name: "Fig", sci: "Ficus carica", uses: "Fruit", details: "Sweet edible fruit." },
  { name: "Jamun", sci: "Syzygium cumini", uses: "Fruit, medicine", details: "Purple fruit with health benefits." }
];

const container = document.getElementById("container");

plants.forEach(plant => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${plant.name}</h2>
    <p><strong>Scientific Name:</strong> ${plant.sci}</p>
    <p><strong>Uses:</strong> ${plant.uses}</p>
    <p><strong>Details:</strong> ${plant.details}</p>
  `;

  container.appendChild(card);
});
