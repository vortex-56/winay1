Write-Host "Copiando imagenes..." -ForegroundColor Green

$sourceFolder = '..\Wiñay Agency – Agencia de Marketing Digital en Lima_files'
$destFolder = '.\public\assets\images'

if (-Not (Test-Path $sourceFolder)) {
    Write-Host "Error: No se encuentra la carpeta de origen" -ForegroundColor Red
    exit 1
}

if (-Not (Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
}

$imagenes = @(
    "celulares-1.png",
    "como-aumentar-mis-ventas-tip-1.webp",
    "rrrss-pymes.jpg",
    "partes-de-una-pagina-web.png",
    "cu1.jpg",
    "c1.jpg",
    "c3.jpg",
    "logo-1.jpg",
    "logo-3.jpg",
    "312981651_434543642167610_7044122996053786744_n.jpg"
)

$copiados = 0

foreach ($img in $imagenes) {
    $srcPath = Join-Path $sourceFolder $img
    $destPath = Join-Path $destFolder $img
    
    if (Test-Path $srcPath) {
        Copy-Item $srcPath -Destination $destPath -Force
        Write-Host "Copiado: $img" -ForegroundColor Green
        $copiados++
    } else {
        Write-Host "No encontrado: $img" -ForegroundColor Yellow
    }
}

Copy-Item (Join-Path $sourceFolder "cu2-768x768.jpg") -Destination (Join-Path $destFolder "cu2.jpg") -Force -ErrorAction SilentlyContinue
Copy-Item (Join-Path $sourceFolder "cu3-768x768.jpg") -Destination (Join-Path $destFolder "cu3.jpg") -Force -ErrorAction SilentlyContinue

Write-Host "`nImagenes copiadas: $copiados" -ForegroundColor Green
Write-Host "Listo! Ahora ejecuta: npm install" -ForegroundColor Cyan
