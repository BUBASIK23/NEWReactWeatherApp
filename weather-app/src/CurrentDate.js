import React from "react";

export default function CurrentDate (props) {
    console.log(props.currentDate)
    /*let days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
      let months=["January", "February", "March", "April", "May", "June", "July", "August",
       "September", "October", "November", "December" ]

  let day = days[props.currentDate.getDay()];
 let hour =props.currentDate.getHours();
    if (hour<10){hour=`0${hour}`};
   let min=props.currentDate.getMinutes();
   if (min<10) {min=`0${min}`};
  let month=months[props.currentDate.getMonth()];
 return <p>{day} {hour}:{min} {month}  </p>*/
 //return <p>{day}  </p>
 return <p>working</p>
}