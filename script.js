/* ========================================================
   SubKultura — JavaScript
   Studentský projekt — jednoduchý a okomentovaný kód
   ======================================================== */


/* ========================================================
   MOBILNÍ NAVIGACE — hamburger menu
   
   Jak to funguje:
   1. Uživatel klikne na hamburger tlačítko
   2. Přidá / odebere CSS třídy pro otevření menu
   3. Aktualizuje atribut aria-expanded pro přístupnost
   ======================================================== */

// Získání odkazů na elementy ze stránky
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('nav-list');

// Ověříme, že oba elementy existují (ochrana před chybou)
if (hamburger && navList) {

    // Přidáme posluchač události "click" na hamburger tlačítko
    hamburger.addEventListener('click', function () {

        // toggle přidá třídu pokud neexistuje, odebere pokud existuje
        // Vrátí true pokud byla třída přidána (menu je teď otevřeno)
        const jeOtevren = navList.classList.toggle('header__nav-list--open');

        // Animace hamburger → X ikona
        hamburger.classList.toggle('hamburger--active', jeOtevren);

        // Aktualizace atributu pro čtečky obrazovky (přístupnost)
        hamburger.setAttribute('aria-expanded', jeOtevren);
    });

    // Zavřeme menu při kliknutí mimo záhlaví
    document.addEventListener('click', function (udalost) {

        // Zjistíme, zda klik byl mimo element .header
        const header = document.querySelector('.header');
        if (header && !header.contains(udalost.target)) {

            // Zavřeme menu — odebereme třídy
            navList.classList.remove('header__nav-list--open');
            hamburger.classList.remove('hamburger--active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Zavřeme menu při stisknutí klávesy Escape
    document.addEventListener('keydown', function (udalost) {
        if (udalost.key === 'Escape') {
            navList.classList.remove('header__nav-list--open');
            hamburger.classList.remove('hamburger--active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}


/* ========================================================
   AKTIVNÍ ODKAZ — podtržení aktuální stránky v navigaci
   
   Při načtení stránky porovnáme URL a přidáme třídu
   header__nav-link--active na správný odkaz.
   
   Toto je záložní řešení — každá HTML stránka již má
   aktivní třídu nastavenou ručně. Tento kód není nutný,
   ale je ukázkou, jak by to šlo dělat dynamicky.
   ======================================================== */

/*
// Příklad automatického nastavení aktivního odkazu:
const aktualniUrl = window.location.pathname.split('/').pop() || 'index.html';
const navOdkazy   = document.querySelectorAll('.header__nav-link');

navOdkazy.forEach(function (odkaz) {
    const href = odkaz.getAttribute('href');
    if (href === aktualniUrl) {
        odkaz.classList.add('header__nav-link--active');
    }
});
*/


/* ========================================================
   PLYNULÉ ZVÝRAZNĚNÍ KARET — volitelný efekt
   
   Karty produktů reagují na pohyb myši — lehká parallax
   úprava: při hover se karta lehce zdvihne (řeší CSS,
   tato část je jen pro případné budoucí rozšíření).
   ======================================================== */

// Konec souboru script.js
