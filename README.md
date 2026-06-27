# Elementor Splash Screen

A lightweight fullscreen splash screen for Elementor websites built with pure CSS and JavaScript.

This project was created as a custom solution for **B Andrews** to replace the default Elementor Popup with a faster, smoother fullscreen intro experience. Instead of relying on the Popup Builder, the splash screen is displayed as a fullscreen overlay and can be dismissed using an **Enter** or **Skip** button, or automatically after a configurable delay.

## Features

- Fullscreen splash overlay
- No Elementor Popup Builder
- No page redirects
- Pure CSS & JavaScript
- Lightweight and easy to customize
- Enter & Skip buttons
- Automatic close after a configurable delay
- Scroll lock while the splash screen is active
- Responsive design
- Smooth fade-out animation

## Project Structure

```text
elementor-splash-screen/
│
├── README.md
├── splash.css
└── splash.js
```

## Requirements

- WordPress
- Elementor (Free or Pro)
- WPCode Snippets Plugin (for JavaScript)
- Elementor Custom CSS or WordPress Additional CSS

---

# Installation

## 1. Create the Splash Section

Create a fullscreen Elementor Section or Container and place it at the top of your homepage.

Assign the following CSS ID:

```text
intro-screen
```

Assign the following CSS Classes:

**Enter Button**

```text
intro-enter
```

**Skip Button**

```text
intro-skip
```

---

## 2. Install the JavaScript

Open:

```text
WPCode
→ Code Snippets
→ Add New
→ JavaScript Snippet
```

Copy the contents of **splash.js**.

Configure:

- Auto Insert
- Site Wide
- Footer

Save and Activate.

---

## 3. Install the CSS

Open one of the following:

- Elementor → Site Settings → Custom CSS
- Appearance → Customize → Additional CSS

Copy the contents of **splash.css**.

> **Important:** Do **not** delete or replace your existing website CSS. Simply append the splash screen styles to the end of the current stylesheet.

---

# Customization

## Change Auto Close Time

Edit the following line inside **splash.js**:

```javascript
setTimeout(closeIntro, 8000);
```

Examples:

| Time       | Value |
| ---------- | ----: |
| 3 Seconds  |  3000 |
| 5 Seconds  |  5000 |
| 8 Seconds  |  8000 |
| 10 Seconds | 10000 |

---

## Background

The splash screen background can be customized directly in Elementor using:

- Solid Color
- Gradient
- Background Image

No JavaScript changes are required.

---

# Notes

- This project does **not** use Elementor Popup Builder.
- No additional plugins are required except **WPCode Snippets** for loading the JavaScript.
- Existing website CSS should remain unchanged.
- Existing JavaScript should remain unchanged.
- This implementation was designed specifically for the homepage of **https://bandrews.com/**.

---

# Author

**Md Nur Nobi**

Senior WordPress Designer & Elementor Expert

- Upwork: https://www.upwork.com/freelancers/mdnurnobi01

---

# License

This project is released under the **MIT License**.

Feel free to use, modify, and distribute it in personal or commercial WordPress projects.
