

import { FaRobot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import React from 'react'; 


const Message = React.forwardRef(function Message({ message }, ref) { 
    return <div ref={ref}  className={`${message.sender==='bot'?'justify-start' : 'justify-end'} flex`}>
    {message.sender === "bot" ? <>
      
      <div className="flex gap-1 ">
         <div className="w-8 h-8 text-center rounded-full bg-input/80 text-white flex items-center justify-center">
            <FaRobot  className="text-white h-5 w-5 "/>
         </div>
       {/* <div className="flex flex-col "> */}
          <pre className="gradient-primary sm:max-w-2xl max-w-[90%] overflow-hidden break-words text-ellipsis whitespace-pre-wrap rounded-lg py-1 px-2 font-mono">{message.text}</pre>
          {/* <span className="text-[10px] ">{message.timeStamp}</span> */}
       {/* </div> */}
      </div>

  </> : <>
<div className="flex gap-1">
        
         <pre className="gradient-tertiary text-sky-50 sm:max-w-2xl max-w-[90%] overflow-hidden break-words text-ellipsis whitespace-pre-wrap rounded-lg py-1 px-2 font-mono">{message.text}</pre>
          <div className="w-8 h-8 text-center rounded-full bg-input/80 text-white flex items-center justify-center" >
         <IoPerson  className="text-white h-5 w-5 " />
         </div>
      </div>
  
  </>}</div>;
}); 

export default Message;