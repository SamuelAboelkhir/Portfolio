export const projects = {
  1: {
    title: "Medical Manager App",
    description:
      "My first attempt at creating an app. This app was created using R-shiny, and Rstudio with the following goal : Create an app that acts as medical hub for patients and medical providers, containing a patient's full medical profile, including full medical history, medical conditions, inherited traits, previous diagnosis, lab analysis results, chronic, previous and current medications, to facilitate healthcare streamline and facilitate healthcare services. The app also had a simple database created using SQL that was meant to hold all users data, and separate accounts into types based on whether you're a patient, physician, or other healthcare provider, as the account type would determine the UI, and functionality the app will load up. However, the app was never finished, due to my complete lack of knowledge on HTML, CSS, and Javascript at the time, which sparked this whole journey of learning, and my eventual switch to web development.",
    image: "/images/MedicalManagerApp.png",
    link: "https://blackdovah.github.io/MedicalManagerApp/",
    githubLink: "https://github.com/BlackDovah/MedicalManagerApp",
  },
  2: {
    title: "BookStore Backend",
    description:
      "A backend project created using express.js and node.js. This project that I made during a backend development course taken with IBM on coursera is a book review website where users can create an account and review books. The account information is saved in a users array, and is always referenced if the user tries to login to determin if an account does exist or not, and a token is created for authenticated users that have an account to allow them to access authenticated user only functions that allows them to make or delete reviews. Non-registerd users have access to limited functions, that allows them to browse books, and view their reviews, but without the ability to leave their own reviews.",
    image:
      "https://booksliced.com/books/wp-content/uploads/2019/01/iMAGE_Our_Top_20_Online_Bookstores_and_Where_to_Find_Every_Online_Bookstore_-768x510.jpg",
    link: "https://github.com/BlackDovah/expressBookReviews",
    githubLink: "https://github.com/BlackDovah/expressBookReviews",
  },
  3: {
    title: "NoThanks boardgame",
    description: "A boardgame created using React and BoardGame.io.",
    image: "/images/BoardGameUI.png",
    link: "https://no-thanks-board-game.vercel.app/",
    githubLink: "https://github.com/BlackDovah/NoThanksBoardGame",
  },
  4: {
    title: "React simple calculator",
    description:
      "A calculator created using React and tailwindcss as my very first project.",
    image: "/images/reactCalculator.png",
    link: "https://blackdovah.github.io/ReactCalculator/",
    githubLink: "https://github.com/BlackDovah/ReactCalculator",
  },
  5: {
    title: "BookStore",
    description:
      "My Biggest project yet, with more planned updates to come. A fullstack project featuring a frontend portion created using the mantine component library for react, typsecript, and tailwindcss. The backend portion is created using express.js and node.js.",
    image: "/images/BookStore.png",
    link: "https://github.com/BlackDovah/BookStore",
    githubLink: "https://github.com/BlackDovah/BookStore",
  },
};
