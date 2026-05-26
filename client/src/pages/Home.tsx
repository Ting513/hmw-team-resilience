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
  Award,
  Globe,
  Gauge
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
            <a href="manus-slides://KJV1JbKhu4IYYCjzFV91d3" className="inline-flex items-center justify-center px-4 py-2 border border-[#2C402E] text-xs font-bold uppercase tracking-wider text-[#2C402E] hover:bg-[#2C402E] hover:text-[#FDFDFB] transition-all duration-200">
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
              How do we scale productivity in the AI era without sacrificing humanity? This project explores the structural tensions of middle managers caught in the "Manager Crunch", shifting the goal from sheer operational speed to a sustainable culture of <strong>creativity, collaboration, and trust</strong>.
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
                <span>— Himmat</span>
              </footer>
            </blockquote>
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-bold uppercase tracking-wider text-[#2C402E]">
              <div className="p-3 border border-[#D1DDD8] bg-[#FDFDFB]">
                <div className="text-[#D96C4A] text-xl font-serif font-bold mb-1">From</div>
                Scale Productivity
              </div>
              <div className="p-3 border border-[#D1DDD8] bg-[#FDFDFB]">
                <div className="text-[#2C402E] text-xl font-serif font-bold mb-1">To</div>
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
                  Executive Summary: Navigating the "Manager Crunch"
                </h2>
                <p className="text-base leading-relaxed">
                  Middle managers are the vital, yet often forgotten, connectors between strategy and execution. Today, they find themselves trapped in a structural <strong>"Manager Crunch"</strong> — squeezed from above by demands for rapid AI adoption and escalating targets, and squeezed from below by managing an unmanageable span of control (often ballooning from 5 to 30 people) and motivating an overwhelmed team.
                </p>
                <p className="text-base leading-relaxed">
                  As our project mentor, <strong>Himmat</strong>, pointed out, solving this challenge requires a human-centered reframe. High-performing, resilient teams are not built on transactional speed or task throughput, but on <strong>psychological safety, mutual trust, and collective creativity</strong>. The observation journey must start with the individual team members who perform, rather than just the manager's administrative bottleneck.
                </p>
                <div className="p-6 bg-[#E8EDE7] border-l-4 border-[#2C402E] space-y-2">
                  <h4 className="font-serif font-bold text-lg text-[#2C402E]">The Core Thesis</h4>
                  <p className="text-sm leading-relaxed">
                    We cannot solve the middle manager's scaling problem by forcing them to manage more. Instead, we must help them <strong>delegate authority</strong> and cultivate a <strong>self-organizing team culture</strong>. By using collaborative AI tools to offload administrative coordination, we can free up both manager and team bandwidth to reinvest in human relationships, trust, and collaborative innovation.
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
                    <p><strong>Span of Control:</strong> Expanded from 5 to 30 people (M3 to M1)</p>
                  </div>
                </div>
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <Quote className="w-8 h-8 text-[#D96C4A] mb-2" />
                  <p className="font-serif italic text-xl text-[#2C402E] leading-relaxed">
                    "I am an organizational shock absorber. Squeezed between delivering strategy, increasing AI adoption, and motivating an overwhelmed team. Expected to do more with less, but not always unempowered to make decisions."
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
                    <li>• "Managing is getting harder today."</li>
                    <li>• "Managing across geographies is a challenge."</li>
                    <li>• "I don't have enough hours in the day to run 30 monthly 1-on-1s, let alone coach my people."</li>
                    <li>• "We are told to adopt AI to save time, but learning these tools feels like another full-time job."</li>
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
                    <li>• <strong>Worried about AI:</strong> "How will AI impact my or my team's roles? How do I keep my team engaged and safe when they are terrified of being replaced by the very AI agents I'm telling them to use?"</li>
                    <li>• <strong>Worried about processes:</strong> "Will neat, highly structured processes make us easier to lay off? How do we improve data quality and show genuine value-add to our organization?"</li>
                    <li>• <strong>Worried about partnership:</strong> "How do I convince the business to treat us as true strategic partners rather than just an execution engine?"</li>
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
                    <li>• <strong>Navigates Conflicting Pressures:</strong> Simultaneously manages expectations up (executives), down (direct reports), and across (peers).</li>
                    <li>• <strong>High Communication & Adapting:</strong> Constantly adapts communication to different styles and regional team dynamics.</li>
                    <li>• <strong>Deliberate Relationship Building:</strong> Explains logic behind work requested, connects on a personal level when work permits, and sets regular check-ins.</li>
                    <li>• <strong>Administrative Overhead:</strong> Spends up to 10 hours a week chasing status updates and managing administrative "babysitting" across 30 people.</li>
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
                    <li>• <strong>The "Manager Crunch":</strong> Feels exhausted, squeezed, and structurally isolated as the "piggy in the middle" of the organization.</li>
                    <li>• <strong>Under-resourced & Unempowered:</strong> Expected to do more with less, and not always empowered to make critical decisions.</li>
                    <li>• <strong>Cognitive Fatigue:</strong> Exhausted by the high cognitive load of managing regular work, learning AI, and context-switching between human and AI modes.</li>
                    <li>• <strong>Anxious about Metrics:</strong> Anxious about being judged on operational speed (task throughput) rather than creative quality.</li>
                    <li>• <strong>Frustrated & Stressed:</strong> Frustrated when strategic experiments don't work out, yet feels constant stress to deliver regular results.</li>
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
                    <li>• <strong>Value Mismatch:</strong> Disconnect between what they value personally (coaching and developing talent) and what the organization rewards (individual task output).</li>
                    <li>• <strong>Data Quality Limits:</strong> Poor data quality limits deep analysis, forcing managers to spend hours fixing raw data rather than planning strategically.</li>
                    <li>• <strong>Regional Capability Gaps:</strong> Staff in other geographic regions might be less capable or motivated, making cross-boundary management highly difficult.</li>
                    <li>• <strong>Unmanageable Span of Control:</strong> Managing 30 direct reports overnight with zero structural or administrative support.</li>
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
                    <li>• <strong>Recognition for Culture:</strong> Desires organizational appreciation and rewards for building resilient, high-performing, and creative team cultures, rather than just delivering immediate task output.</li>
                    <li>• <strong>Job Stability:</strong> Long-term security in their role as strategic leaders rather than fearing layoffs due to automation or flattening.</li>
                    <li>• <strong>Regular Growth & Learning:</strong> Access to structured, practical learning journeys to navigate AI-driven management and new ways of working.</li>
                    <li>• <strong>Building a Good Team:</strong> Building a highly capable, self-organizing team that drives sustained, creative results.</li>
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
                      q: "1. Walk me through how your daily interaction with your team members has changed since your restructuring.",
                      intent: "Uncovers the direct impact of the expanded span of control on relationship quality, and maps where communication is breaking down."
                    },
                    {
                      q: "2. How do you keep your team engaged and feeling safe when they are terrified of being replaced by the very AI agents you're telling them to use?",
                      intent: "Explores how managers navigate the psychological tension of pushing AI tools onto teams who fear those same tools will automate their roles."
                    },
                    {
                      q: "3. What is the biggest barrier preventing you from moving from a 'task coordinator' to a 'people coach'?",
                      intent: "Directly highlights systemic blockages, bandwidth constraints, and the emotional toll of the 'player-coach' dilemma and organizational reward systems."
                    },
                    {
                      q: "4. If you had 5 extra hours per week, what would you invest them in?",
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
                      q: "1. What does a great day at work look like for you? Tell me about a recent project where you felt genuinely excited to log in.",
                      intent: "Surfaces intrinsic motivators, moments of creative flow, and the baseline conditions required for individual thriving."
                    },
                    {
                      q: "2. When you have a creative or unconventional idea, how do you share it? What usually happens?",
                      intent: "Directly tests for psychological safety, checking if the team culture supports divergent thinking or punishes risk-taking."
                    },
                    {
                      q: "3. Describe a recent situation where you felt overwhelmed by your workload. What support did you receive?",
                      intent: "Uncovers the presence of a safety net, peer-to-peer collaboration, and whether the manager has bandwidth for support."
                    },
                    {
                      q: "4. How has the introduction of AI tools changed your daily work? Do you feel it has given you more space to think, or just more tasks to do?",
                      intent: "Identifies 'AI speedup' pressure, distinguishing between genuine cognitive offloading and transactional task amplification."
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
                    "How might we <span className="text-[#D96C4A] font-bold">support flattened, geographically distributed teams</span> in navigating rapid AI adoption and escalating targets, so that they can <span className="text-[#D96C4A] font-bold">protect their wellbeing</span> while unlocking collaborative innovation?"
                  </p>
                </div>
                <div className="space-y-3 border-t border-[#D1DDD8] pt-4 text-xs">
                  <p><strong>Who We Help:</strong> Flat, geographically distributed teams facing intense market pressure.</p>
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
                Option 1 is the most comprehensive and robust pathway because it addresses the structural root cause of the crisis: the **unmanageable span of control** and the **Manager Crunch**. 
              </p>
              <p className="text-base leading-relaxed">
                By shifting the manager's role from a **transactional task enforcer** to a **culture cultivator**, we allow the team to become **self-organizing**. This directly aligns with Google's Project Aristotle research, which proved that psychological safety and equal voice are the primary drivers of high performance. When team members have the autonomy to self-organize, they naturally unlock their collective creativity and collaboration, creating a resilient and sustainable high-performance culture that protects personal wellbeing and addresses regional motivation gaps.
              </p>
            </div>
          </TabsContent>

        </Tabs>
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-[#D1DDD8] bg-[#E8EDE7] py-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C402E]">Team Resilience</h4>
            <p className="text-[#3A4F3C]/80 leading-relaxed">
              A design thinking project dedicated to redefining high-performance in the era of rapid flattening and AI integration.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C402E]">Research References</h4>
            <ul className="space-y-1 text-[#3A4F3C]/80">
              <li>• Deloitte Global Human Capital Trends (2025)</li>
              <li>• McKinsey Health Institute APAC Burnout Study (2022)</li>
              <li>• Google Project Aristotle Team Research (2014)</li>
              <li>• Employment Hero Singapore Burnout Report (2024)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C402E]">Project Mentor</h4>
            <p className="text-[#3A4F3C]/80 leading-relaxed">
              Himmat — Guiding the transition from operational excellence to human-centered creative thriving.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
