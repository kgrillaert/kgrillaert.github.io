/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpertAdvisors = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-40 pt-16 border-t border-stone-200">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group text-left"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-stone-900 font-medium group-hover:text-nobel-gold transition-colors">
          Expert Advisors
        </h2>
        <div className={`p-4 rounded-full border border-stone-200 group-hover:border-nobel-gold transition-all duration-300 ${isExpanded ? 'rotate-180 bg-stone-50' : ''}`}>
          <ChevronDown className="w-6 h-6 text-stone-600 group-hover:text-nobel-gold transition-colors" />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-12 pb-8">
          <div className="bg-stone-50 rounded-2xl p-12 text-center border border-stone-100">
            <p className="text-stone-500 font-light tracking-widest uppercase text-sm">
              Coming Soon
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TEAM_MEMBERS = [
  {
    name: "Katie Grillaert",
    image: "/katie.png",
    role: "Chief Executive Officer",
    paragraphs: [
      "Katie Grillaert has spent her career as a translator: between humans and animals, between technologists and the communities their systems affect, and between innovation and accountability. Trained as an animal behaviorist, she built her foundation in applied, interdisciplinary research where ethics was a core design principle, learning to ask not just what animals can do, but what it is fair to ask of them, and how. Today, as CEO of Equitable Labs, she brings that same ethical rigor to AI. She specializes in secure and responsible implementation of AI-driven technology for high-risk algorithms in critical sectors including healthcare, finance, education, and critical infrastructure. This work requires her to ask the same fundamental question: not just what AI can do, but where and how it should be deployed, and who is affected by those choices.",
      <>A ForHumanity Fellow in AI governance and ethics, Katie has led policy accelerators advancing ethical frameworks, regulatory alignment, and oversight of high-risk technologies.<sup><a href="https://forhumanity.center/forhumanity-fellows/" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">1</a></sup> Her work focuses on sociotechnical risk, responsible model deployment, and ensuring AI systems meet evolving legal, ethical, and organizational standards. Outside her formal roles, Katie is a passionate educator on how AI can advance or undermine equity, bringing those conversations to classrooms, organizations, and communities who are rarely at the table when AI decisions are made. Katie has contributed to developing auditable certification schemes under the EU AI Act and has worked toward a globally harmonized scheme through ForHumanity, advancing independent audit frameworks that bring accountability and ethical standards to AI governance worldwide.</>,
      <>Through a UNDP-supported initiative, Katie is working with NGO and government partners to develop AI-driven financial inclusion systems designed to meet local needs and expand access for underserved communities.<sup><a href="https://www.undp.org/digital/ai-trust-and-safety-re-imagination-programme-building-frameworks-future" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">2</a></sup></>,
      <>She also serves as a risk advisor through Synapse, a not-for-profit AI advisory and adoption program of the Milwaukee Tech Hub Coalition, helping manufacturing organizations navigate AI with clarity and confidence.<sup><a href="https://www.mketech.org/synapse/" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">3</a></sup> Above all, Katie is driven by the simple belief that technology should serve humanity.</>
    ]
  },
  {
    name: "Ed Vocke",
    image: "/ed.png",
    role: "Chief Technology Officer",
    paragraphs: [
      "Ed Vocke is Chief Technology Officer at Equitable Labs, building federated learning infrastructure that lets financial institutions collaborate on fraud detection without compromising customer privacy. He works across engineering, compliance, and product teams to build infrastructure that supports fair, reliable automated decision-making while protecting the people that infrastructure is meant to serve.",
      <>Ed brings over a decade of expertise in machine learning and privacy tech. An early adopter of deep learning, his applied work started in 2015 by modifying and training character-level recurrent neural networks on specialized datasets. He is a published IEEE author on privacy-preserving technologies<sup><a href="https://ieeexplore.ieee.org/document/11337281" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">4</a></sup> and was selected for the United Nations Development Programme's AI Trust and Safety Re-imagination Programme, an initiative bringing together practitioners to address emerging risks in AI deployment.<sup><a href="https://www.undp.org/digital/ai-trust-and-safety-re-imagination-programme-building-frameworks-future" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">5</a></sup></>,
      <>Ed extends this work through teaching and advisory practice. As an AI Instructor at the Milwaukee School of Engineering Center for Professional Education<sup><a href="https://cpe.msoe.edu/search/publicCourseSearchDetails.do?method=load&courseId=1118265&selectedProgramAreaId=1020054&selectedProgramStreamId=1119674" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">6</a></sup> and founder of the AI advisory firm Superior Communications, he helps governments, nonprofits, and private industry move from AI ambition to responsible implementation. He has served as a panelist at University of Wisconsin E-Business Consortium on AI governance and ethical AI use.<sup><a href="https://uwebc.wisc.edu/uwebc-events/ede020b1-bdb1-ef11-806a-005056b0b30d/" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">7</a></sup></>,
      "Ed's long-term focus is on the communities most often left out of AI's design conversations. He works to ensure that automated decision-making expands opportunity rather than entrenches inequality—treating code as a tool for rebuilding trust and democratic participation in systems that too often exclude the people they claim to serve."
    ]
  },
  {
    name: "Paul Crafer",
    image: "/paul.png",
    role: "Chief Product Officer",
    paragraphs: [
      "Paul is the Co-Founder and Chief Product Officer of Equitable Labs (dba Goose FL), a Public Benefit Corporation dedicated to building privacy-preserving digital infrastructure and advancing AI as a public interest technology. With over two decades of experience navigating the intersection of scale, governance, and operational reality, Paul’s career is defined by a commitment to practical, responsible innovation.",
      "His foundational expertise includes a decade at Apple, where he led B2B sales and technical services in Sweden, managing large-scale technology deployments and complex stakeholder initiatives. As data infrastructure and automated systems evolved, Paul shifted his focus toward independent audit and trust frameworks. He is a Fellow at ForHumanity, a Certified Auditor for the EU AI Act and GDPR, and is actively involved in international data protection and digital safety initiatives, including active compliance and equity projects in West Africa.",
      "Paul operates on a clear principle: true trust in automated decision systems cannot be retrofitted. Privacy, accountability, and inclusion must be built into the infrastructure from day one. This philosophy drives his work at Goose FL, where he leverages federated learning to help institutions build inclusive, accurate models while keeping data securely under local control."
    ]
  },
  {
    name: "Lindsey Washburn",
    image: "/lindsey.jpg",
    role: "Chief Impact Officer",
    paragraphs: [
      "Lindsey Washburn is Chief Impact Officer at Equitable Labs (dba Goose FL), where she leads impact strategy, partnerships, and ecosystem engagement to advance equitable access to the benefits of AI. She works across governments, financial institutions, civil society, and technology partners to develop and scale privacy-preserving solutions that strengthen digital rights, improve fairness and reliability in automated decision-making, and help ensure underserved communities can participate fully in the digital economy.",
      "With more than 15 years of experience spanning government, technology, policy, and nonprofit leadership, Lindsey helps translate emerging technologies into practical solutions that drive measurable social and economic outcomes. Her work sits at the intersection of responsible AI, digital public infrastructure, and public trust. She specializes in building partnerships, governance frameworks, and implementation strategies that enable organizations to deploy technology responsibly, protect digital rights, and ensure AI serves the public interest.",
      "Prior to joining Goose FL, Lindsey advised organizations on AI governance and responsible adoption and previously led public and social sector AI initiatives. She has also served in local government and helped scale an international nonprofit from a $2 million to $18 million organization."
    ]
  }
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#111111] py-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b border-stone-800/50`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo.png" 
              alt="Goose FL Logo" 
              className={`h-10 w-auto opacity-100`}
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[15px] text-stone-300">
            <div className="flex items-center gap-4 ml-2">
              <a 
                href="mailto:contact@goosefl.com" 
                className="px-6 py-2.5 bg-kycomm-teal text-stone-950 font-bold rounded-full hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          <button className="md:hidden text-stone-300 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111] flex flex-col items-center justify-center gap-8 text-xl font-medium text-stone-300 animate-fade-in">
            <a 
              href="mailto:contact@goosefl.com" 
              onClick={() => setMenuOpen(false)} 
              className="px-8 py-3 bg-kycomm-teal text-stone-950 font-bold rounded-full shadow-lg cursor-pointer"
            >
              Contact Us
            </a>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center mb-32">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl font-medium leading-tight text-stone-900 mb-6"
            >
              Our Team
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-1 bg-nobel-gold mx-auto opacity-60"
            />
          </div>

          <div className="space-y-40">
            {TEAM_MEMBERS.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.section 
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Photo Placeholder */}
                  <div className="w-full lg:w-5/12 shrink-0">
                    <div className="aspect-[3/4] bg-stone-200 rounded-3xl overflow-hidden shadow-md relative group transition-transform duration-500 hover:scale-[1.02]">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium tracking-widest uppercase text-sm">
                            {member.name.split(' ')[0]}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Bio Info */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <div className="mb-8">
                      <h2 className="font-serif text-3xl md:text-5xl text-stone-900 font-medium mb-4">
                        {member.name}
                      </h2>
                      <div className="text-sm md:text-base text-nobel-gold font-bold uppercase tracking-[0.15em]">
                        {member.role}
                      </div>
                    </div>
                    
                    <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
                      {member.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </motion.section>
              );
            })}
            
            <ExpertAdvisors />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-stone-100 text-stone-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-10">
              <img src="/logo.png" alt="Goose FL Logo" className="h-28 md:h-32 w-auto drop-shadow-sm opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <p className="text-sm font-light text-stone-500 max-w-md mb-8 leading-relaxed">
              Goose FL, a leading provider of privacy-preserving federated intelligence for critical sectors.
            </p>
            <div className="mb-16">
              <a href="https://www.linkedin.com/company/goosefl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
            
            <div className="w-full max-w-4xl border-t border-stone-100 flex flex-col md:flex-row justify-between items-center pt-8 gap-8">
              <p className="text-[10px] font-medium tracking-wider text-stone-400 uppercase text-center md:text-left">
                Goose FL / Equitable Labs <br />
                <span className="text-stone-300">A Delaware Public Benefit Corporation, 2026</span>
              </p>
              
              <div className="flex gap-6 md:gap-10 text-[10px] text-nobel-gold font-bold uppercase tracking-[0.2em] text-center">
                <span>Milwaukee</span>
                <span>Stockholm</span>
                <span>Portland</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
