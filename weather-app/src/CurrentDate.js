import React from "react";

export default function CurrentDate (props) {
       let days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
      let months=["January", "February", "March", "April", "May", "June", "July", "August",
       "September", "October", "November", "December" ]


  let day = days[props.currentDate.getDay()];
 let hour =props.currentDate.getHours();
    if (hour<10){hour=`0${hour}`};
   let min=props.currentDate.getMinutes();
   if (min<10) {min=`0${min}`};
  let month=months[props.currentDate.getMonth()];
 return <p>{day} {hour}:{min} {month}  </p>
//let day = props.currentDate.getDay();
 //return <p>{day}  </p>
 //return <p>doesn't want to deploy with date. working on it...</p>
}