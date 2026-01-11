# Advice Generator App

The **Advice Generator App** is a simple yet interactive frontend project that fetches random pieces of advice using the Advice Slip API and displays them dynamically. The UI includes responsive design, hover effects, and real-time API updates triggered by user interaction.

---

## 🚀 Live Demo

🔗 **Live URL:** https://musical-flan-c513ec.netlify.app/

---

## 🧩 Built With

- **HTML5** — structural foundation
- **CSS3** — layout + responsive styling
- **JavaScript (ES6)** — dynamic updates + API handling
- **Advice Slip API** — data source for advice quotes

---

## ✨ Features

✔ Responsive layout (mobile & desktop)  
✔ Real-time advice fetching via API  
✔ Interactive dice button with hover effects  
✔ Semantic and accessible HTML  
✔ Lightweight — no frameworks required  
✔ WCAG-friendly color palette based on design specs  

---

## 📚 What I Learned

During this project I gained experience in:

- Consuming public APIs using `fetch()`
- Working with asynchronous JavaScript (`async/await`)
- DOM manipulation for dynamic content updates
- Designing for multiple screen sizes
- Using Google Fonts & styling based on style guides
- Version control with Git & GitHub

---

## 🧵 Approach

1. **Planning & Understanding the Challenge**  
   Reviewed the UI design, requirements, and API documentation to understand desired behavior.

2. **HTML Structure**  
   Built a semantic structure for card, button, divider, and advice content to ensure readability and clarity.

3. **Styling with CSS**  
   Applied typography, spacing, and color using values from the style guide.  
   Flexbox was used for centering and responsiveness.

4. **API Integration**  
   Used the Advice Slip API to fetch random advice.  
   Advice loads on page load and refreshes when the dice button is clicked.

5. **Interactivity Enhancements**  
   Hover and active states were implemented to make the dice feel interactive and responsive.

6. **Version Control & Deployment**  
   Managed using Git & GitHub and prepared for deployment using static hosting support.

---

## 🗂 Folder Structure

```
advice-generator-app/
 ┣ public/
 ┃ ┗ images/
 ┣ src/
 ┃ ┣ index.html
 ┃ ┣ style.css
 ┃ ┗ script.js
 ┣ README.md
 ┗ .gitignore
```


---

## 🌐 API Reference

Endpoint used:

GET https://api.adviceslip.com/advice

---
## 📝 Possible Future Enhancements

✨ Animated transitions between advice  
✨ Save previously shown advice  
✨ Theme toggle (dark/light mode)  
✨ React version for state encapsulation  
