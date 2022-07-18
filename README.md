<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

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
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/clintonfray/appd-polling-analytics">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">AppDynamics Analytics Polling Service</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/clintonfray/appd-polling-analytics"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/clintonfray/appd-polling-analytics">View Demo</a>
    ·
    <a href="https://github.com/clintonfray/appd-polling-analytics/issues">Report Bug</a>
    ·
    <a href="https://github.com/clintonfray/appd-polling-analytics/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

This project was created as a service to enable polling on the AppDynamics Analytics Events Service API endpoint. This is custom build and no-affiliation with AppDynamics. You may use this service at your own convenience and enhance the capability where you see needed.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create an API user on the AppDynamics controller.
2. Get the ADQL queries that you want to pull from the API endpoint.
3. Get the correct AppDynamics Analytics API Endpoints.
4. Clone the repo
   ```sh
   git clone https://github.com/clintonfray/appd-polling-analytics.git
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Enter your configuration information in `.env`

   ```js
   APPD_ANALYTICS_URLAPI_KEY = "<Analytics API Endpoint>";
   APPD_EVENTS_API_KEY = "<Analytics API Key>";
   APPD_GLOBAL_ACCOUNT_NAME = "<Controller Global Account Name>";

   ADQL_QUERY = "<Your ADQL Query used to pull the Analytics Information>";
   ADQL_LATEST_TIMESTAMP = "<The ADQL Query polling the eventTimestamp>";

   CUSTOMER_API = "<The endpoint where the data should be pushed towards>";
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage

This project

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/clintonfray/appd-polling-analytics](https://github.com/clintonfray/appd-polling-analytics)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/clintonfray/appd-polling-analytics.svg?style=for-the-badge
[contributors-url]: https://github.com/clintonfray/appd-polling-analytics/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/clintonfray/appd-polling-analytics.svg?style=for-the-badge
[forks-url]: https://github.com/clintonfray/appd-polling-analytics/network/members
[stars-shield]: https://img.shields.io/github/stars/clintonfray/appd-polling-analytics.svg?style=for-the-badge
[stars-url]: https://github.com/clintonfray/appd-polling-analytics/stargazers
[issues-shield]: https://img.shields.io/github/issues/clintonfray/appd-polling-analytics.svg?style=for-the-badge
[issues-url]: https://github.com/clintonfray/appd-polling-analytics/issues
[license-shield]: https://img.shields.io/github/license/clintonfray/appd-polling-analytics.svg?style=for-the-badge
[license-url]: https://github.com/clintonfray/appd-polling-analytics/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/clintonfray
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
