import "./About.css";

function About() {
	return (
		<>
			<h1 className="about-header">WHY VBOOK?</h1>
			<p className="about-description">
				VBook is designed to extend text communication accessibility to disabled users. 
				This is accomplished through the voice-to-text feature that is implemented into Facebook Messenger. 
				Currently, Facebook Messenger only allows for voice messages to be recorded and sent as an audio file, but the VBook allows for a more efficient form of verbal communication through text messages.
				Whether you're too busy to text or are unable to use the keyboard on your device, the VBook tool allows the user to send messages solely through voice communication. 
				The user's verbal input will be translated into text and sent as a text message to whoever the user is messaging, creating an efficient and effective verbal communication over text.
			</p>
		</>
	);
}

export default About;
