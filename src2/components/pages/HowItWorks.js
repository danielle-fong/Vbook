import "./HowItWorks.css";
import YouTube from "react-youtube";

function HowItWorks() {
	const opts = {
		height: "360px", // idk
		width: "1900px", //dimensions of video
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<>
			<h1 className="how-it-works-header">HOW IT WORKS</h1>

			<YouTube
				className="youtube-video"
				videoId="4NXMPmdj9KI"
				opts={opts}
			/>
		</>
	);
}

export default HowItWorks;
