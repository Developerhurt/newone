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
  Edit3, 
  Trash2, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreVertical, 
  Search, 
  Filter, 
  Image, 
  Video, 
  FileText, 
  Calendar, 
  User, 
  ThumbsUp, 
  Bookmark,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Users,
  TrendingUp
} from "lucide-react"

export default function BusinessMyPostPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "New Digital Marketing Campaign Launch",
      content: "Excited to announce our latest digital marketing campaign for Q2 2024. We're focusing on innovative strategies to help businesses grow their online presence.",
      type: "text",
      media: null,
      createdAt: "2024-03-15T10:30:00Z",
      status: "published",
      likes: 45,
      comments: 12,
      shares: 8,
      views: 234,
      tags: ["marketing", "digital", "business", "growth"],
      isPinned: false
    },
    {
      id: 2,
      title: "Behind the Scenes: Our Creative Process",
      content: "Take a look at how our creative team brings ideas to life. From concept to execution, every project is a journey of innovation and collaboration.",
      type: "image",
      media: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      createdAt: "2024-03-12T14:20:00Z",
      status: "published",
      likes: 78,
      comments: 23,
      shares: 15,
      views: 456,
      tags: ["creative", "process", "team", "innovation"],
      isPinned: true
    },
    {
      id: 3,
      title: "Client Success Story: Tech Startup Growth",
      content: "We're proud to share how we helped a local tech startup increase their user base by 300% in just 6 months through our strategic marketing approach.",
      type: "video",
      media: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      createdAt: "2024-03-10T09:15:00Z",
      status: "published",
      likes: 92,
      comments: 31,
      shares: 22,
      views: 678,
      tags: ["success", "client", "tech", "growth", "marketing"],
      isPinned: false
    },
    {
      id: 4,
      title: "Industry Insights: Future of Digital Marketing",
      content: "Our latest research on emerging trends in digital marketing and how businesses can prepare for the future. Key insights from industry experts.",
      type: "text",
      media: null,
      createdAt: "2024-03-08T16:45:00Z",
      status: "draft",
      likes: 0,
      comments: 0,
      shares: 0,
      views: 5,
      tags: ["insights", "research", "future", "digital"],
      isPinned: false
    },
    {
      id: 5,
      title: "Team Building Event Highlights",
      content: "Amazing day at our team building event! Great to see everyone coming together and having fun while strengthening our company culture.",
      type: "image",
      media: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      createdAt: "2024-03-05T11:30:00Z",
      status: "published",
      likes: 156,
      comments: 42,
      shares: 28,
      views: 892,
      tags: ["team", "culture", "event", "fun"],
      isPinned: false
    }
  ]);

  const handleEditPost = (post) => {
    setSelectedPost(post);
  };

  const handleDeletePost = (postId) => {
    setPostToDelete(postId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      setPosts(posts.filter(post => post.id !== postToDelete));
      setShowDeleteConfirm(false);
      setPostToDelete(null);
    }
  };

  const handlePinPost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isPinned: !post.isPinned }
        : post
    ));
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === 'all' || post.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Published</Badge>;
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-700"><Clock className="h-3 w-3 mr-1" />Draft</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-700"><Calendar className="h-3 w-3 mr-1" />Scheduled</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-700"><AlertTriangle className="h-3 w-3 mr-1" />Unknown</Badge>;
    }
  };

  const getMediaIcon = (type) => {
    switch (type) {
      case 'image':
        return <Image className="h-4 w-4 text-blue-500" />;
      case 'video':
        return <Video className="h-4 w-4 text-purple-500" />;
      case 'text':
        return <FileText className="h-4 w-4 text-green-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
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
              <h1 className="text-xl font-semibold text-slate-900">My Posts</h1>
              <p className="text-sm text-slate-500">Manage your published content and drafts</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Edit3 className="h-4 w-4 mr-2" />
              Create New Post
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          <div className="flex-1 max-w-7xl mx-auto">
            <div className="space-y-6">
              {/* Search and Filters */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                          placeholder="Search posts, content, or tags..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">All Posts</option>
                        <option value="published">Published</option>
                        <option value="draft">Drafts</option>
                        <option value="scheduled">Scheduled</option>
                      </select>
                      <Button variant="outline" className="border-slate-200">
                        <Filter className="h-4 w-4 mr-2" />
                        More Filters
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts List */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Post Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {post.isPinned && (
                                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                                    <Bookmark className="h-3 w-3 mr-1" />
                                    Pinned
                                  </Badge>
                                )}
                                {getStatusBadge(post.status)}
                                <div className="flex items-center gap-1 text-slate-500">
                                  {getMediaIcon(post.type)}
                                  <span className="text-sm capitalize">{post.type}</span>
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h3>
                              <p className="text-slate-600 mb-3 line-clamp-2">{post.content}</p>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {post.tags.map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>

                              {/* Media Preview */}
                              {post.media && (
                                <div className="mb-3">
                                  {post.type === 'image' ? (
                                    <img 
                                      src={post.media} 
                                      alt="Post media" 
                                      className="w-full h-48 object-cover rounded-lg"
                                    />
                                  ) : post.type === 'video' ? (
                                    <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center">
                                      <Video className="h-12 w-12 text-slate-400" />
                                    </div>
                                  ) : null}
                                </div>
                              )}

                              {/* Stats */}
                              <div className="flex items-center gap-6 text-sm text-slate-500">
                                <div className="flex items-center gap-1">
                                  <Heart className="h-4 w-4" />
                                  <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>{post.comments}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Share2 className="h-4 w-4" />
                                  <span>{post.shares}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{post.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 lg:w-48">
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200"
                            onClick={() => handleEditPost(post)}
                          >
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200"
                            onClick={() => handlePinPost(post.id)}
                          >
                            <Bookmark className="h-4 w-4 mr-2" />
                            {post.isPinned ? 'Unpin' : 'Pin'}
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-red-200 text-red-600 hover:bg-red-50"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardContent className="p-12 text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No posts found</h3>
                    <p className="text-slate-500">Try adjusting your search or filter criteria, or create a new post.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg border border-slate-200 shadow-xl max-w-md w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Delete Post
                </CardTitle>
                <CardDescription>
                  Are you sure you want to delete this post? This action cannot be undone.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  onClick={confirmDelete}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Edit Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg border border-slate-200 shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-900">Edit Post</CardTitle>
                    <CardDescription>Update your post content and settings</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedPost(null)}>
                    <XCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                  <Input
                    value={selectedPost.title}
                    onChange={(e) => setSelectedPost({...selectedPost, title: e.target.value})}
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Content</label>
                  <textarea
                    value={selectedPost.content}
                    onChange={(e) => setSelectedPost({...selectedPost, content: e.target.value})}
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={6}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tags (comma separated)</label>
                  <Input
                    value={selectedPost.tags.join(', ')}
                    onChange={(e) => setSelectedPost({...selectedPost, tags: e.target.value.split(', ').filter(tag => tag.trim())})}
                    placeholder="marketing, business, growth"
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <Button 
                    className="flex-1"
                    onClick={() => handleUpdatePost(selectedPost)}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Update Post
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedPost(null)}
                  >
                    Cancel
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
