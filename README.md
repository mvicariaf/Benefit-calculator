# Calculadora de beneficios 
Calculadora de beneficios 

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

## Discusion

### Eleccion de tecnologias

Para leer el fichero csv a JSON he decidido implementar mi propio Reader ya que la logica no era complicada y asi me ahorra añadir dependencias externas que no controlo.