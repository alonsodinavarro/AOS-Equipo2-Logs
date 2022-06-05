# Arquitecturas orientadas a servicios
## Subsistema 7: Gestión de logs
El subsistema 7 es el encargado de la gestión de logs del resto de subsistemas para talleres de mecánica rápida. Permitirá registrar eventos que quedarán almacenados para su posterior consulta, generación de informes, estadísticas, etc. Es importante identificar de alguna manera el subsistema que registra el evento, la fecha, algún tipo de mensaje descriptivo, prioridad, etc.

Las operaciones que se pueden realizar en nuestra API son:

**GET:** devuelve todos los logs del resto de subsistemas.
**POST:** añade un nuevo log.
**OPTIONS:** devuelve una lista de métodos HTTP soportados.
**GET (ID):** obtener un log mediante su ID.
**PUT (ID):** modifica un log creado previamente.
**DELETE (ID):** elimina el log correspondiente al ID proporcionado.
**OPTIONS (ID):** devuelve una lista de métodos HTTP soportados.

Se han considerado los siguientes atributos para la creación de un log mediante el método **GET**: id, fecha, mensaje, prioridad, usuario y subsistema. Asimismo, se podrá ordenar por orden ascendente o descendente.
En cuanto al método **POST** los atributos incluidos han sido los siguientes: fecha, mensaje, prioridad, usuario. Se podrá ordenadar de manera ascendente y descendente al igual que por número de página.
Se adjuntan pruebas de todos los métodos y responses posibles en el archivo `openapi.yaml`.

El servicio está compuesto por 3 contenedores:
**- Backend -** stoplight/prism: encargado de los mocks para generar las pruebas de la API 
**- Frontend -** swaggerapi/swagger-ui: contenedor que muestra una interfaz gráfica de la API para el usuario en el puerto 8000.
**- Proxy -** caddy: realiza redirecciones. Funciona recibiendo las peticiones al puerto 80 y todo lo que venga con /api/v1/ se lo redirecciona al contenedor con el Backend

## Instrucciones para poner en marcha y probar el servicio.
### Despliegue 
**1.** Obtenemos el fichero desde la URL: https://github.com/alonsodinavarro/AOS-Equipo2-Logs
Podemos descargar el fichero .zip y extraerlo o realizar un git clone desde nuestro terminal.
**2.** Abrimos un terminal y nos situamos en la carpeta donde hemos descargado al repositorio, o bien abrimos el terminal directamente desde la ruta del proyecto. Desde este terminal iniciaremos los servicios.
**3.** Ejecutamos el siguiente comando: `docker compose -f ./docker-compose.yaml up -d` 
**4.** Si todo ha funcionado correctamente deberíamos poder acceder a la URL: http://127.0.0.1:8000/
Para la simulación del servicio se crean los 3 contenedores explicados anteriormente.
Desde Postman podremos realizar todas las peticiones necesarias para probar el servicio.
   
