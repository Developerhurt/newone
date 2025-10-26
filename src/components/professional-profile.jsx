import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  MapPin, 
  Calendar, 
  Globe, 
  Download, 
  MessageCircle, 
  Heart, 
  Star, 
  Award, 
  Briefcase, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Upload,
  X,
  Plus,
  ExternalLink,
  Share2,
  Bell,
  Mail,
  Phone,
  Building,
  Languages,
  CheckCircle,
  Coins,
  Edit3,
  Trash2,
  Github,
  Facebook,
  Copy,
  Eye
} from "lucide-react";

export default function ProfessionalProfile({ isOwnProfile = false }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [achievements, setAchievements] = useState([
    { id: 1, title: "Best Digital Artist 2023", issuer: "Creative Awards", image: null },
    { id: 2, title: "Adobe Certified Expert", issuer: "Adobe", image: null }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Eva Murphy",
    designation: "Senior Digital Artist",
    about: "Passionate digital artist with over 5 years of experience in creating stunning visual content. Specialized in digital illustration, concept art, and brand design. Always eager to collaborate and bring creative visions to life.",
    skills: ['Digital Illustration', 'Concept Art', 'Brand Design', 'UI/UX Design', 'Adobe Creative Suite', 'Procreate', 'Figma', 'Blender'],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" },
      { name: "Japanese", level: "Basic" }
    ],
    location: {
      country: "USA",
      state: "NY",
      city: "New York"
    },
    dateOfBirth: "1990-01-15",
    gender: "Female",
    socialLinks: {
      instagram: "@evamurphy_art",
      twitter: "@evamurphy",
      youtube: "Eva Murphy Art",
      linkedin: "Eva Murphy"
    }
  });

  const [experience] = useState([
    {
      id: 1,
      company: "Creative Studio Inc.",
      position: "Senior Digital Artist",
      duration: "2021 - Present",
      description: "Leading digital art projects and mentoring junior artists"
    },
    {
      id: 2,
      company: "Design Agency Co.",
      position: "Digital Artist",
      duration: "2019 - 2021",
      description: "Created visual content for various clients and brands"
    }
  ]);

  const [reviews] = useState([
    {
      id: 1,
      reviewer: "Sarah Johnson",
      rating: 5,
      comment: "Exceptional work! Very professional and creative.",
      date: "2024-01-15"
    },
    {
      id: 2,
      reviewer: "Mike Chen",
      rating: 5,
      comment: "Amazing attention to detail and great communication.",
      date: "2024-01-10"
    }
  ]);

  const handleAchievementUpload = (achievementId, file) => {
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      const reader = new FileReader();
      reader.onload = (e) => {
        setAchievements(prev => 
          prev.map(ach => 
            ach.id === achievementId 
              ? { ...ach, image: e.target.result }
              : ach
          )
        );
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const handleRemoveAchievement = (achievementId) => {
    setAchievements(prev => prev.filter(ach => ach.id !== achievementId));
  };

  const addNewAchievement = () => {
    const newId = Math.max(...achievements.map(a => a.id)) + 1;
    setAchievements(prev => [...prev, { 
      id: newId, 
      title: "", 
      issuer: "", 
      image: null 
    }]);
  };

  const handleSaveProfile = () => {
    // Here you would typically save to a backend
    console.log('Saving profile data:', profileData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset to original data if needed
  };

  return (
    <div className="space-y-8">
      {/* Profile Header - Posts Page Style */}
      <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Profile Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-12 w-12 text-white" />
                </div>
                
                {/* Basic Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-slate-900">{profileData.fullName}</h1>
                    <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-3">{profileData.designation}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>Born: {new Date(profileData.dateOfBirth).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-slate-400" />
                      <span>{profileData.gender}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>{profileData.location.city}, {profileData.location.state}, {profileData.location.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-slate-400" />
                      <span>Creative Studio Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  About
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {profileData.about}
                </p>
              </div>
              
              {/* Skills */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.slice(0, 6).map((skill) => (
                    <Badge key={skill} className="bg-blue-100 text-blue-700 px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                  {profileData.skills.length > 6 && (
                    <Badge className="bg-slate-100 text-slate-600 px-3 py-1">
                      +{profileData.skills.length - 6} more
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Languages */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Languages className="h-5 w-5 text-green-600" />
                  Languages Known
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {lang.name} ({lang.level})
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Section - Actions & Social */}
            <div className="lg:w-80 space-y-6">
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="w-full border-slate-200">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button 
                  variant={isFollowing ? "secondary" : "default"}
                  onClick={() => setIsFollowing(!isFollowing)}
                  className="w-full"
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-pink-600" />
                  Social Links
                </h4>
                <div className="space-y-2">
                  {profileData.socialLinks.instagram && (
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                        <Instagram className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{profileData.socialLinks.instagram}</span>
                    </a>
                  )}
                  {profileData.socialLinks.twitter && (
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <Twitter className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{profileData.socialLinks.twitter}</span>
                    </a>
                  )}
                  {profileData.socialLinks.youtube && (
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Youtube className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{profileData.socialLinks.youtube}</span>
                    </a>
                  )}
                  {profileData.socialLinks.linkedin && (
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <Linkedin className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{profileData.socialLinks.linkedin}</span>
                    </a>
                  )}
                </div>
              </div>
              
              
              {/* Profile Link */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Copy className="h-4 w-4 text-blue-600" />
                  Profile Link
                </h4>
                <div className="flex items-center gap-2">
                  <Input 
                    value="artisthub.com/profile/evamurphy" 
                    readOnly 
                    className="text-xs bg-white"
                  />
                  <Button variant="outline" size="sm">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="experience" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 bg-slate-100">
          <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Experience</TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Achievements</TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Ratings & Reviews</TabsTrigger>
        </TabsList>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-8">
          <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Briefcase className="h-5 w-5 text-indigo-600" />
                Work Experience
              </CardTitle>
              <CardDescription>Professional journey and career highlights</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-slate-600 font-medium">{exp.company}</p>
                      <p className="text-slate-500 text-sm">{exp.duration}</p>
                    </div>
                    <Briefcase className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-slate-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-8">
          <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-slate-100">
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Award className="h-5 w-5 text-amber-600" />
                Achievements & Certifications
              </CardTitle>
              <CardDescription>Professional accomplishments and certifications</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="border rounded-lg p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border">
                      {achievement.image ? (
                        <img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-center">
                          <Award className="h-8 w-8 text-slate-400 mx-auto mb-1" />
                          <p className="text-xs text-slate-500">No Image</p>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Certification Title</label>
                          <div className="p-3 bg-white border border-slate-200 rounded-lg font-medium text-slate-900">
                            {achievement.title}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Issuing Organization</label>
                          <div className="p-3 bg-white border border-slate-200 rounded-lg text-slate-600">
                            {achievement.issuer}
                          </div>
                        </div>
                      </div>
                      
                      {achievement.image && (
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(achievement.image, '_blank')}
                            className="border-green-200 text-green-600 hover:bg-green-50"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Certificate
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {achievements.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  <Award className="h-12 w-12 mx-auto mb-3 text-slate-300" />
                  <p>No certifications available</p>
                  <p className="text-sm">This artist hasn't uploaded any certifications yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews" className="space-y-8">
          <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-slate-100">
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Star className="h-5 w-5 text-yellow-600" />
                Ratings & Reviews
              </CardTitle>
              <CardDescription>What others say about working with this artist</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">4.9</div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">Based on 24 reviews</div>
                </div>
                <Separator orientation="vertical" className="h-20" />
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5,4,3,2,1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-8">{rating}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <div className="flex-1 bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full" 
                            style={{ width: `${rating === 5 ? 90 : rating === 4 ? 10 : 0}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-500 w-8">
                          {rating === 5 ? 22 : rating === 4 ? 2 : 0}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{review.reviewer}</span>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${
                                star <= review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-slate-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">{review.date}</span>
                    </div>
                    <p className="text-slate-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
