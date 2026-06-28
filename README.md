# Elementor Splash Screen

A lightweight fullscreen splash screen for WordPress and Elementor built with pure CSS, JavaScript, and a small PHP hook.

This project was created for **B Andrews** to replace the default Elementor Popup with a smoother, faster fullscreen splash experience while keeping the splash design fully editable in Elementor.

---

# Features

- Fullscreen splash screen
- No Elementor Popup Builder
- No page redirects
- Fully editable Elementor Template
- Lightweight CSS & JavaScript
- Enter & Skip buttons
- Auto close after a configurable delay
- Smooth fade-out animation
- Scroll lock while the splash is active
- Homepage only
- Responsive

---

# Project Structure

```text
elementor-splash-screen/
│
├── splash.css
├── splash.js
├── wpcode.php
└── README.md
```

---

# Requirements

- WordPress
- Elementor (Free or Pro)
- WPCode Plugin
- Elementor Saved Template

---

# Installation Guide

## Step 1 — Create the Splash Screen

Create your splash screen as an **Elementor Saved Template**.

Dashboard

```text
Templates
→ Saved Templates
```

Design your splash exactly as you want.

Example:

- Background Image
- Logo
- Title
- Enter Button
- Skip Button

---

## Step 2 — Get Template ID

Open

```text
Templates
→ Saved Templates
```

Locate your splash template.

Example:

```text
Template ID

1234
```

---

## Step 3 — Button Classes

Inside Elementor assign:

### Enter Button

```text
intro-enter
```

### Skip Button

```text
intro-skip
```

---

## Step 4 — Create PHP Snippet

Open

```text
WPCode
→ Add Snippet
→ PHP Snippet
```

Copy the contents of:

```text
wpcode.php
```

Replace

```php
1234
```

with your own Elementor Template ID.

Settings

- Auto Insert
- Run Everywhere
- Active

---

## Step 5 — Install CSS

Open

```text
Appearance
→ Customize
→ Additional CSS
```

or

```text
Elementor
→ Site Settings
→ Custom CSS
```

Copy the contents of

```text
splash.css
```

**Important**

Do **not** replace your existing CSS.

Simply append the splash screen styles to the end of your existing stylesheet.

---

## Step 6 — Install JavaScript

Open

```text
WPCode
→ Add Snippet
→ JavaScript
```

Copy

```text
splash.js
```

Settings

- Auto Insert
- Site Wide
- Footer
- Active

---

# How It Works

When the homepage loads:

1. The PHP snippet injects the Elementor splash template before the page content.
2. JavaScript locks page scrolling.
3. Visitors see the splash screen immediately.
4. Visitors can:
   - Click **Enter**
   - Click **Skip**
   - Wait for the automatic timeout

5. The splash fades away.
6. The homepage becomes fully interactive.

---

# Customization

## Auto Close

Inside

```text
splash.js
```

Locate

```javascript
setTimeout(closeIntro, 8000);
```

Examples

| Delay      | Value |
| ---------- | ----: |
| 3 Seconds  |  3000 |
| 5 Seconds  |  5000 |
| 8 Seconds  |  8000 |
| 10 Seconds | 10000 |

---

## Background

The background is managed directly in Elementor.

Supported:

- Background Image
- Background Color
- Gradient
- Video (optional)

No JavaScript changes are required.

---

# Notes

- Designed for **Homepage Only**.
- Does **not** use Elementor Popup Builder.
- Does **not** redirect visitors.
- Existing website CSS should remain untouched.
- Existing JavaScript should remain untouched.
- The splash content remains fully editable in Elementor.
- JavaScript is loaded through **WPCode Snippets**.
- CSS is added using **Additional CSS** or **Elementor Site Settings**.

---

# Repository Contents

| File       | Description                               |
| ---------- | ----------------------------------------- |
| splash.css | Splash screen styles                      |
| splash.js  | Splash screen functionality               |
| wpcode.php | PHP hook to inject the Elementor template |
| README.md  | Installation guide                        |

---

# Tested With

- WordPress 6+
- Elementor Free
- Elementor Pro
- Hello Elementor Theme
- WPCode Plugin
- PHP 8+

---

# License

MIT License

You are free to use, modify, and distribute this project for personal or commercial WordPress projects.

---

# Author

**Md Nur Nobi**

Senior WordPress Designer & Elementor Expert

**Upwork**

https://www.upwork.com/freelancers/mdnurnobi01
