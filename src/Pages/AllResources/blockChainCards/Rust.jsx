import React from 'react';

export const Rust = () => {
	return (
		<>
			<section className="text-gray-600 body-font text">
				<div className="px-5 py-24 mx-auto flex flex-wrap">
					<h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
						Rust Programming Language
					</h1>

					<div className="flex flex-wrap w-full">
						<div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>

								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
									</svg>
								</div>

								<div className="flex-grow pl-4">
									<h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
										Learning Rust
									</h2>
									<p className="leading-relaxed text-white text-justify">
										Rust has a steep learning curve but is rewarding due to its focus on safety and performance.
										To learn Rust, you can start with the official book, "The Rust Programming Language," which is available online for free.
										Additionally, engaging with the Rust community, which is known for being welcoming and helpful, can accelerate the learning process.
										Practice through hands-on projects and utilizing online resources like "Exercism" or "LeetCode" can also be beneficial.
									</p>
								</div>
							</div>
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
										Unique Features:
									</h2>
									<p className="leading-relaxed text-white text-justify">
										Rust is known for its emphasis on memory safety without sacrificing performance.
										Its ownership system, which ensures safe memory management without a garbage collector, is a hallmark feature.
										Moreover, Rust supports zero-cost abstractions, fearless concurrency, and has a robust type system that catches errors at compile-time rather than runtime, making it a highly reliable and efficient language for system-level programming.
									</p>
								</div>
							</div>
							<div className="flex relative">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
										Growing Ecosystem and Industry Adoption:
									</h2>
									<p className="leading-relaxed text-white text-justify">
										Over recent years, Rust's ecosystem has been growing rapidly with a burgeoning collection of libraries (crates) and tools.
										Its industry adoption is also on the rise, with companies like Microsoft, Google, and Amazon incorporating Rust for critical infrastructure projects.
										Rust has been voted the "most loved language" in the Stack Overflow Developer Survey for several consecutive years, reflecting the positive sentiment within the developer community.
									</p>
								</div>
							</div>
						</div>
						<img
							className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
							src="https://logowik.com/content/uploads/images/rust4784.logowik.com.webp"
							alt="Rust"
						/>
					</div>
				</div>
			</section>

			<section>
				<div className="px-5 py-0 mx-auto">
					<div className="flex flex-col text-left w-full mb-10">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Some Important Links
						</h1>
						<p className="w-full text-left mx-auto leading-relaxed text-base">
							These provide the overview of Rust's main features and tools.
						</p>
					</div>
					<div className="flex flex-wrap -m-2">
						{Rustrss.map((tools) => (
							<div key={tools.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="tools" className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4" src={tools.image} />
									<div className="flex-grow">
										
											<h2 className="text-white title-font font-bold underline text-xl">
												{tools.title}
											</h2>
										
										<p className="text-white">
											{typeof tools.description === 'object' ? (
												<>
													{tools.description.docLink && (
														<>
															<br />
															<a href={tools.description.docLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Official Documentation:</a> {tools.description.textDoc}
														</>
													)}

													{tools.description.subredditLink && (
														<>
															<br />
															<a href={tools.description.subredditLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Rust subreddit:</a> {tools.description.text}
														</>
													)}
													{tools.description.userForumLink && (
														<>
															<br />
															<a href={tools.description.userForumLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Users Forum:</a> {tools.description.text1}
														</>
													)}
													{tools.description.microsoftLink && (
														<>
															<br />
															<a href={tools.description.microsoftLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Rust at Microsoft:</a> {tools.description.textMicrosoft}
														</>
													)}
													{tools.description.awsLink && (
														<>
															<br />
															<a href={tools.description.awsLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">A Blog post about Rust:</a> {tools.description.textAWS}
														</>
													)}
													{tools.description.cratesLink && (
														<>
															<br />
															<a href={tools.description.cratesLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Crates.io:</a> {tools.description.textCrates}
														</>
													)}
													{tools.description.cargoLink && (
														<>
															<br />
															<a href={tools.description.cargoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Cargo:</a> {tools.description.textCargo}
														</>
													)}
												</>
											) : (
												tools.description
											)}
										</p>
									</div>
								</div>
							</div>
						))}


					</div>
				</div>
			</section>

		</>
	);
};

const Rustrss = [
	{
		title: 'Official Documentation',
		image: 'data:image/jpeg;base64,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',
		description:{
			textDoc:'The Rust Programming Language Book: This is the official book which serves as a comprehensive introduction to Rust, covering its syntax, concepts, and the ownership system.',

		docLink: "https://doc.rust-lang.org/book/title-page.html"
		},
	},
	{
		title: 'Community Resources',
		image: 'data:image/png;base64,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',
		description: {
			text: 'A community forum for discussing Rust-related topics, sharing projects, and seeking help.',
			text1: 'An official forum for Rust users to ask questions and share knowledge.',
			subredditLink: 'https://www.reddit.com/r/rust/',
			userForumLink: 'https://users.rust-lang.org/'
		},

	},
	{
		title: 'Industry Adoption',
		image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSExESExETFxYXGhcZGhgXGBYYGRwXHBoYHhwYGBcZHiohGR8mHxcbIjMiJistMDAxGiE1OjUvOSovMC0BCgoKDw4PGxERHC8mICgxMC8vLzE3LzI3LzIxNDMvMS8vLTctLy8wLy80MS8vLy8vLy8vLy8vLy8vLy8vLy8tL//AABEIAKYBMAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xABFEAACAgECAwYCBgcFBgcBAAABAgADEQQSITFBBQYTIlFhcYEHMlKCkaEUI0JicpKxM5OywdEVs9LT4fAWJENUc6LDCP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACkRAAICAQMDAwQDAQAAAAAAAAABAhEDBCExEkFREyKRBWFxgaHB8CT/2gAMAwEAAhEDEQA/AO1SkpYcAnGcA8JrF9f6TXo/EcqziwhgM+bK4HDkMZ/Cc2bL0cK38Hvjx9fLpfPa+DaZWYvu9Y5qIc5ZWZCfXacZz19M+0yc3jl1RT8mJRpteCsRE2QREQBERAEREAREQBERAEREARIx1ydCW/gV3APoSgIB9o/Tk6kr086ugJ9AXABPtGw3JMREAREQBERAEREAREQBERAEREAREQBERAKGY49lANuR3QebyrtIG4gtt3KcZIH+WJkomZRUuSqTXBZ09ARQqjAHz+JJPMk8cy9ETSSWyI3e7EREoEREAREQBERAEREAREQCkipX4uSf7PkB0f1Leq+g5HnxBGPetYit8HBwQD6E8AfxMlVoFAAGAAAB6AdIoN0jH6rtfT1WJQ9tau+3ahIBOSVXA9yCB8J6o7VostehbUaxAS1YOWA4ZyPvD8Zyn6XrSnaFDKcEUoQfRlscgyb9HOvF/a2suAwHpLY9CWqyPkczz9X39J9F/Tv+ZZ03w/mzpT1+Dgr/AGfIr0T0ZfRfUchz4AHMqe7EDAqRkEEEex6SLomJrTJycYJ9SOBP4ienDPnJ2iRLGr1SVI1trqiKMszHCgepJ5S/Mf29oWvotpRlDOAAWzgEEHjjj0gF7Q6+q9d9NqWLkruRgw3DmpI5EekuavVJUlltjBURWdmPIKoJJPsAJqfaXdKy5rLbP0axrHLNVZWzU48Ja0bicvYu3O4gcGK8MBpYs7jvs1CeJTY1tL1fpFqOdRx0y0bC4ONm5fEPMeYjbnzykN5iaHrO4rutSmypthvyzKdzNY6MNTnGVvAUqWUr0Ksg8s2Xu92OumW/gm+26+1mUYJFl1jqGPUqrgfjBTLxESAREQBERAEREAREQBERIBERKBERAETE9p9smm3T1eBY/jsUVlNYAYI7kMGYHglbHgPbnLDd69MVYpaGYJXYFK2DIsR3rz5CRkVsTwyoHECAZ2Jr1He+g+KGFqmt668Cm597vSt2KgiFrMKSTgZAXcQFIJ96TvVQ970ecNvREbZYUcvQlw/WBdqEq/BWIJ2nAgGZutCgsxwB8/gABxJJ4ADnLaV2PxZjWPsrtLfeY5A+C8vtGVUb7PasA/fbP9F/x+0wXfPt16PCqr8rWH6/A7VyAcA8MnPM8p6YsUsklGISbdIz36An2rP723/ilsq6ccl168BvHuNoAf4YB+J4TE6ytqzYG12r8lZtOFoPlGc4/Vc+HKTOxHcPfW1z2BfDKlwgbDLk/UVR+UrxbWmKfNk19ZWMecHIyAvmJHqFXJI+Annx3P1aj8XIQH4Abm+RAlKqwljqAAHy4x9rOH/MqfixkrE8dy7ELU02srDegODgBTz6DcW9cccCTqLQyqw5EAj5ykjAGskqCUJyVHNSebKOoPMjnnJGScS8Ee6Ocd/dMt3bGhqYZV6gp+BNozIP0T6dq+0dQjfWWp0YfvLbWDOuU2I/FSpI4H1Hseo+Bi6xE4sVBPAZxk+w6n4CY9L3dVnevqDWB4K2aS/ad3/RcvtCqzHkASflIGmptVFG9CQBkFTz6jcG9euJcwbCCwIQHIU8yRyZh0A5gc84JwRiSZp7nAtiN47j61R+KMHA+IO1vkAZ6r1aNnDDIGSD5WA9SrYIHxl/Ei6qoO9aMAQMucjP1cYHtkkH7pHWNy7FVL2cQSidDgFz7gNwUfEEn0E9/oC9TZ/e2D8g2B8pIssCgseQBJ+AmAHeup7KK6Tv3sAxZbV2gqWUjKYOcdSMT0jBvhHlLIo8ujKtS6cVYuPstjOPRX4cf4s59Rzlym0MMj/QgjmCOhE9pqULsgdS6gErkZAOcEjpnB/CWLfJYpHKzKn+MAkH+VWBPsvpMNUaTskxEQaEREAREQBERAEREARESARESgREQCJq9AllmnsbO6lmdMHA3NW9ZyOvlsaYle5+lD7wr7t17fXP1r12McfuplV+yCQOc2GIBgW7rU53K1qNvSwMr4K2LV4G9cg8WqwpByDgHAPGX6O79SHI8QnxK7SWdnJeupalJZslvIgzkkk8czLyxfeFwMZY/VUcz/oB1P8A0gUNEfPcOu5T8iiDP4qR8ppP0kvtv0jHkAx+QZDNuCMjeKSWJGHC8gvEjYOZ2kn3O5vRVnvX9nU3qC6Vv5TtZlVsA9QfTkeE6NHmWLIptbb/AMli+l2a/f3r0bqGNbu1gavaFBcrn6pGeRJ4DOTMz2HprB4ltqhGsKkVjjsVRhVJ6tjnjh0E89j926NOE21qzr/6jKC5PU7unwEy1tgUEscAdZrNPHvHHdeWSTXCI1v9tX/BZ+bVY/ofwkiRtOpJaxhgtjA6hBnaD78ST/FjjiSZyhCQ9X2jXU1KPYFNr7Kwc+Z9pbbnkDhTz58ucmTD9u9iJqjSHYhay5IH1iWrZQVcHKMpIcMMkFRy5wUvLqtPd4Z3VNv3bA+3cQpIbar8cAg54THU95tCDX4VtZ8VVdTWufK1iVKTtGRl3A4+hJwAZj9F3GKPQ76gWbBT4ma3Uu9Nj2IybLQqeazJDK44cMZMuU9ytqVJ46/q0prUirB2VahLlz5+LEJsJ4DJ3Y/ZikZs2TTdoV2AEOBk42sQGzlgBtz12nHriS5qui7pGu/T6jxkJpDKB4I8yu1zNlt2Qw8UBT+yPEGD4hxtUFQlhDi0/vIMfdY5/wAay/I2pQ+V1GWU5x6g/WXPvzHuFgppf0qa22sabaoNe4tk7uFq/VyVI6FuHI4PpOd/7Yfj5V5Ac7eQUp9v7JP9Z3myuu9CrKro3NWXI4dCp5EEcjxBEg6bupo6yGXS1ZHEEruwfUbs4ndg1UYQpxPl6jSTnPqUqNQ7ldhW6hk1l7WVhQi1rWTXvrQcN/7RXljjk4PTE3/WnjUPV/6I5/yknlMa6tY3iKcBQQmeTA43Fh6HAwRxGM8QcTly5HJ2duDEoKvlk+Ulii8NkYww+sp5j/UHof8ArNa77dqW6dtOyXMiYsLJWqmyxga9q1762Ww8WHhbkZt2VPlM8z3extsTSH72Xh7x4dZCeMTWEt8SlKr0QNcd2HFlZaxcBcAcN4yRTWd672Np04oZK01disyWMHWgaYqqlXH1/GcbsEcAQDjBpLN4ic+7T71agXL4aqdlmo/8qi2eM616XUPWXfiCtjqhXCg8uLHIEm3vJeFSxbKtRtW8k012pUxVaSMqS7HZvbO1mztI4NlQFm8RNE/8Z2otjP4Loqarw70S0VX21Jp3qFQ3Hg3i3JtDNuNJ2nmJcTvBfZrNNUXrRfHZHpVH8TwxpbnFjuTtKO4UqAB9UcSdwAWbvERIURESEEREoERI9rFm8NeHDLN6Kc4A9zg/DB9sgVt1aqdpOW57VDM2PUqoJA95Q6sDmtn93Yf6CYvvF3l0fZlYbUWKm7O1AC1jnqQo4t7sfXieM1Xs/wCmzs2xwjfpFQP7dla7fn4bsR+EUydRvr6pdoKkPk4UKRxPpnpjqemI0+n25Zjlzzb+igdFHQfPmSZ48NLAt9LISygrYpBV0OCAWH1lPDBHLp6G/p7dyg4I5gg8wQcEH4EERRb22Lsj/o+CSjFc8SOak+pU8vXgRnrJESFLGLft1/3bf8yUXT8QzMXYcs4wP4VHAdePE8eckRBKEREpRERAEREAREQBERALDafiWUlWPMrjj/EDwPx5+8Yt+3X/AHbf8yX4gURv0Yt/aNu/dxtTP8PM/eJkmIgEfUUbsMpw45H+qsOqn0+fMCUr1a7SWIXBwwJHA+meuenrmXNRdtUtgnlgDmSTgAfEkCeNPpAG8RwDYRjP2Rx8qeg4njzP5B3Je24GrHRbP7uwf1E9VatWOASG57WDK2PUKwBI95KMtX0KwwwyP6H1B5g+44y0ZsrmMyPUxVvDbjwyreqjGQfcZHxyPfEiQ0MxmIgCIiCiIiQhiNd26lT3oUYmlKLDjHEXWWIoHuDUSfiJB0nfLTsHNhesobuDV2lWFVxqbwn2bbW3bfImTlwMTIa/sGm6zxXD7iKwwV2VXWty9YsUHDBWZj75IORwkM9z9MQwYWMp8TCtY5VTbYLXZBnysXAOemOGMnOiEnS95dPa9dSNYXs8TC+FaCvhEB/Eyv6rBZeLYzuXGcjOS7PHB26s75+6dg/JBIPZ3YdVLK6bywV1yzFsh3V2z05qMAYAAwABJuhOPETqrFvirksD8Mll+6ZO47Hz53n7n9qdpdovbbprVrstCK52kV07tqkLu5KvmIGMnJ6x35+iH/Z2kt1f6d4uwoNng7M7mC/W8RuWc8pifpD7uXdldoeOifqjb41FmMpkNvCHplTwx1AB6yz3l+k7Xa+h9NcavDYqTsTafKQRxyeoE0ZOgf8A859t2Muq0bMSibbKwc+XcSHA9ATtOPUses69WMW2j1CP8zuU/lWJzX6B+6Nmlpu1V6FHv2hFYYYVrk7iOm4nl6KPWdKoO57X6cEHvszk/wAzMPuyMqJEREhsREQBERAEREAREQBERAEREAREQBERAI1nG2oegd/mNqj8nM9arXpWG3MMgMcZ4+XGfn5l/ETzedr1P04ofbfjB/mVR96RO0exBYzPuIJDA/MIP/z/ADmZuSXtW5qCi5LqdIxnbveFhVb4XlYBsNwPK1U4ZGORMw3d7vg6vt1L7kIPm2+ZT0+qOIPLl6TPa7urvR1FmCd3EjOM2B+WfbExA+j9/wD3C/yH/inzM8dX6ilDsvO3wfW00tD6UoZHy+a3/To2uzULZXXahBG9CpHLDNsP5MeHrJuZitHoBRVTpwS3m3E8j5W3lsem7av3hMrPpxbaXVz3/J8iaim1HdW6/BWIiaIIiIAiIkIIiJQJHvqOQykBl5Z5EHmrexxz6H14gyJa1FuxWcjO0E49cDlBSLe9F6tVaikE7WrtVSpI6AN5X+WcexkHS90uztOwtTR6athxD7EG0+qk/V+Uy2no2oEbBP7XoWPFjj3JJ+crXpUU5WtAfUKAfxAhNmWkeHuL+WvIB52dMfuZ+sffl8cYl6tAoCgYAGAPae4g0IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAeLEDAqRkEYI9pZW8pwsyQOVnTH7+Pqn35fDOJJiUUVrsVhlWBHqCCPxEjXdoKOAO5s42rg8Ty3HkvzI/HhPVmlRjlq0J9SoJ/EiU1FG5Ci4HDy+gYcVOPYgH5SNsykilNZyXYgu3PHIAclX248+p9OAEiWtPaHVWAxuAOPTI5GXYRoREQBERAEREhBES1dYFGTk9ABzJ6Ae/8A3ylBckbW8TWvq4J+C+f+qqPnHgEjda+0c9qsVUfFxgt+Q9pjh2joC2Bbp93IEMoPycHP5yN+TSg5cJv8GbiRPDZBuQl1+yxycequeJPsxOeHESRVYGAYHIP/AHy6fCUye4iIKIiIAiIgCIiAUlYmC7x94F01VzoUssq2Zq3gN5mUcQMleDZHD0kcklbLGLk6RnJZfUoApLqAxCqSwwzHkFPUnoBOSdo999TfqCdKLQGrCeERv83my6qvJgW4MPQZHSa72imqoWrT3eJWqHxK0bgFJ/aUj/XgSeWTOeWpS4VndDQSe0pJPwfQAcZIyMjBx1wc4OPkfwnucRr13aOn8TWFbB46ANa6bht/Zb0THTIxg8ptPdDv1vbR6VkYsVZbLbH6qjsCM5LZ2jJYjn1mo54t09jzyaOcV1Raa+38nRoljS6lLF31urrxG5WDDIOCMjhwIxL89zkEREAREQBERAETxY4UEkgADJJ6AdZYRGs4sWReijgxHqzc1+AwR1PQCDRjHiL6OSPg2H/qxHykmWf9m18zWpPqw3N/MeP5yh0hXijH+FiWU+2Tkr8uA9DFUOpEiJZ09wYHgQQcFTzB9D+IPuCD1l6CiIiAIiJCFJYqG6xj0QBR/ERlj/KVAPu3rL8s6Q+e4ddyt8iigH8UYfKUdjSO9Y1Gq1I0658POBz2kjizPj0xwHtw4mSH+j2sJj9IfxMcyF2Z/h54+9L9faten1hrsOMllLHgF3YKkn34fDMn96e736Wam8VUCBua7s5wc5yMcpx6CPr28/tdvzwuNjqy/UpY4qGBr21dVu/uTu73Zq6apaQ5cjiST1PPaM+Uew/rmSVG2xl6ON4HuCA/w5qfiWPWc57saMfp9a1sHVGY7wMAqFPmxk8CTj5idHsOblx+yj59tzJj/A34T6mp08cLUYu9r8Hz8WeWZuUubZIxE53ouxdbXuNdIruWmxbbyyFr7jj9Yji0hiSNw8aoCvkOBMvaijtMqxRdSEPj+Cni6bxkcpT4LaiwsVasOLzgFzh0yGxgeB7Wb7Kzlfbuo1V1l2jFj2W2fptbIltHgsh0l3hIKt3iVbWarLOFG5xxIK42nsenWjVt4pcUjfj+zNRrwvhKuLdyuOOT4YzhuJBWBZtcREhRERAIPa+peumx69hdVYqHOFLAZAJyOc4X2t2oNZqPGtUVhtoc1qWOFGNwDHi2ABz9Juv0uayo+FS1Nnir567SAE2ng6g825DI4YO0/HV+53dltdYyt4iVhSfFVQV3gjC5PAnny4jE4dRJyn0I+tooRx43llsbZ2H3x7N0ieHTTcvqdqlmPqzbsn+g6Yl7X9++zr9vjaeyzYdy7q0OD6jzTmOsp8OyysHOx3XPrtYjP5TdOwe5FF9FVr6vYzjJX9Xw4kY4nPSZhlm/akjWXT4Ye+Te/c2dPpL0ROCLgPU1jHzwxP5TE96e6dOqqOs0G08CzIn1XA57V/ZcfZwM+mZp3ersavSWiuvULaCuTjGVOfqttJGev+Xrs30W6q1E1xrQuFRXVOhtw2FHuQBn4CVZHOXRNGZYY4oerib/AH3Jf0X9v2Ns0orqWqtGYtkh2LNkYBOCSWJPDp8J0ufOiMq3A6mtmAfdahGxjxywII8ufTh8p9Adl6vxaq7BW6BlBCONrAHoygnE9tNkuNPsc+uwqMlJdyZEROk4RETFd6dK9uj1lVQzZZRaiDIGXatgoySAOJHEmAZXETl93dvUGsgaJtvi2ste3SeQNp60Vlp8fwq/1isQVcnJJIGZmtD2RatyNfo3tt30smoF67aa1rqDVby4tOGR8oqFbNwLHzNiks264bnrToMufukbQfmd33JC1vejSVPbXZqEVqtpsBz5AwBUuQMLkHIzJwOLR+8h/wDqw/4/ymi9td0dTZqe0rVSl69T4W0NaUOF0z0OrfqmK58Q8VOcDHWERm0v3t0YBJ1NeAi2EjcQK3GVckDgpHHJnpe9ejJRV1KMzoLFC7mJrPJwFH1feaTo+5OrqGNlDg0aSo/rSnmpotqcBvCJUN4xw64YAe8iXfR1q3ppoYoFWnTKz1Xmt/Ep8by8amDIfFyORBGfaUydH0+trt8G+l1euzKbl5HG4g59irD7xk8TXO6vZdmk0ej01pBsV2yQxf8AasfO4qNxxgE4HEzYxM9za4KxEQURESEEjXqVIsUZIGGUc2X29weI+LDrJMSgwXb3d+vWAWK21wMBhxBH2WHXBz7j8pro7l6r6huTw/TfZjH8G3E3dtKMllLIx5lccfiCCCfcjMtJvLsniNgBSCFTPm3DicY/Z9JmUIt20c2TSQm7ZB7D7Gq0SE5LO2AWxxJ6Ki/5fjy4ZPT1nzM31m4n2A5KD7f1JPWVq0wB3cWb7THJ+A6KPYYEvTbk5cnvCCgumJWIiQ2edgznAzyzjjj0zPURBBERBRERAOU/SyLRZXuvRqzxSoDDIQMFz9oHj5jjngDmZ0HuuQdHpSvLwasfyLNV+lDscOq2V6R3tP1rEydqr0ZQfNnOBwOMHl155o+2tWqrXVqLwqjgqM2APYDkJxyyenkba5Ppww+vgiouq/3Yi9rf2+o/+W3/ABtM32X3D1WorrurFOxxkbnIOMkcRt9pgrNNaxLGuwkkkkq2STxJPCbJ3M12qXU6SrfeKt4BQ7wm3jwxyxOaCTl7kd+eUo47i1aNb12ieix6rE2uhwRw9MjBHMEEHPvOufRhrq7NJtVFRq2KuF/aYgEWEniSw9eoI5ATXPpY7Hfx69QlbMroEYqpOGUnGccshh/LNL0zaircazdXuGGKeImR+9jmOc2n6U3seM0tThW9Mznfrt1NXqUeoPWa/wBWWfaPMrnDAqT5Rzzz9p1zsFbBRV4tyWvjJsUAKwPEEY4HhjjwzzwJwvsHQtbamNPZcikF60yCU/iGNvtxHKd90OlSpFrrQIijAUDAA5/5z30zcnKTOPXKMIxxrsSIiJ1nzxERAEREAj6qskArjcp3LnlniCD7EEj2znpLumvDjhkEcCp5qfQj/sHmMg5nqWbaAxzxDDkynBx6ZHMex4QRomTxZYFBZiABzJ4AfOQTvDIgtY5DEkqmfKVHDCgftekuLpRkFmZyORbHA+oUAKD74z7x1Eo805dvEIIGMIDwO04JYjoTgcDyAHIkiSoiDQiIgCIiQgiIlAkZuFy/vI2fuMuP940RDBJiIgoiIgCIiAIiIAiIgEPtTSeLVbXvZNysu5cbhkYyM9Zxbtyg9m61q9NbYCir5jtz5gCRgDBHEcCOnsIicmq4T+53/T3c3DtRtf0X94L77tQl1r2eQMM44ENg49M7h+E6SDET0wb41Z5ayKWVpFrWXbEsb7KsfwBP+U4JZ3j1diGp9TYyuPMDjiCMkZxkD2HDpyiJ4aqTVHX9NhF9VrwdB+jTu/WqVa1bLdzrYrIdm04cr6Z5oCOM3+InTgVRRwapt5ZX9ysRE9TxEREAREQBERAIoObm/dRcffZs/wC7WSYiQFYiJQIiIB//2Q==',
		description: {
			microsoftLink: 'https://cloudblogs.microsoft.com/opensource/2021/02/08/microsoft-joins-rust-foundation/',
			awsLink: 'https://aws.amazon.com/blogs/opensource/rust-runtime-for-aws-lambda/',
			textMicrosoft: 'An overview of how Microsoft is exploring the use of Rust in its infrastructure.',
			textAWS: 'AWS uses Rust for some of its services. This blog post discusses how Amazon Web Services has incorporated Rust for certain services.'
		},
	},
	{
		title: 'Libraries and Tools',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcw7lGbt9wuvE7P7-898RJbOAh5Xue03TxQ&usqp=CAU',
		description: {
			cratesLink: 'https://crates.io/',
			cargoLink: 'https://doc.rust-lang.org/cargo/',
			textCrates: 'The official registry for Rust libraries (crates), where you can find and share libraries to use in your projects.',
			textCargo: 'The official guide to Cargo, Rust’s package manager and build system, which is an integral part of the Rust ecosystem.',

		},
	},
];
