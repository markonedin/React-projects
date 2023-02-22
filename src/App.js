import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import FacebookImage from "./images/facebook.png";
import InstagramImage from "./images/instagram.png";
import LinkedinImage from "./images/linkedin.png";
import GitHubImage from "./images/github.png";
import GmailImage from "./images/gmail.png";
import ProfileImage from "./images/profile.jpg";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal social platform informations</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="About me"
                image={ProfileImage}
                description="I am proactive and hard-working person who believes in success and seeks for it. 
                As an effective communicator who pays close attention to accuracy and details when doing my job,
                 I have mastered the art of working under strict deadlines.
                I am 24 years old, creative and communicative, 
                on my last year of Informational Technologies at The Higher Education Technical School of Professional Studies
                 which allows me to complete all of the expectations."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Facebook"
                handle="@marko.nedin.5"
                image={FacebookImage}
                description="You can contact me via Facebook platform."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Instagram"
                handle="@marko_nedin"
                image={InstagramImage}
                description="You can contact me via Instagram platform."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Linkedin"
                handle="@marko-nedin"
                image={LinkedinImage}
                description="Check my skills on Linkedin."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Gmail"
                handle="markonedin34@gmail.com"
                image={GmailImage}
                description="Send me an email trough Gmail."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Github"
                handle="@markonedin"
                image={GitHubImage}
                description="Check my projects on Github: 
                https://github.com/markonedin"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
