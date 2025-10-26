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
  FileText,
  Clock,
  MapPin,
  User,
  Building,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  Mail,
  Phone,
  Download,
  Star,
  TrendingUp,
  Briefcase,
  DollarSign,
  Users
} from "lucide-react"

export default function ArtistAppliedJobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);

  const [appliedJobs] = useState([
    {
      id: 1,
      jobTitle: "Senior Digital Artist",
      company: "Creative Studio Inc.",
      location: "New York, NY",
      salary: "$80,000 - $100,000",
      jobType: "Full-time",
      appliedDate: "2024-01-15",
      status: "processing",
      applicationStatus: "resume_viewed",
      jobDescription: "We are looking for a talented Senior Digital Artist to join our creative team. You will be responsible for creating stunning visual content and leading digital art projects.",
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
      contactPerson: "Sarah Johnson",
      contactEmail: "sarah.johnson@creativestudio.com",
      contactPhone: "+1 (555) 123-4567",
      applicationDeadline: "2024-02-15",
      interviewScheduled: "2024-02-10T10:00:00Z"
    },
    {
      id: 2,
      jobTitle: "UI/UX Designer",
      company: "Tech Innovations LLC",
      location: "San Francisco, CA",
      salary: "$70,000 - $90,000",
      jobType: "Full-time",
      appliedDate: "2024-01-20",
      status: "processing",
      applicationStatus: "resume_shortlisted",
      jobDescription: "Join our design team to create intuitive and beautiful user interfaces for our cutting-edge products.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and Sketch",
        "Strong understanding of user research",
        "Portfolio demonstrating design thinking"
      ],
      benefits: [
        "Competitive salary",
        "Stock options",
        "Remote work flexibility",
        "Learning and development opportunities"
      ],
      contactPerson: "Mike Chen",
      contactEmail: "mike.chen@techinnovations.com",
      contactPhone: "+1 (555) 987-6543",
      applicationDeadline: "2024-02-20",
      interviewScheduled: "2024-02-12T14:00:00Z"
    },
    {
      id: 3,
      jobTitle: "Freelance Illustrator",
      company: "Design Agency Co.",
      location: "Remote",
      salary: "$50 - $80 per hour",
      jobType: "Contract",
      appliedDate: "2024-01-25",
      status: "processing",
      applicationStatus: "resume_rejected",
      jobDescription: "We need a skilled illustrator to work on various client projects including book covers, marketing materials, and digital illustrations.",
      requirements: [
        "Strong illustration skills",
        "Experience with various illustration styles",
        "Ability to meet tight deadlines",
        "Excellent communication skills"
      ],
      benefits: [
        "Flexible schedule",
        "Remote work",
        "Diverse project portfolio",
        "Competitive hourly rates"
      ],
      contactPerson: "Emily Davis",
      contactEmail: "emily.davis@designagency.com",
      contactPhone: "+1 (555) 456-7890",
      applicationDeadline: "2024-02-25",
      interviewScheduled: null,
      rejectionReason: "Portfolio didn't match our current project needs"
    }
  ]);

  const filteredJobs = appliedJobs.filter(job => {
    const matchesSearch = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || job.applicationStatus === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "resume_viewed":
        return <Badge className="bg-blue-100 text-blue-700"><Eye className="h-3 w-3 mr-1" />Resume Viewed</Badge>;
      case "resume_shortlisted":
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Shortlisted</Badge>;
      case "resume_rejected":
        return <Badge className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  const getStatusDescription = (status) => {
    switch (status) {
      case "resume_viewed":
        return "Your resume has been viewed by the employer. They are currently reviewing applications.";
      case "resume_shortlisted":
        return "Congratulations! Your application has been shortlisted. You may be contacted for an interview.";
      case "resume_rejected":
        return "Unfortunately, your application was not selected for this position.";
      default:
        return "Your application is being processed.";
    }
  };

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleDownloadResume = () => {
    console.log('Downloading resume...');
    alert('Resume download started!');
  };

  const handleContactEmployer = (job) => {
    console.log('Contacting employer:', job.contactEmail);
    alert(`Opening email to ${job.contactEmail}`);
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
              <h1 className="text-xl font-semibold text-slate-900">Applied Jobs</h1>
              <p className="text-sm text-slate-500">Track your job applications and status updates</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search applications..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-64"
              />
            </div>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="all">All Status</option>
              <option value="resume_viewed">Resume Viewed</option>
              <option value="resume_shortlisted">Shortlisted</option>
              <option value="resume_rejected">Rejected</option>
            </select>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-6">
            
            {/* Applied Jobs List */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-slate-900">{job.jobTitle}</h3>
                          {getStatusBadge(job.applicationStatus)}
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
                            <span>Applied: {new Date(job.appliedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm text-slate-600 mb-2">{getStatusDescription(job.applicationStatus)}</p>
                          {job.interviewScheduled && (
                            <div className="flex items-center gap-2 text-sm text-green-600">
                              <Calendar className="h-4 w-4" />
                              <span>Interview scheduled: {new Date(job.interviewScheduled).toLocaleString()}</span>
                            </div>
                          )}
                          {job.rejectionReason && (
                            <div className="flex items-center gap-2 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" />
                              <span>Reason: {job.rejectionReason}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewJob(job)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleContactEmployer(job)}
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Contact
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
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No applications found</h3>
                    <p className="text-slate-500">You haven't applied to any jobs yet.</p>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                      <Search className="h-4 w-4 mr-2" />
                      Find Jobs
                    </Button>
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
                      {selectedJob.jobTitle}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {selectedJob.company} • {selectedJob.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(selectedJob.applicationStatus)}
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
                    <label className="text-sm font-medium text-slate-700">Applied Date</label>
                    <p className="text-slate-900">{new Date(selectedJob.appliedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Application Deadline</label>
                    <p className="text-slate-900">{new Date(selectedJob.applicationDeadline).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                  </div>
                </div>

                {/* Status Information */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Application Status</h3>
                  <p className="text-slate-700 mb-2">{getStatusDescription(selectedJob.applicationStatus)}</p>
                  {selectedJob.interviewScheduled && (
                    <div className="flex items-center gap-2 text-green-600">
                      <Calendar className="h-4 w-4" />
                      <span>Interview scheduled: {new Date(selectedJob.interviewScheduled).toLocaleString()}</span>
                    </div>
                  )}
                  {selectedJob.rejectionReason && (
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      <span>Reason: {selectedJob.rejectionReason}</span>
                    </div>
                  )}
                </div>

                {/* Job Description */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Job Description</h3>
                  <p className="text-slate-700 leading-relaxed">{selectedJob.jobDescription}</p>
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

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Contact Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Contact Person</label>
                      <p className="text-slate-900">{selectedJob.contactPerson}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <p className="text-slate-900">{selectedJob.contactEmail}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Phone</label>
                      <p className="text-slate-900">{selectedJob.contactPhone}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleContactEmployer(selectedJob)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Employer
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleDownloadResume}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
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
