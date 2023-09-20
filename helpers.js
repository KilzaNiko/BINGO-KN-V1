
//all = devuelve todo el obj con letras y sus respectivos numeros
//a_letter = solo devuelve las letras en un array y en formato string
//letter = este parametro recibe la letra a consultar, debe ir especificada si o si junto a s_letter=true
function get_data_tablea(all=true, a_letter=false, letter){
    if ((all && a_letter) || (!all && !a_letter && letter === null) || letter !== null && typeof letter !== "string" || letter !== null && letter.length > 1 || letter !== null && !/[B|I|N|G|O]/.test(letter.toLocaleUpperCase())){ return false }
    const N1 = Array.from({ length: 15 }, (_, index) => index + 1);
    const N2 = Array.from({ length: 15 }, (_, index) => index + 16);
    const N3 = Array.from({ length: 15 }, (_, index) => index + 31);
    const N4 = Array.from({ length: 15 }, (_, index) => index + 46);
    const N5 = Array.from({ length: 15 }, (_, index) => index + 61);

    const table_obj = { B: N1, I: N2, N: N3, G: N4, O: N5 };

    if (all) { return table_obj; }else{
        if(a_letter){ return Object.keys(table_obj) }else{
            return table_obj[(letter === letter.toLowerCase()) ? letter.toUpperCase() : letter]
        }
    }
}

function get_data_table(all=true, a_letter=false, letter){
    if(all && a_letter || !all && !a_letter && !letter){ return console.log("2") }
    if(!all && !a_letter){
        if(typeof letter !== "string" || letter.length > 1 || !/[B|I|N|G|O]/.test(letter.toLocaleUpperCase())){
            return console.log("3")
        }
        return console.log("4")
    }


    console.log("5")

    //if ((all && a_letter) || (!all && !a_letter && letter === null) || typeof letter !== "string" || letter.length > 1 || !/[B|I|N|G|O]/.test(letter.toLocaleUpperCase())){ return false }
    const N1 = Array.from({ length: 15 }, (_, index) => index + 1);
    const N2 = Array.from({ length: 15 }, (_, index) => index + 16);
    const N3 = Array.from({ length: 15 }, (_, index) => index + 31);
    const N4 = Array.from({ length: 15 }, (_, index) => index + 46);
    const N5 = Array.from({ length: 15 }, (_, index) => index + 61);

    const table_obj = { B: N1, I: N2, N: N3, G: N4, O: N5 };

    console.log("6")

    if (all) { 
        console.log("7")
        return table_obj; }else{
            console.log("8")
        if(a_letter){ 
            console.log("9")
            return Object.keys(table_obj) }else{
                console.log("10")
            return table_obj[(letter === letter.toLowerCase()) ? letter.toUpperCase() : letter]
        }
    }
}