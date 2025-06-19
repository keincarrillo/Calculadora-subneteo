# calculadora-subneteo

## Requisitos previos

Asegúrate de tener **Bun** o **Node.js** instalado en tu sistema. Si no lo tienes, sigue estos pasos para instalarlo:

### Instalación de Bun

Si no tienes **Bun** instalado, puedes instalarlo usando el siguiente comando:

#### En macOS y Linux:

```bash
curl -fsSL https://bun.sh/install | bash
```

### En Windows

Puedes descargar el instalador aqui: https://bun.sh/ o usa el siguiente comando en PowerShell:

```bash
iwr https://bun.sh/install -useb | iex
```

Verifica la instalación con:

```bash
bun --version
```

### Instalación con Node.js

Si prefieres usar Node.js, asegúrate de tenerlo instalado con el siguiente comando:

```bash
node --version
```

Si Node.js no está instalado, puedes descargarlo desde aquí: https://nodejs.org/es

Ejecuta el siguiente comando para instalar bun desde Node.js

```bash
npm install -g bun
```

### Levantar el Proyecto

Para instalar las dependencias usa el siguiente comando en tu terminal de GitBash

```bash
bun install
bun run install:all
```

Levanta el proyecto usa el siguiente comando en tu terminal de GitBash

```bash
bun run start:all
```

El proyecto se va a levantar en el puerto: http://localhost:5173

## Proyecto en produccion con Vercel & Render 🚀

El proyecto puede verse directamente en produccion en la siguiente URL: https://calculadora-subneteo.vercel.app/

⚠️ ¡Atención!

Al hacer solicitud para hacer el calculo del subneteo puede llegar a tardar poco mas de un minuto, debido al deploy en Render con downtime
