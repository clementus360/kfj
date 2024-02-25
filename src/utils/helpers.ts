export function formatCurrency(amount: string): string {
    let numericAmount = parseFloat(amount);

    if (isNaN(numericAmount)) {
        return "Invalid amount"; // Handle invalid input
    }

    const suffixes = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

    let suffixIndex = 0;
    while (numericAmount >= 1000 && suffixIndex < suffixes.length - 1) {
        numericAmount /= 1000;
        suffixIndex++;
    }

    const formattedAmount = numericAmount.toFixed(2).replace(/\.00$/, ""); // Remove trailing ".00"

    return `${formattedAmount} ${suffixes[suffixIndex]}`;
}
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

export function addCommasToPrice(price: string) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const locations = {
    Kigali: "Kigali",
    Butare: "Butare",
    Gisenyi: "Gisenyi",
    Rwamagana: "Rwamagana",
    Musanze: "Musanze",
    Huye: "Huye",
    Rubavu: "Rubavu",
    Muhanga: "Muhanga",
    Karongi: "Karongi",
    Nyagatare: "Nyagatare",
    Rusizi: "Rusizi",
    Ngoma: "Ngoma",
    Nyamata: "Nyamata",
    Ruhango: "Ruhango",
    Nyanza: "Nyanza",
    Gicumbi: "Gicumbi",
    Kibuye: "Kibuye",
    Bugesera: "Bugesera",
    Kirehe: "Kirehe",
    Kayonza: "Kayonza",
    Ngororero: "Ngororero",
    Kamonyi: "Kamonyi",
    Burera: "Burera",
    Rulindo: "Rulindo",
    Nyarugenge: "Nyarugenge",
    Nyaruguru: "Nyaruguru",
    Nyamasheke: "Nyamasheke",
    Nyabihu: "Nyabihu",
    Gatsibo: "Gatsibo",
    Gakenke: "Gakenke",
    Gasabo: "Gasabo",
    Nyamagabe: "Nyamagabe",
    Rutsiro: "Rutsiro",
  };


  export const trimLevelOptions = [
    "Base",
    "Sport",
    "Luxury",
    "Premium",
    "Limited",
    "Performance",
    "Executive",
    "Platinum",
    "Ultimate",
    // Add more options as needed
];

export const makeOptions = [
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jeep",
    "Kia",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Mazda",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Ram",
    "Subaru",
    "Toyota",
    "Volkswagen",
    "Volvo",
    // Add more options as needed
];

export const modelOptions = {
    "Chevrolet": ["Camaro", "Colorado", "Equinox", "Malibu", "Silverado", "Tahoe", "Traverse"],
    "Chrysler": ["300", "Pacifica"],
    "Dodge": ["Challenger", "Charger", "Durango", "Grand Caravan", "Journey"],
    "Ford": ["Edge", "Escape", "Expedition", "Explorer", "F-150", "Fusion", "Mustang"],
    "GMC": ["Acadia", "Sierra", "Terrain", "Yukon"],
    "Honda": ["Accord", "Civic", "CR-V", "HR-V", "Odyssey", "Pilot"],
    "Hyundai": ["Elantra", "Kona", "Santa Fe", "Sonata", "Tucson"],
    "Infiniti": ["Q50", "QX50", "QX60", "QX80"],
    "Jeep": ["Cherokee", "Grand Cherokee", "Renegade", "Wrangler"],
    "Kia": ["Forte", "Optima", "Sorento", "Sportage", "Telluride"],
    "Land Rover": ["Discovery", "Range Rover", "Range Rover Sport"],
    "Lexus": ["ES", "GX", "NX", "RX", "UX"],
    "Lincoln": ["Aviator", "Corsair", "Nautilus", "Navigator"],
    "Mazda": ["CX-3", "CX-5", "CX-9", "Mazda3", "Mazda6"],
    "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
    "Mitsubishi": ["Eclipse Cross", "Outlander", "Outlander Sport"],
    "Nissan": ["Altima", "Maxima", "Murano", "Rogue", "Sentra", "Titan"],
    "Ram": ["1500", "2500", "3500"],
    "Subaru": ["Ascent", "Forester", "Outback"],
    "Toyota": ["Camry", "Corolla", "Highlander", "RAV4", "Sienna", "Tundra", "Dyna", "Van"],
    "Volkswagen": ["Atlas", "Golf", "Jetta", "Tiguan"],
    "Volvo": ["S60", "S90", "XC40", "XC60", "XC90"],
    // Add more options as needed
};
