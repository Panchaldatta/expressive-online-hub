
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GitHubContributions from './GitHubContributions';
import LeetCodeContributions from './LeetCodeContributions';
import CodeChefContributions from './CodeChefContributions';

const CodingContributionsCarousel = () => {
  return (
    <div className="relative">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <GitHubContributions username="Panchaldatta" />
            </div>
          </CarouselItem>
          
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <LeetCodeContributions username="Panchaldatta" />
            </div>
          </CarouselItem>
          
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CodeChefContributions username="Panchaldatta" />
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default CodingContributionsCarousel;
