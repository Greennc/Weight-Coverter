
//hides the answers until you start typing
document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function(e){
//makes the answers appear at typing
document.getElementById('output').style.visibility = 'visible';

//converts pounds to grams, Kilograms, and ounces
  let lbs = e.target.value;
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;
  document.getElementById('ozOutput').innerHTML = lbs*16;

})
