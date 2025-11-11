# 🏎️ Guess the F1 Driver

A fun web-based quiz game where players try to guess a Formula 1 driver based on anonymized hints such as nationality, team, or car number.  
After each attempt (correct or wrong), a new driver is loaded from the **OpenF1 API**, and the game continues seamlessly.

---

## 🚀 Overview

**Guess the F1 Driver** is designed as a lightweight interactive browser game using only **HTML**, **CSS**, and **JavaScript**.  
The goal is to combine web interactivity with API integration and game logic.

Play the game here: [https://lucinho17.github.io/guess-the-f1-driver/](https://lucinho17.github.io/guess-the-f1-driver/)

---

## 🧩 Technologies & Architecture

### 🛠 Technologies
- **HTML5** – structure of the web page  
- **CSS3** – styling and layout  
- **Vanilla JavaScript (ES6)** – main game logic  
- **OpenF1 API** – data source for Formula 1 drivers

### 🧱 Architecture
- When the page loads, the app initializes UI elements: a “New Driver” button, input field, “Check” button, and a display area for hints or data.  
- On each round, an asynchronous function fetches data from the OpenF1 API, selects a random driver, and updates the UI.  
- When the user submits a guess, the app checks it against the driver’s name, shows feedback, and immediately loads a new driver for the next round.

---

## 🎮 Features

- **Random driver fetch** – selects a random F1 driver from the API  
- **Hint display** – shows partial information (team, nationality, etc.)  
- **Answer checking** – compares user input with the correct driver name  
- **Continuous play loop** – automatically fetches a new driver after each attempt  
- *(Optional)* Scoring, hints, image display, or timer system

---

## 🌐 API Usage

- Base endpoint:  
  ```
  https://api.openf1.org/v1/drivers
  ```
- The API returns a JSON array of driver objects with fields such as:  
  - `full_name`  
  - `country_code`  
  - `team_name`  
  - `driver_number`  
  - `headshot_url`  

- Random selection example:
  ```js
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomDriver = data[randomIndex];
  ```

---

## ⚙️ Core Functions

### `fetchRandomDriver()`
- **Async** function that loads driver data.  
- If the driver list is not cached, it fetches it from the API.  
- Catches all JSON objects from the endpoint and stores them in array variable locally.

### `getRandomDriver()`
- **Sync** function that generates random index and returns object from an array with that index

### `loadDriver()`
- **Async** function that calls `getRandomDriver()` function and stores returned object into local variable
- Manipulates DOM, creates container for displaying driver's picture and hints.

### `checkAnswer()`
- **Sync** function that compares user input with the current driver’s name.  
- Displays feedback (correct / incorrect).  
- Calls `loadDriver()` again for the next round.

### Game Loop
- The game starts by calling `fetchRandomDriver()` once on page load.  
- Each `checkAnswer()` call ends by loading a new random driver, creating an endless loop of rounds.

---

## 🎨 User Interface & Experience

- Clear, minimal interface with buttons, input fields, and feedback areas  
- Instant feedback after submission  
- Optional driver image display and simple animations for a better experience  
- Possible future additions: score counter, timer, hints, or leaderboard  
- Fully playable on desktop and mobile (responsive layout)

---

## ⚡ Optimization

- **Caching**: Fetch all drivers once and reuse them locally (faster between rounds)    
- **Responsive design**: Adjust layout for smaller screens  

---

## 🧠 File Structure

```
/guess-the-f1-driver/
 ├── index.html          # main structure
 ├── main.js             # game logic (fetch, check, loop)
 ├── styles.css          # styling and layout
 ├── assets/
 │    └── placeholder.jpg
 └── README.md
```

---

## 🕹 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/lucinho17/guess-the-f1-driver.git
   ```
2. Open `index.html` in a web browser  
3. (Optional) Serve via local server (e.g., VSCode Live Server)  
4. Play the game — click **New Driver**, type your guess, and hit **Check!**

---

## 👨‍💻 Author

Developed by **[Lucinho17](https://github.com/lucinho17)**  

