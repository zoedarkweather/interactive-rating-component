# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/zoedarkweather/interactive-rating-component](https://github.com/zoedarkweather/interactive-rating-component)
- Live Site URL: [https://interactive-rating-component-lime-pi.vercel.app/](https://interactive-rating-component-lime-pi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I'd just completed several relevant sections of the MDN Frontend Developer Course - Advanced Form Styling, UI Pseudo Classes, and Client-side Validation, so this was an opportunity to practice some of the things I've learned. I used radio buttons for the rating options as that seemed to make the most sense and be the most accessable way to do it. I had difficulty styling them at first and then I realized I should style the labels instead. I'm not sure if this was the correct way to do it, so any feedback on those choices would be helpful.  

10/11 updates: Centered component on page, added aria-live attribute so "thank you" is read by screen reader. Radio buttons are currently not able to be checked using the keyboard.  

10/13 updates: Made radio buttons accessible by styling them directly rather than hiding them and styling their labels. Also made minor changes to html, removing unneccessary elements.

### Continued development

Continue practicing styling form elements.

### Useful resources

- [https://www.scottohara.me/blog/2021/09/24/custom-radio-checkbox-again.html](https://www.scottohara.me/blog/2021/09/24/custom-radio-checkbox-again.html) - Accessible styled radio buttons and checkboxes - direct styling now supported in modern browsers.

- [MDN - Advance Form Styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling) - This chapter helped me learn how to remove default styling from form controls.

## Author

- Github - [https://github.com/zoedarkweather](https://github.com/zoedarkweather)
- Frontend Mentor - [@zoedarkweather](https://www.frontendmentor.io/profile/zoedarkweather)