export default function SimbiStreak() {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <div className="w-full max-w-5xl min-h-[600px] flex flex-col justify-between bg-gradient-to-br from-[#9A7DFF] to-[#FFD194] rounded-[40px] p-6">
        
          <div className="flex items-center space-x-4">
            <img src="/DashboardIcons/streak0.svg" alt="avatar" className="w-12 h-12" />
            <h1 className="text-2xl font-bold text-red-900">
            Deadline Alert !
            </h1>
          </div>
  
          <div className="mt-2 px-2">
            <p className="mt-1 text-lg leading-relaxed">
            You're flirting dangerously with your due dates, and honestly? It’s kinda stressful to watch. 👀
            </p>
          </div>
  
         
          <div className="relative flex justify-center mt-8 mb-6">
            <img
              src="/DashboardIcons/ren2.svg"
              alt="ellipse"
              className="absolute bottom-0 w-[250px] pointer-events-none"
            />
            <img
              src="/DashboardIcons/simbi 8.svg"
              alt="character"
              className="relative z-10 w-[180px]"
            />
          </div>
        </div>
      </div>
    );
  }
  