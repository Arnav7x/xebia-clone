import { ArrowRight, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#110515] pt-12 border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-6 max-w-7xl mb-20">
        <div className="relative bg-[#003060] dark:bg-[#001530] rounded-3xl p-10 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your learning experience?</h3>
              <p className="text-white/70 text-sm md:text-base max-w-xl">Join thousands of organizations empowering their workforce with Xebia Enterprise LMS.</p>
            </div>
          </div>
          
          <div className="relative z-10 shrink-0">
            <a href="#portals">
              <button className="bg-white hover:bg-gray-100 text-[#003060] rounded-md px-8 py-6 h-auto text-base font-bold flex items-center gap-2 transition-all shadow-lg">
                Get Started Now <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="inline-block mb-6" style={{ textDecoration: 'none' }}>
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-primary dark:text-accent">Xebia</span>
                <span className="text-gray-900 dark:text-white">LMS</span>
              </span>
            </a>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Xebia Enterprise LMS</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">Empowering people. Transforming learning. Building a smarter workforce.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Case Studies', 'Reviews', 'Updates'].map(link => (
                <li key={link}><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Contact us', 'Careers', 'Culture', 'Blog'].map(link => (
                <li key={link}><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help center', 'Server status', 'Report a bug', 'Chat support'].map(link => (
                <li key={link}><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 Xebia Enterprise LMS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
