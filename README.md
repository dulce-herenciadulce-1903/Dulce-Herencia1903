# Dulce Herencia 1903

Sitio estático premium para Dulce Herencia 1903. La experiencia combina relato familiar, colección de postres, carrito de pedido y WhatsApp.

## Estructura

- `index.html`: contenido principal, SEO, favicon y metadatos sociales.
- `assets/css/styles.css`: estilos responsive y animaciones.
- `assets/js/main.js`: precios, productos, carrito y mensaje de WhatsApp.
- `assets/images/`: imágenes optimizadas usadas por la web.

## Editar precios

Los precios están centralizados al inicio de `assets/js/main.js`, dentro de `PRICES`.

## WhatsApp

El carrito genera el mensaje automáticamente con productos, cantidades, total, Tecámac y solicitud de entrega viernes o sábado.

Para enviar directo a un número de negocio, agrega el teléfono con clave de país en `SETTINGS.whatsappNumber` dentro de `assets/js/main.js`.

## Clonar proyecto

```bash
git clone <url-del-repositorio>
cd <nombre-del-repositorio>/dulce-herencia
```

## Instalar dependencias

No hay dependencias obligatorias. No necesitas ejecutar `npm install`.

## Ejecutar localmente

No hay dependencias obligatorias.

```bash
python3 -m http.server 4173
```

Abrir:

```text
http://127.0.0.1:4173/
```

## Publicar en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, importa el repositorio.
3. Si el repositorio contiene más carpetas, configura `dulce-herencia` como Root Directory.
4. Framework Preset: Other.
5. Build Command: dejar vacío.
6. Output Directory: dejar vacío o `./`.
7. Deploy.

El sitio funciona como HTML, CSS y JavaScript estático, sin configuración compleja.
