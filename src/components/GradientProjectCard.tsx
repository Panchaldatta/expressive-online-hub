// Install dependencies before using:
// npm install react-slick slick-carousel
// And include the slick-carousel CSS in your entry file (e.g., App.js):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { ExternalLink, Github } from "lucide-react";

const GradientProjectCard = ({ title, description, tech, images, github, demo }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </Slider>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <Github size={16} /> Code
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm"
            >
              <ExternalLink size={16} /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientProjectCard;

// Example usage (insert into any component):
/*
<GradientProjectCard
  title="Creative Portfolio"
  description="Interactive portfolio with animated transitions and responsive layout."
  tech={["React", "Tailwind CSS", "Framer Motion"]}
  images={["/images/project1-1.jpg", "/images/project1-2.jpg", "/images/project1-3.jpg"]}
  github="#"
  demo="#"
/>
*/
