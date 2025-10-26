import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar,
  Building,
  Languages,
  Award,
  Upload,
  Plus,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Facebook,
  CheckCircle,
  AlertCircle,
  Coins,
  Trash2,
  Edit3,
  Save,
  Eye
} from "lucide-react"

export default function ArtistEditProfilePage() {
  const [profileData, setProfileData] = useState({
    fullName: "Eva Murphy",
    dateOfBirth: "1990-01-15",
    about: "Passionate digital artist with over 5 years of experience in creating stunning visual content. Specialized in digital illustration, concept art, and brand design.",
    skills: ['Digital Illustration', 'Concept Art', 'Brand Design', 'UI/UX Design', 'Adobe Creative Suite', 'Procreate'],
    designation: "Senior Digital Artist",
    companyName: "Creative Studio Inc.",
    email: "eva.murphy@example.com",
    mobile: "+1 (555) 123-4567",
    location: {
      country: "United States",
      state: "New York",
      city: "New York"
    },
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" }
    ],
    socialLinks: {
      instagram: "@evamurphy_art",
      twitter: "@evamurphy",
      linkedin: "linkedin.com/in/evamurphy",
      youtube: "youtube.com/@evamurphyart"
    },
    experience: [
      {
        id: 1,
        company: "Creative Studio Inc.",
        position: "Senior Digital Artist",
        duration: "2021 - Present",
        description: "Leading digital art projects and mentoring junior artists"
      }
    ],
    achievements: [
      {
        id: 1,
        title: "Adobe Certified Expert",
        issuer: "Adobe",
        image: null
      }
    ]
  });

  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({
    name: true,
    dob: true,
    email: true,
    mobile: false
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLocationChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value
      }
    }));
  };

  const handleSocialLinkChange = (platform, value) => {
    setProfileData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  const addLanguage = () => {
    setProfileData(prev => ({
      ...prev,
      languages: [...prev.languages, { name: "", level: "Basic" }]
    }));
  };

  const removeLanguage = (index) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const updateLanguage = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const addSkill = () => {
    const newSkill = prompt("Enter new skill:");
    if (newSkill) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      company: "",
      position: "",
      duration: "",
      description: ""
    };
    setProfileData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const updateExperience = (id, field, value) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const handleAchievementUpload = (id, file) => {
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          achievements: prev.achievements.map(ach => 
            ach.id === id ? { ...ach, image: e.target.result } : ach
          )
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const addAchievement = () => {
    const newAchievement = {
      id: Date.now(),
      title: "",
      issuer: "",
      image: null
    };
    setProfileData(prev => ({
      ...prev,
      achievements: [...prev.achievements, newAchievement]
    }));
  };

  const removeAchievement = (id) => {
    setProfileData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(ach => ach.id !== id)
    }));
  };

  const handleSocialClick = (platform) => {
    alert(`This will deduct 30 Hub Coins from your wallet. Continue?`);
  };

  const handleSave = () => {
    console.log('Saving profile data:', profileData);
    // Here you would typically save to a backend
    alert('Profile saved successfully!');
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
              <h1 className="text-xl font-semibold text-slate-900">Edit Profile</h1>
              <p className="text-sm text-slate-500">Update your professional information</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-8">
            
            {/* Basic Information */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <User className="h-5 w-5 text-blue-600" />
                  Basic Information
                </CardTitle>
                <CardDescription>Your personal details and verification status</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      Full Name
                      {verificationStatus.name && (
                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </label>
                    <Input 
                      placeholder="Enter your full name" 
                      value={profileData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <p className="text-xs text-slate-500">Must match your government ID for verification</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      Date of Birth
                      {verificationStatus.dob && (
                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </label>
                    <Input 
                      type="date" 
                      value={profileData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <p className="text-xs text-slate-500">Must match your government ID for verification</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Current Designation</label>
                    <Input 
                      placeholder="e.g., Senior Digital Artist" 
                      value={profileData.designation}
                      onChange={(e) => handleInputChange('designation', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input 
                        placeholder="Search company name" 
                        value={profileData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <p className="text-xs text-slate-500">Search for verified companies or add your own</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      Email Address
                      {verificationStatus.email && (
                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      Mobile Number
                      {verificationStatus.mobile && (
                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        value={profileData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Verify with OTP
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Languages */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Location & Languages
                </CardTitle>
                <CardDescription>Where you're based and languages you speak</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Country</label>
                    <select 
                      value={profileData.location.country}
                      onChange={(e) => handleLocationChange('country', e.target.value)}
                      className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">State</label>
                    <select 
                      value={profileData.location.state}
                      onChange={(e) => handleLocationChange('state', e.target.value)}
                      className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="New York">New York</option>
                      <option value="California">California</option>
                      <option value="Texas">Texas</option>
                      <option value="Florida">Florida</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">City</label>
                    <Input 
                      placeholder="Enter city name" 
                      value={profileData.location.city}
                      onChange={(e) => handleLocationChange('city', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2 mb-4">
                    <Languages className="h-4 w-4" />
                    Languages
                  </label>
                  <div className="space-y-3">
                    {profileData.languages.map((lang, index) => (
                      <div key={index} className="flex gap-2">
                        <Input 
                          placeholder="Language name"
                          value={lang.name}
                          onChange={(e) => updateLanguage(index, 'name', e.target.value)}
                          className="flex-1"
                        />
                        <select 
                          value={lang.level}
                          onChange={(e) => updateLanguage(index, 'level', e.target.value)}
                          className="w-32 p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Native">Native</option>
                        </select>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeLanguage(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={addLanguage}>
                      <Plus className="h-3 w-3 mr-1" />
                      Add Language
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About & Skills */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Globe className="h-5 w-5 text-purple-600" />
                  About & Skills
                </CardTitle>
                <CardDescription>Tell others about yourself and your expertise</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">About</label>
                    <textarea 
                      placeholder="Tell us about yourself, your experience, and what makes you unique..."
                      value={profileData.about}
                      onChange={(e) => handleInputChange('about', e.target.value)}
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill) => (
                        <Badge key={skill} className="bg-blue-100 text-blue-700 px-3 py-1">
                          {skill}
                          <X 
                            className="h-3 w-3 ml-1 cursor-pointer" 
                            onClick={() => removeSkill(skill)}
                          />
                        </Badge>
                      ))}
                      <Button variant="outline" size="sm" onClick={addSkill}>
                        <Plus className="h-3 w-3 mr-1" />
                        Add Skill
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Globe className="h-5 w-5 text-pink-600" />
                  Social Media Links
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Connect your social profiles
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5">
                    <Coins className="h-3 w-3 mr-1" />
                    30 coins per click
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Instagram className="h-4 w-4 text-pink-500" />
                      Instagram
                    </label>
                    <Input 
                      placeholder="@yourusername" 
                      value={profileData.socialLinks.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-blue-500" />
                      Twitter
                    </label>
                    <Input 
                      placeholder="@yourusername" 
                      value={profileData.socialLinks.twitter}
                      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                      LinkedIn
                    </label>
                    <Input 
                      placeholder="linkedin.com/in/yourprofile" 
                      value={profileData.socialLinks.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-red-500" />
                      YouTube
                    </label>
                    <Input 
                      placeholder="youtube.com/@yourchannel" 
                      value={profileData.socialLinks.youtube}
                      onChange={(e) => handleSocialLinkChange('youtube', e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Details */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Building className="h-5 w-5 text-indigo-600" />
                  Experience Details
                </CardTitle>
                <CardDescription>Your professional work experience</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {profileData.experience.map((exp) => (
                    <div key={exp.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Position</label>
                          <Input 
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                            placeholder="e.g., Senior Digital Artist"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Company</label>
                          <Input 
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            placeholder="e.g., Creative Studio Inc."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Duration</label>
                          <Input 
                            value={exp.duration}
                            onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                            placeholder="e.g., 2021 - Present"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Description</label>
                          <textarea 
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            placeholder="Describe your role and achievements..."
                            className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full border-dashed border-slate-300 text-slate-600 hover:text-slate-700" onClick={addExperience}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements & Certifications */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Award className="h-5 w-5 text-amber-600" />
                  Achievements & Certifications
                </CardTitle>
                <CardDescription>Upload your certificates and achievements (Max 5MB per file)</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {profileData.achievements.map((achievement) => (
                    <div key={achievement.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center">
                          {achievement.image ? (
                            <img 
                              src={achievement.image} 
                              alt={achievement.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <Award className="h-8 w-8 text-slate-400" />
                          )}
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="grid gap-3 md:grid-cols-2">
                            <div>
                              <label className="text-sm font-medium text-slate-700 mb-1 block">Certification Title</label>
                              <Input 
                                value={achievement.title}
                                onChange={(e) => setProfileData(prev => ({
                                  ...prev,
                                  achievements: prev.achievements.map(ach => 
                                    ach.id === achievement.id ? { ...ach, title: e.target.value } : ach
                                  )
                                }))}
                                placeholder="e.g., Adobe Certified Expert"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-slate-700 mb-1 block">Issuing Organization</label>
                              <Input 
                                value={achievement.issuer}
                                onChange={(e) => setProfileData(prev => ({
                                  ...prev,
                                  achievements: prev.achievements.map(ach => 
                                    ach.id === achievement.id ? { ...ach, issuer: e.target.value } : ach
                                  )
                                }))}
                                placeholder="e.g., Adobe"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleAchievementUpload(achievement.id, e.target.files[0])}
                              className="hidden"
                              id={`upload-${achievement.id}`}
                            />
                            <label 
                              htmlFor={`upload-${achievement.id}`}
                              className="px-3 py-2 text-sm border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50"
                            >
                              <Upload className="h-4 w-4 mr-1 inline" />
                              Upload Image
                            </label>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => removeAchievement(achievement.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full border-dashed border-slate-300 text-slate-600 hover:text-slate-700" onClick={addAchievement}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Achievement
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-8">
              <Button variant="outline" className="border-slate-200">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
