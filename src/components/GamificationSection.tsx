import { Trophy, Flame, Star, Medal } from 'lucide-react';

export default function GamificationSection() {
  const leaderboard = [
    { name: 'Sarah J.', score: '12,450 XP', streak: '45 Days', role: 'Senior Developer', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { name: 'Marcus T.', score: '11,200 XP', streak: '32 Days', role: 'Product Manager', icon: Medal, color: 'text-gray-400', bg: 'bg-gray-400/10' },
    { name: 'Elena R.', score: '10,850 XP', streak: '28 Days', role: 'UX Designer', icon: Medal, color: 'text-amber-700', bg: 'bg-amber-700/10' },
  ];

  return (
    <section id="gamification" className="py-24 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Level Up Your Learning</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Join the ranks of top learners. Earn XP, build streaks, and unlock exclusive achievements.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2 bg-white dark:bg-[#111111] rounded-[2rem] border border-gray-100 dark:border-white/5 p-8 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" /> Top Performers This Month
            </h3>
            
            <div className="space-y-4 relative z-10">
              {leaderboard.map((user, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${user.bg} ${user.color}`}>
                      <user.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{user.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-right">
                    <div className="hidden sm:block">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Streak</p>
                      <p className="font-semibold text-gray-900 dark:text-white flex items-center justify-end gap-1">
                        <Flame className="w-4 h-4 text-orange-500" /> {user.streak}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Score</p>
                      <p className="font-bold text-primary dark:text-accent">{user.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements Stats */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-[2rem] p-8 shadow-2xl text-white relative overflow-hidden flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center space-y-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <h3 className="text-4xl font-black mb-2">4.8k</h3>
                <p className="text-white/80 font-medium">Badges Earned</p>
              </div>
              
              <div className="pt-8 border-t border-white/20">
                <h3 className="text-4xl font-black mb-2">12M+</h3>
                <p className="text-white/80 font-medium">Total XP Awarded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
