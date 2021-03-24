let age = 0

document.getElementById('button').addEventListener('click', verify)

function verify () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You Can see an R movie alone.'
}

  else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone.'
}

  else if (age >= 5) {
    document.getElementById('answer').innerHTML = 'You can see a G or a PG movie alone.'
}

  else {
    document.getElementById('answer').innerHTML = 'Uh, you are too young for most things.'
}
}
