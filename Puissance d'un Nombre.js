let nbr = Number(process.argv[2])
let exp = Number(process.argv[3])
/*verification que les entrées sont des nombres et que exp n'est pas négatif ou nul*/
if (isNaN(nbr) || isNaN(exp) || exp <= 0){
    console.log("erreur");
/* multiplication par le nombre de fois indiqué dans exp */
}else {
    let resultat = nbr
    for (let i = 1; i < exp; i ++){
        resultat *= nbr
    }
    console.log(resultat)
}