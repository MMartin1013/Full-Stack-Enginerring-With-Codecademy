//Returns amount of sleep based on the day
function getSleepHours(day){
    switch(day.toLowerCase()){
      case 'monday':
        return 6;
      case 'tuesday':
        return 5;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 7;
      case 'friday':
        return 8;
      case 'saturday':
        return 9;
      case 'sunday':
        return 9;
    }
  }
  //Sums the number of hours of sleep the user got each day
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  //Determines number of hours of sleep needed for the week
  const getIdealSleepHours = function(){
    let idealHours = 8 * 7;
    return idealHours;
  }
  
  //Calculates whether or not you are getting enough sleep
  function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    console.log(actualSleepHours);
    console.log(idealSleepHours);
    if (actualSleepHours == idealSleepHours){
      console.log('You got the perfect amount of sleep.')
    }else if(actualSleepHours > idealSleepHours){
      console.log(`You got more sleep then needed by ${actualSleepHours - idealSleepHours} hours.`)
    }else{
      console.log(`You should get some rest. You need ${idealSleepHours - actualSleepHours} more hours of sleep.`)
    }
  }
  
  calculateSleepDebt();