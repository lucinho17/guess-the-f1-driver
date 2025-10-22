
const url = "https://api.openf1.org/v1";
let parentDiv = document.getElementById("output-div");
let randomDriver= null;


async function fetchRandomDriver() {
    
    
  const response = await fetch(`${url}/drivers`);
  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No drivers found in API response");
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  randomDriver = data[randomIndex];

  

  let driverNumber = document.createElement("h2");
  driverNumber.textContent = `Driver Number: ${randomDriver.driver_number}`;
  parentDiv.appendChild(driverNumber);

  let driverCountry = document.createElement("h2");
  driverCountry.textContent = `Country: ${randomDriver.country_code}`;
  parentDiv.appendChild(driverCountry);

  
}


let result = document.getElementById("result");
let points = document.getElementById("points");
let score = 0;

points.textContent = `Points: ${score}`;


function checkAnswer() {
    
  let userInput = document.getElementById("driver-input").value;
  if(!userInput) {
    alert("Please enter a driver's name.");
    return;
  }

  if(userInput.toLowerCase() === randomDriver.full_name.toLowerCase()) {
    result.textContent = "Correct! You guessed the driver.";
    score += 10;
    points.textContent = `Points: ${score}`

    ;
    
  } else {
    result.textContent = `Wrong! The correct answer was ${randomDriver.full_name}.`;
    
    
  }

  parentDiv.innerHTML = "";
  

  fetchRandomDriver();
}



(async () => {
  await fetchRandomDriver();  
  document.getElementById("submit-btn").addEventListener("click", checkAnswer); 
})();

