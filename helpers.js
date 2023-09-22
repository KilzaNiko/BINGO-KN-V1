
//all = devuelve todo el obj con letras y sus respectivos numeros
//a_letter = solo devuelve las letras en un array y en formato string
//letter = devuelve los numeros correspondientes a la letra especificada
//la validacion de las 3 variables tienen sentido de izquierda a derecha
function get_data_table(all=true, a_letter=false, letter, v_data=false){
    if(all && a_letter || !all && !a_letter && !letter && !v_data || !all && !a_letter && (typeof letter !== "string" || letter.length > 1 || !/[B|I|N|G|O]/.test(letter.toLocaleUpperCase())) ){ return false }

    const N1 = Array.from({ length: 15 }, (_, index) => index + 1);
    const N2 = Array.from({ length: 15 }, (_, index) => index + 16);
    const N3 = Array.from({ length: 15 }, (_, index) => index + 31);
    const N4 = Array.from({ length: 15 }, (_, index) => index + 46);
    const N5 = Array.from({ length: 15 }, (_, index) => index + 61);

    const table_obj = { B: N1, I: N2, N: N3, G: N4, O: N5 };

    if(all){return table_obj}
    else if(a_letter){return Object.keys(table_obj)}
    else if(letter === "string"){return table_obj[(letter === letter.toLowerCase()) ? letter.toUpperCase() : letter]}
    else if(v_data){ 
        const v_table_obj = {
            
        }
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

function generate_vertical_table(letter) {
    const numbers = get_data_table(false, false, letter);
    const letterColors = { 'B': "primary", 'I': "success", 'N': "warning", 'G': "danger", 'O': "info" };
    const colorClass = letterColors[letter];
    const table = document.querySelector('.table');
    const rows = 16; // Número de filas en modo vertical

    for (let i = 1; i <= rows; i++) {
        document.write('<tr>');
        for (let j = 1; j <= 5; j++) {
            if (j === 1) {
                document.write(`<td class="table-${colorClass}">${letter}</td>`);
            } else {
                const numberIndex = (j - 2) * 15 + (i - 1); // Calcular el índice del número
                document.write(`<td class="number">${numbers[numberIndex]}</td>`);
            }
        }
        document.write('</tr>');
    }
}

function get_vertical_numbers(){
    const row = [];
}


