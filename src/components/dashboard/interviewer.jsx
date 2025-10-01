import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoPeople, GoPerson } from "react-icons/go";
import { Input } from "../ui/input";
import { FaSortAlphaDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import CandidateCard from "./candidateCard";
import { Dialog, DialogContent } from "../ui/dialog";
import DetailedEvaluation from "./detailedEvalaution";

export default function Interviewer() {
  const { pastInterviews } = useSelector((state) => state.interview);
   const [sort,setSort] = useState('date')
  const [filteredInterviews,setFilteredInterviews]=useState(pastInterviews);
  const [searchTerm , setSearchTerm] = useState("")
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  function searchHandler(e){
    const value = e.target.value;
    setSearchTerm(value)
  }

  

 useEffect(() => {
    let interviews = [...pastInterviews];

    if (searchTerm) {
      interviews = interviews.filter(interview =>
        interview.contactDetails.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sort === 'score') {
      interviews.sort((a, b) => b.score - a.score);
    } else if (sort === 'name') {
      interviews.sort((a, b) => a.contactDetails.name.localeCompare(b.contactDetails.name));
    } else if (sort === 'date') {
      interviews.reverse();
    }
    

    setFilteredInterviews(interviews);
  }, [searchTerm, sort, pastInterviews]);

  return (
    <div className="mb-10 ">
      <Card className={"mt-0 pt-0  "}>
        <CardHeader className={" flex pb-0  flex-col border-b"}>
          <div className="flex items-center gap-4 py-4 border-b w-full">
            <div className="h-10 w-10 rounded-full gradient-secondary flex items-center justify-center">
              <GoPeople className="h-6 w-6 font-bold text-white " />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gradient-tertiary">
                Interviewer Dashboard
              </h2>
              <CardDescription >
                Manage candidates and review interviews
              </CardDescription>
            </div>
          </div>

          <div className="pt-4 sm:gap-6 gap-3 flex-col w-full  sm:w-[60%] sm:flex-row flex">
            <Input className={"focus:outline-none    focus-visible:ring-1 focus-visible:ring-cyan-700 focus:border-none "} placeholder={"search candidates by name..."} value={searchTerm} onChange={searchHandler} />

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger  className="sm:w-48 w-full">
                <FaSortAlphaDown className="text-white font-bold" />
                <SelectValue  />
              </SelectTrigger>
             <SelectContent className="glass">
              <SelectItem className={"focus:bg-cyan-600 "} value="score">Sort by Score</SelectItem>
              <SelectItem className={"focus:bg-cyan-600"} value="date">Sort by Date</SelectItem>
              <SelectItem className={"focus:bg-cyan-600 "} value="name">Sort by Name</SelectItem>
            </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className={"p-4"}>
          <div className="bg-muted/40 rounded-lg h-full  min-h-60 p-4 ">
          {/* when no interview found */}
            {(filteredInterviews.length===0) ? <div className="text-center py-6 ">
              <GoPeople className="mx-auto w-16 h-16 mb-4 "/>
               <h3 className="text-xl font-semibold mb-2">No completed interviews</h3>
                <p className="text-subhead">
              {pastInterviews.length === 0 
                ? "Interviews will appear here once candidates complete them."
                : "No candidates match your search criteria."
              }
            </p>

            </div> : <div className="flex flex-col gap-3">
                {
                  filteredInterviews.map((item,ind)=>{
                    return  <Dialog key={ind} onOpenChange={(isOpen) => !isOpen && setSelectedCandidate(null)}>
                    <CandidateCard candidateData={item} onOpenDialog={() => setSelectedCandidate(item)} />
                    {selectedCandidate && (
                       <DialogContent className=" min-w-[90%] max-w-[90vw] ">
                         <div className="h-[80vh]  ">
                          <DetailedEvaluation extraCSS={"h-[70vh] overflow-x-hidden overflow-y-auto"} interviewData={selectedCandidate} />
                         </div>
                       </DialogContent>
                    )}
                  </Dialog>
                  })
                }
              </div>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
