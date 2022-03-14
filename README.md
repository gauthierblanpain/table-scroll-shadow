<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License]![GitHub]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/gauthierblanpain/table-scroll-shadow">
    <img src="demo/images/logo.png" alt="Logo" width="120">
  </a>

<h1 align="center">Table Scroll Shadow</h1>

  <p align="center">
    A simple dependency-free Javascript plugin to show horizontal overflow of tables
    <br />
    <br />
    <a href="https://gauthierblanpain.github.io/table-scroll-shadow">View Demo</a>
    ·
    <a href="https://github.com/gauthierblanpain/table-scroll-shadow/issues">Report Bug</a>
    ·
    <a href="https://github.com/gauthierblanpain/table-scroll-shadow/issues">Request Feature</a>
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#options">Options</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT -->

## About

Table Scroll Shadow enables easy responsive tables by checking if the table overflows it's container across all viewports. When overflow is present, it allows  horizontal scrolling whilst adding an extra visual indicator in the shape of shadows to make it more obvious where the overflow is.

Here are a few key features of the plugin:

- Small file size, coming in at only 3 kB
- No jQuery dependency
- Built in options
- Just install and enjoy!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Step 1

Pull in the latest version of the plugin with one of the following commands:

#### NPM

```sh
npm install table-scroll-shadow
```

#### Yarn

```sh
yarn add table-scroll-shadow
```

### Step 2

Once you have installed the plugin, you will need to add a little bit of necessary markup around the tables that you want to scroll (the class names can be changed via the options).

```html
<div class="table-wrapper">
  <div class="table-scroll">
    <table>
      <!-- Tabular data here -->
    </table>
  </div>
</div>
```

### Step 3

The plugin can be referenced via the global variable, TableScrollShadow.

```js
const table = new TableScrollShadow()
table.init()
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- OPTIONS -->

## Options

All options for this plugin are optional, and have sensible defaults. The defaults are shown below:

```js
TableScrollShadow({
  wrapperClass: '.table-wrapper',
  scrollAreaClass: '.table-scroll',
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadowSize: '2em',
  throttleDelay: 75
})
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Gauthier Blanpain - gauthier.blanpain@me.com

Project Link: [https://github.com/gauthierblanpain/table-scroll-shadow](https://github.com/gauthierblanpain/table-scroll-shadow)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/gauthierblanpain/table-scroll-shadow.svg?style=for-the-badge
[contributors-url]: https://github.com/gauthierblanpain/table-scroll-shadow/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gauthierblanpain/table-scroll-shadow.svg?style=for-the-badge
[forks-url]: https://github.com/gauthierblanpain/table-scroll-shadow/network/members
[stars-shield]: https://img.shields.io/github/stars/gauthierblanpain/table-scroll-shadow.svg?style=for-the-badge
[stars-url]: https://github.com/gauthierblanpain/table-scroll-shadow/stargazers
[issues-shield]: https://img.shields.io/github/issues/gauthierblanpain/table-scroll-shadow.svg?style=for-the-badge
[issues-url]: https://github.com/gauthierblanpain/table-scroll-shadow/issues
[license-shield]: https://img.shields.io/github/license/gauthierblanpain/table-scroll-shadow.svg?style=for-the-badge
[license-url]: https://github.com/gauthierblanpain/table-scroll-shadow/blob/main/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gauthier-blanpain-05b9a394/
