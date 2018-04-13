/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier votre programme
//console.log("(La solution est " + solution + ")");

var proposition = -1; // Valeur initiale forcément fausse
var numeroEssai = 0;

// Le jeu continue tant que la proposition est incorrecte 
// et que le nombre maximal d'essais (6) n'est pas atteint
while ((proposition !== solution) && (numeroEssai < 6)) {
    numeroEssai++;
    proposition = Number(prompt("Entrez votre proposition " + numeroEssai + " :"));
    if (proposition < solution) {
        console.log(proposition + " est trop petit");
    } else if (proposition > solution) {
        console.log(proposition + " est trop grand");
    }
}
// Ici, soit le joueur a trouvé la solution, soit le nombre d'essais est dépassé
if (proposition === solution) {
    console.log("Bravo ! La solution était " + solution);
    console.log("Vous avez trouvé en " + numeroEssai + " essai(s)");
} else {
    console.log("Perdu... La solution était " + solution);
}
