import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { useDispatch } from "react-redux"
import { resetCurrentInterview } from "@/store/interviewSlice";

export default function ResumeInterview({resumeInterviewhandler}){
 
  const dispatch =useDispatch();

  return (
    
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-sm"> 
        <CardHeader>
          <CardTitle>Interview in Progress</CardTitle> 
          <CardDescription>
            It looks like you didn't finish your last interview session.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3 flex-col sm:flex-row"> 
       
          <Button onClick={()=>{dispatch(resetCurrentInterview())}} variant="outline" className="flex-1 cursor-pointer">Start New Interview</Button>
          <Button onClick={resumeInterviewhandler}  className="flex-1 gradient-primary text-white hover:opacity-85 cursor-pointer">Resume Interview</Button>
          
        </CardContent>
      
      </Card>
    </div>
  )
}