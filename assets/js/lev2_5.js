// Lev2_5
function check() {
    let bundesland = document.getElementById("bundeslandInfo").value
    switch (bundesland) {
        case 'Baden - Württemberg':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt');
            break;
        case 'Bayern':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt');
            break;
        case 'Berlin':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt');
            break;
        case 'Bremen':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt');
            break;
        case 'Brandenburg':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt');
            break;
        case 'Hamburg':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt')
            break;
        case 'Hessen':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt')
            break;
        case 'Mecklenburg-Vorpommern':
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt')
            break;

        default:
            document.getElementById("bundeslandInfoErgebnis").innerHTML = ('Ein solches Bundesland gibt es in Deutschland nicht.')
            break;

    }
}

