# Calculadora de beneficios

## La aplicacion

### Requerimientos

- Version minima de NodeJS: 6.0

### Instalacion

No usamos ningun npm package, por lo tanto no es necesario installar nada.

### Ejecutar la aplicacion

Para ejecutar la aplicacion ejecuta el siguiente comando en un terminal:

```
node calculate.js sales_january.csv january_prices.json
```

Los ficheros csv y json se han de guardar (para esta version inicial) en la misma carpeta que el codigo fuente. Para probar otros ficheros simplemente ponerlos en esta carpeta y reemplazar en el comando anterior con los nuevos ficheros.

## Discusion

### Eleccion de tecnologias

- Este programa se ha elaborado en NodeJS y ECMAScript. El motivo ante todo ha sido que cuento con mayor experiencia en esta plataforma y lenguaje de programacion. De Javascript lo que mas me gusta es la facilidad con la que puedes empezar un nuevo proyecto. Al ser un lenguaje de tipos dinamicos, parsear un JSON es super sencillo, manipular datos, leer archivos. No hay que definir tipos estaticos que casen con la estructura de los datos.

- ECMAScript2015, merece una mencion aparte. He usado la ultima version de JS debido a la gran funcionalidad que aporta en el manejo de objetos y arrays. He intentado que mi codigo tenga una estructura bastante funcional, intentando que las funciones sean en la maxima metida immutables (es decir, devuelvan nuevos objetos en lugar de modificar los objetos existentes).

- Para leer los ficheros he implementado mis propios modulos. Leer un fichero JSON en Javascript es directo. Para leer el fichero csv a JSON es algo mas complejo. Encontre paquetes npm que realizaban esta labor, pero he decidido implementar mi propio Reader. El motivo fue que la logica no era complicada y asi me ahorra añadir dependencias externas que no controlo. Ademas suponia un gran reto y pense que era parte del problema.

### Dificultades

En general he disfrutado bastante realizando este problema. Los mayores retos que he tenido por delante:

- Leer ficheros por linea de comandos Node, no por dificultad sino porque no lo habia hecho antes.

- Convertir las unidades españolas en numeros y magnitudes. Leer textos de cantidades en millares (.) y decimales (,) y convertirlos a tipos de JS ha supuesto un gran reto.

- El mayor reto sin duda ha sido leer las formulas que nos dan en el Json para calcular el beneficio por categoria y transformarlas en una "formula" que el programa pueda interpretar. He optado por crear un pequeño compilador de formulas matematicas. Este compilador o parseador devuelve funciones a las que puedo aplicar las cantidades que vienen en el csv para calcular el beneficio.

### Si tuviera mas tiempo...

Estoy bastante satisfecho con el resultado final. El ejercicio ha supuesto un gran reto y estoy orgulloso de haber satisfecho los requerimientos, teniendo en cuenta las dificultades anteriores. He decidido entregar el codigo en este estado para poder tener feedback de ustedes lo mas rapido posible (con el afan de seguir el principio de [Fail fast, fail ofter](https://www.arrkgroup.com/thought-leadership/fail-fast-fail-often-explained/), con un poco de suerte en este caso no es Fail :D ).

Dicho esto, si tuviera mas tiempo me gustaria:

- Probar mas tipos de ficheros: Debido a que me encuentro trabajando y no tengo mucho tiempo no he podido probar mas JSon o mas ficheros CSVs. Me gustaria probar mas combinaciones.

- Añadir alguna forma de tests automaticos, ya sean en forma de [tests de regresion](https://en.wikipedia.org/wiki/Regression_testing) o [tests unitarios](https://en.wikipedia.org/wiki/Unit_testing). 

- Mejorar el rendimiento de la aplicacion: como se menciona en el enunciado, el fichero CSV puede tener miles de filas. No he tenido tiempo de probar este escenario. Me gustaria si tuviera mas tiempo hacer pruebas de rendimiento y hacer las mejoras en el codigo necesarias para que responda bien en situaciones de mucha carga de datos. Probablemente tendria que modificar como leo los ficheros y calculo las cantidades.
