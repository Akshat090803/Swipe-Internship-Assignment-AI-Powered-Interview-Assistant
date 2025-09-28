const { createSlice } = require("@reduxjs/toolkit");
const { act } = require("react");

const initialState = {
  currentStatus: 'not-started', // 'not-started', 'pending', 'completed'
  currentInterview: null,
  pastInterviews: [],
};

const interviewSlice = createSlice({
  name:'interview',
  initialState,

  reducers:{

    startInterview:(state,action)=>{
      state.currentStatus='pending';
      state.currentInterview={
        contactDetails:action.payload.contactDetails,
        questions:action.payload.questions,
        answers:[],
        score: null,
        aiSummary: null,
      }
    },

    addAnswer : (state,action)=>{
      if(state.currentInterview){
        state.currentInterview.answers.push(action.payload);
      }
    },

    completeInterview : (state,action)=>{
           if(state.currentInterview){
            state.currentInterview.score=action.payload.score;
            state.currentInterview.aiSummary=action.payload.aiSummary;
            state.pastInterviews.push(state.currentInterview);
            state.currentInterview = null;
            state.currentStatus = 'completed';
    }
    },
     resetCurrentInterview: (state) => {
        state.currentInterview = null;
        state.currentStatus = 'not-started';
    }
  }

})

export default interviewSlice.reducer;

export const {startInterview,addAnswer,completeInterview,resetCurrentInterview}=interviewSlice.actions