// Koltsegvetesvezerlo
var koltsegvetesVezerlo = (function() {
    var Kiadas = function(id, leiras, ertek) {
        this.id = id;
        this.leiras = leiras;
        this.ertek = ertek;
        this.szazalek = -1;
    };

    Kiadas.prototype.szazalekSzamitas = function(osszesBevetel) {
        if (osszesBevetel > 0) {
            // Use toFixed(2) to handle decimal places, then convert back to number
            const arany = Number((this.ertek / osszesBevetel).toFixed(4));
            this.szazalek = Math.round(arany * 100);
        } else {
            this.szazalek = -1;
        }
    };

    var Bevetel = function(id, leiras, ertek) {
        this.id = id;
        this.leiras = leiras;
        this.ertek = ertek;
    };

    var osszesKiadas = [];
    var osszesBevetel = [];

    var osszegezes = function(tipus) {
        var osszeg = 0;
        var tomb = tipus === 'kia' ? osszesKiadas : osszesBevetel;
        
        tomb.forEach(function(current) {
            osszeg += current.ertek;
        });
        return osszeg;
    };

    return {
        addKiadas: function(id, leiras, ertek) {
            var ujKiadas = new Kiadas(id, leiras, ertek);
            osszesKiadas.push(ujKiadas);
            return ujKiadas;
        },
        addBevetel: function(id, leiras, ertek) {
            var ujBevetel = new Bevetel(id, leiras, ertek);
            osszesBevetel.push(ujBevetel);
            return ujBevetel;
        },
        tetelHozzaad: function(tipus, leiras, ertek) {
            var ujTetel, ID;
            ertek = parseFloat(ertek); // Convert string to number

            if (tipus === 'kia') {
                ID = osszesKiadas.length > 0 ? osszesKiadas[osszesKiadas.length - 1].id + 1 : 0;
                ujTetel = this.addKiadas(ID, leiras, ertek);
            } else if (tipus === 'bev') {
                ID = osszesBevetel.length > 0 ? osszesBevetel[osszesBevetel.length - 1].id + 1 : 0;
                ujTetel = this.addBevetel(ID, leiras, ertek);
            }
            return ujTetel;
        },
        koltsegvetesSzamolas: function() {
            this.osszBevetel = osszegezes('bev');
            this.osszKiadas = osszegezes('kia');
            this.koltsegvetes = this.osszBevetel - this.osszKiadas;

            if (this.osszBevetel > 0) {
                // Use toFixed(4) for better precision with large numbers
                const arany = Number((this.osszKiadas / this.osszBevetel).toFixed(4));
                this.szazalek = Math.round(arany * 100);
            } else {
                this.szazalek = -1;
            }
        },

        getkoltsegvetes: function() {
            return {
                osszeg: this.koltsegvetes,
                bev: this.osszBevetel,
                kia: this.osszKiadas,
                szazalek: this.szazalek
            };
        },

        szazalekokSzamolasa: function() {
            var osszBevetel = this.osszBevetel;
            osszesKiadas.forEach(function(current) {
                current.szazalekSzamitas(osszBevetel);
            });
        },

        getSzazalekok: function() {
            return osszesKiadas.map(function(current) {
                return current.szazalek;
            });
        },
        tetelTorol: function(tipus, id) {
            var tomb = tipus === 'kia' ? osszesKiadas : osszesBevetel;
            
            // Find index of item to remove
            var index = tomb.findIndex(function(current) {
                return current.id === id;
            });
        
            // Remove item if found
            if (index !== -1) {
                if (tipus === 'kia') {
                    osszesKiadas.splice(index, 1);
                } else if (tipus === 'bev') {
                    osszesBevetel.splice(index, 1);
                }
            }
        }
    };
})();

