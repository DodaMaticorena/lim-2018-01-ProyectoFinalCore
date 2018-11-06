# lim-2018-01- Proyecto Final Core

<!-- [Link del aplicativo]() -->

## Introducción

La empresa de coworking donde opera Laboratoria en Lima ha decidido contratarnos para reinventar su proceso de registro de visitantes. Con la entrada de WeWork al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. 

## Historias de usuario

Las historias de usuario nos ayudan a planificarnos mejor y entender la funcionalidad que le aporta al usuario. En este proyecto son las siguientes:

1. Yo como usuario administrador quiero registrar al visitante con sus datos personales en este aplicativo.
2. Yo como usuario administrador quiero poder tomar una foto para el registro.
3. Yo como usuario administrador quiero poder seleccionar a la persona que vienen a visitar.
4. Yo como usuario administrador quiero que notifiquen con un correo electrónico a la persona que vienen a visitar.
5. Yo como usuario administrador quiero visualizar la data de los visitantes, incluyendo fecha y hora de registro.

## Definición del usuario

El usuario principal es el administrador que necesita registrar y visualizar la data de los visitantes de Comunal.

_Nota adicional: Al principio definimos dos usuarios principales cuando pensamos en este proyecto. Uno era el administrador que necesita visualizar los datos de los visitantes, y el otro era el mismo visitante que viene a Comunal. Esta separación de usuarios era porque el aplicativo permite que se pueda registrar por sí mismo, y que la persona en recepción pueda recibir la data y manejarla. Pero después de realizar las entrevistas, especialmente a la persona que se encuentra en la recepción de Comunal, sacamos la conclusión de que el aplicativo estaba mejor enfocado para que lo utilice sólo el administrador. En el testing del prototipo mencionaremos las razones._

## Benchmark

Hicimos benchmark a la empresa Envoy, que se dedica principalmente al registro de visitantes. 

**_Conclusiones_**

Envoy utiliza un color vivo, el rojo, y también el blanco. Tienen un estilo minimalista y dinámico, con el uso de imágenes y fotos sin llegar a ser excesivo. Es bastante simple y fácil de usar.

Con su aplicativo se puede obtener la información personal de los visitantes a sus oficinas. Se pueden tomar una foto para que el visitado o equipo la vea al recibir el correo notificando que el visitante ha llegado. También pueden firmar documentos en la iPad donde usan el aplicativo. Y al terminar el registro, Envoy imprime automáticamente un badge para que el visitante se pueda identificar dentro del edificio.

## Entrevista

Las preguntas para la entrevista fueron las siguientes:

1. ¿Cuál es tu nombre?
2. ¿Qué tipo de dispositivos usas más en tu trabajo?
3. ¿Cuál es el rol que cumples en tu trabajo? ¿Qué tareas realizas?
4. ¿Qué tipo de visitantes recibes en Comunal? 
5. Cuéntame cómo es tu experiencia cuando recibes a un visitante. Describe el proceso.
6. Si el visitante olvida su documento de identidad, ¿cómo actúan en ese caso?
7. ¿Qué opinas del proceso de identificación que utilizan cuando entran los visitantes? ¿Qué te gusta y qué te frustra de ello?
8. ¿Qué cambiarías de ese proceso para que facilite tu trabajo?
9. ¿Para ti, qué factores o qué datos son los más importantes conocer de un visitante?

También entrevistamos a un trabajador que recibe visitantes para saber su perspectiva.

**_Resumen de entrevistas_**

Los dispositivos que más usan los entrevistados son laptop y celular. La entrevistada principal desarrolla tareas de recepción, recibe a los visitantes y comunica a los clientes (visitados) que la persona con la que tienen reunión ya llegó. Son el nexo entre el cliente y el visitante. Por otro lado, el trabajador entrevistado realiza sus labores específicas, en este caso de finanzas, de manera natural. 

En Comunal reciben dos tipos de visitantes usualmente, las personas que van a reunirse con los comuneros (clientes de Comunal y también trabajadores propios) y los proveedores.

El proceso de recepción de visitantes es que primero pasan por la administración del edificio, que es en la entrada, donde les piden el nombre y el documento de identidad. Si los visitantes son para Comunal, entran al lobby de ellos, donde les preguntan a quién quieren visitar, buscan la información del cliente en su base de datos, si lo encuentran entonces proceden a avisarle a la persona para que vaya a la recepción y reciba a su visita. Le avisan por medio de la aplicación Whatsapp o por llamada telefónica en caso de no responder Whatsapp en unos minutos.

En el caso del trabajador que recibe invitados, en Comunal se comunican a un grupo de Whatsapp que tiene con el cliente y el trabajador lo ve o entre el equipo de trabajo se avisan; entonces, esta persona se dirige a la recepción a ver a su invitado.

Comunal no pide documento de identidad, eso lo verifican en la entrada.

La entrevistada opinó que el proceso de recibir a un visitante es personalizado y es un buen componente, pero por otro lado, no se lleva ningún control de las visitas en Comunal. Y sí le gustaría tener uno para poder analizar la información de manera más detallada y tener un control de seguridad. 
Para el trabajador entrevistado es indiferente cómo es la recepción de visitantes mientras le avisen a tiempo y de manera eficaz cuando llega su invitado.

