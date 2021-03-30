// toto budeš potřebovat později
/*

*/

//https://www.youtube.com/watch?v=Yyz0XhmoCgc

// nadefinujeme globální proměnné - jenom deklarace, nikoliv prirazeni prvku do nich
// ty jsou pak použitelné kdekoliv v programu
let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;
let sirkaOkna, vyskaOkna;

let krok = 20;

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
function priNacteniStranky() {
	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector
  panacek = document.getElementById("panacek"); //vytazeni panacka z HTML
  mince = document.getElementById("mince"); //vytazeni mince z HTML

  //zjisteni rozmeru okna
  sirkaOkna = window.innerWidth; 
  vyskaOkna = window.innerHeight; 

	// zjistíme šířku a výšku panáčka
  panacekSirka = panacek.width; 
  panacekVyska = panacek.height;

	// a umístíme panáčka do středu okna
  panacekX = (sirkaOkna/2 - panacekSirka/2);
  panacekY = (vyskaOkna/2 - panacekVyska/2);

	// umístíme panáčka na startovní pozici
  umistiPanacka()

	// zjistíme šířku a výšku mince
  minceSirka = mince.width; 
  minceVyska = mince.height;

	// a vygenerujeme první minci na náhodné pozici
  novaMince()

}

function umistiPanacka() {
  panacek.style.left = panacekX + "px";
  panacek.style.top = panacekY + "px";  
}

function novaMince() {
  minceX = (Math.random() * (sirkaOkna - minceSirka));
  minceY = (Math.random() * (vyskaOkna - minceVyska));
  mince.style.left = minceX + "px";
  mince.style.top = minceY + "px";
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
// udalost je moje definovana promenna, abych na ni mohla zavolat key, musim tam mit typ hodnoty event
function priStiskuKlavesy(udalost) {

	// šipka vlevo
  if (udalost.key === "ArrowLeft"){
    panacekX = panacekX - krok;
    if (panacekX < 0){
      panacekX = 0;
    }
    panacek.src = "obrazky/panacek-vlevo.png";
  }

	// šipka vpravo
  if (udalost.key === "ArrowRight"){
    panacekX = panacekX + krok;    
    if (panacekX + panacekSirka > sirkaOkna ){
      panacekX = sirkaOkna - panacekSirka;
    }
    panacek.src = "obrazky/panacek-vpravo.png";
  }

	// šipka nahoru
  if (udalost.key === "ArrowUp"){
    panacekY= panacekY - krok;
    if (panacekY < 0){
      panacekY = 0;
    }
    panacek.src = "obrazky/panacek-nahoru.png";
  }

	// šipka dolů
  if (udalost.key === "ArrowDown"){
    panacekY= panacekY + krok;
    if (panacekY + panacekVyska > vyskaOkna ){
      panacekY = vyskaOkna - panacekVyska;
    }
    panacek.src = "obrazky/panacek.png";
  }

	// panáčka umistíme na nově vypočítanou pozici
  umistiPanacka()

	// otestujeme kolizi panáčka s mincí
  otestujKolizi()
}

// fuknce pro otestování kolize panáčka s mincí
function otestujKolizi() {

if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
  novaMince()

  }
}


