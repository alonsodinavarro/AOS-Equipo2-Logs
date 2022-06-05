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
**2.** Abrimos un terminal y nos situamos en la carpeta donde hemos descargado al repositorio (comando `cd [<ruta>]`), o bien abrimos el terminal directamente desde la ruta del proyecto. Desde este terminal iniciaremos los servicios. <br/>
**3.** Ejecutamos el siguiente comando: `docker compose -f ./docker-compose.yaml up -d` <br/>
**4.** Si todo ha funcionado correctamente deberíamos poder acceder a la URL: http://127.0.0.1:8000/ <br/>
Para la simulación del servicio se crean los 3 contenedores explicados anteriormente.
Desde Postman podremos realizar todas las peticiones necesarias para probar el servicio.
   
### Imagen de nuestro servicio.
La aplicación desarrollada se despliega sobre una imagen de Node (la última versión) y la persistencia se realiza utilizando un fichero json.
Podemos encontrar la imagen en el siguiente enlace: https://hub.docker.com/r/alonsodinavarro/logs_api_equipo2 <br/>
Para crearla utilizamos el comando `docker image build -t alonsodinavarro/logs_api_equipo2 .`
Adjuntamos unas capturas probando nuestro servicio a través de la herramienta Postman:

![logs](https://user-images.githubusercontent.com/78709082/172062520-7781a66c-c615-4a4b-98f5-854baa9f47df.png)   

### Integración del resto de servicios mediante Docker Compose.
**1. Gestión de Trabajos.** <br/>
   Se levanta el servicio pero la imagen no está bien estructura por lo que al acceder a `localhost:87/api/` se muestra un mensaje de error:
   
   ![Trabajos](https://user-images.githubusercontent.com/78709082/172061134-6d2074ca-59f7-44e3-b2da-4ba70bdc242e.png)

**2. Gestión de Recambios.** <br/>
   Hemos realizado la integración de este servicio utilizando la imagen facilitada por el equipo 3. <br/>
   Puede consultarse este servicio en `localhost:86/api/v1/recambios`.
   Adjuntamos una captura tras realizar un GET:
   
   ![recambios](https://user-images.githubusercontent.com/78709082/172061375-7cb92445-d1bb-4eea-a167-03894cc66956.png)

**3. Gestión de Vehículos (equipo 4).** <br/>
   Han facilitado una imagen en Dockerhub basada en una imagen de Mongodb, que despliega un servicio en Ubunto pero no implementa ninguna funcionalidad, por lo que al acceder a `localhost:84` se muestra un mensaje de error:
   
   ![vehiculos4](https://user-images.githubusercontent.com/78709082/172061641-77018d84-3d14-4074-8607-9a26c6882e87.png)

**4. Gestión de Notificaciones.** <br/>
   Hemos utilizado la imagen facilitada por el equipo 5 basada en Python:3.6-alpine. Una vez desplegado el servicio accedemos a `localhost/notificacion/` y se muestra un mensaje de error:
   
   ![notificaciones](https://user-images.githubusercontent.com/78709082/172061826-5f058d12-ea7d-4ac9-8ea3-8a5651557c20.png)

**5. Gestión de Clientes.** <br/>
   No se ha subido ninguna imagen en DockerHub que podamos utilizar para integrar el servicio. <br/>
   
**6. Gestión de Vehículos (equipo 7).** <br/>
   Hemos utilizado la imagen facilitada por el equipo 7. Una vez desplegado el servicio accedemos a `localhost:85/vehiculos/` y se muestra un mensaje de error:
   
   ![vehiculo7](https://user-images.githubusercontent.com/78709082/172062149-8fa847bf-0562-4c30-a551-9c3740c8e6ca.png)

**7. Gestión de Facturas (equipo 8).** <br/>
   Han utilizado una imagen basada en Python: 3.9. Puede consultarse este servicio en `localhost:81/facturas`.
   Adjuntamos una captura tras realizar un GET:
   
   ![equipo8](https://user-images.githubusercontent.com/78709082/172062270-a2cbbea6-9817-47f5-9928-4e712c91fca8.png)

**8. Gestión de Facturas (equipo 94).** <br/>
   Hemos realizado la integración de este servicio utilizando la imagen facilitada por el equipo. Puede consultarse este servicio en `localhost:82/factura`.
   Adjuntamos una captura tras realizar un GET:
   
   ![equipo94](https://user-images.githubusercontent.com/78709082/172062371-fc67f372-773a-444d-ae07-97acc1d591d2.png)

Ejecutamos el comando `docker-compose up` dentro de la carpeta `Despliegue Kubernetes` para desplegarlo. En la siguiente imagen podemos observar el esquema de despliegue de todos los servicios:
   
   ![EsquemaDespliegueServicios](https://user-images.githubusercontent.com/78709082/172060936-34d7bc3a-9774-4eba-b656-71a514bbea6a.png)
   
### Despliegue mediante Kubernetes.
Hemos generado los ficheros `.yaml` correspondientes al fichero `docker-compose.yml` de cada servicio utilizando la herramienta Kompose.
Nos situamos en la carpeta `Kubernetes` y ejecutamos el comando `kubectl apply -f` para desplegar la aplicación en Kubernetes, después comprobamos los servicios que hay desplegados utilizando `kubectl get services`.

![apply](https://user-images.githubusercontent.com/78709082/172062731-cbb84743-47ea-4559-a3d6-de24bfafbba0.png)

![get services](https://user-images.githubusercontent.com/78709082/172062743-37112d07-ee04-476b-88c3-fcd1b470049a.png)




