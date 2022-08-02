<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Pete-Hall/kanine-plus">
    <img src="images/kanine+.png" alt="Logo" width="auto" height="45">
  </a>

  <!-- <h3 align="center">Kanine+</h3> -->

  <p align="center">
    A DRM (Dog Relationship Managment) system to organize and streamline dog walking operations.
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://github.com/Pete-Hall/kanine-plus">View Demo (in progress)</a>
    ·
    <a href="https://github.com/Pete-Hall/kanine-plus/issues">Report Bug</a>
    ·
    <a href="https://github.com/Pete-Hall/kanine-plus/issues">Request Feature</a>
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
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Kanine+ Demo gif](/images/kanine%2Bdemo.gif)
_Duration: 2 week sprint for MVP_

I work as a professional part time walker for a small business based out of south Minneapolis. They manage all of their dog specific data manually (i.e. spreadsheets). I wanted to design what could be used as an internal tool for them to manage all of their dog specific data in order to streamline their operations.

Feature overview:
* User authentication and authorization
* Users can add new dogs to the system, edit that information, read it, and delete dog's entirely from the system all in a modern interface
* Users can upload a image of a dog and add notes for a specific dog

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* React.js
* Redux
* Redx-Saga
* React-Router
* Material UI
* Node.js
* Express.js
* PostgreSQL
* Multer
* Cloudinary

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

([Node.js](https://nodejs.org/en/) is used in this project)

### Installation

1. Get a free API Key at [https://cloudinary.com/](https://cloudinary.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/Pete-Hall/kanine-plus
   ```
3. Install the NPM packages used in this project
   ```sh
   npm install
   ```
4. Create a .env file and enter your API information
   ```js
   CLOUD_NAME = 'ENTER YOUR CLOUD_NAME HERE'
   API_KEY = 'ENTER YOUR API_KEY HERE'
   API_SECRET = 'ENTER YOUR API_SECRET HERE'
   ```
5. Create a database in named 'kanine_plus'. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. Using Postico is recommended to run queries as that was used to create the queries 
6. The queries in the `database.sql` file are set up to create all the necessary tables and populate those tables with the data to allow the application to run correctly. Execute the queries in that file top to bottom
7. Run `npm run server` in your terminal to start up the server
8. Run `npm run client` in your terminal to start up the client in your browser
9. The `npm run client` command will open up a new browser tab for you! (if not there will be a localhost link in your terminal you can use)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [ ] Deploy on Heroku
- [ ] JEST/unit testing
- [ ] Add Google Maps to add addresses and view where each dog lives on a map
- [ ] Add a dynamic scheduler that generates the current week's schedule based on any previous ad-hoc changes
- [ ] Add a 'walker' user role that can read all data and only create/delete notes for the dogs only in the system for the company they work for (authorization)
- [ ] Add an admin settings component to allow the admin to control user permissions and certain features
- [ ] Refactor code to re-use components
- [ ] Refactor code to use formData to set state (as opposed to many hooks)
- [ ] Refactor upload image to all happen with onChange
- [ ] Add ability to delete an image when hovering over it in the edit mode


See the [open issues](https://github.com/Pete-Hall/kanine-plus/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pete Hall - pete.mack.hall@gmail.com

Project Link: [https://github.com/Pete-Hall/kanine-plus](https://github.com/Pete-Hall/kanine-plus)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- HELPFUL -->
## Helpful
* [The Best README Template from othneildrew](https://github.com/othneildrew/Best-README-Template)
* [Figma for wireframing](https://www.figma.com/files/recent?fuid=1128059971955892872)
* [DB Designer for database ERD's](https://app.dbdesigner.net/)
* [npm multer-storage-cloudinary for resouces to upload an image](https://www.npmjs.com/package/multer-storage-cloudinary)
* [Material UI docs](https://mui.com/material-ui/getting-started/overview/)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I want to thank [Prime Digital Academy](www.primeacademy.io) and Dev for this amazing experience. My cohort for being the greatest of all time, my friends for understanding why I disappeared for the last 5 months, and my partner and family for making this possible. 


<p align="right">(<a href="#top">back to top</a>)</p>


