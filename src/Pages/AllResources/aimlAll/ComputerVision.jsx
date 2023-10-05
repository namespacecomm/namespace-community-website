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

export const ComputerVision = () => {
	return (
		<>
			<Section>
				<Container>
					<section className="text-white body-font">
						<div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
							<img
								className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
								alt="hero"
								src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2023/04/What-Is-Computer-Vision_An-Introduction.jpg"
							/>
							<div className="text-center lg:w-full w-full">
								<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									Computer Vision
								</h1>
								<p className="mb-8 leading-relaxed text-justify">
									Computer vision tasks include methods for acquiring,
									processing, analyzing and understanding digital
									images, and extraction of high-dimensional data from
									the real world in order to produce numerical or
									symbolic information, e.g. in the forms of
									decisions.[1][2][3][4] Understanding in this context
									means the transformation of visual images (the input
									to the retina in the human analog) into descriptions
									of the world that make sense to thought processes and
									can elicit appropriate action. This image
									understanding can be seen as the disentangling of
									symbolic information from image data using models
									constructed with the aid of geometry, physics,
									statistics, and learning theory. The scientific
									discipline of computer vision is concerned with the
									theory behind artificial systems that extract
									information from images. The image data can take many
									forms, such as video sequences, views from multiple
									cameras, multi-dimensional data from a 3D scanner, 3D
									point clouds from LiDaR sensors, or medical scanning
									devices. The technological discipline of computer
									vision seeks to apply its theories and models to the
									construction of computer vision systems.
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
		title: 'Computer Vision Roadmap',
		image: 'https://keras.io/img/logo-small.png',
		type: 'Roadmap',
		link: 'https://keras.io/examples/vision/',
	},
	{
		title: 'Computer Vision Beginner',
		image: 'https://www.visiondummy.com/wp-content/uploads/2014/05/robot2.png',
		type: 'For Beginner',
		link: 'https://www.visiondummy.com/',
	},
	{
		title: 'Computer Vision Video',
		image: 'https://img.freepik.com/premium-photo/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.jpg',
		type: 'Youtube Video',
		link: 'https://www.youtube.com/watch?v=E-HSXRvL9Ik',
	},
	{
		title: 'Computer Vision Course',
		image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1',
		type: 'Coursera Course',
		link: 'https://www.coursera.org/learn/computer-vision-basics?irclickid=Ur%3ARv1R0WxyIUW3Sqx3ApxM9UkFWgmzJ%3AWZKQU0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=3294490&utm_content=b2c',
	},
];
