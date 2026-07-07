import { Users, BookOpen, Clock, Award, BrainCircuit, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { label: 'Employees', value: '12,580+', growth: '+16.4%', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Courses', value: '1,248+', growth: '+12.7%', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-600/10' },
    { label: 'Learning Hours', value: '45,680+', growth: '+18.3%', icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-600/10' },
    { label: 'Certifications', value: '8,945+', growth: '+14.2%', icon: Award, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'AI Readiness Score', value: '82%', growth: '+22.6%', icon: BrainCircuit, color: 'text-[#84117C]', bg: 'bg-[#84117C]/10' },
  ];

  return (
    <section className="py-20 bg-transparent relative z-10 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{stat.value}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{stat.label}</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.growth} this month</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
