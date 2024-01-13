const dividende = process.argv[2]
const diviseur = process.argv[3]

if (isNaN(dividende) || isNaN(diviseur) || dividende == 0 || diviseur == 0)
{
    console.log("Erreur");
}
else
{
    console.log("résultat : " + dividende / diviseur)
    console.log("reste : " + dividende % diviseur);
}