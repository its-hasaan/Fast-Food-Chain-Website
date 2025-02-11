const RegularBeefPlus = document.querySelector("#RegularBeef .counter :nth-child(3)");
const TriplePattyPlus = document.querySelector("#TriplePatty .counter :nth-child(3)");
const DoubleDeckerPlus = document.querySelector("#DoubleDecker .counter :nth-child(3)");
const FiestaSpecialPlus = document.querySelector("#FiestaSpecial .counter :nth-child(3)");
const OliveSpicePizzaPlus = document.querySelector("#OliveSpicePizza .counter :nth-child(3)");
const CheesePizzaPlus = document.querySelector("#CheesePizza .counter :nth-child(3)");
const ChickTacoParathaPlus = document.querySelector("#ChickTacoParatha .counter :nth-child(3)");
const BeefRollParathaPlus = document.querySelector("#BeefRollParatha .counter :nth-child(3)");
const QuadRollParathaPlus = document.querySelector("#QuadRollParatha .counter :nth-child(3)");
const SoftDrinksPlus = document.querySelector("#SoftDrinks .counter :nth-child(3)");
const BlueLagoonPlus = document.querySelector("#BlueLagoon .counter :nth-child(3)");
const MintMargheritaPlus = document.querySelector("#MintMargherita .counter :nth-child(3)");

const RegularBeefMinus = document.querySelector("#RegularBeef .counter :nth-child(1)");
const TriplePattyMinus = document.querySelector("#TriplePatty .counter :nth-child(1)");
const DoubleDeckerMinus = document.querySelector("#DoubleDecker .counter :nth-child(1)");
const FiestaSpecialMinus = document.querySelector("#FiestaSpecial .counter :nth-child(1)");
const OliveSpicePizzaMinus = document.querySelector("#OliveSpicePizza .counter :nth-child(1)");
const CheesePizzaMinus = document.querySelector("#CheesePizza .counter :nth-child(1)");
const ChickTacoParathaMinus = document.querySelector("#ChickTacoParatha .counter :nth-child(1)");
const BeefRollParathaMinus = document.querySelector("#BeefRollParatha .counter :nth-child(1)");
const QuadRollParathaMinus = document.querySelector("#QuadRollParatha .counter :nth-child(1)");
const SoftDrinksMinus = document.querySelector("#SoftDrinks .counter :nth-child(1)");
const BlueLagoonMinus = document.querySelector("#BlueLagoon .counter :nth-child(1)");
const MintMargheritaMinus = document.querySelector("#MintMargherita .counter :nth-child(1)");

const payment = document.querySelector("#payment");

let RegularBeefNo = 0;
let TriplePattyNo = 0;
let DoubleDeckerNo = 0;
let FiestaSpecialNo = 0;
let OliveSpicePizzaNo = 0;
let CheesePizzaNo = 0;
let ChickTacoParathaNo = 0;
let BeefRollParathaNo = 0;
let QuadRollParathaNo = 0;
let SoftDrinksNo = 0;
let BlueLagoonNo = 0;
let MintMargheritaNo = 0;


payment.onclick = () => {

    localStorage.setItem("RegularBeefNo", RegularBeefNo);
    localStorage.setItem("TriplePattyNo", TriplePattyNo);
    localStorage.setItem("DoubleDeckerNo", DoubleDeckerNo);
    localStorage.setItem("FiestaSpecialNo", FiestaSpecialNo);
    localStorage.setItem("OliveSpicePizzaNo", OliveSpicePizzaNo);
    localStorage.setItem("CheesePizzaNo", CheesePizzaNo);
    localStorage.setItem("ChickTacoParathaNo", ChickTacoParathaNo);
    localStorage.setItem("BeefRollParathaNo", BeefRollParathaNo);
    localStorage.setItem("QuadRollParathaNo", QuadRollParathaNo);
    localStorage.setItem("SoftDrinksNo", SoftDrinksNo);
    localStorage.setItem("BlueLagoonNo", BlueLagoonNo);
    localStorage.setItem("MintMargheritaNo", MintMargheritaNo);

    window.location.href = "payment.html";
}

