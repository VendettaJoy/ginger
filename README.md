# Ginger: Offline Coding for Millenials
A Design-to-Code collaboration with the up and coming web designer [T Mukherjee](https://www.behance.net/Viral_TM#). 

**Ginger** is a small, definitely fictional, company that focuses on providing high quality, offline coding lessons to upskill curious youngsters. 

## Table of Contents
- [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Project Features](#project-features)
    - [Project Screenshots](#project-screenshots)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Useful Resources](#useful-resources)


## Overview
### The Challenge
Code Ginger's hero section from scratch as per the design file and account for the dynamic content based on different screen sizes, i.e. desktop, tablet, and mobile.

### Project Features
- Screen-Reader Friendly
- Keyboard Navigation Friendly

--- [LIVE WEBSITE](https://ginger-tm.netlify.app/) ---

## Project Screenshots
 
### DESKTOP

![Ginger for Desktop](/public/screenshots/Ginger_Desktop.png)

### TABLET

![Ginger for Tablet](/public/screenshots/Ginger_Tablet.png)

### MOBILE

![Ginger for Mobile](/public/screenshots/Ginger_Mobile.png)

## My Process
### Built With

- Love 💖
- Semantic HTML5 Markup
- CSS Flexbox
- CSS Grid
- CSS Custom Properties
- Vanilla JS

### What I Learned
Ginger's design is very simple at first glance, but coding it was a completely different challenge altogether, mostly due to certain design choices. Can you believe this is my first time attempting the frosted glass effect? My first attempt before researching anything was to use CSS' pseudo-elements with absolute positioning, and it worked perfectly! But upon doing a little research after, I discovered `backdrop-filter`, which can give you that classic frosted glass look in just one single line of CSS. I was already familiar with `filter`, but `backdrop-filter` is certainly new to my toolbox!

My favourite part of this challenge was coding the hamburger menu and the slide-in-out navigation on tablet and mobile. I took to jsfiddle to do a little experimenting with some basic CSS transforms and transitions to have both the hamburger icon morph into an X and back, and to have the navigation slide in and out when the icon is toggled. I believe the real challenge once i got the CSS and logic right was making it accessible to both screen-readers and users using keyboard navigation. Luckily, [Coder Coder](https://www.youtube.com/@TheCoderCoder) came in clutch with a handy tutorial on making slide-in-out navigations accessible! Having some familiarity with working with ARIA in my previous projects made following along a lot more easier.

### Useful Resources
1. [public vs. src](https://www.thatsoftwaredude.com/content/14144/public-vs-src-assets-when-to-use-each-approach-in-vite): needed a refresher lol
2. [Accessible Toggles](https://inclusive-components.design/toggle-button/): used this very guide for my product cart project
3. [Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp): just to get an idea of the different breakpoints
4. [SVG Backgrounds](https://www.svgbackgrounds.com/how-to-add-svgs-with-css-background-image/): as it says on the tin!
5. [Hamburger Nav JSFiddle](https://jsfiddle.net/wx2aufnk/3/): my first attempt at the hamburger nav before adding it to my project
6. [Accessible Navigation](https://www.youtube.com/watch?v=pBv7igaxfQE): Coder Coder's superb tutorial :)
7. [body Fill Screen](https://stackoverflow.com/questions/5721904/make-body-fill-entire-screen): used this in tandem with SVG bgs as there was some cutoff happening