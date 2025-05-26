
import React, { useState, useEffect } from 'react';
import { ChefHat, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CodeChefStats {
  rating: number;
  stars: number;
  globalRank: number;
  countryRank: number;
  contestsParticipated: number;
  problemsSolved: number;
}

const CodeChefContributions = ({ username = "chef123" }: { username?: string }) => {
  const [stats, setStats] = useState<CodeChefStats>({
    rating: 0,
    stars: 0,
    globalRank: 0,
    countryRank: 0,
    contestsParticipated: 0,
    problemsSolved: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const generateMockData = (): CodeChefStats => {
    const rating = Math.floor(Math.random() * 1000) + 1200;
    return {
      rating,
      stars: Math.floor(rating / 200),
      globalRank: Math.floor(Math.random() * 20000) + 5000,
      countryRank: Math.floor(Math.random() * 2000) + 500,
      contestsParticipated: Math.floor(Math.random() * 50) + 20,
      problemsSolved: Math.floor(Math.random() * 200) + 100
    };
  };

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      
      setTimeout(() => {
        setStats(generateMockData());
        setIsLoading(false);
      }, 900);
    };

    fetchStats();
  }, [username]);

  const getRatingColor = (rating: number) => {
    if (rating >= 2000) return 'text-red-600';
    if (rating >= 1800) return 'text-orange-600';
    if (rating >= 1600) return 'text-purple-600';
    if (rating >= 1400) return 'text-blue-600';
    return 'text-green-600';
  };

  const getRatingBadge = (rating: number) => {
    if (rating >= 2000) return '7★';
    if (rating >= 1800) return '6★';
    if (rating >= 1600) return '5★';
    if (rating >= 1400) return '4★';
    if (rating >= 1200) return '3★';
    return '2★';
  };

  if (isLoading) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <ChefHat className="text-brown-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">CodeChef</h3>
          </div>
          <div className="animate-pulse">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="h-16 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-12 bg-gray-200 rounded-lg"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <ChefHat className="text-amber-700" size={24} />
          <div>
            <h3 className="text-xl font-bold text-gray-900">CodeChef</h3>
            <p className="text-sm text-gray-600">@{username}</p>
          </div>
        </div>

        {/* Rating and Stars */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
            <div className={`text-3xl font-bold ${getRatingColor(stats.rating)}`}>
              {stats.rating}
            </div>
            <div className="text-xs text-gray-600">Current Rating</div>
            <div className="flex items-center justify-center mt-1">
              {Array.from({ length: stats.stars }, (_, i) => (
                <Star key={i} size={12} className="text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{stats.problemsSolved}</div>
            <div className="text-xs text-gray-600">Problems Solved</div>
            <div className="text-xs text-gray-500 mt-1">{getRatingBadge(stats.rating)} Coder</div>
          </div>
        </div>

        {/* Rankings and Contests */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">#{stats.globalRank.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Global Rank</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">{stats.contestsParticipated}</div>
            <div className="text-xs text-gray-600">Contests</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={`https://www.codechef.com/users/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChefHat size={16} />
            View on CodeChef
          </a>
          <div className="flex items-center gap-2">
            <Award size={12} className="text-amber-600" />
            <span className="text-xs text-gray-500">Competitive Programming</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeChefContributions;
