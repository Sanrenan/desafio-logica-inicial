let heroi = 'arthur'
let xp = 900;

let classe = "";
if (xp <= 1000) {
    classe = "Ferro"


} else if (xp <= 2000) {
    classe = "Bronze"


}
else if (xp <= 5000) {
    classe = "Prata"


} else if (xp <= 7000) {
    classe = "Ouro"


} else if (xp <= 8000) {
    classe = "Platina"


} else if (xp <= 9000) {
    classe = "Ascendente"


} 

 else if (xp <= 10000) {
    classe = "Imortal"


} 

else if (xp >= 10001) {
    classe = "Radiante"


} 


console.log(`O Herói de nome ${heroi} está no nível de ${classe}`)