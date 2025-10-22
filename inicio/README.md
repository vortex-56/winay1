# Wiñay Agency - React Version

Proyecto de sitio web de Wiñay Agency convertido a React con Vite.

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🚀 Instalación

1. Navega a la carpeta del proyecto:
```bash
cd "c:\Users\Andrew\Desktop\nucleo principal\trabajo\WiñayAgency\web\proyecto\Wiñay\inicio"
```

2. Instala las dependencias:
```bash
npm install
```

## 🎯 Uso

### Modo Desarrollo
Para ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```

El sitio se abrirá automáticamente en `http://localhost:3000`

### Build para Producción
Para crear la versión optimizada para producción:
```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### Vista Previa de Producción
Para previsualizar la versión de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
inicio/
├── public/               # Archivos públicos
│   └── assets/          # Imágenes y recursos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── Clients.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principal
│   ├── App.css
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Características

- ⚡ Vite para desarrollo rápido
- ⚛️ React 18
- 📱 Diseño responsive
- 🎯 Componentes modulares
- 💅 CSS modular por componente
- 🚀 Optimizado para producción

## 📝 Notas Importantes

### Imágenes
Debes copiar las imágenes de la carpeta original a la carpeta `public/assets/images/`:

Las imágenes necesarias son:
- celulares-1.png
- como-aumentar-mis-ventas-tip-1.webp
- rrrss-pymes.jpg
- partes-de-una-pagina-web.png
- cu1.jpg, cu2.jpg, cu3.jpg
- c1.jpg, c3.jpg
- logo-1.jpg, logo-3.jpg
- 312981651_434543642167610_7044122996053786744_n.jpg

### Formulario de Contacto
El formulario actualmente muestra una alerta. Para integrarlo con un backend:
1. Modifica la función `handleSubmit` en `Footer.jsx`
2. Agrega tu endpoint de API
3. Implementa la lógica de envío

## 🔧 Personalización

### Colores
Los colores principales están definidos en `src/index.css`:
```css
:root {
  --primary-color: #FF1C69;
  --secondary-color: #FF6397;
  --text-dark: #1a1a1a;
  --text-light: #ffffff;
  --bg-dark: #0a0a0a;
  --bg-light: #f6f7fa;
}
```

## 📞 Contacto

Para soporte o consultas, visita [https://wa.link/k13h98](https://wa.link/k13h98)

## 📄 Licencia

© 2024 Wiñay Agency. Todos los derechos reservados.