RegularBeefPlus.onclick = () => {
    RegularBeefNo++;
    document.querySelector("#RegularBeef span").textContent = RegularBeefNo;
}
TriplePattyPlus.onclick = () => {
    TriplePattyNo++;
    document.querySelector("#TriplePatty span").textContent = TriplePattyNo;
}
DoubleDeckerPlus.onclick = () => {
    DoubleDeckerNo++;
    document.querySelector("#DoubleDecker span").textContent = DoubleDeckerNo; 
}
FiestaSpecialPlus.onclick = () => {
    FiestaSpecialNo++;
    document.querySelector("#FiestaSpecial span").textContent = FiestaSpecialNo;
}
OliveSpicePizzaPlus.onclick = () => {
    OliveSpicePizzaNo++;
    document.querySelector("#OliveSpicePizza span").textContent = OliveSpicePizzaNo;
}
CheesePizzaPlus.onclick = () => {
    CheesePizzaNo++;
    document.querySelector("#CheesePizza span").textContent = CheesePizzaNo;
}
ChickTacoParathaPlus.onclick = () => {
    ChickTacoParathaNo++;
    document.querySelector("#ChickTacoParatha span").textContent = ChickTacoParathaNo;
}
BeefRollParathaPlus.onclick = () => {
    BeefRollParathaNo++;
    document.querySelector("#BeefRollParatha span").textContent = BeefRollParathaNo;
}
QuadRollParathaPlus.onclick = () => {
    QuadRollParathaNo++;
    document.querySelector("#QuadRollParatha span").textContent = QuadRollParathaNo;
}
SoftDrinksPlus.onclick = () => {
    SoftDrinksNo++;
    document.querySelector("#SoftDrinks span").textContent = SoftDrinksNo;
}
BlueLagoonPlus.onclick = () => {
    BlueLagoonNo++;
    document.querySelector("#BlueLagoon span").textContent = BlueLagoonNo;
}
MintMargheritaPlus.onclick = () => {
    MintMargheritaNo++;
    document.querySelector("#MintMargherita span").textContent = MintMargheritaNo;
}


RegularBeefMinus.onclick = () => {
    if(RegularBeefNo>0){
        RegularBeefNo--;
        document.querySelector("#RegularBeef span").textContent = RegularBeefNo;
    }
}
TriplePattyMinus.onclick = () => {
    if(TriplePattyNo>0){
        TriplePattyNo--;
        document.querySelector("#TriplePatty span").textContent = TriplePattyNo;
    }
}
DoubleDeckerMinus.onclick = () => {
    if(DoubleDeckerNo>0){
        DoubleDeckerNo--;
        document.querySelector("#DoubleDecker span").textContent = DoubleDeckerNo;
    } 
}
FiestaSpecialMinus.onclick = () => {
    if(FiestaSpecialNo>0){
        FiestaSpecialNo--;
        document.querySelector("#FiestaSpecial span").textContent = FiestaSpecialNo;
    }
}
OliveSpicePizzaMinus.onclick = () => {
    if(OliveSpicePizzaNo>0){
        OliveSpicePizzaNo--;
        document.querySelector("#OliveSpicePizza span").textContent = OliveSpicePizzaNo;
    }
}
CheesePizzaMinus.onclick = () => {
    if(CheesePizzaNo>0){
        CheesePizzaNo--;
        document.querySelector("#CheesePizza span").textContent = CheesePizzaNo;
    }
}
ChickTacoParathaMinus.onclick = () => {
    if(ChickTacoParathaNo>0){
        ChickTacoParathaNo--;
        document.querySelector("#ChickTacoParatha span").textContent = ChickTacoParathaNo;
    }
}
BeefRollParathaMinus.onclick = () => {
    if(BeefRollParathaNo>0){
        BeefRollParathaNo--;
        document.querySelector("#BeefRollParatha span").textContent = BeefRollParathaNo;
    }
}
QuadRollParathaMinus.onclick = () => {
    if(QuadRollParathaNo>0){
        QuadRollParathaNo--;
        document.querySelector("#QuadRollParatha span").textContent = QuadRollParathaNo;
    }
}
SoftDrinksMinus.onclick = () => {
    if(SoftDrinksNo>0){
        SoftDrinksNo--;
        document.querySelector("#SoftDrinks span").textContent = SoftDrinksNo;
    }
}
BlueLagoonMinus.onclick = () => {
    if(BlueLagoonNo>0){
        BlueLagoonNo--;
        document.querySelector("#BlueLagoon span").textContent = BlueLagoonNo;
    }
}
MintMargheritaMinus.onclick = () => {
    if(MintMargheritaNo>0){
        MintMargheritaNo--;
        document.querySelector("#MintMargherita span").textContent = MintMargheritaNo;
    }
}