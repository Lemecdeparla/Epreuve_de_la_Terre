let nbr = Number(process.argv[2])
/*verification que l'entrée est bien un nombre*/
if (isNaN(nbr)){
    console.log("erreur")
}else{
    let resultat = 0
    resultat = nbr ** 0.5
    console.log(resultat)
}
