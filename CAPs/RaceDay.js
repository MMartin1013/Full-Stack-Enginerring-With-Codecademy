let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let runnerAge = 19;

if(runnerAge > 18 && early == true){
  raceNumber += 1000;
}

if(runnerAge > 18 && early == true){
  console.log(`Racer #${raceNumber} you will be running with the early adults at 9:30 am`);
}else if(runnerAge > 18 && early == false){
  console.log(`Racer #${raceNumber} you will run with the late adults at 11:00 am`);
}else if (runnerAge < 18){
  console.log(`Racer #${raceNumber} you will run with the youth registrants at 12:30 pm`);
}else{
  console.log('Please see the registration desk');
}