const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const justeNom = d => d.nom;

const nomsDesVilles = villes.d

console.log('Noms des villes', nomsDesVilles)

//Afichage du résultat: 
/*
[
  "Lausanne",
  "Yverdon",
  "Montreux",
  "Renens",
  "Nyon",
  "Vevey"
]
*/

//Pour comparer une ville avec filter
const villesDePlusDe30000Habitants = villes.filter(ville.population > 30000)

console.log('Ville de plus de 30000 habitants', villesDePlusDe30000Habitants)


//Affichage du résultat : 
/*
[
    {
      "nom": "Lausanne",
      "population": 138905
    },
    {
      "nom": "Yverdon",
      "population": 30143
    }
  ]
*/

//Trouver ule nombre d'habitant d'Yverdon-les-Bains
const estYverdon = ville => ville.nom === 'Yverdon';
const habitantsYverdon = villes.find(estYverdon).population;

console.log('Nombre d\'habitants à Yverdon', habitantsYverdon)

//Ce que cela doit affiché :
// 30143

//Calculer la polpulation totale des 6 villes
const sommeHabitants = villes
    .map(ville => ville.population)
    .reduce((result, pop) => result + pop, 0)

console.log('Nombre total d\'habitants', sommeHabitants)

//Ce que cela doit affiché
// 257018






//////// Code pour vérifier le résultat ////////

const correct = {
  "nomsDesVilles": [
    "Lausanne",
    "Yverdon",
    "Montreux",
    "Renens",
    "Nyon",
    "Vevey"
  ],
  "villesDePlusDe30000Habitants": [
    {
      "nom": "Lausanne",
      "population": 138905
    },
    {
      "nom": "Yverdon",
      "population": 30143
    }
  ],
  "habitantsYverdon": 30143,
  "sommeHabitants": 257018
}

const compare = (a, b) =>
  JSON.stringify(a) === JSON.stringify(b)

console.log(`
Réponses justes:
1. Noms des villes: ${compare(nomsDesVilles, correct.nomsDesVilles)}
2. Ville de plus de 30000 habitants: ${compare(villesDePlusDe30000Habitants, correct.villesDePlusDe30000Habitants)}
3. Nombre d\'habitants à Yverdon: ${compare(habitantsYverdon, correct.habitantsYverdon)}
4. Nombre total d\'habitants: ${compare(sommeHabitants, correct.sommeHabitants)}
`)