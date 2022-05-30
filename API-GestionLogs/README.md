# API-GestionLogs
Gestión de logs para talleres de mecánica rápida.

Subsistema_7: Gestión de los logs del resto de subsistemas. Permitirá registrar eventos que quedarán almacenados para su posterior consulta, generación de informes, estadísticas, etc. Es importante identificar de alguna manera el subsistema que registra el evento, la fecha, algún tipo de mensaje descriptivo, prioridad, etc

Las operaciones que se pueden realizar en nuestra API son:

GET: se obtienen todos los logs del resto de subsistemas.
POST: añade un nuevo log.
OPTIONS: devuelve una lista de métodos HTTP soportados.
GET (ID): Obtener un log mediante logid.
PUT (ID): modifica un log creado previamente.
DELETE (ID): elimina el log según el ID proporcionado.
OPTIONS (ID): devuelve una lista de métodos HTTP soportados.

Se han considerado los siguientes atributos para la creación de un log mediante el método GET: id, fecha, mensaje, prioridad, usuario y subsistema. Asimismo, se podrá ordenar por orden ascendente o descendente.
En cuanto al método POST los atributos incluidos han sido los siguientes: fecha, mensaje, prioridad, usuario. Se podrá ordenadar de manera ascendente y descendente al igual que por el número de página.
Se adjuntan pruebas de todos los métodos y responses posibles en el mismo archivo openapi.yaml.

El servicio está compuesto por 3 contenedores:
- Backend - stoplight/prism: encargado de los mocks para generar las pruebas de la API 
- Frontend - swaggerapi/swagger-ui: contenedor que muestra una interfaz gráfica de la API para el usuario en el puerto 8000.
- Proxy - caddy: realiza redirecciones. Funciona recibiendo las peticiones al puerto 80 y todo lo que venga con /api/v1/ se lo redirecciona al contenedor con el Backend

Instrucciones para poner en marcha y probar el servicio.
- Abrir un terminal en la ruta del proyecto, para levantar los contenedores lanzar: docker compose -f ./docker-compose.yaml up -d  
- El usuario puede probar la API en su navegador a través de la url: http://127.0.0.1:8000/
