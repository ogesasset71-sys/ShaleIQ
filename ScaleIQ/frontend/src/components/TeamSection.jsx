import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { LinkedinIcon, ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

export const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gray-100/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">LEADERSHIP TEAM</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Industry <span className="text-[#255073]">Veterans</span> Leading Innovation
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Our leadership team combines decades of upstream oil & gas expertise with cutting-edge 
            technology experience from leading energy companies and technology firms.
          </p>
        </div>

        {/* Management Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockData.managementTeam.map((member) => (
            <Card
              key={member.id}
              className="bg-gradient-to-br from-black/5 to-transparent border-black/10 hover:border-[#255073]/30 transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#255073]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#255073]/30 group-hover:border-[#255073] transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-[#255073] rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#255073] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#255073] font-medium text-sm mb-2">
                      {member.position}
                    </p>
                    <p className="text-black/60 text-xs mb-3">
                      Former at {member.company}
                    </p>
                    <p className="text-black/70 text-sm leading-relaxed">
                      {member.background}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-black/20 text-black/70 text-xs bg-black/5 hover:border-[#255073]/50 hover:text-[#255073] transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* LinkedIn Link */}
                  <div className="flex justify-center">
                    <a
                      href={member.linkedin}
                      className="flex items-center space-x-2 text-black/60 hover:text-[#255073] transition-colors group/link"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                      <span className="text-sm">Connect</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Advisory Board Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">Advisory Board & Strategic Investors</h3>
          <p className="text-black/70 max-w-2xl mx-auto mb-8">
            Backed by industry veterans and leading energy technology investors who provide 
            strategic guidance and deep sector expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockData.advisoryBoard.map((advisor) => (
            <Card
              key={advisor.id}
              className="bg-gradient-to-r from-black/5 to-transparent border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-bold text-black mb-1">{advisor.name}</h4>
                  <p className="text-[#255073] text-sm font-medium mb-1">{advisor.position}</p>
                  <p className="text-black/60 text-xs mb-3">Former at {advisor.company}</p>
                  <p className="text-black/70 text-sm leading-relaxed mb-3">
                    {advisor.background}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {advisor.expertise.map((area, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-[#255073]/30 text-[#255073] text-xs bg-[#255073]/5"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Removed Company Stats section as requested - no KPIs with advisory board */}
      </div>
    </section>
  );
};