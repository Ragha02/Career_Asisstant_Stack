"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  TrendingUp,
  FileText,
  GraduationCap,
  Search,
  Download,
  Star,
  DollarSign,
  Clock,
  Users,
  Award,
  BookOpen,
  Target,
  Upload,
  MessageCircle,
  Send,
  Paperclip,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Bar, BarChart } from "recharts"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const jobTrends = [
  { month: "Jan", demand: 85, salary: 95000 },
  { month: "Feb", demand: 88, salary: 97000 },
  { month: "Mar", demand: 92, salary: 99000 },
  { month: "Apr", demand: 89, salary: 98000 },
  { month: "May", demand: 95, salary: 102000 },
  { month: "Jun", demand: 98, salary: 105000 },
]

const topJobs = [
  { title: "AI/ML Engineer", growth: "+23%", salary: "$145k", demand: "Very High" },
  { title: "Full Stack Developer", growth: "+18%", salary: "$125k", demand: "High" },
  { title: "Data Scientist", growth: "+21%", salary: "$135k", demand: "Very High" },
  { title: "DevOps Engineer", growth: "+19%", salary: "$130k", demand: "High" },
  { title: "Product Manager", growth: "+15%", salary: "$140k", demand: "High" },
]

const courses = [
  {
    title: "Advanced Machine Learning",
    provider: "TechEd Pro",
    duration: "12 weeks",
    rating: 4.8,
    price: "$299",
    relevance: 95,
  },
  {
    title: "AWS Cloud Architecture",
    provider: "CloudMaster",
    duration: "8 weeks",
    rating: 4.7,
    price: "$199",
    relevance: 88,
  },
  {
    title: "React & Next.js Mastery",
    provider: "DevAcademy",
    duration: "10 weeks",
    rating: 4.9,
    price: "$249",
    relevance: 92,
  },
]

