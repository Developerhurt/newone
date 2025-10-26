import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  Eye,
  Edit3,
  Trash2,
  Plus,
  Image,
  Video,
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Calendar,
  User,
  Globe,
  ThumbsUp,
  Bookmark,
  Download,
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  BarChart3
} from "lucide-react"

export default function BusinessMyPostsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);

  const [posts] = useState([
    {
      id: 1,
      type: "image",
      title: "New Product Launch - Creative Studio Pro",
      content: "We're excited to announce the launch of our latest creative software! This revolutionary tool will transform how artists work with digital media. #CreativeStudio #DigitalArt #Innovation",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      video: null,
      likes: 124,
      comments: 23,
      shares: 45,
      views: 1250,
      createdAt: "2024-01-15T10:30:00Z",
      status: "published",
      tags: ["#CreativeStudio", "#DigitalArt", "#Innovation"],
      engagement: 85.2
    },
    {
      id: 2,
      type: "video",
      title: "Behind the Scenes: Our Design Process",
      content: "Take a look at how our team creates stunning visual content from concept to completion. Watch our designers in action! #BehindTheScenes #DesignProcess #CreativeTeam",
      image: null,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      likes: 89,
      comments: 15,
      shares: 32,
      views: 890,
      createdAt: "2024-01-12T14:20:00Z",
      status: "published",
      tags: ["#BehindTheScenes", "#DesignProcess", "#CreativeTeam"],
      engagement: 78.5
    },
    {
      id: 3,
      type: "image",
      title: "Client Success Story: Brand Transformation",
      content: "We helped TechCorp rebrand their entire visual identity. The results speak for themselves! Check out the before and after transformation. #ClientSuccess #Branding #Transformation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      video: null,
      likes: 156,
      comments: 34,
      shares: 67,
      views: 2100,
      createdAt: "2024-01-10T09:15:00Z",
      status: "published",
      tags: ["#ClientSuccess", "#Branding", "#Transformation"],
      engagement: 92.1
    },
    {
      id: 4,
      type: "image",
      title: "Team Building Event Highlights",
      content: "Our amazing team had an incredible time at our annual team building retreat! Great food, fun activities, and even better company. #TeamBuilding #CompanyCulture #Fun",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      video: null,
      likes: 78,
      comments: 12,
      shares: 28,
      views: 650,
      createdAt: "2024-01-08T16:45:00Z",
      status: "draft",
      tags: ["#TeamBuilding", "#CompanyCulture", "#Fun"],
      engagement: 0
    },
    {
      id: 5,
      type: "video",
      title: "Tutorial: Advanced Photoshop Techniques",
      content: "Learn advanced Photoshop techniques from our senior designer. Perfect for both beginners and professionals looking to up their game! #Tutorial #Photoshop #DesignTips",
      image: null,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      likes: 203,
      comments: 45,
      shares: 89,
      views: 3200,
      createdAt: "2024-01-05T11:30:00Z",
      status: "published",
      tags: ["#Tutorial", "#Photoshop", "#DesignTips"],
      engagement: 95.8
    }
  ]);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === "all" || post.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Published</Badge>;
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-700"><Clock className="h-3 w-3 mr-1" />Draft</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-700"><Calendar className="h-3 w-3 mr-1" />Scheduled</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "image":
        return <Image className="h-4 w-4 text-blue-500" />;
      case "video":
        return <Video className="h-4 w-4 text-red-500" />;
      default:
        return <Globe className="h-4 w-4 text-slate-500" />;
    }
  };

  const handleEditPost = (post) => {
    console.log('Editing post:', post.title);
    alert('Edit post functionality would open here');
  };

  const handleDeletePost = (postId) => {
    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      console.log('Deleting post:', postId);
      alert('Post deleted successfully!');
    }
  };

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatEngagement = (engagement) => {
    return `${engagement}%`;
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
              <h1 className="text-xl font-semibold text-slate-900">My Posts</h1>
              <p className="text-sm text-slate-500">Manage your content and posts</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search posts..." 
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
              <option value="all">All Posts</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCreatePost}>
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-6">
            
            {/* Posts Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    {/* Post Media */}
                    <div className="relative">
                      {post.type === "image" && post.image && (
                        <div className="w-full h-48 bg-slate-100 rounded-t-lg overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      {post.type === "video" && post.video && (
                        <div className="w-full h-48 bg-slate-100 rounded-t-lg overflow-hidden relative">
                          <video 
                            src={post.video} 
                            className="w-full h-full object-cover"
                            controls
                          />
                        </div>
                      )}
                      
                      {/* Post Type Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-black bg-opacity-50 text-white">
                          {getTypeIcon(post.type)}
                          <span className="ml-1 capitalize">{post.type}</span>
                        </Badge>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        {getStatusBadge(post.status)}
                      </div>
                    </div>
                    
                    {/* Post Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm mb-3 line-clamp-3">
                        {post.content}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      {/* Engagement Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4 text-blue-500" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="h-4 w-4 text-green-500" />
                          <span>{post.shares}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4 text-slate-500" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      
                      {/* Engagement Rate */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-slate-700">Engagement</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">
                          {formatEngagement(post.engagement)}
                        </span>
                      </div>
                      
                      {/* Post Date */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewPost(post)}
                          className="flex-1"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditPost(post)}
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredPosts.length === 0 && (
                <div className="col-span-full">
                  <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                    <CardContent className="p-12 text-center">
                      <Image className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">No posts found</h3>
                      <p className="text-slate-500 mb-6">Create your first post to get started.</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCreatePost}>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Post
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Post Details Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {selectedPost.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {formatDate(selectedPost.createdAt)} • {getStatusBadge(selectedPost.status)}
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedPost(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                
                {/* Post Media */}
                {selectedPost.type === "image" && selectedPost.image && (
                  <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden">
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {selectedPost.type === "video" && selectedPost.video && (
                  <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden">
                    <video 
                      src={selectedPost.video} 
                      className="w-full h-full object-cover"
                      controls
                    />
                  </div>
                )}

                {/* Post Content */}
                <div>
                  <p className="text-slate-700 leading-relaxed mb-4">{selectedPost.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedPost.likes}</div>
                    <div className="text-sm text-slate-600">Likes</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <MessageCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedPost.comments}</div>
                    <div className="text-sm text-slate-600">Comments</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Share2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedPost.shares}</div>
                    <div className="text-sm text-slate-600">Shares</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Eye className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedPost.views}</div>
                    <div className="text-sm text-slate-600">Views</div>
                  </div>
                </div>

                {/* Engagement Rate */}
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-slate-900">Engagement Rate</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                      {formatEngagement(selectedPost.engagement)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleEditPost(selectedPost)}
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Post
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      navigator.share({
                        title: selectedPost.title,
                        text: selectedPost.content,
                        url: window.location.href
                      });
                    }}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    Create New Post
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowCreatePost(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Share your content with your audience</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Upload className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Create Post Form</h3>
                  <p className="text-slate-500 mb-6">This would contain a comprehensive form for creating posts with image/video upload, text content, and scheduling options.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Start Creating Post
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
