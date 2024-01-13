let entrees = process.argv
let chaine = ""
for (i = 0; i < 2; i++ )
{
    entrees.shift()
}
if (entrees.length > 1)
{
    for (i = 0; i<entrees.length; i++)
    {
        chaine += entrees[i] + " "
    }
}
else
{
    chaine = entrees[0]
}
chaine = chaine.split("").reverse().join("")
console.log(chaine);
