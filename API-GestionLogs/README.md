# Arquitecturas orientadas a servicios
## Subsistema 7: Gestión de logs
El subsistema 7 es el encargado de la gestión de logs del resto de subsistemas para talleres de mecánica rápida. Permitirá registrar eventos que quedarán almacenados para su posterior consulta, generación de informes, estadísticas, etc. Es importante identificar de alguna manera el subsistema que registra el evento, la fecha, algún tipo de mensaje descriptivo, prioridad, etc.

Las operaciones que se pueden realizar en nuestra API son:

**GET:** devuelve todos los logs del resto de subsistemas. <br/>
**POST:** añade un nuevo log. <br/>
**OPTIONS:** devuelve una lista de métodos HTTP soportados. <br/>
**GET (ID):** obtener un log mediante su ID. <br/>
**PUT (ID):** modifica un log creado previamente. <br/>
**DELETE (ID):** elimina el log correspondiente al ID proporcionado. <br/>
**OPTIONS (ID):** devuelve una lista de métodos HTTP soportados. <br/>

Se han considerado los siguientes atributos para la creación de un log mediante el método **GET**: id, fecha, mensaje, prioridad, usuario y subsistema. Asimismo, se podrá ordenar por orden ascendente o descendente. <br/>
En cuanto al método **POST** los atributos incluidos han sido los siguientes: fecha, mensaje, prioridad, usuario. Se podrá ordenadar de manera ascendente y descendente al igual que por número de página. <br/>
Se adjuntan pruebas de todos los métodos y responses posibles en el archivo `openapi.yaml`.

El servicio está compuesto por 3 contenedores: <br/>
**- Proxy:** realiza redirecciones. Funciona recibiendo las peticiones al puerto 80 y todo lo que venga con /api/v1/ se lo redirecciona al contenedor con el Backend. <br/>
**- Backend:** encargado de los mocks para generar las pruebas de la API. <br/>
**- Frontend:** contenedor que muestra una interfaz gráfica de la API para el usuario en el puerto 8000. Permite realizar peticiones de prueba y consultar su especificación. <br/>

### Instrucciones para poner en marcha y probar el servicio.
**1.** Obtenemos el fichero desde la URL: https://github.com/alonsodinavarro/AOS-Equipo2-Logs <br/>
Podemos descargar el fichero .zip y extraerlo o realizar un git clone desde nuestro terminal. <br/>
**2.** Abrimos un terminal y nos situamos en la carpeta donde hemos descargado al repositorio, o bien abrimos el terminal directamente desde la ruta del proyecto. Desde este terminal iniciaremos los servicios. <br/>
**3.** Ejecutamos el siguiente comando: `docker compose -f ./docker-compose.yaml up -d` <br/>
**4.** Si todo ha funcionado correctamente deberíamos poder acceder a la URL: http://127.0.0.1:8000/ <br/>
Para la simulación del servicio se crean los 3 contenedores explicados anteriormente.
Desde Postman podremos realizar todas las peticiones necesarias para probar el servicio.
   
### Imagen de nuestro servicio.
