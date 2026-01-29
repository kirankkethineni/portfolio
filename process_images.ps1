# Load required assemblies
Add-Type -AssemblyName System.Drawing

# Configuration
$sourceDir = ".\images\Photography"
$destDir = ".\images\gallery"
$maxWidth = 1600
$jpegQuality = 85

# Create destination if not exists
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

# Get all JPG/JPEG/NEF files
$files = Get-ChildItem -Path $sourceDir -Include *.jpg, *.jpeg, *.nef, *.png -Recurse

$counter = 1

foreach ($file in $files) {
    try {
        Write-Host "Processing $($file.Name)..."
        
        # Load image
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Calculate new dimensions
        $newWidth = $img.Width
        $newHeight = $img.Height
        
        if ($img.Width -gt $maxWidth) {
            $ratio = $maxWidth / $img.Width
            $newWidth = $maxWidth
            $newHeight = [int]($img.Height * $ratio)
        }
        
        # Create new resized bitmap
        $newImg = new-object System.Drawing.Bitmap $newWidth, $newHeight
        $graph = [System.Drawing.Graphics]::FromImage($newImg)
        
        # High quality settings
        $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        
        # Draw image
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Save config (JPEG codec)
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $jpegQuality)
        
        # Save file
        $destFile = Join-Path $destDir "photo_$counter.jpg"
        $newImg.Save($destFile, $codec, $encParams)
        
        # Cleanup
        $graph.Dispose()
        $newImg.Dispose()
        $img.Dispose()
        
        Write-Host "Saved to $destFile"
        $counter++
    }
    catch {
        Write-Error "Failed to process $($file.Name): $_"
    }
}

Write-Host "Done! Processed $($counter - 1) images."
