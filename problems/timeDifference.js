
function getTimeDifferenceInMinutes(start,end){
    const [startHour,startMinute]=start.split(":").map(Number)
    const [endHour,endMinute]=end.split(":").map(Number)
     console.log(startHour,startMinute,"startHour,startMinute");
     console.log(endHour,endMinute,"endHour,endMinute");
     
     
    const startTotalMinutes=startHour*60+ startMinute;
    const endTotalMinutes=endHour*60+endMinute

    return endTotalMinutes-startTotalMinutes
}

    const time1 = "10:30";
const time2 = "16:30";

console.log(getTimeDifferenceInMinutes(time1,time2));
