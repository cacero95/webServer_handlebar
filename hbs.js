const hbs = require('hbs');

hbs.registerHelper('get_year', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalize', (palabras) => {
    let palabra = palabras.split(' ');
    palabra.forEach((letter, id) => {
        palabra[id] = letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
    });
    return palabra.join(' ');
})