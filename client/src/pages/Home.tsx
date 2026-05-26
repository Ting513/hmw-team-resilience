import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Sparkles, 
  HelpCircle, 
  Brain, 
  TrendingUp, 
  Heart, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Quote,
  Eye,
  Activity,
  Smile,
  AlertTriangle,
  Award
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Custom interactive state for Empathy Map
  const [selectedPersona, setSelectedPersona] = useState<"manager" | "team">("manager");
  const [hoveredQuadrant, setHoveredPersona] = useState<string | null>(null);

  // Proposed Solutions Framework State
  const [expandedDimension, setExpandedDimension] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#3A4F3C] selection:bg-[#D96C4A] selection:text-[#FDFDFB]">
      
      {/* Editorial Navigation */}
      <header className="border-b border-[#D1DDD8] sticky top-0 bg-[#FDFDFB]/90 backdrop-blur-md z-50">
        <div className="container py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2C402E] flex items-center justify-center">
              <span className="text-[#FDFDFB] font-serif font-bold text-lg">M</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-[#2C402E]">TEAM RESILIENCE</span>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide uppercase">
            <button onClick={() => setActiveTab("overview")} className={`hover:text-[#D96C4A] transition-colors ${activeTab === "overview" ? "text-[#D96C4A] underline decoration-2 underline-offset-4" : "text-[#3A4F3C]"}`}>Overview</button>
            <button onClick={() => setActiveTab("empathy")} className={`hover:text-[#D96C4A] transition-colors ${activeTab === "empathy" ? "text-[#D96C4A] underline decoration-2 underline-offset-4" : "text-[#3A4F3C]"}`}>Empathy Map</button>
            <button onClick={() => setActiveTab("questions")} className={`hover:text-[#D96C4A] transition-colors ${activeTab === "questions" ? "text-[#D96C4A] underline decoration-2 underline-offset-4" : "text-[#3A4F3C]"}`}>Interviews</button>
            <button onClick={() => setActiveTab("hmw")} className={`hover:text-[#D96C4A] transition-colors ${activeTab === "hmw" ? "text-[#D96C4A] underline decoration-2 underline-offset-4" : "text-[#3A4F3C]"}`}>Refined HMW</button>
          </nav>
          <div className="flex gap-3">
            <a href="manus-slides://5avzELx4HkHXSmEEtGtQfW" className="inline-flex items-center justify-center px-4 py-2 border border-[#2C402E] text-xs font-bold uppercase tracking-wider text-[#2C402E] hover:bg-[#2C402E] hover:text-[#FDFDFB] transition-all duration-200">
              View Slide Deck
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Asymmetric Editorial Split */}
      <section className="border-b border-[#D1DDD8]">
        <div className="container py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8EDE7] text-[#2C402E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Design Thinking Synthesis
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-extrabold text-[#2C402E] leading-[1.1] tracking-tight">
              Building High-Performance, <span className="italic font-normal text-[#D96C4A]">Resilient</span> Teams
            </h1>
            
            {/* 2px Wavy Line Divider */}
            <div className="w-32 h-2 bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2220%22_height=%2210%22_viewBox=%220_0_20_10%22%3E%3Cpath_d=%22M0,5_C5,2_5,8_10,5_C15,2_15,8_20,5%22_fill=%22none%22_stroke=%22%23D96C4A%22_stroke-width=%222%22/%3E%3C/svg%3E')] bg-repeat-x"></div>
            
            <p className="text-lg lg:text-xl text-[#3A4F3C] leading-relaxed max-w-2xl font-light">
              How do we scale productivity in the AI era without sacrificing humanity? This project explores the structural tensions of middle managers and individual contributors, shifting the goal from sheer operational output to a sustainable culture of <strong>creativity, collaboration, and trust</strong>.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => setActiveTab("empathy")} className="bg-[#2C402E] text-[#FDFDFB] hover:bg-[#3D573F] px-6 py-6 text-sm font-bold uppercase tracking-wider transition-all duration-150">
                Explore Empathy Map <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button onClick={() => setActiveTab("hmw")} variant="outline" className="border-[#2C402E] text-[#2C402E] hover:bg-[#E8EDE7] px-6 py-6 text-sm font-bold uppercase tracking-wider transition-all duration-150">
                See Refined HMW
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#E8EDE7] p-8 border border-[#D1DDD8] space-y-6 relative overflow-hidden">
            {/* Corner Circular Intersecting Mask */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border-2 border-[#2C402E] opacity-20"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#D96C4A] opacity-10"></div>

            <h3 className="font-serif text-2xl font-bold text-[#2C402E] border-b border-[#D1DDD8] pb-3">The Project Reframe</h3>
            <blockquote className="space-y-4">
              <p className="font-serif italic text-lg text-[#3A4F3C] leading-relaxed">
                "We need to remember we are solving not just for the manager but also the humans in the team... High performing teams are often differentiated by creativity, collaboration, and trust."
              </p>
              <footer className="text-xs font-bold uppercase tracking-wider text-[#D96C4A] flex items-center gap-2">
                <span>— Project Mentor Feedback</span>
              </footer>
            </blockquote>
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-bold uppercase tracking-wider text-[#2C402E]">
              <div className="p-3 border border-[#D1DDD8] bg-[#FDFDFB]">
                <div className="text-[#D96C4A] text-xl font-serif font-bold mb-1">Old Goal</div>
                Scale Productivity
              </div>
              <div className="p-3 border border-[#D1DDD8] bg-[#FDFDFB]">
                <div className="text-[#2C402E] text-xl font-serif font-bold mb-1">New Goal</div>
                Collective Creativity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <main className="container py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          
          <TabsList className="w-full flex flex-wrap border-b border-[#D1DDD8] bg-transparent h-auto p-0 gap-2 lg:gap-8 justify-start">
            <TabsTrigger value="overview" className="border-b-2 border-transparent data-[state=active]:border-[#2C402E] data-[state=active]:text-[#2C402E] text-sm font-bold uppercase tracking-wider rounded-none pb-4 px-1 bg-transparent hover:text-[#D96C4A] transition-all">
              Executive Summary
            </TabsTrigger>
            <TabsTrigger value="empathy" className="border-b-2 border-transparent data-[state=active]:border-[#2C402E] data-[state=active]:text-[#2C402E] text-sm font-bold uppercase tracking-wider rounded-none pb-4 px-1 bg-transparent hover:text-[#D96C4A] transition-all">
              Customer Empathy Map
            </TabsTrigger>
            <TabsTrigger value="questions" className="border-b-2 border-transparent data-[state=active]:border-[#2C402E] data-[state=active]:text-[#2C402E] text-sm font-bold uppercase tracking-wider rounded-none pb-4 px-1 bg-transparent hover:text-[#D96C4A] transition-all">
              Empathy Interviews
            </TabsTrigger>
            <TabsTrigger value="hmw" className="border-b-2 border-transparent data-[state=active]:border-[#2C402E] data-[state=active]:text-[#2C402E] text-sm font-bold uppercase tracking-wider rounded-none pb-4 px-1 bg-transparent hover:text-[#D96C4A] transition-all">
              Refined HMW Statement
            </TabsTrigger>
          </TabsList>

          {/* 1. OVERVIEW / EXECUTIVE SUMMARY */}
          <TabsContent value="overview" className="space-y-12 outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#2C402E]">
                  Executive Summary: The Squeezed Manager & Stretched Team
                </h2>
                <p className="text-base leading-relaxed">
                  In today's rapidly flattening corporate landscapes, middle managers face an unprecedented "span of control" crisis. Following organizational restructurings, managers like our persona, <strong>Marcus Mark</strong>, are finding their teams ballooning from 5 to 30 people overnight. Concurrently, organizations are demanding rapid, unstructured AI adoption under escalating annual targets.
                </p>
                <p className="text-base leading-relaxed">
                  However, as our mentor wisely noted, solving this challenge requires looking beyond the manager's immediate operational bandwidth. The true performance layer of any team is the <strong>human beings who execute the work</strong>. High-performing teams are not built on transactional efficiency, but on <strong>psychological safety, mutual trust, and collective creativity</strong>.
                </p>
                <div className="p-6 bg-[#E8EDE7] border-l-4 border-[#2C402E] space-y-2">
                  <h4 className="font-serif font-bold text-lg text-[#2C402E]">The Core Thesis</h4>
                  <p className="text-sm leading-relaxed">
                    We cannot solve the middle manager's scaling problem by forcing them to manage more. Instead, we must help them <strong>delegate authority</strong> and cultivate a <strong>self-organizing team culture</strong>. By using collaborative AI tools to offload administrative coordination, we can free up both manager and team bandwidth to reinvest in human relationships and collaborative innovation.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 bg-[#F6FAF5] border border-[#D1DDD8] p-6 space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#2C402E] border-b border-[#D1DDD8] pb-2">Research Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-serif font-bold text-[#D96C4A]">50%</div>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#2C402E] mt-1">Manager Burnout</p>
                    <p className="text-xs text-[#3A4F3C]/80 mt-1">Middle managers report feeling frequently overwhelmed (Deloitte, 2025).</p>
                  </div>
                  <div className="border-t border-[#D1DDD8] pt-4">
                    <div className="text-3xl font-serif font-bold text-[#D96C4A]">61%</div>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#2C402E] mt-1">Singapore Burnout</p>
                    <p className="text-xs text-[#3A4F3C]/80 mt-1">Singaporean employees experience chronic workplace burnout (Employment Hero, 2024).</p>
                  </div>
                  <div className="border-t border-[#D1DDD8] pt-4">
                    <div className="text-3xl font-serif font-bold text-[#D96C4A]">1 in 3</div>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#2C402E] mt-1">APAC Severe Distress</p>
                    <p className="text-xs text-[#3A4F3C]/80 mt-1">Workers experience severe anxiety, exceeding the global average of 1 in 4 (McKinsey, 2022).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Dimension Framework */}
            <div className="space-y-6 pt-6 border-t border-[#D1DDD8]">
              <h3 className="font-serif text-2xl font-bold text-[#2C402E] text-center">
                Our 4-Dimension Solution Framework
              </h3>
              <p className="text-center max-w-2xl mx-auto text-sm">
                Click on each dimension to see how our refined design strategy shifts the focus from purely operational scaling to human-centered resilience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
                {[
                  {
                    title: "Productivity Enhancement",
                    desc: "Moving away from output maximization. Focuses on sustainable productivity, reducing operational bottlenecks, and allowing the team to self-organize.",
                    icon: TrendingUp,
                    shift: "From 'Do More' to 'Do Smarter'"
                  },
                  {
                    title: "Wellbeing & Retention",
                    desc: "Fostering psychological safety and trust. Cultivating a supportive culture to combat the severe burnout prevalent in Singapore and APAC markets.",
                    icon: Heart,
                    shift: "From Burnout to Resilience"
                  },
                  {
                    title: "Influence & Collaboration",
                    desc: "Developing lateral influence and cross-functional collaboration. Empowering team members to lead initiatives without formal authority.",
                    icon: Users,
                    shift: "From Hierarchy to Teaming"
                  },
                  {
                    title: "AI & Incentive Structures",
                    desc: "Transitioning AI from an individual speedup tool to a collaborative partner. Using AI coaches to automate admin work and reclaim human connection.",
                    icon: Zap,
                    shift: "From AI Fatigue to Human Synergy"
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const isExpanded = expandedDimension === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setExpandedDimension(isExpanded ? null : idx)}
                      className={`p-6 border border-[#D1DDD8] cursor-pointer transition-all duration-200 ${isExpanded ? 'bg-[#2C402E] text-[#FDFDFB]' : 'bg-[#F6FAF5] hover:bg-[#E8EDE7]'}`}
                    >
                      <Icon className={`w-8 h-8 mb-4 ${isExpanded ? 'text-[#D96C4A]' : 'text-[#2C402E]'}`} />
                      <h4 className="font-serif font-bold text-lg mb-2">{item.title}</h4>
                      <div className={`text-xs uppercase tracking-wider font-bold mb-3 ${isExpanded ? 'text-[#D96C4A]' : 'text-[#D96C4A]'}`}>
                        {item.shift}
                      </div>
                      <p className={`text-sm leading-relaxed ${isExpanded ? 'text-[#FDFDFB]/90' : 'text-[#3A4F3C]/80'} ${isExpanded ? '' : 'line-clamp-3'}`}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* 2. CUSTOMER EMPATHY MAP */}
          <TabsContent value="empathy" className="space-y-12 outline-none">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-[#D1DDD8] pb-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#2C402E]">Customer Empathy Map</h2>
                <p className="text-sm text-[#3A4F3C]/80 mt-1">
                  Synthesized from global research, APAC burnout studies, and our team discussion.
                </p>
              </div>
              <div className="inline-flex border border-[#2C402E] p-1 bg-[#E8EDE7]">
                <button 
                  onClick={() => setSelectedPersona("manager")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${selectedPersona === "manager" ? "bg-[#2C402E] text-[#FDFDFB]" : "text-[#2C402E] hover:text-[#D96C4A]"}`}
                >
                  The Middle Manager (Marcus)
                </button>
                <button 
                  onClick={() => setSelectedPersona("team")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${selectedPersona === "team" ? "bg-[#2C402E] text-[#FDFDFB]" : "text-[#2C402E] hover:text-[#D96C4A]"}`}
                >
                  The Team Member (Individual)
                </button>
              </div>
            </div>

            {/* Persona Summary Block */}
            {selectedPersona === "manager" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F6FAF5] border border-[#D1DDD8] p-8">
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-16 h-16 bg-[#2C402E] text-[#FDFDFB] font-serif font-bold text-2xl flex items-center justify-center">MM</div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C402E]">Marcus Mark</h3>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#D96C4A]">Squeezed Middle Manager</p>
                  </div>
                  <div className="text-xs space-y-1 text-[#3A4F3C]/80">
                    <p><strong>Age:</strong> 35 years old</p>
                    <p><strong>Experience:</strong> 10+ years (Tech-adjacent)</p>
                    <p><strong>Location:</strong> Singapore</p>
                    <p><strong>Span of Control:</strong> Expanded from 5 to 30 people</p>
                  </div>
                </div>
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <Quote className="w-8 h-8 text-[#D96C4A] mb-2" />
                  <p className="font-serif italic text-xl text-[#2C402E] leading-relaxed">
                    "I am an organizational shock absorber. I absorb pressure from above and below, but no one is absorbing mine. I fear a transition to an IC role is inevitable if I cannot scale."
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F6FAF5] border border-[#D1DDD8] p-8">
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-16 h-16 bg-[#D96C4A] text-[#FDFDFB] font-serif font-bold text-2xl flex items-center justify-center">IC</div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C402E]">Individual Contributor</h3>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#D96C4A]">Stretched Team Member</p>
                  </div>
                  <div className="text-xs space-y-1 text-[#3A4F3C]/80">
                    <p><strong>Age:</strong> 24–32 years old</p>
                    <p><strong>Experience:</strong> 2–8 years (Tech & Operations)</p>
                    <p><strong>Environment:</strong> Flattened structures, high target pace</p>
                    <p><strong>Primary Need:</strong> Psychological safety & developmental growth</p>
                  </div>
                </div>
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <Quote className="w-8 h-8 text-[#D96C4A] mb-2" />
                  <p className="font-serif italic text-xl text-[#2C402E] leading-relaxed">
                    "AI is supposed to make me faster, but now I'm just expected to produce twice as much in the same time. I want to be creative, but we don't have the trust or safety to take risks."
                  </p>
                </div>
              </div>
            )}

            {/* Interactive Empathy Map Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              
              {/* SAYS */}
              <div 
                onMouseEnter={() => setHoveredPersona("says")}
                onMouseLeave={() => setHoveredPersona(null)}
                className={`p-8 border border-[#D1DDD8] transition-all duration-200 ${hoveredQuadrant === "says" ? "bg-[#E8EDE7] border-[#2C402E]" : "bg-[#FDFDFB]"}`}
              >
                <div className="flex items-center gap-3 border-b border-[#D1DDD8] pb-4 mb-4">
                  <div className="p-2 bg-[#2C402E] text-[#FDFDFB]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">SAYS</h3>
                </div>
                {selectedPersona === "manager" ? (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• "I don't have enough hours in the day to run 30 monthly 1-on-1s, let alone weekly check-ins."</li>
                    <li>• "We are told to adopt AI to save time, but learning these tools feels like another full-time job."</li>
                    <li>• "I need to find a way to influence my peers and executives because I no longer have formal authority."</li>
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• "My check-ins with my manager feel rushed and purely operational — not developmental."</li>
                    <li>• "AI is supposed to make me faster, but now I'm just expected to produce twice as much."</li>
                    <li>• "I want to collaborate and innovate, but we don't have the space or trust to take creative risks."</li>
                  </ul>
                )}
              </div>

              {/* THINKS */}
              <div 
                onMouseEnter={() => setHoveredPersona("thinks")}
                onMouseLeave={() => setHoveredPersona(null)}
                className={`p-8 border border-[#D1DDD8] transition-all duration-200 ${hoveredQuadrant === "thinks" ? "bg-[#E8EDE7] border-[#2C402E]" : "bg-[#FDFDFB]"}`}
              >
                <div className="flex items-center gap-3 border-b border-[#D1DDD8] pb-4 mb-4">
                  <div className="p-2 bg-[#2C402E] text-[#FDFDFB]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">THINKS</h3>
                </div>
                {selectedPersona === "manager" ? (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Worried:</strong> "If I cannot scale my management style, I will fail, and returning to an IC role is inevitable."</li>
                    <li>• <strong>Excited:</strong> "If we can leverage AI coaching correctly, I might finally free up time to focus on strategic leadership."</li>
                    <li>• <strong>Anxious:</strong> "Is my role becoming obsolete as organizations flatten and AI automates coordination?"</li>
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Worried:</strong> "If I speak up about being burnt out, I'll be seen as a low performer or unable to handle the pace."</li>
                    <li>• <strong>Excited:</strong> "AI could automate the boring parts of my job, freeing me up for genuine creative problem-solving."</li>
                    <li>• <strong>Anxious:</strong> "Does my manager actually know what I contribute, or am I just a line on a dashboard?"</li>
                  </ul>
                )}
              </div>

              {/* DOES */}
              <div 
                onMouseEnter={() => setHoveredPersona("does")}
                onMouseLeave={() => setHoveredPersona(null)}
                className={`p-8 border border-[#D1DDD8] transition-all duration-200 ${hoveredQuadrant === "does" ? "bg-[#E8EDE7] border-[#2C402E]" : "bg-[#FDFDFB]"}`}
              >
                <div className="flex items-center gap-3 border-b border-[#D1DDD8] pb-4 mb-4">
                  <div className="p-2 bg-[#2C402E] text-[#FDFDFB]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">DOES</h3>
                </div>
                {selectedPersona === "manager" ? (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Administrative Babysitting:</strong> Spends up to 10 hours a week chasing status updates and manually tracking tasks across 30 people.</li>
                    <li>• <strong>Workshop Attendance:</strong> Attends mandatory corporate AI workshops that focus on theory rather than practical, daily application.</li>
                    <li>• <strong>Relationship Trade-offs:</strong> Frequently cancels or reschedules 1-on-1s due to constant operational fire-fighting.</li>
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Transactional Execution:</strong> Focuses heavily on individual task completion to meet escalating annual targets, reducing collaborative touchpoints.</li>
                    <li>• <strong>Isolated AI Use:</strong> Adopts and uses AI tools in isolation, without a shared team strategy or collaborative framework.</li>
                    <li>• <strong>Siloed Communication:</strong> Limits communication to transactional Slack or Teams messages, missing the human element of work.</li>
                  </ul>
                )}
              </div>

              {/* FEELS */}
              <div 
                onMouseEnter={() => setHoveredPersona("feels")}
                onMouseLeave={() => setHoveredPersona(null)}
                className={`p-8 border border-[#D1DDD8] transition-all duration-200 ${hoveredQuadrant === "feels" ? "bg-[#E8EDE7] border-[#2C402E]" : "bg-[#FDFDFB]"}`}
              >
                <div className="flex items-center gap-3 border-b border-[#D1DDD8] pb-4 mb-4">
                  <div className="p-2 bg-[#2C402E] text-[#FDFDFB]">
                    <Smile className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">FEELS</h3>
                </div>
                {selectedPersona === "manager" ? (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Isolated:</strong> Caught in the middle of executive Return-to-Office (RTO) mandates and his team's demands for remote flexibility.</li>
                    <li>• <strong>Overwhelmed:</strong> Experiences chronic cognitive fatigue and a complete loss of personal work-life balance in Singapore.</li>
                    <li>• <strong>Under-appreciated:</strong> Feels that his emotional labor and the effort required to keep the team cohesive are completely invisible to leadership.</li>
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Disconnected:</strong> Lacking a sense of belonging and deep alignment with the team's mission and purpose.</li>
                    <li>• <strong>Exhausted:</strong> Struggling with high workload pressure compounded by cost-of-living stress in Singapore.</li>
                    <li>• <strong>Insecure:</strong> Experiencing underlying anxiety about job security as rapid AI adoption is pushed from the top.</li>
                  </ul>
                )}
              </div>
            </div>

            {/* PAIN & GAIN ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              
              {/* PAIN */}
              <div className="p-8 border border-[#D1DDD8] bg-[#FAF5F2]">
                <div className="flex items-center gap-3 border-b border-[#D1DDD8] pb-4 mb-4">
                  <div className="p-2 bg-[#A34E36] text-[#FDFDFB]">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#A34E36]">PAIN</h3>
                </div>
                {selectedPersona === "manager" ? (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Unmanageable Span of Control:</strong> Managing 30 direct reports overnight with zero structural or administrative support.</li>
                    <li>• <strong>The "Player-Coach" Fallacy:</strong> Expected to maintain high individual technical output while coaching a massive team.</li>
                    <li>• <strong>AI Adoption Fatigue:</strong> Constant workshops without practical, daily application or structured learning pathways.</li>
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Absence of Psychological Safety:</strong> Fear of speaking up, sharing divergent opinions, or taking creative risks due to a highly transactional environment.</li>
                    <li>• <strong>Loss of Mentorship:</strong> Rushed check-ins and a lack of professional development as the manager's bandwidth is stretched thin.</li>
                    <li>• <strong>"AI Speedup" Pressure:</strong> Efficiency gains from AI translate into an increased volume of tasks rather than creative breathing room.</li>
                  </ul>
                )}
              </div>

              {/* GAIN */}
              <div className="p-8 border border-[#D1DDD8] bg-[#F5FAF6]">
                <div className="flex items-center gap-3 border-b border-[#D1DDD8] pb-4 mb-4">
                  <div className="p-2 bg-[#2C402E] text-[#FDFDFB]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">GAIN</h3>
                </div>
                {selectedPersona === "manager" ? (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Strategic Leadership:</strong> Transitioning from a transactional task coordinator to an empathetic, strategic people leader.</li>
                    <li>• <strong>Sustainable Productivity:</strong> Achieving team targets without relying on constant overtime or risking team burnout.</li>
                    <li>• <strong>High-Trust Autonomy:</strong> Building a self-organizing team that operates effectively without constant supervision.</li>
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm leading-relaxed">
                    <li>• <strong>Job Autonomy:</strong> Having the freedom to define how work gets done and express collective creativity in daily tasks.</li>
                    <li>• <strong>Inclusive Belonging:</strong> Belonging to a high-trust team characterized by equal conversational turn-taking and mutual support.</li>
                    <li>• <strong>Sustainable Productivity:</strong> Achieving high performance while protecting personal wellbeing and work-life harmony.</li>
                  </ul>
                )}
              </div>

            </div>
          </TabsContent>

          {/* 3. INTERVIEW QUESTIONS */}
          <TabsContent value="questions" className="space-y-12 outline-none">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-[#2C402E]">Empathy Interview Guide</h2>
              <p className="text-base leading-relaxed max-w-3xl">
                These questions are designed to move beyond transactional metrics and surface unarticulated needs, fears, and psychological states. Following our mentor's guidance, the observation journey must begin with the individual team members before validating perceptions with managers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Manager Questions */}
              <div className="space-y-6">
                <div className="p-4 bg-[#E8EDE7] border-l-4 border-[#2C402E]">
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">For Middle Managers</h3>
                  <p className="text-xs uppercase tracking-wider font-bold text-[#D96C4A] mt-1">Uncovering the Human Behind the Role</p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      q: "1. Tell me about a time your team was at its absolute best. What was your role in that moment?",
                      intent: "Surfaces the manager's core leadership values, their definition of team success, and what triggers their professional pride."
                    },
                    {
                      q: "2. How has your daily interaction with your team changed since your restructuring?",
                      intent: "Uncovers the direct impact of the expanded span of control on relationship quality, and maps where communication is breaking down."
                    },
                    {
                      q: "3. Walk me through the last time you were asked to implement a new AI tool. What happened?",
                      intent: "Identifies structural barriers to AI adoption, the presence or absence of structured support, and feelings of AI fatigue."
                    },
                    {
                      q: "4. What is the biggest barrier stopping you from being the leader you want to be?",
                      intent: "Directly highlights systemic blockages, bandwidth constraints, and the emotional toll of the 'player-coach' dilemma."
                    },
                    {
                      q: "5. How do you think your team members feel about the current pace and targets?",
                      intent: "Measures the manager's empathy level and awareness of team burnout, revealing gaps between management and ground reality."
                    },
                    {
                      q: "6. If you had 5 extra hours per week, what would you invest them in?",
                      intent: "Surfaces unarticulated desires and high-value leadership activities that are currently being crowded out by administrative work."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-[#D1DDD8] pb-4 space-y-2">
                      <p className="font-serif font-bold text-base text-[#2C402E]">{item.q}</p>
                      <p className="text-xs text-[#3A4F3C]/80 italic"><strong>Design Intent:</strong> {item.intent}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Member Questions */}
              <div className="space-y-6">
                <div className="p-4 bg-[#FAF5F2] border-l-4 border-[#D96C4A]">
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">For Individual Team Members</h3>
                  <p className="text-xs uppercase tracking-wider font-bold text-[#D96C4A] mt-1">Starting Where Performance Lives</p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      q: "1. What does a great day at work look like for you? Tell me about a recent moment you felt genuinely excited or proud.",
                      intent: "Surfaces intrinsic motivators, moments of creative flow, and the baseline conditions required for individual thriving."
                    },
                    {
                      q: "2. When you have a creative or unconventional idea, how do you share it? What usually happens next?",
                      intent: "Directly tests for psychological safety, checking if the team culture supports divergent thinking or punishes risk-taking."
                    },
                    {
                      q: "3. Describe a recent time you felt overwhelmed. What support did you receive from your manager or peers?",
                      intent: "Uncovers the presence of a safety net, peer-to-peer collaboration, and whether the manager has bandwidth for support."
                    },
                    {
                      q: "4. How has AI changed your daily work — has it given you more space to think, or has it just increased your task volume?",
                      intent: "Identifies 'AI speedup' pressure, distinguishing between genuine cognitive offloading and transactional task amplification."
                    },
                    {
                      q: "5. What does 'high performance' mean to you beyond hitting your numbers or targets?",
                      intent: "Contrasts operational metrics with human capabilities like trust and creativity, revealing alignment with the team's mission."
                    },
                    {
                      q: "6. What would make you feel truly proud of your team's work six months from now?",
                      intent: "Surfaces long-term aspirations, developmental desires, and what kind of collective impact team members want to drive."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-[#D1DDD8] pb-4 space-y-2">
                      <p className="font-serif font-bold text-base text-[#2C402E]">{item.q}</p>
                      <p className="text-xs text-[#3A4F3C]/80 italic"><strong>Design Intent:</strong> {item.intent}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </TabsContent>

          {/* 4. REFINED HMW STATEMENT */}
          <TabsContent value="hmw" className="space-y-12 outline-none">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-3xl font-serif font-bold text-[#2C402E]">Refining the "How Might We" Statement</h2>
              <p className="text-base leading-relaxed">
                A high-performing "How Might We" statement must define **who we are helping**, **what they need to do**, and **what specific outcome we want**. Based on our team's discussion, our mentor's feedback, and open-source research, we have crafted three refined options that place human beings at the center of the performance equation.
              </p>
            </div>

            {/* Original vs Refined Contrast Banner */}
            <div className="border border-[#D1DDD8] bg-[#F6FAF5] p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96C4A]">Original Statement</span>
                  <p className="font-serif italic text-lg text-[#3A4F3C] mt-1">
                    "How might we help a high performing middle manager scale their team's productivity?"
                  </p>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <ArrowRight className="w-8 h-8 text-[#D96C4A] rotate-90 lg:rotate-0" />
                </div>
                <div className="lg:col-span-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2C402E]">The Core Limitation</span>
                  <p className="text-sm leading-relaxed mt-1">
                    Focused exclusively on the manager and operational output. Treated the team as an operational machine to be scaled, rather than a group of human beings who require psychological safety, trust, and space for creative collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Refined Options */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Option 1 */}
              <div className="border border-[#2C402E] bg-[#FDFDFB] p-8 space-y-6 relative flex flex-col justify-between">
                <div className="absolute -top-3 left-6 bg-[#2C402E] text-[#FDFDFB] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  Option 1: Recommended Pathway
                </div>
                <div className="space-y-4 pt-2">
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">Trust & Autonomy</h3>
                  <p className="font-serif italic text-base text-[#3A4F3C] leading-relaxed">
                    "How might we <span className="text-[#D96C4A] font-bold">empower overloaded middle managers</span> to cultivate self-organizing, high-trust team cultures, so that team members gain the <span className="text-[#D96C4A] font-bold">autonomy to drive collective creativity</span> and sustainable productivity?"
                  </p>
                </div>
                <div className="space-y-3 border-t border-[#D1DDD8] pt-4 text-xs">
                  <p><strong>Who We Help:</strong> Overloaded managers & stretched team members.</p>
                  <p><strong>What They Need to Do:</strong> Shift from transactional control to decentralized trust.</p>
                  <p><strong>Desired Outcome:</strong> Autonomy unlocks collective creativity and sustainable output.</p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="border border-[#D1DDD8] bg-[#FDFDFB] p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">Sustainable Thriving</h3>
                  <p className="font-serif italic text-base text-[#3A4F3C] leading-relaxed">
                    "How might we <span className="text-[#D96C4A] font-bold">support flattened teams</span> in navigating rapid AI adoption and escalating targets, so that they can <span className="text-[#D96C4A] font-bold">protect their wellbeing</span> while unlocking collaborative innovation?"
                  </p>
                </div>
                <div className="space-y-3 border-t border-[#D1DDD8] pt-4 text-xs">
                  <p><strong>Who We Help:</strong> Flat organizational teams facing intense market pressure.</p>
                  <p><strong>What They Need to Do:</strong> Integrate AI tools and manage high workloads collectively.</p>
                  <p><strong>Desired Outcome:</strong> Break the link between productivity and burnout, fostering wellbeing.</p>
                </div>
              </div>

              {/* Option 3 */}
              <div className="border border-[#D1DDD8] bg-[#FDFDFB] p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#2C402E]">Human-AI Synergy</h3>
                  <p className="font-serif italic text-base text-[#3A4F3C] leading-relaxed">
                    "How might we <span className="text-[#D96C4A] font-bold">leverage collaborative AI tools</span> to offload administrative burdens from managers and teams, so that they can reinvest bandwidth into <span className="text-[#D96C4A] font-bold">building deep human relationships</span>, trust, and creative collaboration?"
                  </p>
                </div>
                <div className="space-y-3 border-t border-[#D1DDD8] pt-4 text-xs">
                  <p><strong>Who We Help:</strong> Managers with unmanageable spans of control & disconnected teams.</p>
                  <p><strong>What They Need to Do:</strong> Use AI as a collaborative partner rather than a personal tool.</p>
                  <p><strong>Desired Outcome:</strong> Reclaim the "human element" of work to foster team cohesion.</p>
                </div>
              </div>

            </div>

            {/* Why We Recommend Option 1 */}
            <div className="border border-[#D1DDD8] bg-[#F6FAF5] p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#2C402E]">Why We Recommend Option 1</h3>
              <p className="text-base leading-relaxed">
                Option 1 is the most comprehensive and robust pathway because it addresses the structural root cause of the crisis: the **unmanageable span of control**. 
              </p>
              <p className="text-base leading-relaxed">
                By shifting the manager's role from a **transactional task enforcer** to a **culture cultivator**, we allow the team to become **self-organizing**. This directly aligns with Google's Project Aristotle research, which proved that psychological safety and equal voice are the primary drivers of high performance. When team members have the autonomy to self-organize, they naturally unlock their collective creativity and collaboration, creating a resilient and sustainable high-performance culture that protects personal wellbeing.
              </p>
            </div>
          </TabsContent>

        </Tabs>
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-[#D1DDD8] bg-[#E8EDE7] py-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C402E]">TEAM RESILIENCE</h4>
            <p className="text-[#3A4F3C]/80 leading-relaxed">
              A design thinking project dedicated to redefining high performance, resilience, and human-centered collaboration in the AI era.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C402E]">RESEARCH ANCHORS</h4>
            <p className="text-[#3A4F3C]/80 leading-relaxed">
              Deloitte Human Capital Trends (2025/2026) &bull; McKinsey AI Workplace Reports (2025) &bull; Google Project Aristotle (2014) &bull; Employment Hero Singapore (2024)
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C402E]">PROJECT LINKS</h4>
            <div className="flex flex-col gap-2">
              <a href="manus-slides://5avzELx4HkHXSmEEtGtQfW" className="hover:text-[#D96C4A] transition-colors font-bold uppercase tracking-wider">
                &rarr; Open Presentation Slide Deck
              </a>
              <span className="text-[#3A4F3C]/60">Created with care by Middle Managers &bull; May 2026</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
