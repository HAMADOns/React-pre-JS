/* eslint-disable no-unused-vars */
// Décomposition et Shorthand property names
// http://localhost:3000/alone/exercise/03.js

import displayText, {init} from './helper/exerciseHelper'
init('Décomposition et Shorthand property names')

// propiétes d'un terrain de foot
const longueur = 120
const largeur = 90
const type = 'footbal'

let terrainFoot = {longueur, largeur, type}
let terrainBasket = {longueur: 28, largeur: 15, type: 'Basketball'}
function calculAir({longueur, largeur, type}) {
  displayText(`la surface d'un terrain de ${type} de longueur ${longueur} 
    et largeur ${largeur} est de ${(largeur * longueur)} m²`)
}
calculAir(terrainFoot)
calculAir(terrainBasket)
