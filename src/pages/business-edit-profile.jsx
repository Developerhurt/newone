import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User, Mail, Phone, MapPin, Globe, Calendar, Building, Languages, Award, Upload, Plus, X,
  Instagram, Twitter, Linkedin, Youtube, Github, Facebook, CheckCircle, AlertCircle, Coins, Trash2, Edit3,
  FileText, Briefcase, DollarSign, Users, GraduationCap, Factory, Store, Heart, Monitor
} from "lucide-react";

export default function BusinessEditProfilePage() {
  const [profileData, setProfileData] = useState({
    companyName: "Creative Studio Inc.",
    businessEmail: "contact@creativestudio.com",
    businessPhone: "+1 (555) 123-4567",
    industry: "IT Industry",
    category: "Digital Services",
    foundedDate: "2018-03-15",
    companyType: "Private Limited",
    location: {
      country: "United States",
      state: "New York",
      city: "New York"
    },
    address: "123 Business Ave, New York, NY 10001",
    employeeRange: "50-100",
    about: "We are a leading digital creative agency specializing in innovative design solutions, digital marketing, and cutting-edge technology services.",
    services: ["Digital Marketing", "Web Development", "UI/UX Design", "Brand Identity"],
    socialLinks: {
      instagram: "@creativestudio_inc",
      twitter: "@creativestudio",
      youtube: "Creative Studio Official",
      linkedin: "Creative Studio Inc.",
      website: "www.creativestudio.com",
      threads: "@creativestudio_threads",
      x: "@creativestudio_x"
    },
    ownerDetails: {
      firstName: "Sarah",
      lastName: "Johnson",
      gender: "Female",
      about: "Passionate entrepreneur with 10+ years in digital marketing and creative services.",
      industry: "IT Industry",
      personalMobile: "+1 (555) 987-6543",
      personalEmail: "sarah.johnson@creativestudio.com",
      category: "Digital Services",
      dateOfBirth: "1985-06-15",
      languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"],
      resume: null,
      location: {
        country: "United States",
        state: "New York",
        city: "New York"
      }
    },
    experience: [
      {
        id: 1,
        company: "Creative Studio Inc.",
        position: "CEO & Founder",
        duration: "2018 - Present",
        description: "Founded and led the company to become a leading digital agency",
        location: "New York, NY",
        industry: "IT Industry"
      }
    ]
  });

  const [hubCoins, setHubCoins] = useState(2500);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleOwnerInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      ownerDetails: { ...prev.ownerDetails, [name]: value }
    }));
  };

  const handleLocationChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      location: { ...prev.location, [field]: value }
    }));
  };

  const handleOwnerLocationChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      ownerDetails: {
        ...prev.ownerDetails,
        location: { ...prev.ownerDetails.location, [field]: value }
      }
    }));
  };

  const handleSocialLinkChange = (platform, value) => {
    setProfileData(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value }
    }));
  };

  const handleAddLanguage = () => {
    const newLang = prompt("Enter new language and level (e.g., German (Basic))");
    if (newLang) {
      setProfileData(prev => ({
        ...prev,
        ownerDetails: {
          ...prev.ownerDetails,
          languages: [...prev.ownerDetails.languages, newLang]
        }
      }));
    }
  };

  const handleRemoveLanguage = (langToRemove) => {
    setProfileData(prev => ({
      ...prev,
      ownerDetails: {
        ...prev.ownerDetails,
        languages: prev.ownerDetails.languages.filter(lang => lang !== langToRemove)
      }
    }));
  };

  const handleAddService = () => {
    const newService = prompt("Enter new service");
    if (newService) {
      setProfileData(prev => ({
        ...prev,
        services: [...prev.services, newService]
      }));
    }
  };

  const handleRemoveService = (serviceToRemove) => {
    setProfileData(prev => ({
      ...prev,
      services: prev.services.filter(service => service !== serviceToRemove)
    }));
  };

  const handleAddExperience = () => {
    setProfileData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: prev.experience.length + 1,
        company: "",
        position: "",
        duration: "",
        description: "",
        location: "",
        industry: ""
      }]
    }));
  };

  const handleEditExperience = (id) => {
    alert(`Editing experience with ID: ${id}`);
  };

  const handleRemoveExperience = (idToRemove) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== idToRemove)
    }));
  };

  const handleResumeUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileData(prev => ({
        ...prev,
        ownerDetails: {
          ...prev.ownerDetails,
          resume: e.target.files[0]
        }
      }));
    }
  };

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

  const handleSaveChanges = () => {
    console.log("Saving changes:", profileData);
    alert("Profile changes saved!");
  };

  const getIndustryIcon = (industry) => {
    switch (industry) {
      case "IT Industry":
        return <Monitor className="h-4 w-4 text-blue-500" />;
      case "Manufacturing Industry":
        return <Factory className="h-4 w-4 text-green-500" />;
      case "Healthcare Industry":
        return <Heart className="h-4 w-4 text-red-500" />;
      case "Education Industry":
        return <GraduationCap className="h-4 w-4 text-purple-500" />;
      case "Finance Industry":
        return <DollarSign className="h-4 w-4 text-yellow-500" />;
      case "Retail Industry":
        return <Store className="h-4 w-4 text-orange-500" />;
      default:
        return <Building className="h-4 w-4 text-slate-500" />;
    }
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
              <h1 className="text-xl font-semibold text-slate-900">Edit Business Profile</h1>
              <p className="text-sm text-slate-500">Update your company information and owner details</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Edit3 className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          <div className="flex-1 max-w-7xl space-y-8">
            <Tabs defaultValue="company" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                <TabsTrigger value="company" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Company Details</TabsTrigger>
                <TabsTrigger value="owner" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Owner Details</TabsTrigger>
                <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Experience</TabsTrigger>
              </TabsList>

              {/* Company Details Tab */}
              <TabsContent value="company" className="space-y-8">
                
                {/* Basic Company Information */}
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Building className="h-5 w-5 text-blue-600" />
                      Company Information
                    </CardTitle>
                    <CardDescription>Basic details about your company</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Company Name</label>
                        <Input
                          placeholder="Enter company name"
                          name="companyName"
                          value={profileData.companyName}
                          onChange={handleInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Business Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                          <Input
                            type="email"
                            placeholder="business@company.com"
                            name="businessEmail"
                            value={profileData.businessEmail}
                            onChange={handleInputChange}
                            className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <p className="text-xs text-slate-500">Only business domain emails are accepted (e.g., @company.com, @business.org)</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Business Mobile</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                          <Input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            name="businessPhone"
                            value={profileData.businessPhone}
                            onChange={handleInputChange}
                            className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          Verify with OTP
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Type of Industry</label>
                        <select
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="industry"
                          value={profileData.industry}
                          onChange={handleInputChange}
                        >
                          <option value="IT Industry">IT Industry</option>
                          <option value="Manufacturing Industry">Manufacturing Industry</option>
                          <option value="Healthcare Industry">Healthcare Industry</option>
                          <option value="Education Industry">Education Industry</option>
                          <option value="Finance Industry">Finance Industry</option>
                          <option value="Retail Industry">Retail Industry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Category</label>
                        <Input
                          placeholder="e.g., Digital Services"
                          name="category"
                          value={profileData.category}
                          onChange={handleInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Founded Date</label>
                        <Input
                          type="date"
                          name="foundedDate"
                          value={profileData.foundedDate}
                          onChange={handleInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Type of Company Registered</label>
                        <select
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="companyType"
                          value={profileData.companyType}
                          onChange={handleInputChange}
                        >
                          <option value="Private Limited">Private Limited</option>
                          <option value="Public Limited">Public Limited</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Sole Proprietorship">Sole Proprietorship</option>
                          <option value="LLC">LLC</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Number of Employees</label>
                        <select
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="employeeRange"
                          value={profileData.employeeRange}
                          onChange={handleInputChange}
                        >
                          <option value="1-10">1-10</option>
                          <option value="10-50">10-50</option>
                          <option value="50-100">50-100</option>
                          <option value="100-500">100-500</option>
                          <option value="500-1000">500-1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location & Services */}
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-slate-100">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <MapPin className="h-5 w-5 text-green-600" />
                      Location & Services
                    </CardTitle>
                    <CardDescription>Where you're based and what you offer</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid gap-8 md:grid-cols-3">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Country</label>
                        <select
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="country"
                          value={profileData.location.country}
                          onChange={(e) => handleLocationChange('country', e.target.value)}
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
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="state"
                          value={profileData.location.state}
                          onChange={(e) => handleLocationChange('state', e.target.value)}
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
                          name="city"
                          value={profileData.location.city}
                          onChange={(e) => handleLocationChange('city', e.target.value)}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Exact Address or Maps Link</label>
                        <Input
                          placeholder="Enter exact address or paste Google Maps link"
                          name="address"
                          value={profileData.address}
                          onChange={handleInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <p className="text-xs text-slate-500">Paste Google Maps link for easy navigation and redirection</p>
                        <Button variant="outline" size="sm" className="text-xs">
                          <MapPin className="h-3 w-3 mr-1" />
                          Open Maps to Copy Link
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Offered Services</label>
                        <div className="flex flex-wrap gap-2">
                          {profileData.services.map((service, index) => (
                            <Badge key={index} className="bg-blue-100 text-blue-700 px-3 py-1">
                              {service}
                              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleRemoveService(service)} />
                            </Badge>
                          ))}
                          <Button variant="outline" size="sm" className="text-xs" onClick={handleAddService}>
                            <Plus className="h-3 w-3 mr-1" />
                            Add Service
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">About Company</label>
                        <textarea
                          placeholder="Tell us about your company, mission, and values..."
                          className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                          name="about"
                          value={profileData.about}
                          onChange={handleInputChange}
                        />
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
                          X (Twitter)
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
                          placeholder="linkedin.com/in/yourcompany"
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

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <X className="h-4 w-4 text-purple-500" />
                          X (Twitter)
                        </label>
                        <Input
                          placeholder="@yourusername"
                          value={profileData.socialLinks.x}
                          onChange={(e) => handleSocialLinkChange('x', e.target.value)}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <X className="h-4 w-4 text-purple-500" />
                          Threads
                        </label>
                        <Input
                          placeholder="@yourusername"
                          value={profileData.socialLinks.threads}
                          onChange={(e) => handleSocialLinkChange('threads', e.target.value)}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-slate-600" />
                          Website
                        </label>
                        <Input
                          placeholder="www.yourcompany.com"
                          value={profileData.socialLinks.website}
                          onChange={(e) => handleSocialLinkChange('website', e.target.value)}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Owner Details Tab */}
              <TabsContent value="owner" className="space-y-8">
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <User className="h-5 w-5 text-indigo-600" />
                      Owner Details
                    </CardTitle>
                    <CardDescription>Personal information about the business owner</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">First Name</label>
                        <Input
                          placeholder="Enter first name"
                          name="firstName"
                          value={profileData.ownerDetails.firstName}
                          onChange={handleOwnerInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                        <Input
                          placeholder="Enter last name"
                          name="lastName"
                          value={profileData.ownerDetails.lastName}
                          onChange={handleOwnerInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Gender</label>
                        <select
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="gender"
                          value={profileData.ownerDetails.gender}
                          onChange={handleOwnerInputChange}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                        <Input
                          type="date"
                          name="dateOfBirth"
                          value={profileData.ownerDetails.dateOfBirth}
                          onChange={handleOwnerInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Personal Mobile</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                          <Input
                            type="tel"
                            placeholder="+1 (555) 987-6543"
                            name="personalMobile"
                            value={profileData.ownerDetails.personalMobile}
                            onChange={handleOwnerInputChange}
                            className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Edit3 className="h-3 w-3 mr-1" />
                          Edit & Update
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Personal Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                          <Input
                            type="email"
                            placeholder="personal@email.com"
                            name="personalEmail"
                            value={profileData.ownerDetails.personalEmail}
                            onChange={handleOwnerInputChange}
                            className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Edit3 className="h-3 w-3 mr-1" />
                          Edit & Update
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Industry Selection</label>
                        <select
                          className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          name="industry"
                          value={profileData.ownerDetails.industry}
                          onChange={handleOwnerInputChange}
                        >
                          <option value="IT Industry">IT Industry</option>
                          <option value="Manufacturing Industry">Manufacturing Industry</option>
                          <option value="Healthcare Industry">Healthcare Industry</option>
                          <option value="Education Industry">Education Industry</option>
                          <option value="Finance Industry">Finance Industry</option>
                          <option value="Retail Industry">Retail Industry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Category of Industry</label>
                        <Input
                          placeholder="e.g., Digital Services"
                          name="category"
                          value={profileData.ownerDetails.category}
                          onChange={handleOwnerInputChange}
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Languages Known</label>
                        <div className="flex flex-wrap gap-2">
                          {profileData.ownerDetails.languages.map((lang, index) => (
                            <Badge key={index} className="bg-blue-100 text-blue-700 px-3 py-1">
                              {lang}
                              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleRemoveLanguage(lang)} />
                            </Badge>
                          ))}
                          <Button variant="outline" size="sm" className="text-xs" onClick={handleAddLanguage}>
                            <Plus className="h-3 w-3 mr-1" />
                            Add Language
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Resume Update</label>
                        <div className="flex items-center gap-4">
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                          {profileData.ownerDetails.resume && (
                            <Badge className="bg-green-100 text-green-700">
                              <FileText className="h-3 w-3 mr-1" />
                              Resume Uploaded
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">Upload CV in PDF, DOC, or DOCX format</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Location (Country, State, City)</label>
                        <div className="grid gap-4 md:grid-cols-3">
                          <select
                            className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="country"
                            value={profileData.ownerDetails.location.country}
                            onChange={(e) => handleOwnerLocationChange('country', e.target.value)}
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="India">India</option>
                          </select>
                          <select
                            className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="state"
                            value={profileData.ownerDetails.location.state}
                            onChange={(e) => handleOwnerLocationChange('state', e.target.value)}
                          >
                            <option value="New York">New York</option>
                            <option value="California">California</option>
                            <option value="Texas">Texas</option>
                            <option value="Florida">Florida</option>
                          </select>
                          <Input
                            placeholder="City"
                            name="city"
                            value={profileData.ownerDetails.location.city}
                            onChange={(e) => handleOwnerLocationChange('city', e.target.value)}
                            className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">About Yourself</label>
                        <textarea
                          placeholder="Tell us about yourself, your experience, and what makes you unique..."
                          className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                          name="about"
                          value={profileData.ownerDetails.about}
                          onChange={handleOwnerInputChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience Details Tab */}
              <TabsContent value="experience" className="space-y-8">
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-slate-100">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Briefcase className="h-5 w-5 text-amber-600" />
                      Experience Details
                    </CardTitle>
                    <CardDescription>Your professional work experience</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* CV Upload Section */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                          <Upload className="h-4 w-4 text-blue-600" />
                          Upload CV
                        </h4>
                        <div className="flex items-center gap-4">
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                          {profileData.ownerDetails.resume && (
                            <Badge className="bg-green-100 text-green-700">
                              <FileText className="h-3 w-3 mr-1" />
                              CV Uploaded
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Upload your CV in PDF, DOC, or DOCX format</p>
                      </div>

                      {/* Current Working Details */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-600" />
                          Current Working Details
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="text-sm font-medium text-slate-700">Company</label>
                            <Input
                              placeholder="Current Company Name"
                              className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700">Designation</label>
                            <Input
                              placeholder="Current Position"
                              className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700">Salary Range</label>
                            <Input
                              placeholder="e.g., $50,000 - $80,000"
                              className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700">Duration</label>
                            <Input
                              placeholder="e.g., 2020 - Present"
                              className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      {profileData.experience.map((exp) => (
                        <div key={exp.id} className="border border-slate-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-medium text-slate-900">{exp.position}</h4>
                              <p className="text-sm text-slate-600">{exp.company}</p>
                              <p className="text-xs text-slate-500">{exp.duration}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleEditExperience(exp.id)}>
                                <Edit3 className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleRemoveExperience(exp.id)}>
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600">{exp.description}</p>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full border-dashed border-slate-300 text-slate-600 hover:text-slate-700" onClick={handleAddExperience}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-8">
              <Button variant="outline" className="border-slate-200">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}