Los datos que le parecen más importantes a la entrevistada en recepción son el nombre y apellidos, posiblemente el correo electrónico o número de celular, y a quién llegan a visitar.

**_Conclusiones_**

Para la entrevistada de Comunal, la combinación del trato personalizado y el uso de la tecnología sería la mejor solución para su registro de visitantes.

El factor primordial por el que implementarían un aplicativo de registro es para llevar un orden adecuado que les facilite el control de visitantes y la seguridad general. Es un complemento a lo que ya hacen, para que también facilite el proceso de comunicación.

_Fotos de las entrevistas_

![Sin titulo](/img/entrevista.jpeg) ![Sin titulo](/img/entrevista2.jpeg)

## Sketch

Debido al corto tiempo que se tenía para trabajar el proyecto, elaboramos un sketch antes de la primera entrevista y otro después de ella.

_Sketch antes de primera entrevista y testing_

![Sin titulo](/img/sketch1.jpeg) ![Sin titulo](/img/sketch2.jpeg)

_Sketch después de primera entrevista y testing_

![Sin titulo](/img/sketch3.jpeg) ![Sin titulo](/img/sketch4.jpeg) ![Sin titulo](/img/sketch5.jpeg)

## Prototipo de Alta Fidelidad

Utilizamos Figma para elaborar el prototipo del aplicativo. Se intento hacerlo lo más parecido a lo que sería la solución final. 

[Link del prototipo desktop](https://www.figma.com/proto/YelniUkShU7HWn5cTQheUc/Registro-de-visitantes-desktop?scaling=contain)
[Link del prototipo móvil](https://www.figma.com/proto/jhGm2imuJZYT1eAlDDKzdR/Registro-de-visitantes-mobile?scaling=contain&node-id=2%3A2)

![Sin titulo](/img/prototipo-desktop-figma.jpg)

## Testing del Prototipo con usuarios

La primera usuaria con la que testeamos el prototipo al principio no entendió lo que tenía que hacer hasta que le pedimos que observe con detenimiento, entonces al leer y mirar con tranquilidad comprendió los primeros pasos que se debían tomar. 

Las conclusiones que pudimos sacar con el primer testing es que a la usuaria le pareció un flujo comprensible, simplista y bueno en general. Al inicio planteamos al visitante como usuario que se registraba independientemente, pero al hacer el testing ella hizo hincapié en que era importante no mostrar los datos de los trabajadores de sus clientes a otras personas, por cuestión de seguridad y privacidad no le pareció buena idea. Pero al plantearle la posibilidad de que ellos (recepción de Comunal) fueran los únicos usuarios del aplicativo que podrían registrar a un visitante, expresó que en ese caso sí estaría de acuerdo con seleccionar al trabajador que van a visitar.

El segundo usuario con el que testeamos, comprendió rápidamente el flujo. Le pareció un diseño simple, preciso y que cumplía con lo necesario. Solo tuvo la observación de crear un filtro adicional para seleccionar la empresa y poder facilitar o simplificar la búsqueda de la persona a la que van a visitar.

![Sin titulo](/img/testing-prototype.jpeg) ![Sin titulo](/img/testing-prototype2.jpeg)

## WeWork, comparación con solución propia y Envoy

Hicimos un benchmark de Envoy y WeWork de lo que pudimos encontrar en internet. En el caso de WeWork no encontramos mucha información sobre su registro de visitantes y no fue posible entrar a la empresa. 

WeWork tiene una página con todas sus sedes abiertas y en proceso de abrir a nivel global. Pide programar una cita a futuro para visitar el lugar como potencial cliente; aquí te piden nombre completo, correo electrónico, número de teléfono, fecha de entrada y cuántas personas necesitan un lugar de trabajo.

No podemos comparar mucho nuestra solución con la de WeWork porque, a pesar de saber que para una visita necesitan esa información, no sabemos cómo registrarán a sus visitantes en el mismo lugar.

En el caso de Envoy, antes de hacer el benchmark ya teníamos la idea de usar un color vivo así tal cual como el rojo, lo veíamos con un color fuerte. En comparación con nuestra solución, se diferencia en quién utiliza nuestro aplicativo. Aquí lo hemos limitado a la persona de la recepción por dos razones: una es porque los lineamientos del proyecto piden que se pueda seleccionar al trabajador que van a visitar y porque en la entrevista se concluyó que era mejor que esos datos los maneje la persona en recepción. 

Tampoco se puede imprimir badges como lo hace Envoy, porque es una primera versión de nuestra solución. De la misma manera, no se puede firmar documentos por tablet. Lo que sí implementamos es el envío de correos electrónicos a la persona y el tomar fotos.

En comparación, a pesar de las diferencias y las similitudes que pueden haber, la solución que planteamos resuelve la necesidad inmediata y precisa que se tiene.

## Usuario de Sesión del aplicativo

Usuario: diego.123@comunal.al -- Contraseña:Diego123@
