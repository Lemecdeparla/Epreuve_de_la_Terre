let entree = process.argv[2]
function paireounon(nbr) {
    if (nbr % 2 == 0)
    {
        return "paire"
    }
    else
    {
        return "impaire"
    }
}

if (isNaN(entree))
{
    console.log("Tu ne me la mettras pas à l’envers.");
}
else if(entree < 0)
{
    entree = Math.abs(entree)
    console.log(paireounon(entree))
}
else
{
    console.log(paireounon(entree))
}