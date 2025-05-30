
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CodeforcesUser {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
}

const Experience: React.FC = () => {
  const [codeforcesData, setCodeforcesData] = useState<CodeforcesUser | null>(null);
  const [ratingHistory, setRatingHistory] = useState<any[]>([]);

  // Mock Codeforces data (in real implementation, this would be fetched from the API)
  useEffect(() => {
    // Simulating API call with mock data
    const mockUserData: CodeforcesUser = {
      handle: 'sparsh_rastogi',
      rating: 1657,
      maxRating: 1742,
      rank: 'specialist',
      maxRank: 'specialist'
    };

    const mockRatingHistory = [
      { contest: 1, rating: 1200, date: '2023-01' },
      { contest: 2, rating: 1350, date: '2023-02' },
      { contest: 3, rating: 1420, date: '2023-03' },
      { contest: 4, rating: 1580, date: '2023-04' },
      { contest: 5, rating: 1650, date: '2023-05' },
      { contest: 6, rating: 1742, date: '2023-06' },
      { contest: 7, rating: 1690, date: '2023-07' },
      { contest: 8, rating: 1657, date: '2023-08' },
    ];

    setCodeforcesData(mockUserData);
    setRatingHistory(mockRatingHistory);
  }, []);

  const achievements = [
    {
      title: 'Academic Excellence',
      items: [
        { label: 'JEE Advanced AIR', value: '4792', description: 'Among top 5000 students nationwide' },
        { label: 'JEE Mains Percentile', value: '99.65', description: 'Exceptional performance in entrance exam' },
        { label: 'Current CPI', value: '8.78/10', description: 'Consistent academic performance at IIT Patna' },
        { label: 'Branch', value: 'Artificial Intelligence', description: 'Specialized in cutting-edge AI technology' },
      ]
    },
    {
      title: 'Professional Experience',
      items: [
        { label: 'WorldQuant', value: 'Research Intern', description: 'Quantitative research and strategy development' },
        { label: 'Duration', value: '6 months', description: 'Intensive quantitative finance training' },
        { label: 'Focus Area', value: 'Alpha Research', description: 'Development of trading algorithms' },
        { label: 'Impact', value: 'Published Models', description: 'Contributed to production trading systems' },
      ]
    }
  ];

  const getRankColor = (rank: string) => {
    switch (rank.toLowerCase()) {
      case 'specialist': return 'text-cyan-400';
      case 'expert': return 'text-blue-400';
      case 'candidate master': return 'text-purple-400';
      case 'master': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Experience & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through competitive programming, academia, and professional development
          </p>
        </div>

        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="competitive">Competitive Programming</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((section, index) => (
                <Card key={section.title} className="p-8 glass-dark">
                  <h3 className="text-2xl font-bold mb-6 text-gradient">{section.title}</h3>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={item.label} className="border-l-4 border-primary/50 pl-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-muted-foreground">{item.label}</span>
                          <span className="font-bold text-primary">{item.value}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 glass-dark">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Timeline Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-4 h-4 bg-gradient-green rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-semibold">2024 - Present</div>
                    <div className="text-sm text-muted-foreground">Pursuing B.Tech in AI at IIT Patna</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-semibold">2023</div>
                    <div className="text-sm text-muted-foreground">WorldQuant Research Internship</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-semibold">2022</div>
                    <div className="text-sm text-muted-foreground">JEE Advanced - AIR 4792</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="competitive" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 glass-dark">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Codeforces Profile</h3>
                {codeforcesData ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="font-medium">Handle</span>
                      <span className="font-bold text-primary">{codeforcesData.handle}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="font-medium">Current Rating</span>
                      <span className={`font-bold ${getRankColor(codeforcesData.rank)}`}>
                        {codeforcesData.rating}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="font-medium">Max Rating</span>
                      <span className={`font-bold ${getRankColor(codeforcesData.maxRank)}`}>
                        {codeforcesData.maxRating}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="font-medium">Rank</span>
                      <span className={`font-bold capitalize ${getRankColor(codeforcesData.rank)}`}>
                        {codeforcesData.rank}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">Loading Codeforces data...</div>
                )}
              </Card>

              <Card className="p-8 glass-dark">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Platform Achievements</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="font-semibold text-cyan-400">Codeforces</div>
                    <div className="text-sm text-muted-foreground">Specialist rank with consistent performance</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="font-semibold text-green-400">LeetCode</div>
                    <div className="text-sm text-muted-foreground">1800+ problems solved</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="font-semibold text-orange-400">AtCoder</div>
                    <div className="text-sm text-muted-foreground">Regular contest participation</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="font-semibold text-red-400">CodeChef</div>
                    <div className="text-sm text-muted-foreground">4-star rating achieved</div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 glass-dark">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Rating Progress</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ratingHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rating"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
