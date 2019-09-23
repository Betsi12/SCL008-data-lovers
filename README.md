# Data Lovers

## Pokemon Go!



***

## Contexto

Este trabajo se desarrolla para el Bootcamp de Laboratoria. Desafío Data Lovers.

Duración: para  desarrollar el proyecto se contó con 3 semanas, fecha de  entrega el Viernes 8 de marzo del 2019.
 
Problema/meta general: Construir una app que permita visualizar datos que se adecuen a las necesidades relatadas en las historias de usuarios.



## Equipo
 Para este proyecto se trabajo en dupla, en nuestro caso, sin conocer el juego Pokemon Go, sin embargo nos decidimos por este proyecto, porque nos pareció entretenido y tractivo  puesto que este juego es muy usado a nivel mundial, lo cual nos pareció lo más relevante en ese momento.


## Herramientas utilizadas:

* Javascript
* Boostrap
* Git Hub

## Resultados y entregas:


* Un reporte con las conclusiones y avances del tranajo con las historias de usuario.
* Una app que permite visualizar la data, filtrarla, ordenarla y hacer algún cálculo agregado.
Status: Finalizado.

### FASE 1: Definición del usuario

Comenzamos con la búsqueda de información sobre Pokemon Go. Comenzamos entrevistando a algunas compañeras que juegan, para saber el mecanismo del juego y las necesidades que pueden tener como jugadores.Para conocer de qué manera nuestra aplicación les podría ayudar realizamos preguntas como:

1.- ¿Qué información es relevante conocer para ti de este juego? (peso, altura, debilidad, eggs, etc. respecto a lo disponible en la base de datos proporcionada para el desafío).

2.- ¿Para qué necesitarías esta información? (cuándo, cómo, por qué).

Debido a que nos dimos cuenta que los jugadores principiantes requieren más de información de tipos y caracteristicas de los pokemons; decidimos enfocar nuestro proyecto a jugadores novatos que son quienes mas necesitan estos datos.
Entoces podemos decir que nuestra aplicación esta pensada para juadores novatos del juego POKEMON GO! que dessen conocer los 151 pokemons de la región de Kanto para planificar su estrategia de juego y obtener los mejores resultados.


### Historias de usuario

1. Enunciado: "Yo como usuario de la aplicación POKEMON GO!"

Quiero filtrar el listado de Pokemones por tipo (elemento), para que sea más fácil y rápido encontrar el pokemon que busco

Criterios de Aceptación:

 Quiero que el filtrado se muestre en una lista desplegable

 Quiero que en la búsqueda aparezca el nombre y la foto del pokemon

  Quiero que la página sea visible en el móvil y en mi computador.

2. Enunciado: "Yo como usuario de la aplicación POKEMON GO!"

Quiero ordenar el listado de pokemones: Alfabéticamente (A-Z, y/o Z-A). Para que sea más fácil y rápido encontrar el pokemon que busco.

Criterios de Aceptación:

 Quiero elegir la opción de orden en una lista desplegable

 Quiero ordenar de la A a la Z

 Quiero ordenar de la Z a la A

3. Enunciado: "Yo como usuario de la aplicación POKEMON GO!"

Quiero poder saber la cantidad de Pokemones existe de cada tipo para saber cuantos me faltan por atrapar.

Criterios de Aceptación:

 Quiero poder pedir informacion estadistica del tipo de pokemon que seleccione.

Luego de definir nuestro usuario y sus requerimientos, comenzamos el proceso de pensar en el flujo del usuario al usar la aplicación. Así creamos un prototipo del flujo básico del usuario, el flujo de filtrado, de ordenado (alfabetico), búsqueda, y estadísticas.



 ### FASE 1: - Prototipado baja fidelidad

 El paso siguiente corresponde al prototipado de baja definición, aquí comenzamos ideando e iterando sobre cómo debería verse la aplicación, y qué elementos debería contener para llegar al producto final.
 Luego de otorgado el desafío, comenzamos a idear la mejor forma de resolverlo, para eso hicimos los primeros bosquejos o wireframes del producto. Pensamos en poner boton para filtrar, y otro  para ordenar. Pero con el feedback de nuestro squak nos dimos cuenta que era poco practico y se veria muy recargada la aplicación. Finalmente decidimos hacer listas desplegables para las opciones de filtardo y ordenado.

![Sketch](img\Sketch.jpg)
  
## Planificación
Realizamos una planificación al comienzo del proyecto con tableros en la pizarra. Utilizamos Trello para digitalizar nuestra planificación. 

[Selecciona aqui](https://trello.com/b/rYe2a8ZX/pokemonego)
 

#### FASE 3 Prototipo de alta fidelidad
Prototipo en Figma
[Selecciona aqui](https://www.figma.com/file/JsQsSqcJ6GN42gF2871VUaio/pokemon?node-id=49%3A3)


#### Testeos de usabilidad

En esta sección estan incluidas algunas de las entrevistas realizadas durante el testeo de nuestra aplicación.

[Entrevista a Olga](https://www.useloom.com/share/3fb5d7678f004704840fbfd7019ed936)

 Según  Olga debiamos quitar la transparencia a la tarjeta del perfil de los pokemones porque no se apreciaba bien. Esto se pudo solucionar aplicando una clase con diseño en CSS.

 [Entrevista a Valeska](1d255b76928a43dc929fd8aefbe0de50)

 Valeska Sugirió que le gustaria ver en la tarjeta de perfil de los Pokemones otras caracteristicas, como por ejemplo las evoluciones. Lo cual se mejoró agrgando en la tarjeta del perfil de los Pokemones las caracteristicas mas relevantes de estos, segun las consideraciones de los entrevistados hasta ahora.

 [Entrevista a Patricio](https://www.useloom.com/share/a950054f528e4249989e6d0c6afc452a)

 A Patricio le gustaria que se pudiera ordenar alfabeticamente cuando se filtran los pokemones. 

Por otro lado Sebastián y Gabriel dijeron que les gustaria poder ver información mas detallada como por ejemplo la cantidad de pokemones de cada tipo, ver los mas fuertes y avanzados. 

Fabian sugirió mostrar un mapa de sugerencia de lugares de avistamiento de pokemones.
Estas ultimas sugerencias se tomarán en cuenta para una siguiente versión ya que incluyen modificaciones en varios archivos de la aplicación.


#### FASE 5 El Diseño final
La meta de la aplicación web es cear un proceso rápido  de búsqueda con opciones de filtrado y ordenado de los pokemones. 

La versión final esta disponible en versión demo.
[Ver aqui](https://carolinaolatev.github.io/SCL008-data-lovers/src/index.html)

Aspectos a mejorar:
1. Mostrar algunos cálculos o estadísticas que son relevantes para los jugadores. 
2.Ordenar alfabeticamente una vez filtrados los pokemones.
3. Diseñar filtros por debilidad, caramelos y número. Los que seran incluidos en próximas versiones.



