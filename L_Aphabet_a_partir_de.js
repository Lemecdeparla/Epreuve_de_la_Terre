const lettre = process.argv[2]
let alphabet  = []

for (i = lettre.charCodeAt(); i < 122; i++)
{
    alphabet += String.fromCharCode(i)
}
console.log(alphabet)
