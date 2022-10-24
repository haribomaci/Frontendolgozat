

const oldalElem= document.querySelector("#oldal") as HTMLInputElement;
const szogElem= document.querySelector("#szog") as HTMLInputElement;
const szamitGomb = document.querySelector("#szamitGomb");
const eredmenyElem = document.querySelector("#eredmeny") as HTMLInputElement;

function korsugar(oldal: number, szog: number): number{
    return 1/2 * oldal * Math.sin(szog);
}

szamitGomb?.addEventListener('click', () =>{
    let oldal = Number(oldalElem.value);
    let szog = Number(szogElem.value);
    let sugar = korsugar(oldal, szog);
    eredmenyElem.value = String(sugar);
    alert(sugar);
})