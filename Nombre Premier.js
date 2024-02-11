let nbr = Number(process.argv[2])

/* erification que l'entrée est bien un nombre */
if (isNaN(nbr) || nbr < 2){
    console.log("erreur")
}else{
    /* implémentation d'une variable qui nous indiquera le si nbr est un nombre permier */
    let resultat = ""
    /* boucle permettant de savoir si nbr est divisible par autre chose que 1 ou lui même */
    for (let i = 2; i < nbr; i ++){
        if (nbr % i == 0 & nbr !== 2){
            resultat = "non"
        }
    }
    /* affichage du résultat en fonction du de l'état de résultat */
    if (resultat == "non"){
        console.log(nbr," n'est pas un nombre premier")
    }else{
        console.log(nbr, " est un nombre premier")
    }
}