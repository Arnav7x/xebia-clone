import { BrainCircuit, BookOpen, ClipboardList, Award, ChartNoAxesColumn, TrendingUp } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { title: 'AI-Powered Learning', desc: 'Personalized learning paths and AI-driven course recommendations.', icon: BrainCircuit },
    { title: 'Curriculum Management', desc: 'Create, organize and manage courses, modules, and learning content.', icon: BookOpen },
    { title: 'Assessments & Quizzes', desc: 'Interactive assessments, automated grading and performance analytics.', icon: ClipboardList },
    { title: 'Certifications', desc: 'Industry-recognized certifications and digital credential management.', icon: Award },
    { title: 'Advanced Analytics', desc: 'Real-time dashboards and insights to drive learning outcomes.', icon: ChartNoAxesColumn },
    { title: 'Employee Development', desc: 'Track skills, learning progress and career development.', icon: TrendingUp },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Platform Highlights</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            We've engineered a robust suite of tools that bridge the gap between content creation and actionable workforce intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-6 p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#111111]/50 hover:bg-white dark:hover:bg-[#151515] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-accent transition-colors">
                <feature.icon className="w-7 h-7 text-primary dark:text-accent group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
