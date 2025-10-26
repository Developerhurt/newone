import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Eye,
  Search,
  Filter,
  TrendingUp,
  Gift,
  CalendarDays,
  Users,
  Handshake,
  FileText,
  CreditCard,
  Save,
  AlertCircle,
  Shield,
  Camera,
  Image as ImageIcon,
  FileUp
} from "lucide-react"

export default function GuestEditProfilePage() {
  const [hubCoins, setHubCoins] = useState(1500);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [showCompanySearch, setShowCompanySearch] = useState(false);
  const [companySearchResults, setCompanySearchResults] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');

  const [profileData, setProfileData] = useState({
    fullName: "John Smith",
    dateOfBirth: "1992-05-20",
    currentDesignation: "Digital Marketing Manager",
    companyName: "Tech Solutions Inc.",
    email: "john.smith@email.com",
    mobile: "+1 (555) 123-4567",
    location: {
      country: "USA",
      state: "CA",
      city: "Los Angeles"
    },
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" }
    ],
    about: "Passionate professional seeking opportunities in digital marketing and project management. Experienced in social media marketing, content creation, and team collaboration. Always eager to learn and grow in dynamic work environments.",
    skills: ['Digital Marketing', 'Social Media Management', 'Content Creation', 'Project Management', 'Microsoft Office', 'Google Analytics', 'Figma', 'Canva'],
    socialLinks: {
      instagram: "@johnsmith_jobs",
      twitter: "@johnsmith",
      youtube: "John Smith Career",
      linkedin: "John Smith",
      threads: "@johnsmith_threads",
      website: "www.johnsmithcareer.com"
    },
    experience: [
      {
        id: 1,
        company: "Digital Solutions Inc.",
        position: "Marketing Coordinator",
        duration: "2020 - 2023",
        description: "Managed social media campaigns and content creation for various clients",
        location: "Los Angeles, CA",
        industry: "Marketing"
      },
      {
        id: 2,
        company: "Creative Agency Co.",
        position: "Social Media Specialist",
        duration: "2018 - 2020",
        description: "Developed and executed social media strategies for small businesses",
        location: "San Francisco, CA",
        industry: "Creative Services"
      }
    ],
    achievements: [
      { id: 1, title: "Google Analytics Certified", issuer: "Google", image: null },
      { id: 2, title: "Digital Marketing Certificate", issuer: "HubSpot", image: null }
    ],
    isVerified: false,
    govtIdMatch: false
  });

  const [newLanguage, setNewLanguage] = useState({ name: '', level: 'Beginner' });
  const [newSkill, setNewSkill] = useState('');
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    duration: '',
    description: '',
    location: '',
    industry: ''
  });
  const [newAchievement, setNewAchievement] = useState({
    title: '',
    issuer: '',
    image: null
  });

  const handleSocialClick = (platform) => {
    const confirmDeduction = window.confirm(
      `Clicking this ${platform} link will deduct 30 Hub Coins. Your current balance: ${hubCoins} coins. Do you want to continue?`
    );
    
    if (confirmDeduction && hubCoins >= 30) {
      setHubCoins(prev => prev - 30);
      alert(`30 Hub Coins deducted! Opening ${platform} link...`);
    } else if (hubCoins < 30) {
      alert('Insufficient Hub Coins! Please recharge your wallet.');
    }
  };

  const handleVerification = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      if (profileData.fullName && profileData.dateOfBirth) {
        setProfileData(prev => ({ ...prev, isVerified: true, govtIdMatch: true }));
        alert('Profile verified! Your verified badge has been activated.');
      }
    }, 2000);
  };

  const handleMobileUpdate = () => {
    setOtpSent(true);
    alert('OTP sent to your mobile number. Please check your phone.');
  };

  const handleOtpVerify = () => {
    if (otpCode === '1234') { // Simulated OTP
      alert('Mobile number verified successfully!');
      setOtpSent(false);
      setOtpCode('');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleCompanySearch = (query) => {
    if (query.length > 2) {
      setShowCompanySearch(true);
      // Simulate company search results
      setCompanySearchResults([
        { name: "Tech Solutions Inc.", verified: true },
        { name: "Digital Marketing Co.", verified: true },
        { name: "Creative Agency Ltd.", verified: false },
        { name: "Marketing Pro Services", verified: true }
      ]);
    } else {
      setShowCompanySearch(false);
    }
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company.name);
    setProfileData(prev => ({ ...prev, companyName: company.name }));
    setShowCompanySearch(false);
  };

  const addLanguage = () => {
    if (newLanguage.name) {
      setProfileData(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage]
      }));
      setNewLanguage({ name: '', level: 'Beginner' });
    }
  };

  const removeLanguage = (index) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    if (newSkill) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skill) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const addExperience = () => {
    if (newExperience.company && newExperience.position) {
      setProfileData(prev => ({
        ...prev,
        experience: [...prev.experience, { ...newExperience, id: Date.now() }]
      }));
      setNewExperience({
        company: '',
        position: '',
        duration: '',
        description: '',
        location: '',
        industry: ''
      });
    }
  };

  const removeExperience = (id) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const handleAchievementUpload = (event, achievementId) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          achievements: prev.achievements.map(ach => 
            ach.id === achievementId ? { ...ach, image: e.target.result } : ach
          )
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const addAchievement = () => {
    if (newAchievement.title && newAchievement.issuer) {
      setProfileData(prev => ({
        ...prev,
        achievements: [...prev.achievements, { ...newAchievement, id: Date.now() }]
      }));
      setNewAchievement({ title: '', issuer: '', image: null });
    }
  };

  const removeAchievement = (id) => {
    setProfileData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(ach => ach.id !== id)
    }));
  };

  const saveProfile = () => {
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
              <p className="text-sm text-slate-500">Update your job seeker profile</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={saveProfile} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          <div className="flex-1 max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Basic Information */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <User className="h-5 w-5 text-blue-600" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>Update your personal details and verification status</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name *</label>
                      <Input
                        value={profileData.fullName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500">Must match with government ID for verification</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Date of Birth *</label>
                      <Input
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => setProfileData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500">Must match with government ID for verification</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Current Designation *</label>
                      <Input
                        value={profileData.currentDesignation}
                        onChange={(e) => setProfileData(prev => ({ ...prev, currentDesignation: e.target.value }))}
                        placeholder="Enter your current designation"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Company Name</label>
                      <div className="relative">
                        <Input
                          value={selectedCompany || profileData.companyName}
                          onChange={(e) => {
                            setSelectedCompany(e.target.value);
                            handleCompanySearch(e.target.value);
                          }}
                          placeholder="Search or enter company name"
                          className="w-full"
                        />
                        {showCompanySearch && companySearchResults.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                            {companySearchResults.map((company, index) => (
                              <div
                                key={index}
                                onClick={() => handleCompanySelect(company)}
                                className="p-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between"
                              >
                                <span className="text-sm">{company.name}</span>
                                {company.verified && (
                                  <Badge className="bg-green-100 text-green-700 text-xs">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-500">Search for registered companies or enter any company name</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email Address *</label>
                      <Input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Mobile Number *</label>
                      <div className="flex gap-2">
                        <Input
                          value={profileData.mobile}
                          onChange={(e) => setProfileData(prev => ({ ...prev, mobile: e.target.value }))}
                          placeholder="Enter mobile number"
                          className="flex-1"
                        />
                        <Button
                          variant="outline"
                          onClick={handleMobileUpdate}
                          disabled={otpSent}
                          className="whitespace-nowrap"
                        >
                          {otpSent ? 'Sent' : 'Update'}
                        </Button>
                      </div>
                      {otpSent && (
                        <div className="flex gap-2">
                          <Input
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            placeholder="Enter OTP"
                            className="flex-1"
                          />
                          <Button onClick={handleOtpVerify} size="sm">
                            Verify
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Location</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Country</label>
                        <select
                          value={profileData.location.country}
                          onChange={(e) => setProfileData(prev => ({
                            ...prev,
                            location: { ...prev.location, country: e.target.value }
                          }))}
                          className="w-full p-2 border border-slate-300 rounded-md"
                        >
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">UK</option>
                          <option value="India">India</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">State</label>
                        <select
                          value={profileData.location.state}
                          onChange={(e) => setProfileData(prev => ({
                            ...prev,
                            location: { ...prev.location, state: e.target.value }
                          }))}
                          className="w-full p-2 border border-slate-300 rounded-md"
                        >
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">City</label>
                        <Input
                          value={profileData.location.city}
                          onChange={(e) => setProfileData(prev => ({
                            ...prev,
                            location: { ...prev.location, city: e.target.value }
                          }))}
                          placeholder="Enter city"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Verification Status */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Verification Status</h4>
                          <p className="text-sm text-slate-600">
                            {profileData.isVerified ? 'Profile verified' : 'Complete verification to get verified badge'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {profileData.isVerified ? (
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        ) : (
                          <Button
                            onClick={handleVerification}
                            disabled={isVerifying}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            {isVerifying ? 'Verifying...' : 'Verify Profile'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Languages className="h-5 w-5 text-green-600" />
                    Languages
                  </CardTitle>
                  <CardDescription>Add languages you know</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profileData.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1 flex items-center gap-2">
                        {lang.name} ({lang.level})
                        <button
                          onClick={() => removeLanguage(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      value={newLanguage.name}
                      onChange={(e) => setNewLanguage(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Language name"
                      className="flex-1"
                    />
                    <select
                      value={newLanguage.level}
                      onChange={(e) => setNewLanguage(prev => ({ ...prev, level: e.target.value }))}
                      className="p-2 border border-slate-300 rounded-md"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Native">Native</option>
                    </select>
                    <Button onClick={addLanguage} className="bg-green-600 hover:bg-green-700 text-white">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Globe className="h-5 w-5 text-purple-600" />
                    About
                  </CardTitle>
                  <CardDescription>Tell others about yourself</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <textarea
                    value={profileData.about}
                    onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))}
                    placeholder="Write about yourself, your experience, and what you're looking for..."
                    className="w-full h-32 p-3 border border-slate-300 rounded-md resize-none"
                  />
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Award className="h-5 w-5 text-orange-600" />
                    Skills
                  </CardTitle>
                  <CardDescription>Add your professional skills</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profileData.skills.map((skill) => (
                      <Badge key={skill} className="bg-orange-100 text-orange-700 px-3 py-1 flex items-center gap-2">
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill"
                      className="flex-1"
                    />
                    <Button onClick={addSkill} className="bg-orange-600 hover:bg-orange-700 text-white">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Globe className="h-5 w-5 text-pink-600" />
                    Social Media Links
                    <Badge className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5">
                      <Coins className="h-3 w-3 mr-1" />
                      30 coins per click
                    </Badge>
                  </CardTitle>
                  <CardDescription>Add your social media profiles</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Instagram className="h-4 w-4 text-pink-500" />
                        Instagram
                      </label>
                      <Input
                        value={profileData.socialLinks.instagram}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, instagram: e.target.value }
                        }))}
                        placeholder="@username"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Twitter className="h-4 w-4 text-blue-400" />
                        Twitter/X
                      </label>
                      <Input
                        value={profileData.socialLinks.twitter}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, twitter: e.target.value }
                        }))}
                        placeholder="@username"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Youtube className="h-4 w-4 text-red-500" />
                        YouTube
                      </label>
                      <Input
                        value={profileData.socialLinks.youtube}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, youtube: e.target.value }
                        }))}
                        placeholder="Channel name"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-blue-600" />
                        LinkedIn
                      </label>
                      <Input
                        value={profileData.socialLinks.linkedin}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, linkedin: e.target.value }
                        }))}
                        placeholder="Profile name"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <X className="h-4 w-4 text-purple-500" />
                        Threads
                      </label>
                      <Input
                        value={profileData.socialLinks.threads}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, threads: e.target.value }
                        }))}
                        placeholder="@username"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-slate-600" />
                        Website
                      </label>
                      <Input
                        value={profileData.socialLinks.website}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, website: e.target.value }
                        }))}
                        placeholder="www.example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Hub Coins Deduction</h4>
                        <p className="text-sm text-yellow-700">
                          Clicking on any social media link will deduct 30 Hub Coins from your wallet. 
                          Make sure you have sufficient balance before sharing links.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience Details */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Briefcase className="h-5 w-5 text-indigo-600" />
                    Experience Details
                  </CardTitle>
                  <CardDescription>Add your work experience</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {profileData.experience.map((exp) => (
                    <div key={exp.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{exp.position}</h3>
                          <p className="text-slate-600 font-medium">{exp.company}</p>
                          <p className="text-slate-500 text-sm">{exp.duration}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-slate-700 mb-2">{exp.description}</p>
                      <div className="flex gap-4 text-sm text-slate-600">
                        <span><strong>Location:</strong> {exp.location}</span>
                        <span><strong>Industry:</strong> {exp.industry}</span>
                      </div>
                    </div>
                  ))}

                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Add New Experience</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={newExperience.company}
                        onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Company name"
                      />
                      <Input
                        value={newExperience.position}
                        onChange={(e) => setNewExperience(prev => ({ ...prev, position: e.target.value }))}
                        placeholder="Position/Job title"
                      />
                      <Input
                        value={newExperience.duration}
                        onChange={(e) => setNewExperience(prev => ({ ...prev, duration: e.target.value }))}
                        placeholder="Duration (e.g., 2020 - 2023)"
                      />
                      <Input
                        value={newExperience.location}
                        onChange={(e) => setNewExperience(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="Location"
                      />
                      <Input
                        value={newExperience.industry}
                        onChange={(e) => setNewExperience(prev => ({ ...prev, industry: e.target.value }))}
                        placeholder="Industry"
                        className="md:col-span-2"
                      />
                      <textarea
                        value={newExperience.description}
                        onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Job description and responsibilities"
                        className="md:col-span-2 h-20 p-2 border border-slate-300 rounded-md resize-none"
                      />
                    </div>
                    <Button onClick={addExperience} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements and Certifications */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Award className="h-5 w-5 text-yellow-600" />
                    Achievements and Certifications
                  </CardTitle>
                  <CardDescription>Upload your certificates and achievements (Max 5MB per image)</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {profileData.achievements.map((achievement) => (
                    <div key={achievement.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{achievement.title}</h3>
                          <p className="text-slate-600">{achievement.issuer}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeAchievement(achievement.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {achievement.image ? (
                        <div className="mb-4">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-32 h-32 object-cover rounded-lg border border-slate-200"
                          />
                        </div>
                      ) : (
                        <div className="mb-4">
                          <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                            <FileUp className="h-8 w-8 text-slate-400" />
                            <span className="text-xs text-slate-500 mt-2">Upload Image</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleAchievementUpload(e, achievement.id)}
                              className="hidden"
                            />
                          </label>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Add New Achievement</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={newAchievement.title}
                        onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Achievement/Certification title"
                      />
                      <Input
                        value={newAchievement.issuer}
                        onChange={(e) => setNewAchievement(prev => ({ ...prev, issuer: e.target.value }))}
                        placeholder="Issuing organization"
                      />
                    </div>
                    <Button onClick={addAchievement} className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Achievement
                    </Button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">File Upload Guidelines</h4>
                        <p className="text-sm text-blue-700">
                          • Maximum file size: 5MB per image<br/>
                          • Supported formats: JPG, PNG, PDF<br/>
                          • Upload clear, readable images of your certificates
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
