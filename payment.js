let RegularBeefNo = localStorage.getItem("RegularBeefNo");
let TriplePattyNo = localStorage.getItem("TriplePattyNo");
let DoubleDeckerNo = localStorage.getItem("DoubleDeckerNo");
let FiestaSpecialNo = localStorage.getItem("FiestaSpecialNo");
let OliveSpicePizzaNo = localStorage.getItem("OliveSpicePizzaNo");
let CheesePizzaNo = localStorage.getItem("CheesePizzaNo");
let ChickTacoParathaNo = localStorage.getItem("ChickTacoParathaNo");
let BeefRollParathaNo = localStorage.getItem("BeefRollParathaNo");
let QuadRollParathaNo = localStorage.getItem("QuadRollParathaNo");
let SoftDrinksNo = localStorage.getItem("SoftDrinksNo");
let BlueLagoonNo = localStorage.getItem("BlueLagoonNo");
let MintMargheritaNo = localStorage.getItem("MintMargheritaNo");

const RegularBeeflabel = document.querySelector("#items :nth-child(1)");
const RegularBeefQty = document.querySelector("#items :nth-child(2)");
const RegularBeefprice = document.querySelector("#items :nth-child(3)");
const TriplePattylabel = document.querySelector("#items :nth-child(4)");
const TriplePattyQty = document.querySelector("#items :nth-child(5)");
const TriplePattyprice = document.querySelector("#items :nth-child(6)");
const DoubleDeckerlabel = document.querySelector("#items :nth-child(7)");
const DoubleDeckerQty = document.querySelector("#items :nth-child(8)");
const DoubleDeckerprice = document.querySelector("#items :nth-child(9)");
const FiestaSpeciallabel = document.querySelector("#items :nth-child(10)");
const FiestaSpecialQty = document.querySelector("#items :nth-child(11)");
const FiestaSpecialprice = document.querySelector("#items :nth-child(12)");
const OliveSpicePizzalabel = document.querySelector("#items :nth-child(13)");
const OliveSpicePizzaQty = document.querySelector("#items :nth-child(14)");
const OliveSpicePizzaprice = document.querySelector("#items :nth-child(15)");
const CheesePizzalabel = document.querySelector("#items :nth-child(16)");
const CheesePizzaQty = document.querySelector("#items :nth-child(17)");
const CheesePizzaprice = document.querySelector("#items :nth-child(18)");
const ChickTacoParathalabel = document.querySelector("#items :nth-child(19)");
const ChickTacoParathaQty = document.querySelector("#items :nth-child(20)");
const ChickTacoParathaprice = document.querySelector("#items :nth-child(21)");
const BeefRollParathalabel = document.querySelector("#items :nth-child(22)");
const BeefRollParathaQty = document.querySelector("#items :nth-child(23)");
const BeefRollParathaprice = document.querySelector("#items :nth-child(24)");
const QuadRollParathalabel = document.querySelector("#items :nth-child(25)");
const QuadRollParathaQty = document.querySelector("#items :nth-child(26)");
const QuadRollParathaprice = document.querySelector("#items :nth-child(27)");
const SoftDrinkslabel = document.querySelector("#items :nth-child(28)");
const SoftDrinksQty = document.querySelector("#items :nth-child(29)");
const SoftDrinksprice = document.querySelector("#items :nth-child(30)");
const BlueLagoonlabel = document.querySelector("#items :nth-child(31)");
const BlueLagoonQty = document.querySelector("#items :nth-child(32)");
const BlueLagoonprice = document.querySelector("#items :nth-child(33)");
const MintMargheritalabel = document.querySelector("#items :nth-child(34)");
const MintMargheritaQty = document.querySelector("#items :nth-child(35)");
const MintMargheritaprice = document.querySelector("#items :nth-child(36)");

const totallabel = document.querySelector("#total :nth-child(3)");

const pay = document.getElementById("pay");

pay.onclick = () => {
    let valid = true;
    if(document.getElementById("name").value === "" || document.getElementById("card").value === "" || document.getElementById("expiry").value === "" || document.getElementById("cvv").value === "") valid = false;
    else if(document.getElementById("card").value.length !== 16) valid = false;
    else if(document.getElementById("cvv").value.length !== 3) valid = false;
    else if(document.getElementById("expiry").value.length !== 5) valid = false;
    else if(document.getElementById("expiry").value[2] !== "/") valid = false;
    else if(document.getElementById("expiry").value[0] > 1) valid = false;
    else if(document.getElementById("expiry").value[0] === 1 && document.getElementById("expiry").value[1] > 2) valid = false;
    else if(document.getElementById("expiry").value[3] > 2) valid = false;
    else if(document.getElementById("expiry").value[3] === 2 && document.getElementById("expiry").value[4] > 1) valid = false;
    else if(document.getElementById("cvv").value[0] === "0") valid = false;
    if(document.getElementById("cash").checked) valid = true;
    if(!document.getElementById("delivery").checked && !document.getElementById("pickup").checked) valid = false;
    else if(document.getElementById("delivery").checked && document.getElementById("address").value === "") valid = false;

    if(valid){
        document.getElementById("success").classList.add("animateIn");
        setTimeout(() => {
            document.getElementById("success").classList.remove("animateIn");
            document.getElementById("success").classList.add("animateOut");
        }, 2000);
        setTimeout(() => {
            document.getElementById("success").classList.remove("animateOut");
            window.location.href = "main.html";
        }, 3000);
    }
    else{
        document.getElementById("incorrect").classList.add("animateIn");
        setTimeout(() => {
            document.getElementById("incorrect").classList.remove("animateIn");
            document.getElementById("incorrect").classList.add("animateOut");
        }, 2000);
        setTimeout(() => {
            document.getElementById("incorrect").classList.remove("animateOut");
        }, 6000);
    }
}

