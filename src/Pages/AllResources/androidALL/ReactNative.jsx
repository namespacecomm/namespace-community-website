import Navbar from '../../../components/Navbar/Navbar';
import styled from 'styled-components';
import Footer from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	display: flex;
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

export const ReactNative = () => {
	return (
		<>
			<Section>
				<Navbar />
				<Container>
					<section className="text-white body-font">
						<div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
							<img
								className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
								alt="hero"
								src="https://codersera.com/blog/wp-content/uploads/2019/02/react-native.png"
							/>
							<div className="text-center lg:w-full w-full">
								<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									React Native
								</h1>
								<p className="mb-8 leading-relaxed text-justify">
									React Native is an open-source mobile app development
									framework created by Facebook. It allows developers
									to build cross-platform applications using JavaScript
									and React, sharing a single codebase for both iOS and
									Android. React Native uses native components,
									resulting in high-performance, near-native user
									experiences. It's known for its efficiency and speed
									in app development, enabling rapid iterations and
									updates. The framework has a vast ecosystem of
									libraries, tools, and a supportive community. With
									its "write once, run anywhere" approach, React Native
									simplifies mobile app development and is widely used
									by developers for creating versatile, cost-effective,
									and high-quality apps for various platforms.
								</p>
							</div>
						</div>
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
			<Footer />
		</>
	);
};

const resources = [
	{
		title: 'React Native Roadmap',
		image: 'https://roadmap.sh/roadmaps/react.png',
		type: 'Roadmap',
		link: 'https://roadmap.sh/react-native',
	},
	{
		title: 'React Native Documentation',
		image: 'https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png',
		type: 'Documentation',
		link: 'https://reactnative.dev/docs/getting-started',
	},
	{
		title: 'React Native Tutorialspoint',
		image: 'https://miro.medium.com/v2/resize:fit:700/1*C3kxjCrJy-aWSMpe2chfaA.png',
		type: 'Collection Of Tutorials',
		link: 'https://www.tutorialspoint.com/react_native/index.htm',
	},
	{
		title: 'Udemy Course',
		image: 'https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png',
		type: 'Paid Course',
		link: 'https://www.udemy.com/course/react-native-the-practical-guide/',
	},

	{
		title: 'React Native for Beginners',
		image: 'https://global.discourse-cdn.com/business7/uploads/codewithmosh/original/1X/c8b3a1e9bb59d3cafaf1409a75e4de89cc3a75e0.jpeg',
		type: 'Beginners Tutorial Video',
		link: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
	},
	{
		title: 'Complete React Native Project Course',
		image: 'https://i.ytimg.com/vi/tbvguOj8C-o/maxresdefault.jpg',
		type: 'Youtube Video',
		link: 'https://www.youtube.com/watch?v=AkEnidfZnCU',
	},
	{
		title: 'JavaTPoint React Native',
		image: 'https://miro.medium.com/v2/resize:fit:1000/1*GkR93AAlILkmE_3QQf88Ug.png',
		type: 'Tutorial',
		link: 'https://www.javatpoint.com/react-native-tutorial',
	},
	{
		title: 'W3Schools React Native',
		image: 'https://play-lh.googleusercontent.com/y3eaXRp7E7JfproxFtRIf60pVkmgcPNCxIhx_P7Ith_u3jZufHLnZspbc0bC3t2k5A=s150-rw',
		type: 'Tutorial',
		link: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
	},
];
