import { InstagramEmbed, LinkedInEmbed, XEmbed, YouTubeEmbed } from "react-social-media-embed";

export const socialMediaUrls = [
	{
		component: YouTubeEmbed,
		name: "Youtube",
		embedUrls: [
			{ url: "https://www.youtube.com/embed/eWc6eVcaLyw?si=31OyRSxMHwvNhvUE" },
			{ url: "https://www.youtube.com/embed/yUD27BJf5ag?si=D6mMdihaQc5a4h6d" },
			{ url: "https://www.youtube.com/embed/TrPl1K4UBXI?si=hyQjEEqEAIJE-JxT" },
		]
	},
	{
		component: LinkedInEmbed,
		name: "LinkedIn",
		embedUrls: [
			{
				url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7222638750973972480",
				postUrl: ""
			},
			{
				url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7229769338088529920",
				postUrl: ""
			}
		]
	},
	{
		component: InstagramEmbed,
		name: "Instagram",
		embedUrls: [
			{ url: "https://www.instagram.com/p/C_TfYQeyi1K/" },
			{ url: "https://www.instagram.com/reel/DALsYF7SI-w/" }
		],
	},
	{
		component: XEmbed,
		name: "X/Twitter",
		embedUrls: [
			{ url: "https://x.com/namespacecomm/status/1840073187943408054" },
			{ url: "https://x.com/namespacecomm/status/1837502932461199524" }
		],
	},
]