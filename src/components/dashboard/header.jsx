import { Sparkles } from "lucide-react";
import { LuBrain, LuSparkles } from "react-icons/lu";
import { WiSprinkle } from "react-icons/wi";


export default function Header(){

  return (
    <header className="flex justify-between fixed top-0 w-full py-2 px-4 sm:px-6 bg-background/60 backdrop-blur-sm border-b glass-strong">
        <div className="flex items-center space-x-2">
          {/* brain icon */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center gradient-primary">
                <LuBrain className="h-6 w-6 " />
            </div>
           
           {/* App title div*/}
            <div className="">
                <h1 className="text-2xl font-bold text-gradient">Crisp AI</h1>
                <p className="text-muted-foreground text-sm">Interview Assistant</p>
            </div>
        </div>

          <div className="flex items-center space-x-2">
            {/* sprinler icon */}
             <LuSparkles />
            <span className="text-muted-foreground text-sm">Powered By AI</span>
          </div>
    </header>
  )
}