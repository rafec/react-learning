import React from "react";

const infoBox = ({ text, link, btnText }) => <div>{text}</div>;

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I am <span className="font-semibold">Rafael</span> 👋
			<br />A Software Engineer from Brazil
		</h1>
	),
	2: <h1>2</h1>,
	3: <h1>3</h1>,
	4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default HomeInfo;
