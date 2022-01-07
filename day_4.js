

 const time = '12:10AM';

 function convertTo24HrsFormat(time12h) {
     const ampm = time12h.slice(-2);
     const hours = Number(time12h.slice(0, 2));
     let time = time12h.slice(0, -2);
     if (ampm === 'AM') {
         if (hours === 12) { // 12am edge-case
             return  time.replace(time12h.slice(0, 2), '00');
         }
         return time;
     } else if (ampm === 'PM') {
         if (hours !== 12) {
             return time.replace(time12h.slice(0, 2), String(hours + 12));
         }
         return time; // 12pm edge-case
     }
     return 'Error: AM/PM format is not valid';
 }
 
 console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`)
 console.log(`Converted time: ${convertTo24HrsFormat('05:00 AM')}`)
 console.log(`Converted time: ${convertTo24HrsFormat('12:33 PM')}`)
 console.log(`Converted time: ${convertTo24HrsFormat('01:59 PM')}`)
 console.log(`Converted time: ${convertTo24HrsFormat('11:08 PM')}`)
 console.log(`Converted time: ${convertTo24HrsFormat('10:02 PM')}`)
 


// const time = '12:10AM';

// function convertTime12to24(time12h)
// {
//     const [time, modifier] = time12h.split(" ");
   
//     let [hours, minutes] = time.split(":");
   
//     if (hours === "12") {
//       hours = "00";
//     }
   
//     if (modifier === "PM") {
//       hours = parseInt(hours, 10) + 12;
//     }
   
//     return `${hours}:${minutes}`;
//   };
   
// var convertedTime = convertTime12to24("01:00 PM");

// console.log(convertedTime);
  


// const time = '12:10AM';

// function convertTo24HrsFormat(time12h) {

//     const [time, modifier] = time12h.split("");
//     let [hours, minutes] = time.split(':');


//     if (hours === '12') {
//   	    hours = '00';
//     }

//     if (modifier === 'PM') {
//   	    hours = parseInt(hours, 10) + 12;
// 	}


//     return `${hours}:${minutes}`
// }

// console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('05:00 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('12:33 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('01:59 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('11:08 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('10:02 PM')}`)



// const time = '12:10AM';

// function convertTo24HrsFormat(time12h) {
//     const ampm = time12h.slice(-2);
//     const hours = Number(time12h.slice(0, 2));
//     let time = time12h.slice(0, -2);
//     if (ampm === 'AM') {
//         if (hours === 12) { // 12am edge-case
//             return  time.replace(time12h.slice(0, 2), '00');
//         }
//         return time;
//     } else if (ampm === 'PM') {
//         if (hours !== 12) {
//             return time.replace(time12h.slice(0, 2), String(hours + 12));
//         }
//         return time; // 12pm edge-case
//     }
//     return 'Error: AM/PM format is not valid';
// }

// console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('05:00 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('12:33 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('01:59 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('11:08 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('10:02 PM')}`)

 //3rd trial

 
 


// 4th trial
// const time = '12:10AM';

// function convertTo24HrsFormat(time12h){
//   let [hours, min] = time12h.split(':');
//   let [minutes, mod] = min.split(' ');
//   if (time.endsWith("AM")) {
//     if (hours == 12)
//     {
//       hours = '12' - hours;
//       hours = '0' + hours;
//     } else if (hours < 10)
//     {
//       hours = '0' + hours;
//     } else (minutes < 10); {
//       minutes = parseInt(minutes)
//       minutes = '0' + minutes;
//     } if (time.endsWith('PM')) {
//     minutes = parseInt(minutes)
//         minutes = '0' + minutes;
//       }
//   }
//   return `${hours}:${minutes}`;
// }
  
// console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('05:00 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('12:33 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('01:59 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('11:08 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('10:02 PM')}`)


// const time = '12:10AM';

// function convertTo24HrsFormat(time12h) {
//     let [time, modifier] = time12h.split(' ');
//     let [hours, minutes] = time.split(':');

//     if (hours === '12') {
//   	    hours = '00';
//     }

//     if (modifier === 'PM') {
//   	    hours = parseInt(hours, 10) + 12;
// 	}

//     return `${hours}:${minutes}`
// }

// console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('05:00 AM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('12:33 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('01:59 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('11:08 PM')}`)
// console.log(`Converted time: ${convertTo24HrsFormat('10:02 PM')}`)

