
import React, { useState, useEffect } from 'react';
import { Github, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: number;
}

interface GitHubStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
}

const GitHubContributions = ({ username = "octocat" }: { username?: string }) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    currentStreak: 0,
    longestStreak: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  // Generate mock contribution data (replace with real API call)
  const generateMockData = () => {
    const data: ContributionDay[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const contributionCount = Math.floor(Math.random() * 5);
      data.push({
        date: d.toISOString().split('T')[0],
        contributionCount,
        contributionLevel: contributionCount > 0 ? Math.min(4, contributionCount) : 0
      });
    }
    
    return data;
  };

  const calculateStats = (data: ContributionDay[]): GitHubStats => {
    const total = data.reduce((sum, day) => sum + day.contributionCount, 0);
    
    // Calculate current streak
    let currentStreak = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].contributionCount > 0) {
        currentStreak++;
      } else {
        break;
      }
    }
    
    // Calculate longest streak
    let longestStreak = 0;
    let tempStreak = 0;
    data.forEach(day => {
      if (day.contributionCount > 0) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    });
    
    return {
      totalContributions: total,
      currentStreak,
      longestStreak
    };
  };

  useEffect(() => {
    // Simulate API call
    const fetchContributions = async () => {
      setIsLoading(true);
      
      // In a real implementation, you would call:
      // const response = await fetch(`https://api.github.com/users/${username}/events`);
      // For now, we'll use mock data
      
      setTimeout(() => {
        const mockData = generateMockData();
        setContributions(mockData);
        setStats(calculateStats(mockData));
        setIsLoading(false);
      }, 1000);
    };

    fetchContributions();
  }, [username]);

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-gray-100';
      case 1: return 'bg-green-200';
      case 2: return 'bg-green-300';
      case 3: return 'bg-green-400';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-100';
    }
  };

  const groupContributionsByWeek = (data: ContributionDay[]) => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];
    
    data.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      if (index === data.length - 1) {
        weeks.push(currentWeek);
      }
    });
    
    return weeks;
  };

  if (isLoading) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Github className="text-gray-700" size={24} />
            <h3 className="text-xl font-bold text-gray-900">GitHub Activity</h3>
          </div>
          <div className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const weeks = groupContributionsByWeek(contributions);

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Github className="text-gray-700" size={24} />
          <div>
            <h3 className="text-xl font-bold text-gray-900">GitHub Activity</h3>
            <p className="text-sm text-gray-600">@{username}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stats.totalContributions}</div>
            <div className="text-xs text-gray-600">Total Contributions</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.currentStreak}</div>
            <div className="text-xs text-gray-600">Current Streak</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{stats.longestStreak}</div>
            <div className="text-xs text-gray-600">Longest Streak</div>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={16} className="text-gray-600" />
            <span className="text-sm text-gray-600">Past year of contributions</span>
          </div>
          
          <div className="flex gap-1 overflow-x-auto pb-2">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const day = week.find((_, i) => i === dayIndex);
                  return (
                    <div
                      key={dayIndex}
                      className={`w-3 h-3 rounded-sm ${
                        day ? getContributionColor(day.contributionLevel) : 'bg-gray-100'
                      }`}
                      title={day ? `${day.contributionCount} contributions on ${day.date}` : ''}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
              <div className="w-3 h-3 rounded-sm bg-green-200"></div>
              <div className="w-3 h-3 rounded-sm bg-green-300"></div>
              <div className="w-3 h-3 rounded-sm bg-green-400"></div>
              <div className="w-3 h-3 rounded-sm bg-green-500"></div>
            </div>
            <span>More</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={16} />
            View on GitHub
          </a>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Star size={12} />
            <span>Live data from GitHub</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubContributions;
