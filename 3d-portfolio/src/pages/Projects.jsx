import React from "react";

const Projects = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				My{" "}
				<span className="blue-gradient_text font-semibold drop-shadow">
					Projects
				</span>
			</h1>

			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					I've embarked on numerous projects throughout the years, but these are
					the ones I hold closest to my heart. Many of them are open-source, so
					if you come across something that piques your interest, feel free to
					explore the codebase and contribute your ideas for further
					enhancements. Your collaboration is highly valued!
				</p>
			</div>
		</section>
	);
};

export default Projects;
