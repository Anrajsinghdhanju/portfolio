window.onload = function() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
    }
};

const drawer = document.getElementById('side-drawer');
const button = document.getElementById('drawer-toggle');
const hero = document.querySelector('.hero-section'); // moved here for reuse

if (button && drawer) {
    button.onclick = () => drawer.classList.toggle('open');
}

if (hero) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Move background up as user scrolls down
        const bgPositionY = Math.min(scrollY / 3, hero.offsetHeight);

        hero.style.backgroundPosition = `center -${bgPositionY}px`;
    });
}

//for project cards
const projects = [
    {
      title: "💰 Expense Tracker Web App",
      image: "images/expenseTracker.png",
      description: `Built a responsive web application to help users track expenses,
              set budgets, and visualize spending trends. Used Firebase as a
              backend and deployed the site on GitHub Pages.`,
      link: "https://github.com/Anrajsinghdhanju/Expense_tracker.git"
    },
    {
        title: "📱 Mood Tracking App",
        image: "images/app_icon.png",
        description: `Developed an Android app that allows users to log daily moods,
              view mood trends on a map, and filter moods by category.
              Integrated Firebase for real-time storage and authentication.`,
      },
      {
        title: "🐍💬 BreetConnect",
        image: "images/socialmedia.png",
        description: `A Python-based command-line social media system using SQLite that
              lets users register, log in, post and interact with tweets, search
              users and tweets, and manage followers, with secure authentication
              and robust testing.`,
      },
      {
        title: "🌦️ Weather Checker Web App",
        image: "images/weatherchecker.png",
        description: `Developed a responsive web application that allows users to check
              real-time weather updates by city name. Integrated the
              OpenWeatherMap API to fetch temperature, humidity, and forecast
              data. Implemented error handling for invalid inputs and ensured
              compatibility across devices using responsive design principles.`,
        link: "https://github.com/Anrajsinghdhanju/Weather_checker.git"
      },
      {
        title: "🔐 TweetVault CRUD",
        image: "images/mongodb.png",
        description: `This Python program loads tweets from a JSON file into a MongoDB
              database and provides a command-line interface to search tweets
              and users, list top tweets and users by popularity, and add new
              tweets interactively.`,
       }
  ];
  
  const grid = document.getElementById("project-grid");
  
  projects.forEach(project => {
    const card = document.createElement("figure");
    card.className = "project-card";
  
    card.innerHTML = `
      <img src="${project.image}" class="custom-appicon" alt="${project.title}">
      <figcaption>${project.title}</figcaption>
      <p>${project.description}</p>
    `;
    if (project.link) {
      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = "View Project";
      link.target = "_blank"; 
      card.appendChild(link);
    }
  
    grid.appendChild(card);
  });
  