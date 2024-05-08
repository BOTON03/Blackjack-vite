import _ from 'underscore';
/**
 * Crea un deck
 * @param {Array<String>} tiposDeCarta ejemplo [a,b]
 * @param {Array<String>} tiposEspeciales ejemplo [c,d]
 * @returns  returna un deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length  === 0 ) {
        throw "Se requieren los tipos de cartas y especiales";
    }
    if (!tiposEspeciales || tiposEspeciales.length === 0) {
        throw "Se requieren los tipos de cartas y especiales";
    }
    let deck = [];   
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

