# ⏱️ Compact Timer & Stopwatch

A sleek and minimal **desktop timer and stopwatch** application built with **Electron** and **React**.  
It’s designed to be a simple, unobtrusive tool to help you stay focused — with the option to use it as a standard window or as a convenient overlay on top of your work.

---

## ✨ Features

- **Dual Modes** → Functions as both a countdown **Timer** and a count-up **Stopwatch**  
- **Intuitive Time Setting** → Scroll-based controls to set hours, minutes, and seconds (Doesn't work properly on mouse, only on touchpad)
- **Overlay Mode** → Pin the timer as a semi-transparent, click-through overlay that stays on top of all windows  
- **Alarm Sound** → Simple audio alert when the countdown finishes  
- **Clean & Minimal UI** → Modern interface built with Tailwind CSS  
- **Global Shortcut** → Quickly toggle overlay mode with a keyboard shortcut  

---

## 💻 Technology Stack

- ⚡ **Electron** → Cross-platform desktop app framework  
- ⚛️ **React** → Dynamic UI components  
- 🎨 **Tailwind CSS** → Modern styling and layout  

---

## 🚀 How to Use

### Main Controls

#### When Paused
- ▶️ **Start** → Begins the countdown or stopwatch  
- ⚙️ **Edit** → Switches to the time-setting view (scroll to set hours, minutes, and seconds)  
- 🔼/🔽 **Mode Switch** → Toggle between:  
  - Timer mode (🔽 counts down from set time)  
  - Stopwatch mode (🔼 counts up from zero)  

#### When Running
- ⏸️ **Pause** → Pauses timer or stopwatch  
- ⏮️ **Reset** → Stops and resets to zero  

---

### ⌨️ Global Shortcut: Overlay Mode

- **Shortcut:** `Shift + P`  
- **Functionality:**  
  - Window stays **always on top**  
  - Becomes **semi-transparent**  
  - **Ignores mouse clicks** → lets you work without interference  
- Press again to return to standard window mode  

---

## 🔮 Future Plans

- 🕒 **Working Clock Mode** → Add a third mode to display the current time, turning the app into a complete time-management tool.  

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/pedrocappelini/Timer

# Go into the project folder
cd Timer

# Install dependencies
npm install

# Run the app
npm start / npm run dev
