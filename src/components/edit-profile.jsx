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
  Mail, 
  Phone, 
  Building2, 
  Award, 
  Briefcase, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Upload,
  X,
  Plus,
  Search,
  CheckCircle,
  AlertCircle,
  Coins,
  Shield,
  FileText,
  Save,
  ArrowLeft
} from "lucide-react";

export default function EditProfile() {
  const [profileData, setProfileData] = useState({
    fullName: "Eva Murphy",
    dateOfBirth: "1990-01-15",
    currentDesignation: "Senior Digital Artist",
    companyName: "Creative Studio Inc.",
    email: "eva.murphy@example.com",
    mobileNumber: "+1 (555) 123-4567",
    location: {
      country: "United States",
      state: "New York",
      city: "New York"
    },
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" },
      { name: "Japanese", level: "Basic" }
    ],
    about: "Passionate digital artist with over 5 years of experience in creating stunning visual content. Specialized in digital illustration, concept art, and brand design. Always eager to collaborate and bring creative visions to life.",
    skills: ['Digital Illustration', 'Concept Art', 'Brand Design', 'UI/UX Design', 'Adobe Creative Suite', 'Procreate', 'Figma', 'Blender'],
    socialLinks: {
      instagram: "@evamurphy_art",
      twitter: "@evamurphy",
      youtube: "Eva Murphy Art",
      linkedin: "Eva Murphy"
    },
    experience: [
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
    ],
    achievements: [
      { id: 1, title: "Best Digital Artist 2023", issuer: "Creative Awards", image: null },
      { id: 2, title: "Adobe Certified Expert", issuer: "Adobe", image: null }
    ]
  });

  const [verificationStatus, setVerificationStatus] = useState({
    nameVerified: false,
    dobVerified: false,
    companyVerified: false
  });

  const [hubCoins, setHubCoins] = useState(1500);
  const [isSaving, setIsSaving] = useState(false);
  const [companySearchResults, setCompanySearchResults] = useState([]);
  const [showCompanySearch, setShowCompanySearch] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parent, field, value) => {
    setProfileData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleLanguageChange = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === index ? { ...lang, [field]: value } : lang
      )
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

  const handleSkillsChange = (value) => {
    setProfileData(prev => ({
      ...prev,
      skills: value.split(',').map(s => s.trim()).filter(s => s)
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

  const handleExperienceChange = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addExperience = () => {
    setProfileData(prev => ({
      ...prev,
      experience: [...prev.experience, { 
        id: Date.now(), 
        company: "", 
        position: "", 
        duration: "", 
        description: "" 
      }]
    }));
  };

  const removeExperience = (id) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const handleAchievementUpload = (achievementId, file) => {
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          achievements: prev.achievements.map(ach => 
            ach.id === achievementId 
              ? { ...ach, image: e.target.result }
              : ach
          )
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const addAchievement = () => {
    setProfileData(prev => ({
      ...prev,
      achievements: [...prev.achievements, { 
        id: Date.now(), 
        title: "", 
        issuer: "", 
        image: null 
      }]
    }));
  };

  const removeAchievement = (id) => {
    setProfileData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(ach => ach.id !== id)
    }));
  };

  const searchCompany = async (query) => {
    if (query.length < 2) {
      setCompanySearchResults([]);
      return;
    }
    
    // Simulate API call
    const mockResults = [
      { name: "Creative Studio Inc.", verified: true },
      { name: "Design Agency Co.", verified: true },
      { name: "Art Solutions LLC", verified: false },
      { name: "Digital Creations", verified: true }
    ].filter(company => 
      company.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setCompanySearchResults(mockResults);
    setShowCompanySearch(true);
  };

  const selectCompany = (company) => {
    setProfileData(prev => ({
      ...prev,
      companyName: company.name
    }));
    setVerificationStatus(prev => ({
      ...prev,
      companyVerified: company.verified
    }));
    setShowCompanySearch(false);
  };

  const sendOTP = () => {
    // Simulate OTP sending
    setOtpSent(true);
    alert('OTP sent to your mobile number');
  };

  const verifyOTP = () => {
    if (otpCode === '123456') { // Mock verification
      alert('Mobile number verified successfully!');
      setOtpSent(false);
      setOtpCode('');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleSocialMediaClick = (platform) => {
    if (hubCoins >= 30) {
      setHubCoins(prev => prev - 30);
      alert(`30 Hub Coins deducted for accessing ${platform}. Remaining coins: ${hubCoins - 30}`);
    } else {
      alert('Insufficient Hub Coins. Please recharge your wallet.');
    }
  };

  const saveProfile = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSaving(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Edit Profile</h1>
            <p className="text-slate-600">Update your professional information</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg">
            <Coins className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">{hubCoins} Hub Coins</span>
          </div>
          <Button onClick={saveProfile} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Your personal details and verification status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    Full Name *
                    {verificationStatus.nameVerified ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                  </label>
                  <Input
                    value={profileData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                  />
                  {!verificationStatus.nameVerified && (
                    <p className="text-xs text-orange-600">Must match government ID for verification</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    Date of Birth *
                    {verificationStatus.dobVerified ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                  </label>
                  <Input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                  {!verificationStatus.dobVerified && (
                    <p className="text-xs text-orange-600">Must match government ID for verification</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mobile Number *</label>
                  <div className="flex gap-2">
                    <Input
                      value={profileData.mobileNumber}
                      onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                      placeholder="Enter mobile number"
                    />
                    {!otpSent ? (
                      <Button variant="outline" onClick={sendOTP}>
                        Send OTP
                      </Button>
                    ) : (
                      <div className="flex gap-1">
                        <Input
                          placeholder="Enter OTP"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          className="w-20"
                        />
                        <Button variant="outline" onClick={verifyOTP}>
                          Verify
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <Input
                    value={profileData.location.country}
                    onChange={(e) => handleNestedInputChange('location', 'country', e.target.value)}
                    placeholder="Enter country"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">State</label>
                  <Input
                    value={profileData.location.state}
                    onChange={(e) => handleNestedInputChange('location', 'state', e.target.value)}
                    placeholder="Enter state"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <Input
                    value={profileData.location.city}
                    onChange={(e) => handleNestedInputChange('location', 'city', e.target.value)}
                    placeholder="Enter city"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
              <CardDescription>Add languages you speak</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.languages.map((lang, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Language name"
                    value={lang.name}
                    onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                    className="flex-1"
                  />
                  <select
                    value={lang.level}
                    onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                    className="px-3 py-2 border border-slate-200 rounded-md"
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
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={addLanguage}>
                <Plus className="h-4 w-4 mr-2" />
                Add Language
              </Button>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>Tell others about yourself</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                value={profileData.about}
                onChange={(e) => handleInputChange('about', e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about yourself..."
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Professional Information Tab */}
        <TabsContent value="professional" className="space-y-6">
          {/* Current Designation & Company */}
          <Card>
            <CardHeader>
              <CardTitle>Current Designation & Company</CardTitle>
              <CardDescription>Your current professional role</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Designation *</label>
                <Input
                  value={profileData.currentDesignation}
                  onChange={(e) => handleInputChange('currentDesignation', e.target.value)}
                  placeholder="e.g., Senior Digital Artist"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  Company Name *
                  {verificationStatus.companyVerified ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                  )}
                </label>
                <div className="relative">
                  <Input
                    value={profileData.companyName}
                    onChange={(e) => {
                      handleInputChange('companyName', e.target.value);
                      searchCompany(e.target.value);
                    }}
                    placeholder="Search for your company"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  
                  {showCompanySearch && companySearchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-lg z-10 mt-1">
                      {companySearchResults.map((company, index) => (
                        <div
                          key={index}
                          className="p-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between"
                          onClick={() => selectCompany(company)}
                        >
                          <span>{company.name}</span>
                          {company.verified ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="outline">Unverified</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {!verificationStatus.companyVerified && (
                  <p className="text-xs text-orange-600">Company will be saved even if not registered</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your professional skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Add skills separated by commas"
                  value={profileData.skills.join(', ')}
                  onChange={(e) => handleSkillsChange(e.target.value)}
                />
                <p className="text-xs text-slate-500">Separate multiple skills with commas</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Connect your social media profiles (30 Hub Coins per click)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Instagram</label>
                  <div className="flex gap-2">
                    <Input
                      value={profileData.socialLinks.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                      placeholder="@username"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMediaClick('Instagram')}
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Twitter</label>
                  <div className="flex gap-2">
                    <Input
                      value={profileData.socialLinks.twitter}
                      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                      placeholder="@username"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMediaClick('Twitter')}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">YouTube</label>
                  <div className="flex gap-2">
                    <Input
                      value={profileData.socialLinks.youtube}
                      onChange={(e) => handleSocialLinkChange('youtube', e.target.value)}
                      placeholder="Channel name"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMediaClick('YouTube')}
                    >
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">LinkedIn</label>
                  <div className="flex gap-2">
                    <Input
                      value={profileData.socialLinks.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                      placeholder="Full name"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialMediaClick('LinkedIn')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>Add your professional work experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {profileData.experience.map((exp, index) => (
                <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Experience {index + 1}</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeExperience(exp.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        placeholder="Company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Position</label>
                      <Input
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                        placeholder="Job title"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Duration</label>
                      <Input
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                        placeholder="e.g., 2021 - Present"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      className="w-full p-3 border border-slate-200 rounded-lg resize-none h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your role and responsibilities"
                    />
                  </div>
                </div>
              ))}
              
              <Button variant="outline" onClick={addExperience}>
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Certifications</CardTitle>
              <CardDescription>Upload your achievements and certifications (Max 5MB per photo)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.achievements.map((achievement) => (
                <div key={achievement.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center">
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input 
                          placeholder="Achievement title"
                          value={achievement.title}
                          onChange={(e) => setProfileData(prev => ({
                            ...prev,
                            achievements: prev.achievements.map(ach => 
                              ach.id === achievement.id 
                                ? { ...ach, title: e.target.value }
                                : ach
                            )
                          }))}
                        />
                        <Input 
                          placeholder="Issuing organization"
                          value={achievement.issuer}
                          onChange={(e) => setProfileData(prev => ({
                            ...prev,
                            achievements: prev.achievements.map(ach => 
                              ach.id === achievement.id 
                                ? { ...ach, issuer: e.target.value }
                                : ach
                            )
                          }))}
                        />
                      </div>
                      <div className="flex gap-2">
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleAchievementUpload(achievement.id, e.target.files[0])}
                            className="hidden"
                          />
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Photo
                          </Button>
                        </label>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeAchievement(achievement.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" onClick={addAchievement}>
                <Plus className="h-4 w-4 mr-2" />
                Add Achievement
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}







