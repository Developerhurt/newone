import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  MessageCircle, 
  Heart, 
  Eye, 
  User, 
  Award, 
  CheckCircle, 
  Languages, 
  Briefcase, 
  Calendar, 
  Globe, 
  Phone, 
  Mail, 
  ExternalLink,
  Users,
  Palette,
  Music,
  Camera,
  Code,
  PenTool,
  Mic,
  Video,
  Image as ImageIcon,
  Download,
  Share2,
  Bookmark,
  ThumbsUp,
  AlertCircle,
  XCircle,
  Plus,
  Minus
} from "lucide-react"

export default function BusinessFindArtistPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(true);

  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Eva Murphy",
      username: "@evamurphy_art",
      designation: "Senior Digital Artist",
      location: { city: "New York", state: "NY", country: "USA" },
      rating: 4.9,
      totalReviews: 24,
      skills: ["Digital Illustration", "Concept Art", "Brand Design", "UI/UX Design"],
      languages: ["English", "Spanish", "French"],
      isVerified: true,
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      hourlyRate: "$75-100",
      availability: "Available",
      portfolio: [
        { type: "image", url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop" },
        { type: "image", url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" }
      ],
      socialLinks: {
        instagram: "@evamurphy_art",
        linkedin: "Eva Murphy",
        website: "www.evamurphy.com"
      },
      followers: 1250,
      connections: 890,
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Marcus Chen",
      username: "@marcuschen_photo",
      designation: "Professional Photographer",
      location: { city: "Los Angeles", state: "CA", country: "USA" },
      rating: 4.8,
      totalReviews: 18,
      skills: ["Photography", "Photo Editing", "Lighting", "Portrait Photography"],
      languages: ["English", "Mandarin"],
      isVerified: true,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      hourlyRate: "$100-150",
      availability: "Available",
      portfolio: [
        { type: "image", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop" },
        { type: "image", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop" }
      ],
      socialLinks: {
        instagram: "@marcuschen_photo",
        linkedin: "Marcus Chen",
        website: "www.marcuschen.com"
      },
      followers: 2100,
      connections: 1200,
      lastActive: "1 hour ago"
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      username: "@sofia_music",
      designation: "Music Producer & Composer",
      location: { city: "Miami", state: "FL", country: "USA" },
      rating: 4.7,
      totalReviews: 15,
      skills: ["Music Production", "Sound Design", "Composition", "Audio Mixing"],
      languages: ["English", "Spanish", "Portuguese"],
      isVerified: true,
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      hourlyRate: "$80-120",
      availability: "Available",
      portfolio: [
        { type: "video", url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" },
        { type: "image", url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" }
      ],
      socialLinks: {
        instagram: "@sofia_music",
        linkedin: "Sofia Rodriguez",
        website: "www.sofiamusic.com"
      },
      followers: 1800,
      connections: 950,
      lastActive: "3 hours ago"
    }
  ]);

  const skillsOptions = [
    "Digital Illustration", "Concept Art", "Brand Design", "UI/UX Design", "Photography",
    "Photo Editing", "Music Production", "Sound Design", "Composition", "Video Editing",
    "Animation", "3D Modeling", "Web Design", "Graphic Design", "Logo Design"
  ];

  const languageOptions = [
    "English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean", "Arabic"
  ];

  const designationOptions = [
    "Digital Artist", "Photographer", "Music Producer", "Video Editor", "Graphic Designer",
    "UI/UX Designer", "Animator", "3D Artist", "Web Designer", "Illustrator"
  ];

  const stateOptions = [
    "NY", "CA", "FL", "IL", "TX", "AZ", "PA"
  ];
  const cityOptionsByState = {
    NY: ["New York", "Buffalo", "Rochester"],
    CA: ["Los Angeles", "San Diego", "San Jose"],
    FL: ["Miami", "Orlando", "Tampa"],
    IL: ["Chicago", "Aurora", "Naperville"],
    TX: ["Houston", "Dallas", "San Antonio"],
    AZ: ["Phoenix", "Tucson", "Mesa"],
    PA: ["Philadelphia", "Pittsburgh", "Allentown"]
  };

  const filteredArtists = artists
    // Only verified artists should be shown
    .filter(artist => artist.isVerified)
    .filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesState = !selectedState || artist.location.state === selectedState;
    const matchesCity = !selectedCity || artist.location.city === selectedCity;
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => artist.skills.includes(skill));
    const matchesLanguages = selectedLanguages.length === 0 || 
                            selectedLanguages.some(lang => artist.languages.includes(lang));
    const matchesDesignation = !selectedDesignation || artist.designation === selectedDesignation;
    
    return matchesSearch && matchesState && matchesCity && matchesSkills && matchesLanguages && matchesDesignation;
  });

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleLanguageToggle = (language) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const getSkillIcon = (skill) => {
    if (skill.includes("Photo")) return <Camera className="h-4 w-4" />;
    if (skill.includes("Music")) return <Music className="h-4 w-4" />;
    if (skill.includes("Video")) return <Video className="h-4 w-4" />;
    if (skill.includes("Design")) return <PenTool className="h-4 w-4" />;
    if (skill.includes("Code")) return <Code className="h-4 w-4" />;
    return <Palette className="h-4 w-4" />;
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Find Artist</h1>
              <p className="text-sm text-slate-500">Discover talented artists and creative professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          <div className="flex-1 max-w-7xl mx-auto">
            <div className="space-y-6">
              {/* Search and Filters */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        placeholder="Search by full name, username, or skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    {/* Quick Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                        <select
                          value={selectedState}
                          onChange={(e) => {
                            setSelectedState(e.target.value);
                            setSelectedCity('');
                          }}
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">All States</option>
                          {stateOptions.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          disabled={!selectedState}
                        >
                          <option value="">All Cities</option>
                          {selectedState && (cityOptionsByState[selectedState] || []).map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Designation</label>
                        <select
                          value={selectedDesignation}
                          onChange={(e) => setSelectedDesignation(e.target.value)}
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">All Designations</option>
                          {designationOptions.map(designation => (
                            <option key={designation} value={designation}>{designation}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Skills</label>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-slate-200"
                          onClick={() => setShowFilters(!showFilters)}
                        >
                          <Filter className="h-4 w-4 mr-2" />
                          {selectedSkills.length > 0 ? `${selectedSkills.length} selected` : 'Select Skills'}
                        </Button>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Languages</label>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-slate-200"
                          onClick={() => setShowFilters(!showFilters)}
                        >
                          <Languages className="h-4 w-4 mr-2" />
                          {selectedLanguages.length > 0 ? `${selectedLanguages.length} selected` : 'Select Languages'}
                        </Button>
                      </div>
                    </div>

                    {/* Advanced Filters */}
                    {showFilters && (
                      <div className="border-t border-slate-200 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Skills Filter */}
                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {skillsOptions.map(skill => (
                                <button
                                  key={skill}
                                  onClick={() => handleSkillToggle(skill)}
                                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors ${
                                    selectedSkills.includes(skill)
                                      ? 'bg-blue-100 text-blue-700 border-blue-200'
                                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                                  }`}
                                >
                                  {getSkillIcon(skill)}
                                  {skill}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Languages Filter */}
                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                              {languageOptions.map(language => (
                                <button
                                  key={language}
                                  onClick={() => handleLanguageToggle(language)}
                                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                                    selectedLanguages.includes(language)
                                      ? 'bg-green-100 text-green-700 border-green-200'
                                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                                  }`}
                                >
                                  {language}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Results Count */}
                    <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">
                  Showing {filteredArtists.length} verified artists
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">Sort by:</span>
                  <select className="px-3 py-1 border border-slate-200 rounded-lg text-sm">
                    <option value="rating">Highest Rated</option>
                    <option value="recent">Most Recent</option>
                    <option value="price">Price Range</option>
                    <option value="availability">Availability</option>
                  </select>
                </div>
              </div>

              {/* Artists Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtists.map((artist) => (
                  <Card key={artist.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative">
                          <img 
                            src={artist.profileImage} 
                            alt={artist.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          {artist.isVerified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{artist.name}</h3>
                          <p className="text-sm text-slate-600">{artist.username}</p>
                          <p className="text-sm text-slate-500">{artist.designation}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{artist.rating}</span>
                            <span className="text-sm text-slate-500">({artist.totalReviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4" />
                          <span>{artist.location.city}, {artist.location.state}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{artist.hourlyRate}/hour</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Users className="h-4 w-4" />
                          <span>{artist.followers} followers</span>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-medium text-slate-700 mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {artist.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {artist.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{artist.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Portfolio Preview */}
                        <div>
                          <h4 className="text-sm font-medium text-slate-700 mb-2">Portfolio</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {artist.portfolio.slice(0, 2).map((item, index) => (
                              <div key={index} className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                                {item.type === 'image' ? (
                                  <img 
                                    src={item.url} 
                                    alt="Portfolio item"
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Video className="h-6 w-6 text-slate-400" />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-4 border-t border-slate-200">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-slate-200"
                            onClick={() => setSelectedArtist(artist)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View Profile
                          </Button>
                          {isSubscribed ? (
                            <Button 
                              size="sm" 
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1 border-slate-200"
                              disabled
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Subscribe to Message
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredArtists.length === 0 && (
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardContent className="p-12 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No artists found</h3>
                    <p className="text-slate-500">Try adjusting your search criteria or filters.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Artist Detail Modal */}
        {selectedArtist && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg border border-slate-200 shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedArtist.profileImage} 
                      alt={selectedArtist.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-slate-900 flex items-center gap-2">
                        {selectedArtist.name}
                        {selectedArtist.isVerified && (
                          <CheckCircle className="h-5 w-5 text-blue-500" />
                        )}
                      </CardTitle>
                      <CardDescription>{selectedArtist.designation}</CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedArtist(null)}>
                    <XCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-3">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{selectedArtist.location.city}, {selectedArtist.location.state}, {selectedArtist.location.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-slate-400" />
                        <span>{selectedArtist.hourlyRate}/hour</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span>{selectedArtist.followers} followers, {selectedArtist.connections} connections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>Last active: {selectedArtist.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-3">Rating & Reviews</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold">{selectedArtist.rating}</span>
                      <span className="text-slate-500">({selectedArtist.totalReviews} reviews)</span>
                    </div>
                    <div className="space-y-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-sm w-8">{star}</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <div className="flex-1 bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${star === 5 ? 80 : star === 4 ? 15 : star === 3 ? 5 : 0}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArtist.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArtist.languages.map((language, index) => (
                      <Badge key={index} className="bg-green-100 text-green-700 px-3 py-1">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Portfolio</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedArtist.portfolio.map((item, index) => (
                      <div key={index} className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                        {item.type === 'image' ? (
                          <img 
                            src={item.url} 
                            alt="Portfolio item"
                            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Video className="h-8 w-8 text-slate-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Social Links</h4>
                  <div className="flex gap-4">
                    {Object.entries(selectedArtist.socialLinks).map(([platform, link]) => (
                      <a
                        key={platform}
                        href="#"
                        className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                        <span className="text-sm">{link}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  {isSubscribed ? (
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1 border-slate-200" disabled>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Subscribe to Message
                    </Button>
                  )}
                  <Button variant="outline" className="border-slate-200">
                    <Heart className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
