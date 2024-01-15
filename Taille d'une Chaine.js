/* récupérations des arguments d'entrée et supression du chemin d'accès et du nom du fichier */
let entree = process.argv[2]
/* erreur si il n'y a pas ou plus d'un argument ou si l'entrée est un nombre */
if ( !isNaN(entree) || process.argv[2] == undefined || process.argv[3] != undefined) {
    console.log('erreur')
}
/* split des charachtères de la chaine pour les incrémenter dans le tableau char */
else {
    let char = entree.split('')
    /* comptage et des éléments dans le tableau char */
    let length = 0
    for (i = 0; char[i] !== undefined; i ++){
        length += 1    
    }
    /* affichage du nombre d'éléments */ 
    console.log(length)
}