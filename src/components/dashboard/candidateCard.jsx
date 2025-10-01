import { FaRegEye } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DialogTrigger } from "../ui/dialog";

export const getScoreColor = (score , total) => {
    score = (score / total) * 100;
      if (score >= 70) {
    return 'bg-green-100 border-green-500 text-green-700'; // Excellent
  } 
  if (score >= 51) {
    return 'bg-purple-200 border-purple-500 text-purple-700'; // Average
  }
  if (score >= 31) {
    return 'bg-orange-100 border-orange-500 text-orange-700'; // Below average
  }
  return 'bg-red-100 border-red-500 text-red-700'; // Poor
  };

export default function CandidateCard({ candidateData, onOpenDialog, total = 60 }) {

  

  return (
    <div >
      <Card className=" bg-background/60 candidateCard">
        <CardHeader className={"border-b flex flex-row justify-between items-center"}>
          <div>
            <CardTitle className={"text-xl font-bold mb-1 "}>{candidateData.contactDetails?.name}</CardTitle>
            <CardDescription>
              <p className={`rounded-lg py-1 px-3 border-2  w-fit text-xs font-bold ${getScoreColor(candidateData.score,total)}`}>{`Score: ${candidateData.score}/60`}</p>
            </CardDescription>
          </div>
          <DialogTrigger asChild>
            <div onClick={onOpenDialog} className="h-8 w-8 bg-white hover:opacity-85 rounded-lg p-1 flex items-center justify-center cursor-pointer eye">
              <FaRegEye className="h-4 w-4 text-black" />
            </div>
          </DialogTrigger>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold">Interview Summary</h3>
          <p className=" overflow-hidden line-clamp-3 text-subhead ">{candidateData.aiSummary}</p>
        </CardContent>
      </Card>
    </div>
  );
}