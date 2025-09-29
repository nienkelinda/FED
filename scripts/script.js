// JavaScript Document
console.log("hi");

const VolgendeKnop = document.querySelector("#BtnLinks");
const TerugKnop = document.querySelector("#BtnRechts");

const openButton = document.querySelector("header button");
const hoofdMenu = document.querySelector("header nav");
const bodySelectie = document.querySelector("body");

const balkjes = document.querySelectorAll(".hamburger");

const tweedeMenuKnop = document.querySelector("nav:first-of-type button");
const tweedeMenu = document.querySelector("header nav:nth-of-type(2)");
const terugKnop = document.querySelector("nav:nth-of-type(2) button");

const laadScherm = document.querySelector(".Laadscherm");

const fontKleinerKnop = document.querySelector("#font-kleiner");
const fontGroterKnop = document.querySelector("#font-groter");

const h2kopje = document.querySelectorAll("h2");
const h3kopje = document.querySelectorAll("h3");
const pTekst = document.querySelectorAll("p");
const linkjes = document.querySelectorAll("a");

console.log(fontKleinerKnop);

// openButton.addEventListener('click', openMenu);

// function openMenu() {
//    hoofdMenu.classList.toggle('toonMenu');
  //  bodySelectie.classList.toggle('scrollLock');
  //  balkjes.classList.toggle('verander');
//}

balkjes.forEach(balkje => { //Bron: ChatGPT (https://chatgpt.com/share/68d8f755-b124-8004-b084-54ada2275b93)
    openButton.addEventListener('click', () => {
        hoofdMenu.classList.toggle('toonMenu');     // check of dit gedefinieerd is
        bodySelectie.classList.toggle('scrollLock'); // idem
        balkje.classList.toggle('verander');         // dit is de huidige hamburger
    });
});

tweedeMenuKnop.addEventListener('click', openMenu)

function openMenu() {
    tweedeMenu.classList.add('toonMenu');
}

terugKnop.addEventListener('click', sluitMenu)

function sluitMenu() {
    tweedeMenu.classList.remove('toonMenu');
}

window.addEventListener('load', function() {
    laadScherm.style.display = 'none';
})

// Fontgrootte instellen

fontGroterKnop.addEventListener('click', maakFontGroter)

/* function maakFontGroter() {
    h2kopje.style.fontSize = "larger";
    h3kopje.style.fontSize = "larger";
    pTekst.style.fontSize = "larger";
    linkjes.style.fontSize = "5rem";
} */

function maakFontGroter() {
  [h2kopje, h3kopje, pTekst, linkjes].forEach(nodeList => {
    nodeList.forEach(el => {
      // Huidige fontgrootte ophalen (bijv. "16px")
      const huidige = window.getComputedStyle(el).fontSize;
      // Getal eruit halen
      const px = parseFloat(huidige);
      // 20% erbij
      const nieuwe = (px * 1.2) + "px";
      // Nieuwe waarde instellen
      el.style.fontSize = nieuwe;
    });
  });
}

// ^ Bron: ChatGPT (https://chatgpt.com/share/68da621a-6c74-8004-976b-bc488c4ee6ab)

fontKleinerKnop.addEventListener('click', maakFontKleiner)

function maakFontKleiner() {
    [h2kopje, h3kopje, pTekst, linkjes].forEach(nodeList => {
        nodeList.forEach(el => {
            const huidige = window.getComputedStyle(el).fontSize;
            const px = parseFloat(huidige);
            const nieuwe = (px * 0.8) + "px";
            el.style.fontSize = nieuwe;
        })
    })
}