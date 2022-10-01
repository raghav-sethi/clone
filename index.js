// Selecting Elements
const FAQCards = document.querySelectorAll(".FAQCard");
const FAQToggleCards = document.querySelectorAll(".FAQToggleCard");
const landingHeading1 = document.querySelector(".landingHeading1");
const landingHeading2 = document.querySelector(".landingHeading2");
const landingHeading3 = document.querySelector(".landingHeading3");
const landingPara = document.querySelector(".landingPara");

// State Variables
const english = true;
// Conditional Content Rendering
!english
  ? (landingHeading1.textContent = "अनलिमिटेड फ़िल्में, टीवी शो")
  : false;
!english ? (landingHeading2.textContent = "और बहुत कुछ.") : false;
!english
  ? (landingHeading3.textContent = "जहां चाहें देखें. जब चाहें कैंसल करें.")
  : false;
!english
  ? (landingPara.textContent =
      "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.")
  : false;

// FAQ Toggle Handler
const cardToggleHandler = (event) => {
  FAQToggleCards.forEach((FAQToggleCard) =>
    FAQToggleCard.id !== `${event.path[0].id}Toggle`
      ? FAQToggleCard.classList.add("hidden")
      : false
  );

  const toggleCard = document.getElementById(`${event.path[0].id}Toggle`);
  toggleCard.classList.toggle("hidden");
};

// Adding event listner to FAQ Card
FAQCards.forEach((FAQCard) =>
  FAQCard.addEventListener("click", cardToggleHandler)
);

function myFunction(x, y) {
  if (x.matches) {
    // If media query matches
    landingPara.textContent = "Ready to watch? Enter your email";
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const node1 = document.createTextNode("to create or restart your");
    const node2 = document.createTextNode("membership.");
    para1.appendChild(node1);
    para2.appendChild(node2);
    para1.style.margin = "0px";
    para2.style.margin = "0px";
    para2.style.marginBottom = "5px";
    const element = document.querySelector(".addingContainer");
    element.appendChild(para1);
    element.appendChild(para2);

    // Card elements order changes
    // document.querySelector(".mobileImage").style.order = "2";
    // document.querySelector(".childrenImage").style.order = "2";
  } else if (y.matches) {
    // document.querySelector(".mobileContent").style.order = "2";
    // document.querySelector(".childrenImage").style.order = "1";
  }
}

var x = window.matchMedia("(max-width: 480px)");
var y = window.matchMedia("(min-width: 481px)");

myFunction(x, y); // Call listener function at run time
x.addEventListener(myFunction); // Attach listener function on state changes
y.addEventListener(myFunction); // Attach listener function on state changes
