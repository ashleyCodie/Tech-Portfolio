import Card from "../components/Card"
import loantracker5 from "../assets/images/loantracker5.jpg"
import weddingsbydesign2 from "../assets/images/weddingsbydesign2.JPG" 
import realestate1 from "../assets/images/realestate1.jpg"
import sparklingclean from "../assets/images/sparklingclean.PNG"
import chachingandbling from "../assets/images/chachingandbling.jpg"
import fororangebyorange from "../assets/images/fororangebyorange.jpg"
import GradientText from "../components/GradientText"



const Projects = () => {
    const cardData = [
         {
    id: 1,
    image: weddingsbydesign2,
    title: 'Weddings By Design',
    description: 'Weddings By Design, is a MERN Full Stack Web Application. This website was created for a company who specializes in Planning Theme Weddings. The offer special packages that include different services to fit the needs of their customers. Vendors are able to login to the application and see if tasks have been assigned to them. Customers can contact them via the Contact Us tab. Project Managers can login and see what the status is of the project, see what tasks are pending, add new projects, and add new users/vendors from the dashboard.',
    techUsed: "React, React State Management, Vite, Redux, RTK, Argon2, JavaScript, TailwindCSS, Mongoose, Express, Cors, Axios, Faker",
    github: "https://github.com/ashleyCodie/Weddings-By-Design",
    link: 'https://yourportfolio.com'
  },
  {
    id: 2,
    image: loantracker5,
    title: 'Mortgage Loan Tracker',
    description: 'Loan Tracker, is a MERN Full Stack Web Application. The Mortgage Loan Tracker, is a software tool designed to manage and monitor your team at various stages of mortgage loan processing, from origination to closing. It helps lenders and loan officers keep track of loan production, status, and the teams involved in post-production activities. Designed to enhance production, communication of your team, and to easily review the status of the loans your team is working on. Email capabilities available through employees, and a closing calander with all scheduled closing dates. The search bar provides a quick easy serach for the borrowers name to locate a file quickly.',
    techUsed: "React, Vite, TailwindCSS, Redux, RTK, Recharts, JavaScript, Mongoose, Express, Cors, Axios, Faker, JWT, Argon2",
    github: "https://github.com/ashleyCodie/Loan-Tracker",
    link: 'https://taskmanager.com'
  },
  {
    id: 3,
   image: chachingandbling,
    title: 'ChaChing & Bling',
    description: 'ChaChing & Bling is a modern e-commerce full stack web application designed to provide users with a seamless online shopping experience. The interface features a clean, mobile-first design with intuitive navigation and smooth animations. Key components include a product catalog with advanced filtering and search capabilities, user authentication flows, shopping cart management, and a favorites/wishlist system. The UI emphasizes visual appeal with high-quality product images, detailed product pages, and a streamlined checkout process. Real-time updates keep cart counts and favorites synchronized across browser sessions.',
    techUsed: "React, Vite, TailwindCSS, Redux, RTK, Recharts, JavaScript, Mongoose, Express, Cors, Axios, Faker, JWT, Argon2",
    github: "https://github.com/ashleyCodie/ChaChing-And-Bling",
    link: 'https://yourportfolio.com'
  },
  {
    id: 4,
    image: fororangebyorange,
    title: 'For Orange, By Orange',
    description: 'For Orange, By Orange is a comprehensive full stack web application specifically designed to serve the justice-impacted community - individuals who have been affected by the criminal justice system, whether through incarceration, probation, parole, or other legal involvement. The platform addresses two critical needs: resource discovery and community connection. The application operates on a peer-to-peer support model, recognizing that justice-impacted individuals are often best positioned to help others navigating similar challenges. ',
    techUsed: "React, Vite, TailwindCSS, JavaScript, Mongoose, Express, Crypto, Cors, Axios, Faker",
    github: "https://github.com/ashleyCodie/For-Orange-By-Orange",
    link: 'https://taskmanager.com'
  },
  {
    id: 5,
    image: realestate1,
    title: 'Queen Creek Real Estate',
    description: 'Queen Creek Real Estate, is a MERN Full Stack Web Application. This website was created for a Real Estate firm to be able to display the properties they have for sale or rent. Real estate agents can log in to manage their listings. You can use the search bar on the home page to search for a specific city or state. Customers can get Pre-Approved or contact a Real Estate agent. On each listing theres a contact agent button that will contact that specific agent directly.',
    techUsed: "React, Vite, TailwindCSS, JavaScript, Mongoose, Express, Crypto, Cors, Axios, Faker",
    github: "https://github.com/ashleyCodie/Queen-Creek-Real-Estate",
    link: 'https://yourportfolio.com'
  },
  {
    id: 6,
    image: sparklingclean,
    title: 'Sparking Clean',
    description: 'Sparkling Clean Home Cleaning Services, in a Front End Web Application designed for the company to be able to advertise and communicate with their clients. Sparkling Clean is a company that offers cleaning services. This website was designed so customers can view the services, pricing, packages, schedule a cleaning directly online, or contact their customer service team. This website is 100% reactive to the screen size the viewer is using whether its a phone, tablet or full size computer.',
    techUsed: "React, React State Management, Bootstrap, Bootstrap Icons, and Eslint.",
    github: "https://github.com/ashleyCodie/Sparkling-Clean",
    link: 'https://sparkling-clean.vercel.app'
  },

]
  return (
    <div className="bg-purple-300 px-6 py-24 sm:py-18 lg:px-8">
    <div className="text-center text-7xl font-extrabold mb-10">
                     <GradientText
                      colors={["#020617", "#d8b4fe", "#9333ea", "#6d28d9", "#020617"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="custom-class text-center mt-10 text-7xl font-extrabold text-center"
                    >
                      Projects
                    </GradientText>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ml-20">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          techUsed={card.techUsed}
          github={card.github}
          link={card.link}
        />
      ))}
    </div>


</div>
  )
}

export default Projects