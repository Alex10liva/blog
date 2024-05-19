---
title: Exploring units of measurement in CSS
summary: Discover the units of measurement in CSS, from pixels, em and rem to more advanced units like vw and vh. Choose wisely to achieve attractive and responsive web designs.
date: August 23, 2023
tags: CSS
---

In the world of web design, precise control of dimensions and sizes is essential to achieve a consistent and accessible visual presentation on different devices and screens. CSS units of measure play a crucial role in this process, allowing us to define dimensions and sizes effectively. In this article, we will explore a variety of units of measure, from the most common to the most specialized, so that you can use them effectively in your projects.

## Fundamental units of measurement

### Pixels `px`

Pixels are the most basic and common unit of measurement in CSS. A pixel represents one point on the screen and is a fixed unit. Pixel values provide precise control over the layout, making them ideal for defining exact element sizes.

<p style="margin-bottom: 10px">Examples of use:</p>

```css
.element {
  width: 300px;
  height: 200px;
  font-size: 18px;
}
```

### Em

The unit `em` is relative to the font size of the parent element. A value of `1em` is equivalent to the current font size. The unique feature of `em` is that it inherits and accumulates in nested elements, so it can cause unexpected font size cascades. It is especially useful for creating flexible and adaptive layouts.

<p style="margin-bottom: 10px">Examples of use:</p>

```css
.father {
  font-size: 16px;
}
.son {
  font-size: 1.2em; /* It will be 19.2px because the parent font size is 16px (16px * 1.2)*/
}
```

### Rem

The `rem` (root em) unit is also relative to the font size, but is based on the font size of the root element of the document (usually the `html` element). This avoids unexpected cascades of font sizes and is especially useful for consistent layouts throughout the web site.

<p style="margin-bottom: 10px">Examples of use:</p>

```css
html {
  font-size: 16px;
}
.container {
  font-size: 1.5rem; /* Will be 24px (16px * 1.5) */
}
```

### Percentages

Percentages are used to define values relative to the size of their parent element. For example, a width of 50% will occupy half the width of the parent. Percentages are essential for adaptive and flexible layouts that adjust to different screen sizes.

<p style="margin-bottom: 10px">Examples of use:</p>

```css
.container {
  width: 50%; /* Will be half the width of the parent element */
  padding: 10% 5%; /* 10% of height and 5% of width of the parent element */
}
```

## Advanced units of measurement

### Vw y Vh

The units `vw` (viewport width) and `vh` (viewport height) represent the percentage of the browser window size (viewport) in width and height, respectively. They are valuable for creating elements that fit the screen, regardless of their size.

<p style="margin-bottom: 10px">Examples of use:</p>

```css
.elemento {
  width: 50vw; /* Will be half the width of the window */
  height: 30vh; /* Will be 30% of the window height */
}
```

### Vmin y Vmax

The units `vmin` and `vmax` represent the minimum and maximum size between the height and width of the browser window (viewport). They are useful for maintaining proper proportions in responsive layouts.

<p style="margin-bottom: 10px">Examples of use:</p>

```css
.elemento {
  width: 50vmin; /* It will be half of the smallest value between the width and the height of the window */
  height: 70vmax; /* It will be 70% of the largest value between the width and the height of the window */
}
```

### cm, mm, in, pt y pc

In addition to relative units, CSS also offers absolute units of measure based on physical measurements. `cm` and `mm` are centimeters and millimeters, respectively. `in` is inches, `pt` is points (1/72 inch) and `pc` is picas (12 points).

<p style="margin-bottom: 10px">Examples of use:</p>

```css
.elemento {
  width: 5cm; /* 5 centimeters */
  padding: 3mm; /* 3 millimeters of padding */
  margin: 0.5in; /* 0.5 inch margin */
  font-size: 12pt; /* 12-point font size */
  line-height: 1.5pc; /* 1.5 picas line height */
}
```

## Recommendations for choosing the appropriate unit of measurement

Choosing the right unit of measurement is essential to achieve a consistent and responsive web design. Here are some recommendations to help you make informed decisions about when to use each type of unit of measurement.

- **Pixels:** The `px` unit is good for when you need precise control over the sizes and dimensions of elements in your design.

- **Em:** The `em` unit is especially useful for creating flexible and adaptive layouts. It allows elements to be scaled proportionally to the font size of the parent element.

- **Rem:** The `rem` unit ensures that the dimensions remain consistent throughout the web site as it is based on the font size of the root element of the document.

- **Percentages:** Percentages are essential for creating adaptable and fluid layouts. By defining dimensions in percentages, elements automatically adjust to the size of their parent element.

- **Vw y Vh:** It uses the units `vw` and `vh` to create elements that occupy a percentage of the width and height of the browser window.

- **Vmin y Vmax:** The units `vmin` and `vmax` are useful for maintaining balanced proportions in responsive layouts.

- **cm, mm, in, pt, pc:** These units are used for physical dimensions.

Choosing the right unit of measure depends on your design goals and the responsive features you want to achieve. CSS units of measure give you the flexibility you need to create cohesive and responsive designs across devices. Explore these units in your projects and adjust according to your needs to achieve visually appealing and functional web interfaces.
