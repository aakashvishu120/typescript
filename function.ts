//function having no parameter but return number
function add() : number{
    return 10 + 2;
}

var temp : number = add();
console.log(temp)


//function having parameter but no return
function addtext(text1 : string , text2 : string) : void{
    console.log(text1 + " " + text2)
}

addtext("aakash" , "kumar");



//function having no paramter and no return
function multiplynumber() : void{
    console.log(2*3);
}
multiplynumber();
