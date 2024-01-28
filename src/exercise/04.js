/* eslint-disable no-unused-vars */
// Fonctions fléchées
// http://localhost:3000/alone/exercise/04.js

import displayText, {init} from './helper/exerciseHelper'
init('Fonctions fléchées')

// 🐶 E = mc² : Créé une fonction fléchée `calculEnergie` avec les propietes `masse` et `celerite` (vitesse de la lumière)
// `celerite` aura la valeur par défaut 300000000
//  🤖 utilise `Math.pow(celerite, 2)` pour le calcul du carré
//  🤖 utilise `round` pour arrondir

// 🐶 appelle la fonction calculEnergie avec 5 grammes (0.005 kg)
// et affiche le résultat à l'ecran avec displayText

function calculEnergie(masse, celerite = 300000000) {
  displayText(
    `L'énergie d'une masse de ${masse} kg et de ${celerite} joules est ${Math.round(
      masse * Math.pow(celerite, 2),
    )}`,
  )
}

const calculEnergie2 = (masse, celerite = 300000000) => {
  displayText(
    `L'énergie d'une masse de ${masse} kg et de ${celerite} joules est ${Math.round(
      masse * Math.pow(celerite, 2),
    )}`,
  )
}
calculEnergie(0.5)
calculEnergie2(0.5)
