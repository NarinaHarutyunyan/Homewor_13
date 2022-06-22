"use strict"

// Ստեղծել 5 - ական ֆունկցիա (declaration, expressino, arrow)
// declaration 
// ...1 ...
function howMuch( banana, orange, apple, kiwi){
    const bananaPrice = 2 * banana;
    const orangePrice = 3 * orange;
    const kiwiPrice = 1.5 * kiwi;
    const applePrice = 2.5 * apple;
    const totalPrice = bananaPrice + orangePrice + kiwiPrice + applePrice;
    console.log(`Դուք գնել եք 2կգ բանան, 1,5կգ կիվի,  2,5կգ խնձոր, 3կգ նարինջ։
                 ընդհանուր արժեքն է՝  ${totalPrice}   `);
}
howMuch(700, 650, 500, 550);

// ․․․2․․․
function myCalc(one, two, three){
    if( one + two <= three){
        return one;
    } else if(one >= two){
        return two;
    } 
    return (one + two) * three;
    
}
console.log(myCalc(10, 12, 2));

// ... 3 ....
function coffee(withoutSugar,withSugar, withMilk, withIce_cream){
    console.log(`Ո՞ր տեսակի սուրճն եք նախընտրում: Ունենք ${withoutSugar}, ${withSugar}, ${withMilk}, ${withIce_cream} սուրճի տեսակներ։`);
}
coffee("դառը", "քաղցր","կաթով", "պաղպաղակով" );


//...4...
function vahanTeryan(theMusic, goodBye, iMissYou, beautifulGirl){
    console.log(`Աշնան մեղեդի 
    ${theMusic} 
    Մնաս բարով
    ${goodBye}
`);
}
vahanTeryan(`Աշուն է, անձրև... Ստվերներն անձև
Դողում են դանդաղ... Պաղ, միապաղաղ
Անձրև՜ ու անձրև ...
Սիրտըս տանջում Է ինչ-որ անուրախ
Անհանգստություն...
Սպասիր, լսիր, ես չեմ կամենում
Անցած լույսերից, անցած հույզերից
Տառապել կրկին.
Նայիր, ա՜խ, նայիր, ցավում է նորից
Իմ հիվանդ հոգին...`,
`  Դու գնում ես՝ չգիտեմ ուր,
Լուռ ու տխուր,
Հեզ գունատվող աստղի նըման։`
);


// ...5...
function myResume(myName, myLastname, education, workExperience){
    console.log(`Ողջույն, ես ${myLastname} ${myName}ն եմ, Ավարտել եմ ${education}ն, աշխատել եմ ${workExperience}ում։`);
}
myResume("Արմեն", "Կիրակոսյան", "ԵՊՀ", "Գիտությունների Ազգային Ակադեմիա");

// expression
//...1...
const cook = function(hisName){
    console.log(`Ես ցանկանում եմ պատվիրել խոհարար ${hisName}ի պատրաստած սթեյքը։`);
};
cook("Արմեն");

//...2...
const a = function(age){
    if(age === 32){
        return "My Age is 32"
    } else if( age <= 31){
        return " My Age is not 32"
    }
    return "My Age is 33"
};
console.log(a(33)); // My Age is 33

//...3...
 const b = function(Paris, Prague, Hamburg ){
    if(Paris === "Աննա"){
        return "Աննան ապրում է Փարիզում։"
    }else if ( Prague === "Մարիա"){
        return "Մարիան ապրում է Պրահայում։"
    } return( "Աննան ու Մարիան ապրում են Համբուրգում։" );
 };
 console.log(b( "Կարինե", "Մարիա", "Աննա"));

 //...4...
 const myCountry = function(Armenia){
    console.log(`Իմ հայրենիքը ${Armenia}ն է!!!`);
 };
 myCountry("Հայաստան");
 
 //...5...
 const sale = function (bigSale){
        console.log(`Գնելով մեկ իր՝ կստանաք ${bigSale} զեղչ։`);
 };
 sale("-10%");

 // Arrow
 //...1...
 const m = (n, h) => n*n + h*h;
    console.log( m(10,20));

//...2...
const me = (myName, myLastName) => {
    console.log(` I'm ${myName} ${myLastName}`);
};
me("Narine", "Harutyunyan");

//...3... 
const g = j => j + 55;
console.log(g(25));

///...4...
const poet = (favPoet) => {
       console.log(`Իմ սիրելի պոետը ${favPoet}ն է։`);
};
poet("Պարույր Սևակ");

//...5...
const number = (num1, num2) => num1 % num2;
console.log(number(1500, 13)); 

//Ստեղծել ֆունկցիաներ, որոնք իրենց մեջ պարունակում են լոգիկա 
//․․․1․․
function helloDearCustomer(juice, coffee, tea){
    console.log(`
    Բարև Ձեզ, եթե ցանկանում եք հյութ, կարող եմ առաջարկել հետևյալ տարբերակները՝ ${juice},
    եթե ցանկանում եք սուրճ, ապա ունենք հետևյալ տեսակները՝ ${coffee},
    Եթե Ձեզ հետաքրքրում են թեյերը, ապա ունենք 2 տեսակ ՝ ${tea}:
    `);
}
helloDearCustomer("Բնական, գազով՝ ֆանտա, սփրայթ, կոկա - կոլա, կոմպոտ", "Սև սուրճ, կապուչինո, Ամերիկանո", "Սև թեյ, կանաչ թեյ");

//..2...
function education(name, edu){
    console.log(` 
       Բարև Ձեզ ${name}, ${edu === "միջնակարգ" ? " դուք չեք կարող աշխատել մեզ մոտ" : "Շնորհավորում եմ, դուք ընդունվել եք աշխատանքի"}
    `);
}
education("Ալիսա", "միջնակարգ");
education("Արսեն", "բարձրագույն");




// Ստեղծել առանձին ֆունկցիա date անունով ու էդ ֆունկցիան կանչել mig ֆունկցիայի մեջ ու այնպես անել, որ 2 ֆունկցիաներն էլ աշխատեն
function mig(){
    data();
    console.log("Կանչիր mig - ին")
}
function data(){
    console.log("կանչիր data - ին")
}
mig();
