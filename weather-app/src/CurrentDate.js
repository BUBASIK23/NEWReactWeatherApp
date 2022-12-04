import React from "react";

export default function CurrentDate (props) {
    console.log(props.today)
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let months=[
        "January", "February", "March", "April", "May", "June", "July", "August",
         "September", "October", "November", "December"
      ]
   let day=days[props.today.getDay()];
    let hour =props.today.getHours();
    if (hour<10){hour=`0${hour}`};
   let min=props.today.getMinutes();
   if (min<10) {min=`0${min}`};
   let month=months[props.today.getMonth()];
 return <p>{} {day} {hour}:{min} {month}</p>
}