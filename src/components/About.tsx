
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a placeholder download action
    console.log('Downloading resume...');
    // In a real implementation, this would trigger a download of the actual resume file
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging technology to solve complex problems and create meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 glass-dark">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated <span className="text-gradient-green font-semibold">AI Researcher</span> and 
                  <span className="text-gradient font-semibold"> Web Developer</span> currently pursuing Artificial Intelligence 
                  at IIT Patna. My journey combines deep technical expertise with a passion for quantitative finance.
                </p>
                
                <p className="text-lg leading-relaxed">
                  With a strong foundation in competitive programming and machine learning, I've developed 
                  solutions that bridge the gap between theoretical concepts and practical applications. 
                  My experience spans from algorithmic trading systems to full-stack web applications.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-gradient-green/10 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-green">8.78</div>
                    <div className="text-sm text-muted-foreground">CPI at IIT Patna</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-gradient">4792</div>
                    <div className="text-sm text-muted-foreground">JEE Advanced AIR</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="bg-gradient-primary text-white border-none hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 glass-dark">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-green rounded-full flex items-center justify-center text-white font-bold">
                    🎓
                  </div>
                  <div>
                    <div className="font-semibold">IIT Patna</div>
                    <div className="text-sm text-muted-foreground">B.Tech in Artificial Intelligence</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    💼
                  </div>
                  <div>
                    <div className="font-semibold">WorldQuant</div>
                    <div className="text-sm text-muted-foreground">Quantitative Research Experience</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    🏆
                  </div>
                  <div>
                    <div className="font-semibold">Codeforces Specialist</div>
                    <div className="text-sm text-muted-foreground">Competitive Programming Expert</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    📊
                  </div>
                  <div>
                    <div className="font-semibold">99.65 Percentile</div>
                    <div className="text-sm text-muted-foreground">JEE Mains Achievement</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
