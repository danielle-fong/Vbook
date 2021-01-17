import "./Home.css";
import messengerImage from "./messenger.png";

function Home() {
	return (
		<>

				<h1 className="home-header">VBook</h1>
				<div className="home-intro">
					<img src={messengerImage}/>
					a voice-to-text tool for Facebook Messenger
				</div>
				<div className="home-description">
					this is the lower part for more description stuff Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					tempora repellat, ut numquam dicta voluptas aut aperiam
					aspernatur laboriosam explicabo impedit natus nemo sint odit
					repellendus error fugiat, amet rerum cumque ipsum
					reprehenderit? Totam similique ut enim dicta quam facilis
					amet voluptatum doloribus a possimus consequuntur suscipit
					necessitatibus obcaecati fugiat voluptatibus maiores quia
					assumenda nesciunt natus, tenetur aspernatur recusandae quis
					voluptas iste! Recusandae asperiores blanditiis, quis illum
					consequuntur aliquam! Sit totam suscipit, repellat veritatis
					officiis velit deleniti asperiores et laudantium eum
					voluptate autem distinctio quam impedit tempore laborum
					itaque eligendi, modi accusamus minima expedita ad delectus!
					Laboriosam nam error totam.
				</div>
	
		</>
	);
}

export default Home;
