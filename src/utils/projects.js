const projects = [
    {
        id: 1,
        name: "RS3 Database",
        image_url1: require("../assets/arrayImages/RS3DB.png"),
        image_url2: require("../assets/arrayImages/RS3DB2.png"),
        image_url3: require("../assets/arrayImages/RS3DB3.png"),
        link: "https://github.com/ChrisWakley/full-stack-front-end",
        language: "HTML - CSS - SCSS - JavaScript - (React) - Java",
        description:
            "This was my final pproject on my Nology course, I had to create a full stack app. I created an info database on mySQL and wrote an API in Java to access and filter it. I then used React to create the front end web page which uses the API call function to populate the database into an aesthetically pleasing layout. The user has the ability to filter searches, add line entries and delete line entries. I'm still actively working on this project so it will have a lot more funcitonality once it is complete.",
    },

    {
        id: 2,
        name: "Client Project",
        image_url1: require("../assets/arrayImages/Client.png"),
        image_url2: require("../assets/arrayImages/Client2.png"),
        image_url3: require("../assets/arrayImages/Client3.png"),
        link: "https://github.com/nology-tech/quadra-client-project",
        language: "HTML - SCSS - JavaScript - (React)",
        description:
            "This project was a full client project, I contributed as part of a team of nine to create a SPA. The client in question wanted a website with a very specific design and a lot of functionality. It included a database linked to Firebase for users to create a secure account in order to login, had the ability to store funds in various currencies, other contact information and convert currencies accurately to send to others.",
    },

    {
        id: 3,
        name: "Snap",
        image_url1: require("../assets/arrayImages/Snap.png"),
        image_url2: require("../assets/arrayImages/Snap2.png"),
        image_url3: require("../assets/arrayImages/Snap3.png"),
        link: "https://github.com/ChrisWakley/SnapGame",
        language: "Java",
        description:
            "This was my second project built using Java, it was more complicated than my previous Java work. It uses the console and text input to play again, is a two player game with timed response to input 'snap' as a win condition. The project generates a deck of cards which can be shuffled or ordered with different available methods. The game itself uses a launcher to open from which has the functionality to launch other games if they were available. I may come back to this to add more games in future.",
    },

    {
        id: 4,
        name: "Hangman",
        image_url1: require("../assets/arrayImages/Hangman.png"),
        image_url2: require("../assets/arrayImages/Hangman2.png"),
        image_url3: require("../assets/arrayImages/Hangman3.png"),
        link: "https://github.com/ChrisWakley/HangMan",
        language: "Java",
        description:
            "This was my first project built using Java, the outline was to make a hangman game that utilises the console and text inputs to play. I realised during this project that Java was a language I can really relate to, Java projects were arguably the most fun for me. Creating this game and utilising classes to call various methods was initially challenging but when I start to understand how it all worked the whole project came together really nicely.",
    },

    {
        id: 5,
        name: "Calculator",
        image_url1: require("../assets/arrayImages/Calculator.png"),
        image_url2: require("../assets/arrayImages/Calculator2.png"),
        image_url3: require("../assets/arrayImages/Calculator3.png"),
        link: "https://github.com/ChrisWakley/calculator",
        language: "HTML - CSS - SCSS - JavaScript",
        description:
            "The aim of this project was to create a functional calculator that could be launched and used in a web browser. By this point i was used to page layout and styling but was still learning JavaScript, the function of the calculator was created in a Class based script instead of a function based script but it still ended up working as intended.",
        livesite: "https://chriswakley.github.io/calculator/",
    },

    {
        id: 6,
        name: "Initial Portfolio",
        image_url1: require("../assets/arrayImages/Portfolio.png"),
        image_url2: require("../assets/arrayImages/Portfolio2.png"),
        image_url3: require("../assets/arrayImages/Portfolio3.png"),
        link: "https://github.com/ChrisWakley/web-project-portfolio",
        language: "HTML - CSS - SCSS",
        description:
            "This was my first real project, it's a template for an original portfolio. I was very new to coding when I created this and before I imported any project showcases to it, I decided to make a new portfolio using React. The idea behind this project was to get used to writing code and creating a page layout and design in our desired image.",
        livesite: "https://chriswakley.github.io/web-project-portfolio/",
    },
];

export default projects;
