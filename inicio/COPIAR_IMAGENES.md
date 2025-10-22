# INSTRUCCIONES PARA COPIAR IMÁGENES

Para que el sitio web funcione correctamente, necesitas copiar las imágenes desde la carpeta original.

## Paso a paso:

1. Abre la carpeta:
   `Wiñay Agency – Agencia de Marketing Digital en Lima_files`

2. Copia las siguientes imágenes a la carpeta `public/assets/images/`:

   - celulares-1.png
   - como-aumentar-mis-ventas-tip-1.webp
   - rrrss-pymes.jpg
   - partes-de-una-pagina-web.png
   - cu1.jpg
   - cu2-768x768.jpg (renombrar a: cu2.jpg)
   - cu3-768x768.jpg (renombrar a: cu3.jpg)
   - c1.jpg
   - c3.jpg
   - logo-1.jpg
   - logo-3.jpg
   - 312981651_434543642167610_7044122996053786744_n.jpg

## Comando PowerShell (ejecutar desde la carpeta raíz del proyecto):

```powershell
# Copiar imágenes desde la carpeta original
$sourceFolder = "..\Wiñay Agency – Agencia de Marketing Digital en Lima_files"
$destFolder = ".\public\assets\images"

Copy-Item "$sourceFolder\celulares-1.png" -Destination $destFolder
Copy-Item "$sourceFolder\como-aumentar-mis-ventas-tip-1.webp" -Destination $destFolder
Copy-Item "$sourceFolder\rrrss-pymes.jpg" -Destination $destFolder
Copy-Item "$sourceFolder\partes-de-una-pagina-web.png" -Destination $destFolder
Copy-Item "$sourceFolder\cu1.jpg" -Destination $destFolder
Copy-Item "$sourceFolder\cu2-768x768.jpg" -Destination "$destFolder\cu2.jpg"
Copy-Item "$sourceFolder\cu3-768x768.jpg" -Destination "$destFolder\cu3.jpg"
Copy-Item "$sourceFolder\c1.jpg" -Destination $destFolder
Copy-Item "$sourceFolder\c3.jpg" -Destination $destFolder
Copy-Item "$sourceFolder\logo-1.jpg" -Destination $destFolder
Copy-Item "$sourceFolder\logo-3.jpg" -Destination $destFolder
Copy-Item "$sourceFolder\312981651_434543642167610_7044122996053786744_n.jpg" -Destination $destFolder
```

O simplemente copia manualmente los archivos usando el explorador de Windows.
