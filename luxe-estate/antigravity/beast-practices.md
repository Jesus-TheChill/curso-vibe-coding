# 🚀 Next.js Real Estate - Best Practices & Checklist

## 🏗️ 1. Arquitectura & Rendimiento
*   [ ] **React Server Components (RSC):** Renderizar listas y páginas de detalle en el servidor para enviar menos JavaScript al cliente.
*   [ ] **ISR (Incremental Static):** Páginas de propiedades (`/properties/[id]`) cacheadas y revalidadas periódicamente. Carga instantánea.
*   [ ] **SSR para Búsquedas:** Renderizado en el servidor para resultados de búsqueda dinámica (`/search?city=...`) garantizando buena indexación web.
*   [ ] **Optimización de Imágenes:** Obligatorio usar `<Image />` de Next.js. `priority={true}` solo para imagen principal y *lazy load* para el resto.
*   [ ] **Prefetch Inteligente:** Uso recomendado de `<Link>` para precargar en background los detalles de la casa al hacer hover.

## 🎨 2. UX / UI (Experiencia de Usuario)
*   [ ] **Skeletons UI:** Uso de "tarjetas fantasma" mientras cargan los datos y búsquedas (React Suspense), evitando los spinners.
*   [ ] **Estado de Búsqueda en URL (`searchParams`):** Guardar filtros en la URL para permitir a los usuarios compartir y guardar sus búsquedas exactas.
*   [ ] **Galerías de fotos Touch/Swipe:** Carruseles adaptados 100% a gestos móviles.
*   [ ] **Integración de Mapas fluidos:** Modo lista / modo mapa con técnica de *Clustering* para marcadores si son muchos datos.

## 🔍 3. SEO (Fundamental para Bienes Raíces)
*   [ ] **URLs Amigables (Slugs):** En lugar de usar IDs numéricos en la ruta (`/properties/123`), implementar "slugs" descriptivos (`/properties/venta-casa-lujo-miami`) para mejorar el posicionamiento por palabras clave.
*   [ ] **Metadata Dinámica:** Función `generateMetadata` en Next.js para títulos únicos por cada propiedad.
*   [ ] **Open Graph (Vistas previas):** Implementar tarjetas visuales ricas para que destaquen al compartirse en WhatsApp/Twitter.
*   [ ] **Schema Markup (JSON-LD):** Insertar esquema `RealEstateListing` o `Product` con el precio y ubicación para destacar en resultados de Google.
*   [ ] **Sitemap.xml dinámico:** Archivo `sitemap.ts` de Next.js conectado a la base de datos para indexar propiedades nuevas automáticamente.

## 💾 4. Base de Datos & Backend (ej. Supabase)
*   [ ] **Paginación Asíncrona:** Realizar paginación a nivel base de datos (`.range()`) de a 15-20 elementos. Nunca descargar todas las casas al cliente de golpe.
*   [ ] **Consultas Geoespaciales:** Habilitar plugins (como PostGIS de PostgreSQL) para búsquedas estilo "a 5km de este punto".
*   [ ] **Optimistic UI (Interacciones instantáneas):** Al guardar "Favoritos", encender el corazón instantáneamente en el navegador mientras el servidor lo procesa de fondo.

## 💡 5. Conversión / Features Extra (Lead Generation)
*   [ ] **Formularios Sticky (Contacto rápido):** Botón de WhatsApp o cajón de contacto del agente inamovible (fijo) al hacer scroll.
*   [ ] **Calculadora de Hipotecas:** Widget embebido en la propiedad para calcular la cuota mensual. Aumenta la retención.
*   [ ] **Tracking Local ("Vistas Recientemente"):** Usa LocalStorage para guardar el historial del usuario y ayudarle a retomar sus visitas.
*   [ ] **Etiquetas de Urgencia/Ganchos:** Crear *badges* o *flags* visuales fijos en tarjetas ("Destacado", "Rebajado", "Nuevo").
*   [ ] **Diseño Premium:** Colores oscuros, contrastes discretos o tonos tierra que se asocian a "lujo" y bienes raíces de alto nivel.
