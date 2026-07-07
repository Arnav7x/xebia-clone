import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent flex items-center min-h-[70vh]">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute w-[800px] h-[800px] rounded-full blur-[150px] transition-transform duration-75 ease-out" 
             style={{ background: 'radial-gradient(circle, rgba(108,29,95,0.1) 0%, rgba(1,172,159,0.05) 100%)', transform: 'translate(-400px, -400px)' }}></div>
      </div>
      
      {/* Floating orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03] dark:opacity-[0.02]">
         <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary blur-3xl animate-float-slow"></div>
         <div className="absolute top-[40%] right-[10%] w-72 h-72 rounded-full bg-secondary blur-3xl animate-float-reverse"></div>
         <div className="absolute -bottom-[10%] left-[30%] w-80 h-80 rounded-full bg-accent blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 max-w-full relative z-10 w-full overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-black tracking-tighter mb-8 leading-[1.1] min-h-[100px] md:min-h-[80px] flex justify-center items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pr-2 pb-1">One Platform for Learning at Scale</span>
            <span className="w-[3px] md:w-[4px] lg:w-[5px] h-[5vw] sm:h-[4vw] md:h-[3.5vw] lg:h-[3.5vw] xl:h-[3vw] bg-secondary rounded-full inline-block ml-2 transition-opacity duration-300 opacity-100 animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-accent mb-8 animate-fade-in-up delay-500">
            Enterprise Learning Management System
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium animate-fade-in-up delay-800">
            Empower your workforce with AI-powered learning, intelligent analytics, and a unified platform for training, upskilling, certifications, and employee development.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 animate-fade-in-up delay-1100">
            <button className="bg-primary hover:bg-[#84117C] text-white rounded-full px-10 py-7 text-lg font-bold flex items-center gap-3 transition-colors shadow-lg hover:-translate-y-1">
              Get Started <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
