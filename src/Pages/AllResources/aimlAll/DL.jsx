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

export const DL = () => {
	return (
		<>
			<Section>
				<Container>
					<section className="text-white body-font">
						<div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
							<img
								className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
								alt="Deep Learning"
								src="https://cdn.educba.com/academy/wp-content/uploads/2020/01/Deep-Learning.jpg"
							/>
							<div className="text-center lg:w-full w-full">
								<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									Deep Learning
								</h1>
								<p className="mb-8 leading-relaxed text-justify">
								Deep learning is a subset of machine learning that employs artificial neural networks 
                                with multiple layers to automatically extract hierarchical features from data. 
                                Unlike traditional machine learning algorithms, which require manual feature engineering, 
                                deep learning models learn representations directly from raw input data. This is achieved through a 
                                process called backpropagation, where the model iteratively adjusts its internal parameters to minimize 
                                the error between predicted and actual outputs. Deep learning has demonstrated remarkable success in 
                                tasks such as image and speech recognition, natural language processing, and various other domains, 
                                often outperforming conventional approaches. Its effectiveness stems from the ability of deep neural 
                                networks to capture complex, non-linear relationships in data, making them well-suited for tasks 
                                involving high-dimensional, unstructured information.
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
		title: 'Complete Roadmap to be a Deep Learning Engineer',
		image: 'https://miro.medium.com/v2/resize:fit:2400/1*sHhtYhaCe2Uc3IU0IgKwIQ.png',
		type: 'Roadmap',
		link: 'https://medium.com/@letthedataconfess/complete-roadmap-to-be-a-deep-learning-engineer-e9a4be0a5517',
	},
	{
		title: 'Introduction to Deep Learning',
		image: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
		type: 'For Beginner',
		link: 'https://www.geeksforgeeks.org/introduction-deep-learning/',
	},
	{
		title: 'Deep Learning Crash Course for Beginners',
		image: 'https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU',
		type: 'Youtube Video',
		link: 'https://youtu.be/VyWAvY2CF9c?si=E1t0GAk-w8lPOkNY',
	},
	{
		title: 'Deep Learning Tutorial for Beginners',
		image: 'https://www.simplilearn.com/ice9/new_logo.svgz',
		type: 'Course',
		link: 'https://www.simplilearn.com/tutorials/deep-learning-tutorial',
	},
];
