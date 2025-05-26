
import React, { useState, useEffect } from 'react';
import { Code, Trophy, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  streak: number;
}

const LeetCodeContributions = ({ username = "user123" }: { username?: string }) => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    streak: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const generateMockData = (): LeetCodeStats => {
    return {
      totalSolved: Math.floor(Math.random() * 500) + 200,
      easySolved: Math.floor(Math.random() * 200) + 100,
      mediumSolved: Math.floor(Math.random() * 200) + 80,
      hardSolved: Math.floor(Math.random() * 100) + 20,
      ranking: Math.floor(Math.random() * 50000) + 10000,
      streak: Math.floor(Math.random() * 30) + 5
    };
  };

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      
      setTimeout(() => {
        setStats(generateMockData());
        setIsLoading(false);
      }, 800);
    };

    fetchStats();
  }, [username]);

  if (isLoading) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-orange-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">LeetCode</h3>
          </div>
          <div className="animate-pulse">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="h-16 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const totalProblems = 2500; // Approximate total problems on LeetCode
  const easyPercentage = (stats.easySolved / (totalProblems * 0.4)) * 100;
  const mediumPercentage = (stats.mediumSolved / (totalProblems * 0.4)) * 100;
  const hardPercentage = (stats.hardSolved / (totalProblems * 0.2)) * 100;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Code className="text-orange-600" size={24} />
          <div>
            <h3 className="text-xl font-bold text-gray-900">LeetCode</h3>
            <p className="text-sm text-gray-600">@{username}</p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">{stats.totalSolved}</div>
            <div className="text-xs text-gray-600">Problems Solved</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">#{stats.ranking.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Global Ranking</div>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Easy</span>
            <span className="text-sm text-gray-600">{stats.easySolved}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(easyPercentage, 100)}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Medium</span>
            <span className="text-sm text-gray-600">{stats.mediumSolved}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(mediumPercentage, 100)}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Hard</span>
            <span className="text-sm text-gray-600">{stats.hardSolved}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(hardPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={`https://leetcode.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Code size={16} />
            View on LeetCode
          </a>
          <div className="flex items-center gap-2">
            <Trophy size={12} className="text-yellow-500" />
            <span className="text-xs text-gray-500">{stats.streak} day streak</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeContributions;
