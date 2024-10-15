 

var pontszamok, korPontszam, aktivJatekos, kocka;

pontszamok = [0,0]
korPontszam = 0

aktivJatekos = 0
kocka = Math.floor(Math.random() * 6) + 1

//document.querySelector('#current-' + aktivJatekos).textContent = kocka
//document.querySelector('#current-' + aktivJatekos).textContent = <u> + kocka + </u>

//document.querySelector('.dice').computedStyleMap.display = 'none'

function kovetkezoJatekos(){
  aktivJatekos === 0 ? aktivJatekos = 1 : aktivJatekos = 0
  korPontszam = 0

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none'
}

document.querySelector('#current-' + aktivJatekos).textContent = '<u>' + kocka + '</u>';
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0'; 
document.getElementById('score-1').textContent = '0'; 
document.getElementById('current-0').textContent= '0';

document.querySelector('.btn-roll').addEventListener('click', function(){

  if(jatekFolyamatban){
    // kell egy veletlen szám
    var kocka = Math.floor(Math.random() * 6) + 1;
    // eredmény megjelenítése
    var kockaDOM = document.querySelector('.dice'); kockaDOM.style.display = 'block';
    kockaDOM.src = 'img/dice-' + kocka + '.png';
    // körben elért pontszám frissítése, ha nem 1-et dobunk
    if (kocka !== 1) {
    // itt adjuk hozzá a számot az akt. ponthoz
      korPontszam += kocka;
      document.querySelector('#current-' + aktivJatekos).textContent = korPontszam;
    } 
    else {
      kovetkezoJatekos()
    }
  }
})

document.querySelector('.btn-hold').addEventListener('click', function(){

  if(jatekFolyamatban){
    pontszamok[aktivJatekos] += korPontszam
    document.querySelector('#score-' + aktivJatekos).textContent = pontszamok[aktivJatekos]
  
  
    if(pontszamok[aktivJatekos] >= 15){
      document.querySelector('#name-' + aktivJatekos).textContent = 'Győztes!'
      document.querySelector('.player-' + aktivJatekos + '-panel').classList.add('winner')
      document.querySelector('.player-' + aktivJatekos + '-panel').classList.remove('active')
      jatekFolyamatban = false
    }else{
      kovetkezoJatekos()
    }
  }
})

document.querySelector('.btn-new').addEventListener('click', init);


function init() { 
  pontszamok = [0, 0]
  aktivJatekos = 0
  korPontszam = 0
  jatekFolyamatban = true

  document.querySelector('.dice').style.display = 'none'
  document.getElementById('score-0').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('name-0').textContent = 'Frodo'
  document.getElementById('name-1').textContent = 'Samu'
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')
}