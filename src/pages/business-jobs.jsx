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
  Eye,
  Edit3,
  Trash2,
  Plus,
  Briefcase,
  Users,
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  Download,
  Mail,
  Phone,
  User,
  Building,
  Star,
  TrendingUp,
  BarChart3,
  Coins,
  FileText,
  MessageCircle
} from "lucide-react"

export default function BusinessJobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [activeTab, setActiveTab] = useState("job-list");

  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Digital Artist",
      type: "artist",
      category: "Creative",
      location: "New York, NY",
      salary: "$80,000 - $100,000",
      jobType: "Full-time",
      postedDate: "2024-01-15",
      expiryDate: "2024-01-30",
      status: "active",
      applications: 24,
      views: 156,
      description: "We are looking for a talented Senior Digital Artist to join our creative team. You will be responsible for creating stunning visual content and leading digital art projects.",
      requirements: [
        "5+ years of experience in digital art",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio of digital artwork",
        "Experience with team leadership"
      ],
      benefits: [
        "Health insurance",
        "401k matching",
        "Flexible work hours",
        "Professional development budget"
      ],
      company: "Creative Studio Inc.",
      contactPerson: "Sarah Johnson",
      contactEmail: "sarah.johnson@creativestudio.com",
      contactPhone: "+1 (555) 123-4567",
      hubCoinsCost: 700,
      validityDays: 15
    },
    {
      id: 2,
      title: "Marketing Manager",
      type: "non-artist",
      category: "Marketing",
      location: "San Francisco, CA",
      salary: "$70,000 - $90,000",
      jobType: "Full-time",
      postedDate: "2024-01-20",
      expiryDate: "2024-02-04",
      status: "active",
      applications: 18,
      views: 89,
      description: "Join our marketing team to lead digital marketing campaigns and brand development initiatives.",
      requirements: [
        "3+ years of marketing experience",
        "Digital marketing expertise",
        "Strong analytical skills",
        "Team management experience"
      ],
      benefits: [
        "Competitive salary",
        "Stock options",
        "Remote work flexibility",
        "Learning opportunities"
      ],
      company: "Tech Innovations LLC",
      contactPerson: "Mike Chen",
      contactEmail: "mike.chen@techinnovations.com",
      contactPhone: "+1 (555) 987-6543",
      hubCoinsCost: 700,
      validityDays: 15
    }
  ]);

  const [appliedUsers] = useState([
    {
      id: 1,
      jobId: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      status: "applied",
      appliedDate: "2024-01-16",
      resume: "john_smith_resume.pdf",
      experience: "6 years",
      skills: ["Digital Art", "Adobe Creative Suite", "UI/UX Design"],
      rating: 4.8,
      reviews: 12
    },
    {
      id: 2,
      jobId: 1,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 (555) 456-7890",
      status: "cv_viewed",
      appliedDate: "2024-01-17",
      resume: "emily_davis_resume.pdf",
      experience: "4 years",
      skills: ["Digital Illustration", "Brand Design", "Figma"],
      rating: 4.9,
      reviews: 8
    }
  ]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || job.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Active</Badge>;
      case "expired":
        return <Badge className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" />Expired</Badge>;
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-700"><Clock className="h-3 w-3 mr-1" />Paused</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case "artist":
        return <Badge className="bg-blue-100 text-blue-700"><Users className="h-3 w-3 mr-1" />Artist Job</Badge>;
      case "non-artist":
        return <Badge className="bg-purple-100 text-purple-700"><Briefcase className="h-3 w-3 mr-1" />Non-Artist Job</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{type}</Badge>;
    }
  };

  const getApplicationStatusBadge = (status) => {
    switch (status) {
      case "applied":
        return <Badge className="bg-blue-100 text-blue-700"><Clock className="h-3 w-3 mr-1" />Applied</Badge>;
      case "cv_viewed":
        return <Badge className="bg-yellow-100 text-yellow-700"><Eye className="h-3 w-3 mr-1" />CV Viewed</Badge>;
      case "shortlisted":
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Shortlisted</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleEditJob = (job) => {
    console.log('Editing job:', job.title);
    alert('Edit job functionality would open here');
  };

  const handleDeleteJob = (jobId) => {
    if (confirm('Are you sure you want to delete this job? This action cannot be undone.')) {
      console.log('Deleting job:', jobId);
      alert('Job deleted successfully!');
    }
  };

  const handleViewAppliedUsers = (job) => {
    console.log('Viewing applied users for job:', job.title);
    alert('Applied users modal would open here');
  };

  const handleCreateJob = (type) => {
    console.log('Creating job type:', type);
    alert(`Create ${type} job form would open here`);
  };

  const handleViewCV = (user) => {
    console.log('Viewing CV for:', user.name);
    alert('CV viewer would open here');
  };

  const handleAcceptApplication = (userId) => {
    console.log('Accepting application for user:', userId);
    alert('Application accepted! User will be notified.');
  };

  const handleRejectApplication = (userId) => {
    console.log('Rejecting application for user:', userId);
    alert('Application rejected! User will be notified.');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysRemaining = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
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
              <h1 className="text-xl font-semibold text-slate-900">Jobs</h1>
              <p className="text-sm text-slate-500">Manage your job postings and applications</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search jobs..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-64"
              />
            </div>
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="all">All Jobs</option>
              <option value="artist">Artist Jobs</option>
              <option value="non-artist">Non-Artist Jobs</option>
            </select>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-6">
            
            {/* Job Creation Buttons */}
            <div className="flex gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleCreateJob('artist')}
              >
                <Users className="h-4 w-4 mr-2" />
                Hire an Artist
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => handleCreateJob('non-artist')}
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Post A Job
              </Button>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                          {getTypeBadge(job.type)}
                          {getStatusBadge(job.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-slate-400" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-slate-400" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-slate-400" />
                            <span>Posted: {formatDate(job.postedDate)}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-4 line-clamp-2">{job.description}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{job.applications} applications</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{job.views} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{getDaysRemaining(job.expiryDate)} days left</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Coins className="h-4 w-4" />
                            <span>{job.hubCoinsCost} coins</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewJob(job)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewAppliedUsers(job)}
                        >
                          <Users className="h-4 w-4 mr-1" />
                          Applied ({job.applications})
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditJob(job)}
                        >
                          <Edit3 className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDeleteJob(job.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredJobs.length === 0 && (
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardContent className="p-12 text-center">
                    <Briefcase className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No jobs found</h3>
                    <p className="text-slate-500 mb-6">Create your first job posting to get started.</p>
                    <div className="flex gap-4 justify-center">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleCreateJob('artist')}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Hire an Artist
                      </Button>
                      <Button 
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => handleCreateJob('non-artist')}
                      >
                        <Briefcase className="h-4 w-4 mr-2" />
                        Post A Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {selectedJob.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {selectedJob.company} • {selectedJob.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTypeBadge(selectedJob.type)}
                    {getStatusBadge(selectedJob.status)}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedJob(null)}
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                
                {/* Job Overview */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Salary</label>
                    <p className="text-slate-900 font-medium">{selectedJob.salary}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Job Type</label>
                    <p className="text-slate-900">{selectedJob.jobType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Posted Date</label>
                    <p className="text-slate-900">{formatDate(selectedJob.postedDate)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Expiry Date</label>
                    <p className="text-slate-900">{formatDate(selectedJob.expiryDate)}</p>
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Job Description</h3>
                  <p className="text-slate-700 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Job Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedJob.applications}</div>
                    <div className="text-sm text-slate-600">Applications</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Eye className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedJob.views}</div>
                    <div className="text-sm text-slate-600">Views</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{getDaysRemaining(selectedJob.expiryDate)}</div>
                    <div className="text-sm text-slate-600">Days Left</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleViewAppliedUsers(selectedJob)}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    View Applied Users
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleEditJob(selectedJob)}
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Job
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
