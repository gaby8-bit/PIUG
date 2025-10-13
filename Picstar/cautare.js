function searchbar() {
  let query = document.getElementById("searchbar").value.toLowerCase().trim();

  if (query.includes("modele") || query.includes("masini") || query.includes("model")) {
    window.location.href = "modele.html";
  } 
  else if (query.includes("servicii") || query.includes("service") || query.includes("intretinere")) {
    window.location.href = "servicii.html";
  } 
  else if (query.includes("contact") || query.includes("email") || query.includes("telefon")) {
    window.location.href = "contact.html";
  } 
  else if (query.includes("despre") || query.includes("istorie") || query.includes("mercedes")) {
    window.location.href = "despre.html";
  } 
  else if (query !== "") {
    alert("Nu am găsit nicio pagină care să corespundă căutării tale.");
  }
}
