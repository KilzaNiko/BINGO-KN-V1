
//> all = devuelve todo el obj con letras y sus respectivos numeros
//> a_letter = solo devuelve las letras en un array y en formato string
//> letter = devuelve los numeros correspondientes a la letra especificada
//> v_data = devuelve un obj con 16 claves, la primera teniendo un array con las letras "BINGO" y 
// las demas con los numeros ordenados en arrays de 5 para asi ser ordenados verticalmente con las
// letras "BINGO"
//> la validacion de las 3 variables tienen sentido de izquierda a derecha
function get_data_table(all=true, a_letter=false, letter, v_data=false){
    if(all && a_letter || !all && !a_letter && !letter && !v_data || !all && !a_letter && (typeof letter !== "string" || letter.length > 1 || !/[B|I|N|G|O]/.test(letter.toLocaleUpperCase())) && !v_data){ return false }

    const N1 = Array.from({ length: 15 }, (_, index) => index + 1);
    const N2 = Array.from({ length: 15 }, (_, index) => index + 16);
    const N3 = Array.from({ length: 15 }, (_, index) => index + 31);
    const N4 = Array.from({ length: 15 }, (_, index) => index + 46);
    const N5 = Array.from({ length: 15 }, (_, index) => index + 61);

    const table_obj = { B: N1, I: N2, N: N3, G: N4, O: N5 };
    const letters = Object.keys(table_obj)

    if(all){return table_obj}
    else if(a_letter){return letters}
    else if(typeof(letter) === "string"){return table_obj[(letter === letter.toLowerCase()) ? letter.toUpperCase() : letter]}
    else if(v_data){
        const v_table_obj = {BINGO: letters}
        for (let i = 0; i < 15; i++){
            const FX = []
            for (let x = 0; x < 5; x++){
                const claveN = eval(`N${x+1}`)
                FX.push(claveN[i])
            }
            v_table_obj['F' + (i + 1)] = FX
        }
        return v_table_obj;
    }
}

function generate_table(){
    const lettersArray = get_data_table(false, true);
    const letterColors = { 'B': "primary", 'I': "success", 'N': "warning", 'G': "danger", 'O': "info" };
    lettersArray.forEach((letter) => {
        const numbers = get_data_table(false, false, letter);
        document.write(`<tr><td class="table-${letterColors[letter]}" id="${letter}">${letter}</td>`);
        numbers.forEach((number) => {
            document.write(`<td class="number" id="${number}">${number}</td>`);
        });
        document.write('</tr>');
    });
}

function generate_vertical_table(){
    const v_data = get_data_table(false, false, false, true);
    const letterColors = ["primary", "success", "warning", "danger", "info"]

    console.log(v_data)

    for (let i = 1; i < 16; i++) {
        document.write('<tr>');
        for (x = 0; x < 5; x++){
            if ( i === 1 ) {
                console.log(x)
                document.write(`<td class="table-${letterColors[x]}" id="${v_data["BINGO"][x]}">${v_data["BINGO"][x]}</td>`);
            }else{
                document.write(`<td class="number">${v_data[eval(`F${i}`)[x]]}</td>`);
            }
        }
        document.write('</tr>');
    }
}

function get_vertical_numbers(){
    
}


