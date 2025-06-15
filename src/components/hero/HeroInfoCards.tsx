
import React from "react";
import { MapPin, Calendar, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HeroInfoCards = () => {
  const infoCards = [
    {
      icon: MapPin,
      title: "Location",
      description: "Pune, India",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Experience",
      description: "1+ Years",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Code2,
      title: "Projects",
      description: "7+ Completed",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {infoCards.map((card, index) => (
        <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
          <CardContent className="p-6 text-center">
            <div className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <card.icon className={`w-6 h-6 ${card.iconColor}`} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HeroInfoCards;
