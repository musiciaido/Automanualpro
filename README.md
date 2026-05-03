# AutoManual Pro - primera version

Sitio web conceptual para un sistema de facturacion de mecanicos independientes.

## Como verlo

Abre `index.html` en el navegador.

## Archivos principales

- `index.html`: estructura del sitio, factura demo, historial y planes.
- `styles.css`: colores, layout y diseno responsivo.
- `app.js`: calculo de factura, servicios, piezas, impuestos, estado de pago, datos del taller e historial.
- `assets/hero-diagnostics.png`: imagen principal generada para el sitio.

## Idiomas

La barra superior incluye selector para manejar el sistema en Espanol o English.

## Configuracion del taller

La version inicial abre sin datos de cliente, vehiculo, servicios ni historial. Cada taller debe llenar la seccion de configuracion una sola vez con nombre, telefono, direccion, email, impuesto y logo PNG opcional antes de crear facturas. Despues puede volver a Configuracion para editar sus datos.

## Busqueda por VIN

La factura incluye campo de VIN y boton de busqueda. La consulta usa la API oficial NHTSA vPIC para completar ano, marca y modelo cuando el VIN es valido. La placa queda como campo manual separado para mantenerla siempre en el invoice.

## Historial y registros

El boton Guardar factura almacena la factura en el navegador y actualiza automaticamente los registros de clientes y vehiculos. La seccion Registros permite buscar por cliente, telefono, vehiculo, VIN o placa y usar un registro encontrado para llenar una nueva factura.

## Factura PDF

La vista de impresion usa una plantilla compacta de una hoja inspirada en una factura profesional: encabezado del taller, resumen del vehiculo, datos de cliente, tabla de trabajos/piezas, terminos, firma y totales. Solo debe pasar a mas hojas cuando la lista de trabajos sea larga.

## Funciones agregadas

- Numero de factura automatico, no editable y controlado por secuencia local.
- Millas de entrada y salida.
- Lineas separadas por tipo: Part o Labor.
- Totales separados para Parts y Labor en el PDF.
- Historial con opcion de abrir facturas guardadas.
- Facturas abiertas se pueden editar mientras no esten pagadas.
- Facturas pagadas quedan bloqueadas para edicion.
- Facturas abiertas se pueden duplicar completas o solo con datos principales.
- Duplicados pueden conectarse con la factura original o quedar independientes.
- Exportacion de respaldo en JSON con taller, facturas, clientes y vehiculos.

## Proximas mejoras sugeridas

- Agregar logo y datos reales del taller.
- Guardar facturas en una base de datos.
- Crear modulo de clientes y vehiculos.
- Crear inventario de piezas.
- Conectar una base de datos real.
- Agregar login, suscripciones, reportes y panel administrativo.
