import {
  Card,
  CardAction, // Note: This isn't used in the final component, but kept it as it was in the original imports.
  CardContent,
  CardDescription,
  CardFooter, // Note: This isn't used in the final component, but kept it as it was in the original imports.
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
       
          <Button onClick={()=>{dispatch(resetCurrentInterview())}} variant="outline" className="flex-1">Start New Interview</Button>
          <Button onClick={resumeInterviewhandler}  className="flex-1">Resume Interview</Button>
          
        </CardContent>
      
      </Card>
    </div>
  )
}