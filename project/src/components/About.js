import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { faHome, faFacebookF } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section>
      <div class="image">
        <img
          src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
          alt=""
        />
      </div>
      <div class="content">
        <h2>About Me</h2>
        {/* <span><!-- line here --></span> */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <ul class="links">
          <li>
            <a href="https://github.com/Madalik/siit.git">work</a>
          </li>
          <div class="vertical-line"></div>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <ul class="icons">
          <li>
            <a target="_blank" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/?lang=en">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.github.com/">
            <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
