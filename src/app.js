var oldalElem = document.querySelector("#oldal");
var szogElem = document.querySelector("#szog");
var szamitGomb = document.querySelector("#szamitGomb");
var eredmenyElem = document.querySelector("#eredmeny");
function korsugar(oldal, szog) {
    return 1 / 2 * oldal * Math.sin(szog);
}
szamitGomb === null || szamitGomb === void 0 ? void 0 : szamitGomb.addEventListener('click', function () {
    var oldal = Number(oldalElem.value);
    var szog = Number(szogElem.value);
    var sugar = korsugar(oldal, szog);
    eredmenyElem.value = String(sugar);
    alert(sugar);
});
