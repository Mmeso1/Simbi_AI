export default function SimbiReminder() {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <div className="w-full max-w-5xl min-h-[600px] flex flex-col justify-between bg-gradient-to-br from-[#9A7DFF] to-[#FFD194] rounded-[40px] p-6">
        
          <div className="flex items-center space-x-4">
            <img src="/DashboardIcons/streak0.svg" alt="avatar" className="w-12 h-12" />
            <h1 className="text-2xl font-bold text-black ">
            Reminder
            </h1>
          </div>
  
          <div className="mt-2 px-2">
            <p className="mt-1 text-lg leading-relaxed">
            Time is running faster than your crush when you say 'we need to talk' 😭. Go submit that work!
            </p>
          </div>
  
         
          <div className="relative flex justify-center mt-2 mb-6">
            <img
              src="/DashboardIcons/ren.svg"
              alt="ellipse"
              className="absolute bottom-0 w-[250px] pointer-events-none"
            />
            <img
              src="/DashboardIcons/simbi 5.svg"
              alt="character"
              className="relative z-10 w-[180px]"
            />
          </div>
        </div>
      </div>
    );
  }
  