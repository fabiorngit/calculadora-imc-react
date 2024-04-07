// Nivels de IMC

export type level ={
title:string;
color:string;
icon:'down'|'up';
imc:number[];
yourImc?:number;
}



export const levels:level[] = [
    { title: 'Magreza', color: 'bg-magreza', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: 'bg-normal', icon: 'up', imc: [18.6 ,24.9] },
    { title: 'Sobrepeso', color: 'bg-sobrepeso', icon: 'down', imc: [25 ,30] },
    { title: 'Obesidade', color: 'bg-obesidade', icon: 'down', imc: [30.1, 99] }
];


export const calculateImc = (height: number, weight: number) => {
const imc = weight /(height * height);  // peso dividido pela (altura * altura)
// for in em levels => percorrer todos os obj dentro do array de levels
// se o resultado de IMC >= levels[i].imc[0] && IMC >= levels[i].imc[1] verifica os 2 valores do array IMC
for (let i in levels){
    if(imc >= levels[i].imc[0] &&  imc < levels[i].imc[1] ) {
        let copyLevel = {...levels[i]}
        copyLevel.yourImc =imc;  //insere o imc dentro do yourIMC
        return copyLevel //retorna o obj do level

    }
}
return null;
}