if(RegularBeefNo>0){
    RegularBeeflabel.style = "display:block";
    RegularBeefprice.style = "display:block";
    RegularBeefQty.style = "display:block";
}
if(TriplePattyNo>0){
    TriplePattylabel.style = "display:block";
    TriplePattyprice.style = "display:block";
    TriplePattyQty.style = "display:block";
}
if(DoubleDeckerNo>0){
    DoubleDeckerlabel.style = "display:block";
    DoubleDeckerprice.style = "display:block";
    DoubleDeckerQty.style = "display:block";
}
if(FiestaSpecialNo>0){
    FiestaSpeciallabel.style = "display:block";
    FiestaSpecialprice.style = "display:block";
    FiestaSpecialQty.style = "display:block";
}
if(OliveSpicePizzaNo>0){
    OliveSpicePizzalabel.style = "display:block";
    OliveSpicePizzaprice.style = "display:block";
    OliveSpicePizzaQty.style = "display:block";
}
if(CheesePizzaNo>0){
    CheesePizzalabel.style = "display:block";
    CheesePizzaprice.style = "display:block";
    CheesePizzaQty.style = "display:block";
}
if(ChickTacoParathaNo>0){
    ChickTacoParathalabel.style = "display:block";
    ChickTacoParathaprice.style = "display:block";
    ChickTacoParathaQty.style = "display:block";
}
if(BeefRollParathaNo>0){
    BeefRollParathalabel.style = "display:block";
    BeefRollParathaprice.style = "display:block";
    BeefRollParathaQty.style = "display:block";
}
if(QuadRollParathaNo>0){
    QuadRollParathalabel.style = "display:block";
    QuadRollParathaprice.style = "display:block";
    QuadRollParathaQty.style = "display:block";
}
if(SoftDrinksNo>0){
    SoftDrinkslabel.style = "display:block";
    SoftDrinksprice.style = "display:block";
    SoftDrinksQty.style = "display:block";
}
if(BlueLagoonNo>0){
    BlueLagoonlabel.style = "display:block";
    BlueLagoonprice.style = "display:block";
    BlueLagoonQty.style = "display:block";
}
if(MintMargheritaNo>0){
    MintMargheritalabel.style = "display:block";
    MintMargheritaprice.style = "display:block";
    MintMargheritaQty.style = "display:block";
}

RegularBeefprice.textContent = RegularBeefNo*400;
TriplePattyprice.textContent = TriplePattyNo*600;
DoubleDeckerprice.textContent = DoubleDeckerNo*500;
FiestaSpecialprice.textContent = FiestaSpecialNo*2600;
OliveSpicePizzaprice.textContent = OliveSpicePizzaNo*2199;
CheesePizzaprice.textContent = CheesePizzaNo*2199;
ChickTacoParathaprice.textContent = ChickTacoParathaNo*349;
BeefRollParathaprice.textContent = BeefRollParathaNo*449;
QuadRollParathaprice.textContent = QuadRollParathaNo*599;
SoftDrinksprice.textContent = SoftDrinksNo*150;
BlueLagoonprice.textContent = BlueLagoonNo*200;
MintMargheritaprice.textContent = MintMargheritaNo*200;

RegularBeefQty.textContent = RegularBeefNo;
TriplePattyQty.textContent = TriplePattyNo;
DoubleDeckerQty.textContent = DoubleDeckerNo;
FiestaSpecialQty.textContent = FiestaSpecialNo;
OliveSpicePizzaQty.textContent = OliveSpicePizzaNo;
CheesePizzaQty.textContent = CheesePizzaNo;
ChickTacoParathaQty.textContent = ChickTacoParathaNo;
BeefRollParathaQty.textContent = BeefRollParathaNo;
QuadRollParathaQty.textContent = QuadRollParathaNo;
SoftDrinksQty.textContent = SoftDrinksNo;
BlueLagoonQty.textContent = BlueLagoonNo;
MintMargheritaQty.textContent = MintMargheritaNo;

let total = RegularBeefNo*400 + TriplePattyNo*600 + DoubleDeckerNo*500 + FiestaSpecialNo*2600 + OliveSpicePizzaNo*2199 + CheesePizzaNo*2199 + ChickTacoParathaNo*349 + BeefRollParathaNo*449 + QuadRollParathaNo*599 + SoftDrinksNo*150 + BlueLagoonNo*200 + MintMargheritaNo*200;

totallabel.textContent = total;








