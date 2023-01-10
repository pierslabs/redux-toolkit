# Redux ToolKit

REDUX TOOLKIT
Herramienta que simplifica Redux ya que tiene mejor abstracción que redux que era algo mas complicado implementar.
Hoy en día, contamos con Redux toolkit que nos ofrece las siguientes soluciones:
• Simplifica la configuración de redux
• Elimina la necesidad de agregar múltiples paquetes para tener una aplicación escalable.
• Reduce el código repetitivo.

https://redux-toolkit.js.org/

- Store:
  La fuente única de la verdad es donde se va a consultar, los componentes van a ir al store a traer la informacion, cuantas notificaciones tiene el user, cuantos productos, cuantos mensajes etc..

- Dispatch:
  La función dispatch como bien dice su nombre se encarga de despachar o ejecutar una accion, recibe como parámetro la acción, puede despachar tanto acciones sincronas como acciones asíncronas.

- Actions:
  Una acción es un objeto plano que representa la intención de modificar el estado. Es la única forma de que los datos lleguen al store, eventos ui, callbacks de red, websockets seran despachados como acciones.
  Una acción no debe contener otros datos que no sean: type, payload,error y meta.

- Slices:
  Un slice es el conjunto del estado, acciones y reducer de un feature.

- State:
  El state es el estado een que se encuentra la aplicación.

- Thunks:
  Son acciones asíncronas que a su vez disparan otra acción.

```bash
npm install
```
