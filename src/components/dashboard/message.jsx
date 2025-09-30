import { FaRobot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Message({ message }) {
  return <div className={`${message.sender==='bot'?'justify-start' : 'justify-end'} flex`}>
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
}

//    <div key={index} className={`chat   ${user?._id===mess?.senderId ?'chat-end':'chat-start'} `}>
//   <div className={`chat-image avatar ${user?._id===mess?.senderId && 'hidden'}`}>
//     <div className="w-7 rounded-full ">
//       <img
//         alt="profilePicture"
//         src={selectedUser?.profilePicture || "https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"}
//         loading="lazy"/>
//     </div>
//   </div>

//  <pre ref={index === messages.length - 1 ? endMessageRef : null} className={`chat-bubble font-sans sm:max-w-md overflow-hidden break-words text-ellipsis whitespace-pre-wrap  ${user?._id===mess?.receiverId ?'dark:bg-darkTheme-dialog bg-[#efefef] text-black dark:text-darkTheme-mainText':'dark:bg-darkTheme-btnBlue bg-darkTheme-btnBlue'}`}>{mess.message}</pre>

// </div>
