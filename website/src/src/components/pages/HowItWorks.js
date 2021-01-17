import "./HowItWorks.css";
import YouTube from "react-youtube";

function HowItWorks() {
	const opts = {
		height: "480", // idk
		width: "900", //dimensions of video
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<>
			<h1 className="how-it-works-header">HOW IT WORKS</h1>

			<YouTube
				className="youtube-video"
				videoId="2g811Eo7K8U"
				opts={opts}
			/>
		</>
	);
}

export default HowItWorks;
