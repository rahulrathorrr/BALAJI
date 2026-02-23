import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const servicesData = [
    {
      num: "01",
      title: "Infrastructure & Cloud Services",
      desc1: "Your infrastructure is the foundation everything else runs on. Get it right, and it becomes your competitive advantage. Get it wrong, and you're constantly firefighting.",
      desc2: "We design and deploy cloud and hybrid infrastructure tailored to your specific workloads, team size, and growth trajectory. Using AI-assisted monitoring in our operations, we keep your environment performing at its best -and catch issues before they ever reach your users.",
      includes: [
        "Cloud architecture design, setup, and configuration",
        "Server provisioning and ongoing management (virtual & physical)",
        "Hybrid and multi-cloud environment design",
        "Disaster recovery planning, setup, and tested DR procedures",
        "Infrastructure cost auditing and right-sizing",
        "AI-assisted performance monitoring and anomaly detection"
      ],
      builtFor: "Startups setting up their first production environment, SMEs moving off ageing hardware, and growing businesses whose infrastructure hasn't kept pace with them.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
    },
    {
      num: "02",
      title: "Networking & Connectivity",
      desc1: "Your network is the nervous system of your business. A fast, stable, and secure network is something you should never have to think about -because it just works. That's what we build.",
      desc2: "From single-office LAN setups to multi-site WAN architectures with distributed remote teams, we design, deploy, and manage networks that keep your people connected and your data flowing -without interruption.",
      includes: [
        "LAN/WAN design and full deployment",
        "VPN configuration and secure remote access solutions",
        "Enterprise wireless network design and rollout",
        "24/7 network monitoring using AI-assisted traffic analysis",
        "Structured cabling -organized, labeled, and documented",
        "Network security hardening: segmentation, access controls, firewall rules"
      ],
      builtFor: "Offices setting up new networks, businesses expanding to multiple locations, and teams that have outgrown their current connectivity setup.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      num: "03",
      title: "Cybersecurity Services",
      desc1: "Cyber threats don't discriminate. Small businesses in India are being targeted more than ever -not less. The idea that you're too small to be a target is exactly what attackers count on.",
      desc2: "We take a layered approach to security. Instead of selling you one tool and walking away, we assess your full attack surface and build defenses across every layer. Our AI-assisted threat monitoring means we detect and respond to anomalies faster than traditional approaches.",
      includes: [
        "Vulnerability assessment and controlled penetration testing",
        "Firewall configuration and endpoint protection deployment",
        "24/7 AI-assisted security monitoring and incident response",
        "Email security and anti-phishing solutions",
        "Security audits and compliance support (IT Act 2000, GDPR, industry standards)",
        "Security awareness training for your team"
      ],
      builtFor: "Any business that stores customer data, processes payments, or simply cannot afford a breach -which is every business.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      num: "04",
      title: "Data Management & Storage",
      desc1: "Your data is one of your most valuable assets -but only if it's safe, accessible, and trustworthy. Data loss is catastrophic. Data chaos isn't far behind.",
      desc2: "We build data infrastructure you can actually rely on: well-designed databases, reliable automated backups with real tested recovery procedures, smart storage architecture, and AI-assisted analytics that help you make sense of what you're storing.",
      includes: [
        "Database design, setup, and ongoing administration (relational, NoSQL, data warehouse)",
        "Cloud and on-premise storage architecture -sized to your needs",
        "Automated backup systems with defined RTO/RPO targets",
        "Tested disaster recovery and data archiving procedures",
        "Data migration and system integration -carefully planned, zero-downtime where possible",
        "AI-assisted data analytics and operational insights"
      ],
      builtFor: "Businesses handling sensitive customer or operational data, teams managing large data volumes, and organizations preparing for compliance requirements.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      num: "05",
      title: "Software Development & Engineering",
      desc1: "There's a lot of software that looks great in a demo and falls apart in production. We've seen it. We've fixed it. And we've made sure we don't build it.",
      desc2: "Our engineering team builds software with production in mind from the very first line -clean architecture, proper testing, full documentation, and AI-powered features that make your product genuinely more intelligent. Whether it's your first MVP or a decade-old system that needs modernizing, we bring the same engineering discipline to every project.",
      includes: [
        "Custom web application development -portals, SaaS platforms, internal tools",
        "Mobile app development -Android, iOS, and cross-platform",
        "API development and third-party integrations (payments, CRMs, ERPs, and more)",
        "AI and machine learning feature integration -NLP, predictive analytics, automation",
        "Legacy system assessment and incremental modernization",
        "Quality assurance, automated testing, and pre-launch security review"
      ],
      approach: "Tight iteration cycles. Constant communication. AI-assisted project tracking so nothing slips. You always know what's happening with your build.",
      builtFor: "Startups building their first product, businesses with outdated internal software, and teams that need custom tools their off-the-shelf solutions can't provide.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
    },
    {
      num: "06",
      title: "IT Support & Managed Services",
      desc1: "Most growing businesses don't need a full in-house IT department -they need a reliable IT partner who handles everything without needing to be micromanaged. That's exactly what our managed services offering is.",
      desc2: "We take ownership of your IT environment -monitoring it, patching it, supporting your team, and managing your vendors -proactively. Not after something breaks. Before it does. Our AI-assisted monitoring tools give us real-time visibility across your entire IT estate, so problems surface early and stay small.",
      includes: [
        "Helpdesk and remote support -fast responses, real people, actual fixes",
        "24/7 proactive system monitoring using AI-assisted alerting tools",
        "Patch management and scheduled OS, application, and firmware updates",
        "IT asset management -every device, license, and warranty tracked",
        "Vendor management -we deal with your ISP, hardware, and software vendors",
        "IT consulting and technology roadmap planning"
      ],
      plans: "We offer flexible managed services plans for small businesses, growing teams, and larger operations. All plans are customizable and month-to-month.",
      builtFor: "Businesses without a dedicated IT team, fast-growing startups, and organizations that want IT handled completely so they can focus on their core work.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#F4F4F2] pt-32 pb-20 text-[#1A1A1A]">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[100px] font-black tracking-tighter leading-none mb-8"
          >
            WHAT WE DO
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-[#3A5A40] font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Full-spectrum IT services -built for startups, SMEs, and enterprises that refuse to let technology slow them down. One partner. Every IT need. Zero compromises.
          </motion.p>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-[#1A1A1A]/5">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">One Partner. Every IT Need Covered.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>At Balaji Info Techline, we've built our service portfolio around a simple belief: your IT should work as hard as you do. Whether you need to set up cloud infrastructure from scratch, lock down your cybersecurity, build a custom software product, or just have a reliable team handling your day-to-day IT -we've got all of it covered under one roof.</p>
              <p>What makes us different from typical IT vendors is how we operate. We embed AI into our own delivery, monitoring, and diagnostic workflows -which means faster project delivery, earlier threat detection, and smarter recommendations for every client we work with. You get the benefit of that without needing to think about it.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <div className="space-y-12 md:space-y-32">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={index} className="px-6 relative overflow-hidden py-10">
              {/* Giant Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[350px] font-black text-[#1A1A1A]/[0.02] select-none pointer-events-none z-0">
                {service.num}
              </div>

              <div className={`max-w-7xl mx-auto flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center relative z-10`}>
                
                {/* Image Side */}
                <motion.div 
                  {...fadeIn} 
                  className="w-full md:w-1/2"
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-200">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  {...fadeIn} 
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-black text-[#3A5A40] tracking-widest">{service.num} —</span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1]">{service.title}</h2>
                  </div>

                  <div className="space-y-6 text-slate-600 mb-10 text-lg leading-relaxed">
                    <p>{service.desc1}</p>
                    <p>{service.desc2}</p>
                  </div>

                  <div className="mb-10 p-8 bg-white rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#1A1A1A] mb-6">What's included:</h4>
                    <ul className="space-y-4">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start text-slate-700">
                          <CheckCircle2 size={18} className="text-[#3A5A40] shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.approach && (
                    <div className="mb-8">
                      <h4 className="inline text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Our approach: </h4>
                      <span className="text-slate-600">{service.approach}</span>
                    </div>
                  )}

                  {service.plans && (
                    <div className="mb-8">
                      <h4 className="inline text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Plans: </h4>
                      <span className="text-slate-600">{service.plans}</span>
                    </div>
                  )}

                  <div className="p-6 bg-[#E9EDC9]/30 rounded-2xl border border-[#3A5A40]/10">
                    <h4 className="inline text-xs font-black uppercase tracking-widest text-[#3A5A40]">Built for: </h4>
                    <span className="text-[#1A1A1A] font-medium">{service.builtFor}</span>
                  </div>

                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* --- BOTTOM CTA SECTION --- */}
      <section className="px-6 mt-32">
        <motion.div 
          {...fadeIn}
          className="max-w-5xl mx-auto bg-[#1A1A1A] text-[#F4F4F2] p-12 md:p-20 rounded-[3rem] text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every business has different IT needs. Let's have a real conversation about yours. Our team will assess your current setup and point you in the right direction -no pressure, no jargon, no sales pitch.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-[#E9EDC9] text-[#1A1A1A] px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-colors"
          >
            Get a Free IT Assessment <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;