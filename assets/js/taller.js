
    //puntos del taller



    //1 de palabras

    //longitus
    const longitud = document.getElementById('longitud');
    longitud.addEventListener('click', ()=>{

        const palabra = document.getElementById('palabra').value;
        const result = palabra.length;
        alert(`La longitud de las palabra digitada "${palabra}" es ${result}`);

    });
  
    //mayuscula
    const mayuscula = document.getElementById('mayuscula');

    mayuscula.addEventListener('click', ()=>{
        const palabra = document.getElementById('palabra').value;
        const result = palabra.toUpperCase();
        alert(`la mayuscula de la palabra"${palabra}" a mayúscula es "${result}"`);
    });


    /*MINUSCULAS*/
    const mini = document.getElementById('mini');
    mini.addEventListener('click', ()=>{
        const palabra = document.getElementById('palabra').value;
        const result = palabra.toLowerCase();
        alert(`conversion de "${palabra}" a minúsculas es "${result}"`);
    });
    /*PRIMERA LETRA */
    const uni = document.getElementById('pri');
    uni.addEventListener('click', ()=>{
        const palabra = document.getElementById('palabra').value;
        const result = palabra.charAt();
        alert(`la primera letra de "${palabra}" es "${result}"`);
    });






    /*EJERCICIO2*/
    /*CONVERTIR GRADOS*/
    const verify = document.getElementById('cal');
    verify.addEventListener('click', ()=>{
        const dato = document.getElementById('grados').value;
        const grado = document.getElementById('inf').value
        parseInt(dato);
        if(dato==1){       
                    const valor = parseFloat(grado) + 273.15;
                    alert(`los ${grado} grados celsius a kelvin son: ${valor}`)
        }else if(dato==2){
                const valor = (parseFloat(grado)*1.8) + 32;
                    alert(`los ${grado} grados celsius a Fahrenheit son: ${valor}`);
        }else if(dato == 3){
                const valor = (parseFloat(grado)-32) * (5/9);
                alert(`los ${grado} grados Fahrenheit a celsius son: ${valor.toFixed(2)}`);
        }else if(dato == 4){
                const valor = (parseFloat(grado)-32)*(5/9) + 273.15;
                alert(`los ${grado} grados Fahrenheit a kelvin son: ${valor.toFixed(2)}`);      
        }else if(dato == 5){
                const valor = (parseFloat(grado)-273.15)*(9/5) + 32;
                alert(`los ${grado} grados kelvin a Fahrenheit son: ${valor.toFixed(2)}`);  
        }else if(dato == 6){
                const valor = (parseFloat(grado)-273.15);
                alert(`los ${grado} grados kelvin a celcius son: ${valor.toFixed(2)}`);  
        }
    })



    /*EJERCICIO3*/
    const averiguar = document.getElementById('trig');
    averiguar.addEventListener('click',()=>{
        const lad1 = document.getElementById('lado1').value;
        const lad2 = document.getElementById('lado2').value;
        const lad3 = document.getElementById('lado3').value;
        parseFloat(lad1);parseFloat(lad2);parseFloat(lad3);
        if(lad1==lad2 && lad1 ==lad3){
                alert(`El triangulo es equilatero ya que sus lados son iguales.`)
        }else if(lad1==lad2 || lad2==lad3 || lad1==lad3){
                alert(`El triangulo es isósceles, dos lados son similares.`);
        }else{
                alert(`El triangulo es ecaleno, todos sus lados son diferentes.`);
        }  
    })




    /*EJERCICIO4*/
    const respuesta = document.getElementById('respuesta');
    respuesta.addEventListener('click', ()=>{
        const names = document.getElementById('nombre').value;
        const secondName = document.getElementById('apellido').value;
        const materia = document.getElementById('actividad').value;
        parseInt(names); parseInt(secondName); parseInt(materia)
                if(names== 1 && secondName==2 && materia==6){
                    alert("RESPUESTA CORRECTA!!")
                }else if(names== 2 && secondName==4 && materia==1 || materia==7){
                    alert("RESPUESTA CORRECTA!!")
                }else if(names== 3 && secondName==5 && materia==2){
                    alert("RESPUESTA CORRECTA!!")
                }else if(names== 4 && secondName==1 && materia==8){
                    alert("RESPUESTA CORRECTA!!")
                }else if(names== 5 && secondName==3 && materia==3){
                    alert("RESPUESTA CORRECTA!!")
                }else if(names== 6 && secondName==7 && materia==6){
                    alert("RESPUESTA CORRECTA!!")
                }else if(names== 7 && secondName==8 && materia==4){
                    alert("RESPUESTA CORRECTA!!")
                }else{
                    alert("RESPUESTA INCORRECTA¡¡")
                }    
    })




    /*EJERCICIO5*/
    const calC = document.getElementById('Acirculo');
    calC.addEventListener('click',()=>{
        const area = document.getElementById('radio').value;
        const final = 3.1416 * (parseFloat(area)**2);
        alert(`El area del circulo es: ${final.toFixed(2)}`);
    });
    const calP = document.getElementById('Pcirculo');
    calP.addEventListener('click',()=>{
        const area = document.getElementById('radio1').value;
        const final = (2*3.1416) * parseFloat(area);
        alert(`El perimetro del circulo es: ${final.toFixed(2)}`);
    });
    const triA = document.getElementById('Atriangulo');
    triA.addEventListener('click', ()=>{
        const base1 = document.getElementById('base1').value;
        const altura1 = document.getElementById('altura1').value;
        a = (parseFloat(base1) * parseFloat(altura1)) /2;
        alert(`El area del triangulo es: ${a}`);
    });
    const triP = document.getElementById('Ptriangulo');
    triP.addEventListener('click', ()=>{
        const lado = document.getElementById('lad1').value;
        const lad = document.getElementById('lad2').value;
        const lad1 = document.getElementById('lad3').value;
        const a = parseFloat(lado)+parseFloat(lad)+parseFloat(lad1);
        alert(`El perimetro del triangulo es: ${a}`);  
    });

    const recArea = document.getElementById('Arectangulo');
    recArea.addEventListener('click', ()=>{
        const bas1 = document.getElementById('bas').value;
        const alt1 = document.getElementById('alt').value;
        
        r= parseFloat(bas1) * parseFloat(alt1);
        alert(`La base del rectangulo es: ${r}`);
    });

    const recPeri = document.getElementById('Prectangulo');
    recPeri.addEventListener('click', ()=>{
        const bas2 = document.getElementById('bas2').value;
        const alt2 = document.getElementById('alt2').value;
        console.log(bas2, alt2);
        r= (parseFloat(bas2)*2) +(parseFloat(alt2)*2);
        alert(`El perimetro del rectangulo es: ${r}`);
    })


    const cuadAre = document.getElementById('ArecCuadra');
    cuadAre.addEventListener('click',()=>{
        const ladC = document.getElementById('basi').value;
        const f = parseFloat(ladC)* parseFloat(ladC);
        alert(`El area del cuadrado es: ${f}`)
        
    })
    const cuadPer = document.getElementById('PreCuadra');
    cuadPer.addEventListener('click',()=>{
        const ladC = document.getElementById('basi2').value;
        const f = parseFloat(ladC)+ parseFloat(ladC)+parseFloat(ladC)+ parseFloat(ladC);
        alert(`El perimetro del cuadrado es: ${f}`)
        
    })