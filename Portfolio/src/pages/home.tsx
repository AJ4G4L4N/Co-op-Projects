import Img1 from "../assets/Img1.jpeg";
import Img2 from "../assets/Img2.webp";
import Img3 from "../assets/Img3.jpeg";
import Img4 from "../assets/Img4.webp";
import Img5 from "../assets/Img5.png";
import Img6 from "../assets/Img6.jpeg";
import github from "../assets/github-png.png"
import linkedin from "../assets/linkedin-png.png"
import "../styling/home.css";

export default function Home() {
  return (
    <>
      <h1>hey, I'm Anuj Jaglan 👋</h1>
      <p>
        I'm a passionate computer programming student at Georgian College,
        dedicated to honing my skills and seeking exciting opportunities in the
        tech industry. Currently engaged in a co-op position, I am gaining
        valuable hands-on experience and contributing to real-world projects.
      </p>
      <div className="image-container">
        <img id="Img1" src={Img1} alt="Image 1" />
        <img id="Img2" src={Img2} alt="Image 2" />
        <img id="Img3" src={Img3} alt="Image 3" />
        <img id="Img4" src={Img4} alt="Image 4" />
        <img id="Img5" src={Img5} alt="Image 5" />
        <img id="Img6" src={Img6} alt="Image 6" />
      </div>

      <p>
        With a strong foundation in programming, I am eager to explore new
        challenges and apply my knowledge in a professional setting. As a
        student, I actively engage with the programming community, staying
        abreast of the latest technologies and best practices.
      </p>

      <div className="buttons">  
      <a href="https://github.com/AJ4G4L4N/Co-op-Projects"><button type="button"><img id="github" src={github}></img>Github</button></a>
      <a href="www.linkedin.com/in/anuj-jaglan"><button type="button"><img id="linkedin" src={linkedin}></img>LinkedIn</button></a>
      </div>

      <p>
        I am enthusiastic about the prospect of transitioning from a student to
        a full-time professional, bringing my positive mindset, problem-solving
        skills, and a commitment to continuous learning to any team or project.
        I am excited about the opportunity to contribute to the dynamic and
        innovative world of technology.
      </p>
    </>
  );
}
