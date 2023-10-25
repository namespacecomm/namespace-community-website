import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
	display: flex;
	
	align-items: center;
	justify-content: space-between;
	display: flex;
	background-color: #010116;
`;

const Container = styled.div`
	scroll-snap-align: center;
	width: 1400px;
	padding-top: 100px;
	@media only screen and (max-width: 768px) {
		width: 90vw;
		overflow-y: scroll;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const RL = () => {
	return (
		<>
			<Section>
				<Container>
					<section className="text-white body-font">
						<div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
							<img
								className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
								alt="Reinforcement Learning"
								src="https://xaltius.tech/wp-content/uploads/2019/07/Reinforcement-Learning.jpg"
							/>
							<div className="text-center lg:w-full w-full">
								<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									Reinforcement Learning
								</h1>
								<p className="mb-8 leading-relaxed text-justify">
								Reinforcement Learning (RL) is a subset of machine learning where an agent learns to make decisions
                                by interacting with an environment to achieve a goal. Through this interaction, the agent receives feedback
                                as rewards or penalties, guiding it to refine its actions to maximize cumulative rewards over time. 
                                The process is driven by a policy defining actions in each state, with core challenges including balancing 
                                exploration of new actions versus exploiting known profitable actions. RL involves sequential decision-making, 
                                and employs algorithms like Q-Learning or Deep Q Networks to help the agent improve its policy towards an optimal 
                                solution, while also considering the time it takes to reach the none.
								</p>
							</div>
						</div>
						{/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
						<section className="text-white body-font">
							<div className=" px-0 py-14 mx-auto">
								<div className="flex flex-col text-left w-full mb-2">
									<h1 className="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
										Resources
									</h1>
								</div>
								<ul className="grid lg:grid-cols-2 grid-cols-1 gap-4">
									{resources.map((resource) => {
										return (
											<li
												className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out"
												key={resource.title}
											>
												<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
													<img
														alt="team"
														className="flex-shrink-0 rounded-lg w-48 h-48 object-contain sm:mb-0 mb-4"
														src={resource.image}
													/>
													<div className="text-left flex-grow sm:pl-8">
														<Link
															to={resource.link}
															target={'_blank'}
														>
															<h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
																{resource.title}
															</h2>
														</Link>

														<h3 className="text-white mb-3">
															{resource.type}
														</h3>
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</section>
					</section>
				</Container>
			</Section>
		</>
	);
};

const resources = [
	{
		title: 'Reinforcement Learning',
		image: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
		type: 'Roadmap',
		link: 'https://www.geeksforgeeks.org/what-is-reinforcement-learning/',
	},
	{
		title: 'Introduction to Reinforcement Learning for Beginners',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXEgM2xyYW7HEdrAN5G1frf63JVTw6RcoqA&usqp=CAU',
		type: 'For Beginner',
		link: 'https://www.analyticsvidhya.com/blog/2021/02/introduction-to-reinforcement-learning-for-beginners/',
	},
	{
		title: 'Reinforcement Learning in 3 Hours | Full Course using Python',
		image: 'https://i.ytimg.com/vi/Mut_u40Sqz4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDByEweOHjt3OO07XAk3hcjUiqtYg',
		type: 'Youtube Video',
		link: 'https://www.youtube.com/watch?v=Mut_u40Sqz4&pp=ygUWcmVpbmZvcmNlbWVudCBsZWFybmluZw%3D%3D',
	},
	{
		title: 'What is Reinforcement Learning? A Complete Guide',
		image: 'https://www.simplilearn.com/ice9/new_logo.svgz',
		type: 'Course',
		link: 'https://www.simplilearn.com/tutorials/machine-learning-tutorial/reinforcement-learning',
	},
];
