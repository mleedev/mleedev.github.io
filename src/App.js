import './App.css';
import headshot from './assets/images/headshot192.png';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="viewport-container"></div>
      <Navbar />
      <main className=''>
        <img src={headshot} alt="Headshot" />
        <h1 className="profile-name">Matthew Lee</h1>
        <h3 className="profile-title">Software Engineer</h3>
        <h2>Welcome to My Digital Space!</h2>
        <p>
          My name is Matthew Lee and I'm a passionate software engineer and technology enthusiast 
          with a deep-rooted interest in solving complex problems through code. 
          With a background in Computer Science from California State University, Long Beach, 
          I've honed my skills in various areas, including software development, 
          web technologies, and data-driven applications.
        </p>
        
        <h2>What I Do</h2>
        <p>I enjoy building intuitive, user-centered applications that drive engagement and simplify user experiences. My expertise spans front-end and back-end development, with a focus on creating seamless interactions using frameworks like React.js and Spring. Whether it's developing real-time dashboards, enhancing user interfaces, or optimizing backend systems, I thrive on transforming ideas into impactful solutions.</p>

        <h2>Areas of Expertise</h2>
        <ul>
          <li><strong>Software Development:</strong> Crafting robust and scalable applications using Java, Kotlin, Python, and C#.</li>
          <li><strong>Web Development:</strong> Designing dynamic websites and applications using React.js, ASP.NET, and modern web technologies.</li>
          <li><strong>Data Management:</strong> Implementing data-driven solutions using SQL, MySQL, and distributed computing techniques to handle complex workflows efficiently.</li>
          <li><strong>Creative Problem Solving:</strong> Tackling challenges in game development, plugin creation, and large-scale data processing.</li>
        </ul>
        
        <h2>A Passion for Innovation</h2>
        <p>From developing Minecraft plugins capable of rendering thousands of blocks to enhancing live chat systems, I approach every project with curiosity and determination. I believe in the power of technology to inspire, connect, and empower users, and I'm always eager to explore the next big idea in software.</p>
        
        <h2>Let's Connect</h2>
        <p>Explore my projects, check out my work on GitHub, or connect with me on LinkedIn. I’m always open to collaborating on innovative projects and exploring new opportunities in tech.</p>
      </main>
    </>
  );
}

export default App;
