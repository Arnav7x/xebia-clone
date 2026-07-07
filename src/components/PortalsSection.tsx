import { GraduationCap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PortalsSection() {
  return (
    <section id="portals" className="py-24 bg-gray-50 dark:bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Explore Our Portals</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Select the portal that best fits your role and access personalized features.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Portal Card */}
          <div className="flex flex-col bg-white dark:bg-[#111111] rounded-[2rem] border border-gray-100 dark:border-white/5 p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-accent/50 shadow-primary/10">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-primary dark:bg-accent text-white">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">Student Portal</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed min-h-[60px] font-medium">
                Access your courses, track progress, attend assessments, earn certifications, and enhance your skills.
              </p>
            </div>
            
            <div className="flex-1 space-y-4 mb-10">
              {['My Learning Dashboard', 'Courses & Curriculum', 'Assessments & Quizzes', 'Certifications', 'Progress & Feedback'].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-primary dark:text-accent" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="/student" className="w-full">
              <button className="w-full bg-primary dark:bg-accent hover:bg-primary dark:hover:bg-accent hover:opacity-90 text-white dark:text-gray-900 rounded-2xl py-7 text-base font-bold flex items-center justify-center gap-2 transition-all shadow-md">
                Student Portal <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
          
          {/* Admin Portal Card */}
          <div className="flex flex-col bg-white dark:bg-[#111111] rounded-[2rem] border border-gray-100 dark:border-white/5 p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 shadow-secondary/10">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-secondary text-white">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">Admin Portal</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed min-h-[60px] font-medium">
                The central hub for architects and executives. Generate courses via AI, manage complex curriculums, and analyze predictive workforce data.
              </p>
            </div>
            
            <div className="flex-1 space-y-4 mb-10">
              {['AI-Powered Content Generation', '4-Level Curriculum Hierarchy Builder', '15-Page Predictive Analytics Suite', 'Skill Gap & Recommendation Engine', 'Enterprise User Management'].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-secondary" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="/admin" className="w-full">
              <button className="w-full bg-secondary hover:opacity-90 text-white rounded-2xl py-7 text-base font-bold flex items-center justify-center gap-2 transition-all shadow-md">
                Admin Portal <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
