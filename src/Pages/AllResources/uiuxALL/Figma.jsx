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

export const Figma = () => {
	return (
		<>
			<Section>
				<Container>
					<section className="text-white body-font">
						<div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
							<img
								className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
								alt="hero"
								src="https://img.js.design/assets/Tutorial/3.News/Figma-xinzhuanti/logo.png"
							/>
							<div className="text-center lg:w-full w-full">
								<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									Figma
								</h1>
								<p className="mb-8 leading-relaxed text-justify">
									Figma design is for people to create, share, and test
									designs for websites, mobile apps, and other digital
									products and experiences. It is a popular tool for
									designers, product managers, writers and developers
									and helps anyone involved in the design process
									contribute, give feedback, and make better decisions,
									faster.Figma is a collaborative web application for
									interface design, with additional offline features
									enabled by desktop applications for macOS and
									Windows. The feature set of Figma focuses on user
									interface and user experience design, with an
									emphasis on real-time collaboration,[1] utilising a
									variety of vector graphics editor and prototyping
									tools. The Figma mobile app for Android and iOS
									allows viewing and interacting with Figma prototypes
									in real-time on mobile and tablet devices.
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
		title: 'Figma Official Documentaion',
		image: 'https://quolum.com/blog/wp-content/uploads/2023/01/coverimage.png',
		type: 'Documentation',
		link: 'https://help.figma.com/hc/en-us/',
	},
	{
		title: 'FreeCodeCamp Course',
		image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png',
		type: 'Online Free Course',
		link: 'https://www.freecodecamp.org/news/figma-crash-course/',
	},
	{
		title: 'Design Code Handbook',
		image: 'https://getlogo.net/wp-content/uploads/2020/12/designcode-io-logo-vector.png',
		type: 'Online Free Resource',
		link: 'https://designcode.io/figma-handbook',
	},
	{
		title: "Design Lab Beginner's Tutorial",
		image: 'https://img.freepik.com/premium-vector/tutorial-concept-2-colored-icon-simple-blue-element-illustration-tutorial-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-4121.jpg',
		type: 'Online Tutorial',
		link: 'https://designlab.com/figma-101-course/introduction-to-figma/',
	},
];
