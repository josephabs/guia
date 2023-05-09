// Iteración 1: Nombres y entradas

let hacker1 = "Ramon";

let hacker2 = "Ricardo"



console.log("el nombre del conductor es " + [hacker1]);


console.log("el nombre del navegante es " + [hacker2] );

// Iteración 2: Condicionales

console.log(hacker1.length);

if(hacker1.length > hacker2.length ) {console.log("El conductor tiene el nombre más largo, tiene 5 caracteres");

}

else if(hacker1.length < hacker2.length ){console.log("Parece que el navegante tiene el nombre más largo, tiene 7 caracteres.");

}

else{console.log("¡Vaya, ambos tienen nombres igual de largos");}

// Iteración 3: Loops

let estudiante ="jonh"
let nuevonombre = ""

for (let index = 0; index < estudiante.length; index++) {
    
nuevonombre += estudiante[index].toUpperCase() + " "
    
}

console.log(nuevonombre);

console.log(estudiante.split("").reverse("").join(""));



console.log(hacker1.localeCompare(hacker2));
console.log(hacker2.localeCompare(hacker1));


if(hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)){console.log("El nombre del conductor va primero.");

}
else if(hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1) )
{ console.log("Yo, el navegador va primero definitivamente.");
}
else{ console.log("¿Qué? ¿Los dos tienen el mismo nombre?");}

