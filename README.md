# Infinite Scroll Project

This project demonstrates how **Infinite Scrolling** works using **JavaScript Fetch API** and scroll event listeners.

Instead of clicking pagination buttons like "Next Page", new posts are automatically loaded when the user scrolls near the bottom of the page.

The project fetches posts dynamically from:

https://jsonplaceholder.typicode.com/

---

# 🚀 Features

- Infinite scrolling behavior
- Dynamic API data fetching
- Automatic loading of new posts
- Prevents multiple API calls while loading
- Stops fetching when no more posts are available
- Clean and beginner-friendly JavaScript logic

---

# 📂 Project Structure

You can create the UI yourself using HTML & CSS  
or generate the design using AI tools.

The main focus of this project is understanding the:

- Infinite Scroll Logic
- Scroll Detection
- API Fetching
- Dynamic DOM Rendering

---

# ⚙️ How Infinite Scroll Works

The application listens for the user's scrolling behavior.

Whenever the user reaches near the bottom of the webpage, new posts are fetched automatically.

---

# 🔥 Important Infinite Scroll Logic

```js
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } =
    document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 200) {
    getPost();
  }
});
