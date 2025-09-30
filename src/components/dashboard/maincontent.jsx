import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, MessageCircle } from "lucide-react";
import { useState } from "react";
import Interviewee from "./interviewee";
import Interviewer from "./interviewer";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("Interviewee"); //state for active tab

  return (
    <div className="mt-28 sm:px-6 px-4 ">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="h-full"
      >
        <TabsList className={"mb-6 bg-muted/70 h-10"}>
        {/* Tab - 1 */}
          <TabsTrigger
            value="Interviewee"
            className={` flex items-center gap-2 cursor-pointer ${
              activeTab === "Interviewee" &&
              "gradient-primary text-white font-bold"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Interviewee
          </TabsTrigger>
          
             {/* Tab - 2 */}
          <TabsTrigger
            value="Interviewer"
            className={` flex items-center gap-2 cursor-pointer ${
              activeTab === "Interviewer" &&
              "gradient-secondary text-white font-bold "
            } `}
          >
            <BarChart3 className="h-4 w-4" />
            Interviewer
         
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Interviewee">
          <Interviewee />
        </TabsContent>
        <TabsContent value="Interviewer">
          <Interviewer />
        </TabsContent>
      </Tabs>
      
    </div>
  );
}
