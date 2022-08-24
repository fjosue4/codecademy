//Is today sunday
const checkDay = (day) =>{
  const d = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  day = weekday[d.getDay()].toLowerCase();
  console.log(day);
  switch(day){
    case 'saturday':
      return 'You are free';
    break;
    case 'sunday':
      return 'Play a game';
    break;

    case 'monday':
      return 'Go to gym';
    break;

    case 'tuesday':
      return 'You are free';
    break;

    case 'wednesday':
      return 'Code';
    break;

    case 'thursday':
      return 'Blabla';
    break;

    case 'friday':
      return 'You are free';
    break;

    default: 
      return 'Error! please type a valid day'
  }
}
console.log(checkDay());