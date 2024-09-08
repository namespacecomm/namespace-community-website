import React from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const cardDetails = [
  {
    title: "25 Days of Web",
    description: "JavaScript is a versatile language used to create dynamic web pages.",
    image: "https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png", // Replace with actual image URL
    link: "https://drive.google.com/file/d/1HMP19SbALiGf22xt8ks7v7KokX02VQM1/view?usp=sharing"
  },
  {
    title: "25 Days of C++",
    description: "C++ is a powerful language for system and application development.",
    image: "https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png", // Replace with actual image URL
    link: "https://drive.google.com/file/d/1cwbJiK81SrOluIXmf-1AySr-OIxPNi1O/view?usp=sharing"
  },
  {
    title: "25 Days of Java",
    description: "Java is widely used for building enterprise-level applications.",
    image: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png", // Replace with actual image URL
    link: "https://drive.google.com/file/d/1hC6qyPj15kOJU-RonP__cT-mRhPGEbsP/view?usp=sharing"
  },
  {
    title: "25 Days of Python",
    description: "Python is a high-level programming language known for its readability.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkWh_w2MlcY1Iajbcnf4ahqyiKsdfJtEpDA&s", // Replace with actual image URL
    link: "https://drive.google.com/file/d/1x7k7-rQwtWwI950UEE9Q8V38fz1uK-Hg/view?usp=sharing"
  }
];

const MultiActionAreaCard = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={link} target="_blank">
          Start Challenge
        </Button>
      </CardActions>
    </Card>
  );
};

const Achievements = () => {
  return (
    <div className="bg-blue-1000 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl mt-16 items-center text-center">
        #25DaysOfCode
      </h2>

      <p className="max-w-2xl px-3 mx-auto my-10 text-center flex justify-center items-center text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
        This is your chance to level up your coding skills by committing to code every day for the next 25 days. Whether you're fixing bugs, building cool projects, or learning something new, we want to see your progress! Share your journey with the community by posting daily updates with #25DaysOfCode and #namespace. <br/> Don't forget to tag us in your posts for a chance to get featured! Let's inspire, motivate, and support each other as we embark on this coding adventure together. <br/> Ready, set, code! 🚀
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardDetails.map((card, index) => (
          <MultiActionAreaCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