// feluletvezerlo
var feluletVezerlo = (function() {
    var DOMElemek = {
        inputTipus: '.hozzaad__tipus',
        inputLeiras: '.hozzaad__leiras',
        inputErtek: '.hozzaad__ertek',
        inputGomb: '.hozzaad__gomb',
        bevetelTarolo: '.bevetelek__lista',
        kiadasTarolo: '.kiadasok__lista',
        koltsegvetesCimke: '.koltsegvetes__ertek',
        osszbevetelCimke: '.koltsegvetes__bevetelek--ertek',
        osszkiadasCimke: '.koltsegvetes__kiadasok--ertek',
        szazalekCimke: '.koltsegvetes__kiadasok--szazalek',
        kontener: '.kontener',
        szazalekokCimke: '.tetel__szazalek',
        datumCimke: '.koltsegvetes__cim--honap'
    };

    var szamFormazo = function(szam, tipus) {
        var szam, elojel;

        tipus === 'bev' ? elojel = '+' : elojel = '-';
        szam = Math.abs(szam);
        szam = szam.toLocaleString();

        szam = elojel + ' ' + szam;
        return szam;
    };

    return {
        getInput: function() {
            return {
                tipus: document.querySelector(DOMElemek.inputTipus).value,
                leiras: document.querySelector(DOMElemek.inputLeiras).value,
                ertek: document.querySelector(DOMElemek.inputErtek).value
            };
        },
        getDOMElemek: function() {
            return DOMElemek;
        },
        tetelMegjelenites: function(obj, tipus) {
            var html, ujHtml, elem;

            // HTML string létrehozása placeholder értékekkel
            if (tipus === 'bev') {
                elem = DOMElemek.bevetelTarolo;
                html = '<div class="tetel clearfix" id="bev-%id%"><div class="tetel__leiras">%leiras%</div><div class="right clearfix"><div class="tetel__ertek">%ertek%</div><div class="tetel__torol"><button class="tetel__torol--gomb"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (tipus === 'kia') {
                elem = DOMElemek.kiadasTarolo;
                html = '<div class="tetel clearfix" id="kia-%id%"><div class="tetel__leiras">%leiras%</div><div class="right clearfix"><div class="tetel__ertek">%ertek%</div><div class="tetel__szazalek">21%</div><div class="tetel__torol"><button class="tetel__torol--gomb"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // HTML string placeholder értékekkel cseréje
            ujHtml = html.replace('%id%', obj.id);
            ujHtml = ujHtml.replace('%leiras%', obj.leiras);
            ujHtml = ujHtml.replace('%ertek%', szamFormazo(obj.ertek, tipus));

            // HTML beszúrása a DOM-ba
            document.querySelector(elem).insertAdjacentHTML('beforeend', ujHtml);
        },
        tetelTorles: function(tetelID) {
            var elem = document.getElementById(tetelID);
            elem.parentNode.removeChild(elem);
        },
        urlapTorles: function() {
            var mezok, mezokTomb;
            mezok = document.querySelectorAll(DOMElemek.inputLeiras + ', ' + DOMElemek.inputErtek);
            mezokTomb = Array.prototype.slice.call(mezok);

            mezokTomb.forEach(function(currentValue, index, array) {
                currentValue.value = '';
            });
            mezokTomb[0].focus();
        },
        koltsegvetesMegjelenites: function(obj) {
            var tipus;
            obj.osszeg < 0 ? tipus = 'kia' : tipus = 'bev';

            document.querySelector(DOMElemek.koltsegvetesCimke).textContent = szamFormazo(obj.osszeg, tipus);
            document.querySelector(DOMElemek.osszbevetelCimke).textContent = szamFormazo(obj.bev, 'bev');
            document.querySelector(DOMElemek.osszkiadasCimke).textContent = szamFormazo(obj.kia, 'kia');

            if (obj.szazalek > 0) {
                document.querySelector(DOMElemek.szazalekCimke).textContent = obj.szazalek + '%';
            } else {
                document.querySelector(DOMElemek.szazalekCimke).textContent = '---';
            }
        },
        szazalekokMegjelenites: function(szazalekok) {
            var mezok = document.querySelectorAll(DOMElemek.szazalekokCimke);

            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForEach(mezok, function(current, index) {
                if (szazalekok[index] > 0) {
                    current.textContent = szazalekok[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },
        datumMegjelenites: function() {
            var ma, honap, ev, honapok;

            ma = new Date();
            honapok = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
            honap = ma.getMonth();
            ev = ma.getFullYear();
            document.querySelector(DOMElemek.datumCimke).textContent = ev + '. ' + honapok[honap];
        },
        tetelTipusValtozas: function() {
            var mezok = document.querySelectorAll(
                DOMElemek.inputTipus + ',' +
                DOMElemek.inputLeiras + ',' +
                DOMElemek.inputErtek
            );

            mezok.forEach(function(currentValue) {
                currentValue.classList.toggle('red-focus');
            });

            document.querySelector(DOMElemek.inputGomb).classList.toggle('red');
        }
    };
})();

// alkalmazasvezerlo
var vezerlo = (function(koltsegvetesVezerlo, feluletVezerlo) {
    var esemenykezeloBeallit = function() {
        var DOM = feluletVezerlo.getDOMElemek();

        document.querySelector(DOM.inputGomb).addEventListener('click', vezTetelHozzaadas);

        document.addEventListener('keydown', function(event) {
            if (event.key !== undefined && event.key === 'Enter') {
                vezTetelHozzaadas();
            } else if (event.keyCode !== undefined && event.keyCode === 13) {
                vezTetelHozzaadas();
            }
        });

        document.querySelector(DOM.kontener).addEventListener('click', vezTetelTorles);
        document.querySelector(DOM.inputTipus).addEventListener('change', feluletVezerlo.tetelTipusValtozas);
    };

    var osszegFrissitese = function() {
        koltsegvetesVezerlo.koltsegvetesSzamolas();

        var koltsegvetes = koltsegvetesVezerlo.getkoltsegvetes();

        feluletVezerlo.koltsegvetesMegjelenites(koltsegvetes);
    };

    var szazalekokFrissitese = function() {
        // 1. szazalekok ujraszamolasa
        koltsegvetesVezerlo.szazalekokSzamolasa();

        // 2. szazalekok kiolvasasa a koltsegvetes vezerlo modulbol
        var kiadasSzazalekok2 = koltsegvetesVezerlo.getSzazalekok();

        // 3. felulet frissitese az uj szazalekokkal
        feluletVezerlo.szazalekokMegjelenites(kiadasSzazalekok2);
    };

    var vezTetelHozzaadas = function() {
        var input, ujTetel;

        // bevitt adatok megszerzese
        input = feluletVezerlo.getInput();

        if (input.leiras !== '' && !isNaN(input.ertek) && input.ertek > 0) {
            ujTetel = koltsegvetesVezerlo.tetelHozzaad(input.tipus, input.leiras, input.ertek);

            feluletVezerlo.tetelMegjelenites(ujTetel, input.tipus);

            feluletVezerlo.urlapTorles();

            osszegFrissitese();

            szazalekokFrissitese();
        }
    };

    var vezTetelTorles = function(event) {
        var tetelID, splitID, tipus, ID;
        tetelID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (tetelID) {
            // bev-0
            splitID = tetelID.split('-');
            tipus = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. tetel torlese az adat obj-bol
            koltsegvetesVezerlo.tetelTorol(tipus, ID);

            // 2. tetel torlese a feluletrol
            feluletVezerlo.tetelTorles(tetelID);

            // 3. osszegek ujraszamolasa es megjelenitese a feluleten
            osszegFrissitese();

            // 4. szazalekok ujraszamolasa es megjelenitese a feluleten
            szazalekokFrissitese();
        }
    };

    return {
        init: function() {
            console.log('Az alkalmazás elindult.');
            feluletVezerlo.koltsegvetesMegjelenites({
                osszeg: 0,
                bev: 0,
                kia: 0,
                szazalek: -1
            });
            esemenykezeloBeallit();
        }
    };
})(koltsegvetesVezerlo, feluletVezerlo);

vezerlo.init();