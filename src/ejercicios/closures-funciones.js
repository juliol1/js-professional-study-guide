
// IIFE
(function() {
    let color = 'green';
    function printColor() {
        console.log(color);
    }

    printColor();
})();


// funciones que regresan funciones

function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`;

    return function () {
        console.log(colorMessage);
    }
};

let greenColor = makeColorPrinter('green');
console.log(greenColor());

// variables "privadas"

const counter = {
    count: 3,
};

console.log(counter.count);

// en el codigo de arriba cualquiera podria accedar a la propiedad count

// para evitar eso se hace lo siguiente

function makeCounter(n) {
    let count = n;

    return {
        increase: function () {
            count = count + 1;
        },
        decrease: function () {
            count = count - 1;
        },
        getCount: function () {
            return count;
        },
    };
}

let counter = makeCounter(7);
console.log(counter.getCount());
counter.increase();
console.log(counter.getCount());
counter.increase();
console.log(counter.getCount());
counter.decrease();
console.log(counter.getCount());
counter.decrease();
console.log(counter.getCount());
counter.decrease();
console.log(counter.getCount());
counter.decrease();
console.log(counter.getCount());
