import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
	display: flex;
	flex-direction: column;
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

export const MixedReality = () => {
	return (
		<>
			<Section>
				<Container>
					<section className="text-white body-font">
						<div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
							<img
								className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
								alt="hero"
								src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Mixed_Reality.jpg"
							/>
							<div className="text-center lg:w-full w-full">
								<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									Mixed Reality
								</h1>
								<p className="mb-8 leading-relaxed text-justify">
									Mixed reality (MR) is a term used to describe the
									merging of a real-world environment and a
									computer-generated one. Physical and virtual objects
									may co-exist in mixed reality environments and
									interact in real time. Mixed reality that
									incorporates haptics has sometimes been referred to
									as Visuo-haptic mixed reality.[1][2] In a physics
									context, the term "interreality system" refers to a
									virtual reality system coupled with its real-world
									counterpart.[3] A 2007 paper describes an
									interreality system comprising a real physical
									pendulum coupled to a pendulum that only exists in
									virtual reality.[4] This system has two stable states
									of motion: a "Dual Reality" state in which the motion
									of the two pendula are uncorrelated, and a "Mixed
									Reality" state in which the pendula exhibit stable
									phase-locked motion, which is highly correlated. The
									use of the terms "mixed reality" and "interreality"
									is clearly defined in the context of physics and may
									be slightly different in other fields, however, it is
									generally seen as, "bridging the physical and virtual
									world".[5]
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
		title: 'Microsoft Official Course',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/640px-Microsoft_icon.svg.png',
		type: 'Online Course',
		link: 'https://learn.microsoft.com/en-us/training/modules/intro-to-mixed-reality/',
	},
	{
		title: 'Online Documentation',
		image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
		type: 'Online Tutorial',
		link: 'https://github.com/MicrosoftDocs/mixed-reality/blob/docs/mixed-reality-docs/mr-dev-docs/develop/unity/tutorials.md',
	},
];
