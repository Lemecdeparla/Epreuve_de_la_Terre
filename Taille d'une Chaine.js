/* récupérations des arguments d'entrée et supression du chemin d'accès et du nom du fichier */
let entree = process.argv
for (i = 0; i < 2; i ++){
    entree.shift()
}
/*vérification du nombre d'argument en entrée*/
let lengthentree = 0 
for (i = 0; entree[i] !== undefined; i ++ ){
    lengthentree += 1
}
let str = entree[0]
/* erreur si il n'y a pas ou plus d'un argument ou si l'entrée est un nombre */
if ( !isNaN(str) || lengthentree > 1 || lengthentree == 0) {
    console.log('erreur')
}
/* split des charachtères de la chaine pour les incrémenter dans le tableau char */
else {
    let char = str.split('')
    /* comptage et des éléments dans le tableau char */
    let length = 0
    for (i = 0; char[i] !== undefined; i ++){
        length += 1    
    }
    /* affichage du nombre d'éléments */ 
    console.log(length)
}