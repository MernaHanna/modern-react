import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'; // imported as base64 as the size of the file is less than 9.7kb (gets inlined)
import CortanaImage from './images/cortana.png'; // imported as base64 as the size of the file is less than 9.7kb (gets inlined)
import SiriImage from './images/siri.png'; // imported as path to file as the size of the file is more than 9.7kb (gets loaded as a separate file)

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was cremadeated by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri wasmade by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
