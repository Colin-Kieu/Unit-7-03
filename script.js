let age = 0
// gives our varible a set value of 0

document.getElementById('button').addEventListener('click', verify)
// this connects the button to our function

function verify () {
  age = document.getElementById('input').value
  // this will store the number inputed from the text box
  age = parseInt(age)
  // parseInt converts the numbers to integers for the computer to read
  if (age >= 17) {
    // you have to put the highest rating first becasue it will filter through from top to bottom, meaning if this was at the bottom, it wouldn't matter what age was put in it wouldn't work
    document.getElementById('answer').innerHTML = 'You Can see an R movie alone.'
  } else if (age >= 13) {
    // if they're age is greater than 13 it will display the message
    document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone.'
  } else if (age >= 5) {
    //else if is if the input is greater than 5 it will display the message showing what rated movie they can watch
    document.getElementById('answer').innerHTML = 'You can see a G or a PG movie alone.'
  } else {
    document.getElementById('answer').innerHTML = 'Uh, you are too young for most things.'
    // this is for if anything is below 5, it will say that you are too young to watch the movie
  }
}
