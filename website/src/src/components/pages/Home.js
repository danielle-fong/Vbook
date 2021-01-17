import "./Home.css";
import vbookImage from "./vbook_logo.png";
import botGif from "./fb-bot.gif";

function Home() {
	return (
		<>

			<div className="home-intro">
				<img className="vbook" src={vbookImage} />a voice-to-text tool for Facebook
				Messenger
			</div>
			<hr />

			<div className="colour-background">
				<h2 className="example">A gateway to diverse communication</h2>
				<div className="home-description">
					<div className="explaination">
						Voice Book (VBook) is a Facebook Messenger tool designed for effective voice-to-text communication for disabled users. It allows for easier communication with buisness in text chats and allows for the user to speak their message and the tool will type their response.
					</div>
					<div className="gif-container">
						<img src={botGif} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