export default function CareerNavigator() {
  const [activeAgent, setActiveAgent] = useState("research")
  const [userSkills, setUserSkills] = useState("")
  const [targetRole, setTargetRole] = useState("")
  const [resumeScore, setResumeScore] = useState(78)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "ai",
      message:
        "Hi! I'm your AI Career Coach. I can help you with career planning, skill development, interview preparation, and more. What would you like to discuss today?",
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && (file.type === "application/pdf" || file.type.includes("document"))) {
      setUploadedFile(file)
      setIsAnalyzing(true)

      // Simulate AI analysis
      setTimeout(() => {
        setAnalysisResults({
          score: 82,
          strengths: [
            "Strong technical skills section",
            "Quantified achievements",
            "Relevant work experience",
            "Professional formatting",
          ],
          improvements: [
            "Add more industry keywords",
            "Include soft skills",
            "Expand project descriptions",
            "Add certifications section",
          ],
          keywords: ["React", "Node.js", "AWS", "Python", "Agile"],
          missingKeywords: ["Docker", "Kubernetes", "TypeScript", "GraphQL"],
        })
        setIsAnalyzing(false)
      }, 3000)
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      type: "user",
      message: newMessage,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Based on current market trends, I'd recommend focusing on cloud technologies and AI/ML skills. These areas are seeing tremendous growth.",
        "For career transitions, I suggest starting with identifying transferable skills from your current role. What specific area are you looking to move into?",
        "Interview preparation is crucial! I recommend practicing behavioral questions using the STAR method (Situation, Task, Action, Result). Would you like some sample questions?",
        "Networking is key to career growth. Consider joining professional communities, attending industry events, and engaging on LinkedIn. What's your current networking strategy?",
        "Skill development should align with your career goals. Based on your profile, I see opportunities in leadership, technical architecture, and project management. Which interests you most?",
      ]

      const aiMessage = {
        id: chatMessages.length + 2,
        type: "ai",
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      }

      setChatMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900">AI Career Navigator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powered by intelligent agents to accelerate your career journey
          </p>
        </div>

        {/* Agent Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              activeAgent === "research" ? "ring-2 ring-emerald-500 shadow-lg" : ""
            }`}
            onClick={() => setActiveAgent("research")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-700">Research Agent</CardTitle>
              <CardDescription>Latest job market trends and insights</CardDescription>
            </CardHeader>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              activeAgent === "resume" ? "ring-2 ring-purple-500 shadow-lg" : ""
            }`}
            onClick={() => setActiveAgent("resume")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-purple-700">Resume Agent</CardTitle>
              <CardDescription>ATS-optimized resume building</CardDescription>
            </CardHeader>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              activeAgent === "coach" ? "ring-2 ring-orange-500 shadow-lg" : ""
            }`}
            onClick={() => setActiveAgent("coach")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <GraduationCap className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-orange-700">Career Coach</CardTitle>
              <CardDescription>Personalized career guidance</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Agent Content */}
        <div className="space-y-6">
          {activeAgent === "research" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    Market Trends Analysis
                  </CardTitle>
                  <CardDescription>Real-time job market insights powered by AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Job Demand Trends</h3>
                      <ChartContainer
                        config={{
                          demand: {
                            label: "Demand Index",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                        className="h-[200px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={jobTrends}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Line type="monotone" dataKey="demand" stroke="var(--color-demand)" strokeWidth={2} />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Salary Trends</h3>
                      <ChartContainer
                        config={{
                          salary: {
                            label: "Average Salary",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                        className="h-[200px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={jobTrends}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="salary" fill="var(--color-salary)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Growing Roles</CardTitle>
                  <CardDescription>Based on latest market data from LinkedIn and Glassdoor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topJobs.map((job, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold">{job.title}</h4>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {job.growth}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <Badge variant={job.demand === "Very High" ? "default" : "secondary"}>{job.demand}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeAgent === "resume" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Resume Analysis & Builder
                  </CardTitle>
                  <CardDescription>AI-powered ATS optimization and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upload">Upload & Analyze</TabsTrigger>
                      <TabsTrigger value="builder">Resume Builder</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upload" className="space-y-6">
                      {!uploadedFile ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
                          <p className="text-gray-600 mb-4">
                            Upload your resume in PDF, DOC, or DOCX format for AI analysis
                          </p>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload">
                            <Button className="cursor-pointer">
                              <Paperclip className="w-4 h-4 mr-2" />
                              Choose File
                            </Button>
                          </label>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <Alert>
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>Resume uploaded: {uploadedFile.name}</AlertDescription>
                          </Alert>

                          {isAnalyzing ? (
                            <Card className="p-6">
                              <div className="text-center space-y-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                                <h3 className="text-lg font-semibold">Analyzing Your Resume...</h3>
                                <p className="text-gray-600">Our AI is reviewing your resume for ATS optimization</p>
                              </div>
                            </Card>
                          ) : (
                            analysisResults && (
                              <div className="grid lg:grid-cols-2 gap-6">
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                      ATS Score
                                      <span className="text-3xl font-bold text-purple-600">
                                        {analysisResults.score}%
                                      </span>
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <Progress value={analysisResults.score} className="mb-4" />

                                    <div>
                                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        Strengths
                                      </h4>
                                      <ul className="space-y-1 text-sm">
                                        {analysisResults.strengths.map((strength: string, index: number) => (
                                          <li key={index} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                                            {strength}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Areas for Improvement
                                      </h4>
                                      <ul className="space-y-1 text-sm">
                                        {analysisResults.improvements.map((improvement: string, index: number) => (
                                          <li key={index} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>
                                            {improvement}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardHeader>
                                    <CardTitle>Keyword Analysis</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <div>
                                      <h4 className="font-semibold text-green-600 mb-2">Found Keywords</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {analysisResults.keywords.map((keyword: string, index: number) => (
                                          <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-green-100 text-green-800"
                                          >
                                            {keyword}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold text-red-600 mb-2">Missing Keywords</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {analysisResults.missingKeywords.map((keyword: string, index: number) => (
                                          <Badge key={index} variant="outline" className="border-red-200 text-red-600">
                                            {keyword}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="pt-4 space-y-2">
                                      <Button className="w-full">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Optimized Resume
                                      </Button>
                                      <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => {
                                          setUploadedFile(null)
                                          setAnalysisResults(null)
                                        }}
                                      >
                                        Upload Different Resume
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="builder" className="space-y-4">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Current Skills</label>
                            <Textarea
                              placeholder="List your current skills, experience, and technologies..."
                              value={userSkills}
                              onChange={(e) => setUserSkills(e.target.value)}
                              className="min-h-[120px]"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Target Role</label>
                            <Input
                              placeholder="e.g., Senior Full Stack Developer"
                              value={targetRole}
                              onChange={(e) => setTargetRole(e.target.value)}
                            />
                          </div>
                          <Button className="w-full">
                            <Search className="w-4 h-4 mr-2" />
                            Generate Resume
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">ATS Score</h4>
                              <span className="text-2xl font-bold text-purple-600">{resumeScore}%</span>
                            </div>
                            <Progress value={resumeScore} className="mb-2" />
                            <p className="text-sm text-gray-600">Good! Your resume is ATS-friendly</p>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold">Live Preview</h4>
                            <div className="border rounded-lg p-4 bg-white min-h-[200px] text-sm">
                              <div className="text-center mb-4">
                                <h3 className="font-bold text-lg">John Doe</h3>
                                <p className="text-gray-600">Full Stack Developer</p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-semibold">Skills</h4>
                                <p className="text-gray-700">{userSkills || "Your skills will appear here..."}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}

          {activeAgent === "coach" && (
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Chat Interface */}
                <Card className="lg:row-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-orange-600" />
                      AI Career Coach Chat
                    </CardTitle>
                    <CardDescription>Get personalized career advice in real-time</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-col h-[500px]">
                      <ScrollArea className="flex-1 p-4">
                        <div className="space-y-4">
                          {chatMessages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                            >
                              {message.type === "ai" && (
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="bg-orange-100 text-orange-600">AI</AvatarFallback>
                                </Avatar>
                              )}
                              <div
                                className={`max-w-[80%] rounded-lg p-3 ${
                                  message.type === "user" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <p className="text-sm">{message.message}</p>
                                <p className="text-xs opacity-70 mt-1">
                                  {message.timestamp.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                              {message.type === "user" && (
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="bg-orange-600 text-white">U</AvatarFallback>
                                </Avatar>
                              )}
                            </div>
                          ))}
                          {isTyping && (
                            <div className="flex gap-3 justify-start">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-orange-100 text-orange-600">AI</AvatarFallback>
                              </Avatar>
                              <div className="bg-gray-100 rounded-lg p-3">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                      <div className="p-4 border-t">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Ask me about your career..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            className="flex-1"
                          />
                          <Button onClick={sendMessage} disabled={!newMessage.trim() || isTyping}>
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Career Coaching Content */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-orange-600" />
                        Quick Career Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-orange-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-orange-600">85%</div>
                          <div className="text-sm text-gray-600">Career Match</div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">12</div>
                          <div className="text-sm text-gray-600">Skills to Learn</div>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-600">3</div>
                          <div className="text-sm text-gray-600">Career Paths</div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">24</div>
                          <div className="text-sm text-gray-600">Months to Goal</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { action: "Complete AWS Certification", priority: "High", time: "2 months" },
                          { action: "Build Portfolio Project", priority: "Medium", time: "1 month" },
                          { action: "Network with Industry Leaders", priority: "High", time: "Ongoing" },
                          { action: "Practice System Design", priority: "Medium", time: "3 weeks" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <h4 className="font-medium">{item.action}</h4>
                              <p className="text-sm text-gray-600">{item.time}</p>
                            </div>
                            <Badge variant={item.priority === "High" ? "default" : "secondary"}>{item.priority}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Existing Tabs Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>Personalized recommendations based on your career goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="courses" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="courses">Recommended Courses</TabsTrigger>
                      <TabsTrigger value="certifications">Certifications</TabsTrigger>
                      <TabsTrigger value="career-path">Career Path</TabsTrigger>
                    </TabsList>

                    <TabsContent value="courses" className="space-y-4">
                      <div className="space-y-4">
                        {courses.map((course, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold">{course.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{course.provider}</p>
                                <div className="flex items-center gap-4 mt-2 text-sm">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {course.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    {course.rating}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Target className="w-4 h-4" />
                                    {course.relevance}% match
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-orange-600">{course.price}</div>
                                <Button size="sm" className="mt-2">
                                  Enroll Now
                                </Button>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="certifications" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            name: "AWS Solutions Architect",
                            value: "High Impact",
                            color: "bg-green-100 text-green-800",
                          },
                          {
                            name: "Google Cloud Professional",
                            value: "Medium Impact",
                            color: "bg-yellow-100 text-yellow-800",
                          },
                          {
                            name: "Kubernetes Administrator",
                            value: "High Impact",
                            color: "bg-green-100 text-green-800",
                          },
                          { name: "Scrum Master", value: "Medium Impact", color: "bg-yellow-100 text-yellow-800" },
                        ].map((cert, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{cert.name}</h4>
                                <Badge className={cert.color}>{cert.value}</Badge>
                              </div>
                              <Award className="w-6 h-6 text-orange-500" />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="career-path" className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-sm font-semibold">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold">Current: Full Stack Developer</h4>
                            <p className="text-sm text-gray-600">Focus on system design and leadership skills</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold">Next: Senior Full Stack Developer</h4>
                            <p className="text-sm text-gray-600">Expected timeline: 12-18 months</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold">Future: Technical Lead / Engineering Manager</h4>
                            <p className="text-sm text-gray-600">Expected timeline: 2-3 years</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="text-2xl font-bold">2.4M+</div>
                <div className="text-sm text-gray-600">Job Listings Analyzed</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">150K+</div>
                <div className="text-sm text-gray-600">Resumes Optimized</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-sm text-gray-600">Courses Recommended</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
