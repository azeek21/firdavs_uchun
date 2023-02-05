import { createGlobalStyle } from "styled-components";
import { Theme_T } from "./themes";

export const GlobalStyle = createGlobalStyle<{theme: Theme_T}>`
html {
    scroll-behavior: smooth;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0px;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.bg.primary};
  line-height: 1;
  transition: 0.3s linear;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`