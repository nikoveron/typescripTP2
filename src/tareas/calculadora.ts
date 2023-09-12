 function calcularCirculo() {
            const radio = parseFloat((<HTMLInputElement>document.getElementById('radio')).value);
            const area = Math.PI * Math.pow(radio, 2);
            const perimetro = 2 * Math.PI * radio;
            (<HTMLSpanElement>document.getElementById('areaCirculo')).textContent = area.toFixed(2);
            (<HTMLSpanElement>document.getElementById('perimetroCirculo')).textContent = perimetro.toFixed(2);
        }

 function calcularRectangulo() {
            const largo = parseFloat((<HTMLInputElement>document.getElementById('largo')).value);
            const ancho = parseFloat((<HTMLInputElement>document.getElementById('ancho')).value);
            const area = largo * ancho;
            const perimetro = 2 * (largo + ancho);
            (<HTMLSpanElement>document.getElementById('areaRectangulo')).textContent = area.toFixed(2);
            (<HTMLSpanElement>document.getElementById('perimetroRectangulo')).textContent = perimetro.toFixed(2);
        }

 function calcularTriangulo() {
            const base = parseFloat((<HTMLInputElement>document.getElementById('base')).value);
            const altura = parseFloat((<HTMLInputElement>document.getElementById('altura')).value);
            const anchoTri = parseFloat((<HTMLInputElement>document.getElementById("anchoTri")).value);
            const area = (base * altura) / 2;
            const perimetro = (base + altura + anchoTri);
            (<HTMLSpanElement>document.getElementById('areaTriangulo')).textContent = area.toFixed(2);
           
            (<HTMLSpanElement>document.getElementById('perimetroTriangulo')).textContent = perimetro.toFixed(2);
        }

//traemos elementos del DOM

const calcularCirculoButton = document.getElementById('calcularCirculo') as HTMLButtonElement;
const calcularRectanguloButton = document.getElementById('calcularRectangulo') as HTMLButtonElement;
const calcularTrianguloButton = document.getElementById('calcularTriangulo') as HTMLButtonElement;

//ejecutamos los botones

calcularCirculoButton.addEventListener('click', calcularCirculo)
calcularRectanguloButton.addEventListener('click', calcularRectangulo)
calcularTrianguloButton.addEventListener('click', calcularTriangulo)
