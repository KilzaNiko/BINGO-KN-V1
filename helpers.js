
//all = devuelve todo el obj con letras y sus respectivos numeros
//a_letter = solo devuelve las letras en un array y en formato string
//s_letter = devuelve una letra especifica junto a sus respectivos numeros
//letter = este parametro recibe la letra a consultar, debe ir especificada si o si junto a s_letter=true
function get_data_table(all=true, a_letter=false, s_letter=false, letter){
    if (!all){ if ((a_letter && s_letter) || (!a_letter && !s_letter && !all) || (typeof letter === "string" && letter.length === 1 && !/[B|I|N|G|O]/.test(letter))){ return false } }
    const N1 = Array.from({ length: 15 }, (_, index) => index + 1);
    const N2 = Array.from({ length: 15 }, (_, index) => index + 16);
    const N3 = Array.from({ length: 15 }, (_, index) => index + 31);
    const N4 = Array.from({ length: 15 }, (_, index) => index + 46);
    const N5 = Array.from({ length: 15 }, (_, index) => index + 61);

    const table_obj = { B: N1, I: N2, N: N3, G: N4, O: N5 };
    const letras = Object.keys(table_obj);

    if (all) { return table_obj; }else{
        if(a_letter){ return Object.keys(table_obj) }else{
            return table_obj(letter.toUpperCase())
        }
    }
}