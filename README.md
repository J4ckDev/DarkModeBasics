<div align="center">

# :mortar_board: Dark Mode Basics :moon: <!-- omit in toc -->

![WorkResult](./media/Result.png)

</div>

In this guide, while you build the webpage of above, you will learn how to use CSS variables, identify if the user has dark mode enabled in his operative system or browser, use Javascript to change the theme, and save the chosen theme by the user with local storage.

## Table of Contents <!-- omit in toc -->
- [1. HTML](#1-html)
- [2. CSS](#2-css)
- [3. Javascript](#3-javascript)

## 1. HTML
The structure defined for this webpage is simple because we only need to show some information to see the differences when we swap between the dark theme and the light theme. You can see the code below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Dark Mode Webpage</title>
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>
  <body>
    <h1 class="title">My First Dark Mode Webpage</h1>
    <div>
      <img class="image" src="https://picsum.photos/200" alt="Random pictures"/>
    </div>
    <button id="Changer" class="btn">Change Theme</button>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <script src="./assets/js/app.js"></script>
  </body>
</html>

```
I use [this website](https://www.lipsum.com/) to generate the Lorem Ipsum and [Lorem Picsum](https://picsum.photos/) to show a random square image. 

## 2. CSS


## 3. Javascript