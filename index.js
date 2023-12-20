// saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // mondayWork function
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example 
  console.log(saturdayFun());  // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("paint"));  // Output: "This Saturday, I want to paint!"
  
  console.log(mondayWork());  // Output: "This Monday, I will go to the office."
  console.log(mondayWork("code"));  // Output: "This Monday, I will code."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  // Output: "You are !!!a dedicated programmer!!!"
  