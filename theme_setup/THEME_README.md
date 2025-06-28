# 🌌 3D Animated Background with Dark/Light Theme – Quick Integration Guide

Bring your website to life with a stunning 3D animated background and seamless dark/light theme switching!

---

## 🚀 Features

- 🎨 3D animated background powered by Vanta.js
- 🌗 One-click dark/light theme toggle
- ⚡ Smooth transitions and modern look
- 🖥️ Easy integration – just copy & paste!

---

## 🛠️ How to Use (Step-by-Step)

### 1. **Copy the Theme Files**
Copy the following files from the `theme_setup/` folder into your project (keep them in a `theme_setup` folder for best organization):

- `theme_setup/theme.css`  
  <sub>→ Contains all the CSS for the animated background and theme colors.</sub>
- `theme_setup/themeToggle.js`  
  <sub>→ Handles dark/light theme switching and remembers user preference.</sub>
- `theme_setup/vanta3d.js`  
  <sub>→ Initializes and updates the 3D animated background for both themes.</sub>

---

### 2. **Add the Background Container to Your HTML**
Paste this at the very top of your `<body>` (before your main content):
```html
<div id="vanta-bg" class="animated-background"></div>
```
<sub>Purpose: This is where the 3D animation will appear, behind your content.</sub>

---

### 3. **Include the Theme CSS**
In your `<head>`, add:
```html
<link rel="stylesheet" href="theme_setup/theme.css">
```
<sub>Purpose: Loads the styles for the animated background and theme colors.</sub>

---

### 4. **Add the Required Scripts Before `</body>`**
Paste these just before your closing `</body>` tag:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
<script src="theme_setup/vanta3d.js"></script>
<script src="theme_setup/themeToggle.js"></script>
```
- The first two lines load the required libraries for the 3D effect.
- The last two lines load your custom background and theme logic.

---

### 5. **Add a Theme Toggle Button**
Place this anywhere in your HTML (for example, in your navbar or top-right corner):
```html
<button onclick="toggleTheme()" style="position:fixed;top:1rem;right:1rem;z-index:10;">Toggle Theme</button>
```
<sub>Purpose: Lets users instantly switch between dark and light modes.</sub>

---

## 📂 **File Purpose Overview**

- **theme.css**  
  Handles all background, color, and theme-related styles.
- **themeToggle.js**  
  Adds dark/light mode switching and saves the user's choice.
- **vanta3d.js**  
  Controls the 3D animated background and updates it when the theme changes.

---

## ✨ Result

- Enjoy a beautiful, interactive 3D background that adapts to your theme!
- Easily customize colors and effects in `vanta3d.js` and your CSS.

---

## 👨‍💻 Credits

- [Vanta.js](https://www.vantajs.com/)
- [Three.js](https://threejs.org/)

---

**Made with ❤️ for modern web projects!**
