import "./Home.css";
import messengerImage from "./messenger.png";
import botGif from "./fb-bot.gif";

function Home() {
	return (
		<>
			<h1 className="home-header">VBook</h1>
			<div className="home-intro">
				<img src={messengerImage} />a voice-to-text tool for Facebook
				Messenger
			</div>
			<hr />

			<div className="colour-background">
				<h2 className="example">Example</h2>
				<div className="home-description">
					<div className="explaination">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus quasi explicabo modi numquam blanditiis,
						non laborum quod eius velit possimus sit officiis
						dolorem veritatis distinctio accusamus voluptatum illo
						eveniet exercitationem delectus nisi optio facilis
						maiores esse. Tempore debitis ipsam suscipit quod
						accusantium obcaecati fugiat ratione, laboriosam
						voluptatum mollitia commodi eaque.
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
