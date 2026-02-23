import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Activity, 
  ShieldAlert, 
  FileCode2, 
  Wrench, 
  Kanban, 
  LineChart,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIWorkflow = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const aiApplications = [
    {
      title: "Infrastructure Monitoring & Anomaly Detection",
      desc: "Our infrastructure monitoring stack uses AI-assisted analysis to detect performance degradation, resource bottlenecks, and unusual behavior patterns -hours before they would show up as actual incidents.",
      icon: <Activity size={32} />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Automated Security Threat Detection",
      desc: "We use AI-powered security monitoring tools that analyze log data, network traffic, and user behavior to flag potential threats in real time -reducing the window between breach and response dramatically.",
      icon: <ShieldAlert size={32} />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Software Development Assistance",
      desc: "Our development team uses AI-assisted coding tools to improve code quality, catch bugs earlier, generate test cases, and accelerate development cycles -so projects ship faster without cutting corners on quality.",
      icon: <FileCode2 size={32} />,
      colSpan: "md:col-span-1"
    },
    {
      title: "IT Support Diagnostics",
      desc: "When support tickets come in, our team uses AI-assisted diagnostic tools to quickly identify root causes -pulling from historical incident data to surface the most likely fix first, reducing resolution time significantly.",
      icon: <Wrench size={32} />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Project Management & Delivery Tracking",
      desc: "We use AI-assisted project management tools to track timelines, identify risks early, and keep communication between our team and clients tight -so nothing slips through the cracks.",
      icon: <Kanban size={32} />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Data Analysis & Reporting",
      desc: "For clients who need visibility into their IT environment's health, we use AI-assisted reporting tools that surface meaningful insights from raw monitoring data -in plain language, not just dashboards full of numbers.",
      icon: <LineChart size={32} />,
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <div className="bg-[#F4F4F2] pt-32 pb-0 text-[#1A1A1A]">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-24 h-24 bg-[#E9EDC9] rounded-full flex items-center justify-center mb-10 shadow-[0_0_60px_rgba(233,237,201,0.6)]"
          >
            <Bot size={40} className="text-[#3A5A40]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-[90px] font-black tracking-tighter leading-[0.9] mb-10"
          >
            HOW WE USE AI TO <br className="hidden md:block" />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>DELIVER BETTER IT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-[#3A5A40] font-medium leading-relaxed max-w-4xl"
          >
            We're not just talking about AI -we're using it daily, inside our own operations, to deliver faster, smarter, and more reliable IT services for every client.
          </motion.p>
        </div>
      </section>

      {/* --- OUR PHILOSOPHY --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden relative"
          >
            {/* Updated Image URL for better vibe */}
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop" 
              alt="AI Tech Abstract" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/20 mix-blend-multiply" />
          </motion.div>
          
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              A lot of companies are adding 'AI' to their marketing. We've added it to our actual work.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>At Balaji Info Techline, artificial intelligence isn't a product we sell -it's a tool we use internally to improve how we deliver services. From the way we monitor infrastructure to the way we develop software and diagnose security threats, AI is woven into our daily workflows.</p>
              <p>The result? Faster turnaround. Fewer errors. Earlier detection. Smarter recommendations. And ultimately -better outcomes for the businesses we work with.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHERE WE USE AI (Dark Bento Grid) --- */}
      <section className="px-6 py-32 bg-[#1A1A1A] text-[#F4F4F2] rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Where We Use AI</h2>
            <div className="w-24 h-1 bg-[#E9EDC9]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiApplications.map((app, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors group ${app.colSpan}`}
              >
                <div className="w-16 h-16 bg-[#3A5A40] rounded-2xl flex items-center justify-center mb-8 text-[#E9EDC9] group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">{app.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY THIS MATTERS FOR YOU --- */}
      <section className="px-6 py-32 bg-[#E9EDC9] text-[#1A1A1A]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#3A5A40] mb-8">Why This Matters For You</h2>
            <p className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.2]">
              When your IT partner uses AI in their own workflows, you benefit directly: things get done faster, problems surface sooner, and the quality bar rises. <br className="hidden md:block" />
              <span className="text-[#3A5A40]">You don't need to understand the AI -you just experience the results.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="px-6 py-32 bg-[#F4F4F2]">
        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">Experience IT Services Built for the Age of AI.</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 bg-[#1A1A1A] text-[#F4F4F2] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            Talk to Our Team <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default AIWorkflow;