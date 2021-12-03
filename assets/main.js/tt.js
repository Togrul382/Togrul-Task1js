// Array.prototype.REVERSEDCOPY = function () {
//     var arr = [];
//     for (let i = 0; i < arr.length; i++) {
//        new arr.push(this[i]);

        
//     };
//     return arr;
// }

// var a =[1,2,3];
// var b = a.REVERSEDCOPY();

// console.log((a.reduceRight))

function reverseStr(str) {
    let NEWstr = ""
    for (let i = str.length-1;i>=0 ; i--) {
        NEWstr=NEWstr+str[i];
        
    }
    return NEWstr;
    
}
 
console.log(reverseStr(" Tovuz Bozkurtlar Diyari"));

// second task

class Match{
    constructor(numbers,pluss,minuss,multiplys,divades){
        this.numbers=numbers;
        this.pluss=pluss;
        this.minuss=minuss;
        this.multiplys=multiplys;
        this.divades=divades;

    }

    pluss() {
        this.numbers=this.numbers+thist.pluss;
        return this.numbers;

    }
    minuss() {
        this.numbers=this.plus();
        this.numbers=this.numbers- thist.minuss;
        
        return this.numbers;

    }
    multiplys() {
        this.numbers=this.minus();
        this.numbers=this.numbers * thist.multiplys;
        return this.numbers;

    }
    pluss() {
        this.numbers=this.multiply();
        this.numbers=this.numbers+thist.divades;
        return this.numbers;

    }
    var res = new Match(50,6,30,3,2);
    console.log(res.divaded());

    /// niye islemedi basa dusmedim mellim var da nese sef gosterir
    //unexpected identifier
    
    
}




