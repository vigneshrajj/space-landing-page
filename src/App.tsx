import "./styles.scss";
import Insight from "./Insight";

export default function App() {
  return (
    <div className="App">
      <img
        className="bg"
        src="https://www.figma.com/file/OyPhwXvXqLO9UsyjQqpxAS/image/8134f054701313a80b8e88ad8b7b8dd95027e774"
        alt="horse"
      />
      <main>
        <h1>
          What's next in <br />
          your space travel
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <button>Explore</button>
      </main>
      <section>
        <ul>
          <li>
            <Insight />
            <h4>Planets</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <Insight />
            <h4>Interstellar</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <Insight />
            <h4>Wormhole</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <Insight />
            <h4>Time</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
