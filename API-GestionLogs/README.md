# API-GestionLogs
Gestión de logs para talleres de mecánica rápida.

Subsistema_7: Gestión de los logs del resto de subsistemas. Permitirá registrar eventos que quedarán almacenados para su posterior consulta, generación de informes, estadísticas, etc. Es importante identificar de alguna manera el subsistema que registra el evento, la fecha, algún tipo de mensaje descriptivo, prioridad, etc


El servicio está compuesto por 3 contenedores:
- Backend - stoplight/prism: encargado de los mocks para generar las pruebas de la API 
- Frontend - swaggerapi/swagger-ui: contenedor que muestra una interfaz gráfica de la API para el usuario en el puerto 8000.
- Proxy - caddy: realiza redirecciones. Funciona recibiendo las peticiones al puerto 80 y todo lo que venga con /api/v1/ se lo redirecciona al contenedor con el Backend

Instrucciones para poner en marcha y probar el servicio.
- Abrir un terminal en la ruta del proyecto, para levantar los contenedores lanzar: docker compose -f ./docker-compose.yaml up -d  
- El usuario puede probar la API en su navegador a través de la url: http://127.0.0.1:8000/
