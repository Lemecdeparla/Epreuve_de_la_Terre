let alphabet = [ 
    'a', 
    'b', 
    'c', 
    'd', 
    'e', 
    'f', 
    'g', 
    'h', 
    'i', 
    'j', 
    'k', 
    'l', 
    'm', 
    'n', 
    'o', 
    'p', 
    'q', 
    'r', 
    's', 
    't', 
    'u', 
    'v', 
    'w', 
    'x', 
    'y',
    'z',
    '\n' 
]
let print_tab = []
for (let i = 0 ; i < alphabet.length ; i++)
{
    print_tab = print_tab + alphabet[i]
}
console.log(print_tab)