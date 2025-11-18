# Portfolio Setup Script
# This script renames the files in the public folder to match the expected names

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Portfolio Setup Script" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if public folder exists
if (-not (Test-Path ".\public")) {
    Write-Host "Error: public folder not found!" -ForegroundColor Red
    Write-Host "Please run this script from the Portfolio root directory." -ForegroundColor Yellow
    exit 1
}

# Rename profile image
Write-Host "Step 1: Renaming profile image..." -ForegroundColor Yellow
if (Test-Path ".\public\adarsh image.jpg") {
    # First rename to remove spaces
    Rename-Item ".\public\adarsh image.jpg" -NewName "profile.jpg"
    Write-Host "✓ Renamed 'adarsh image.jpg' to 'profile.jpg'" -ForegroundColor Green
    Write-Host "  Note: You may want to convert this to .webp format for better performance" -ForegroundColor Gray
} elseif (Test-Path ".\public\profile.jpg") {
    Write-Host "✓ profile.jpg already exists" -ForegroundColor Green
} elseif (Test-Path ".\public\profile.webp") {
    Write-Host "✓ profile.webp already exists" -ForegroundColor Green
} else {
    Write-Host "✗ Profile image not found!" -ForegroundColor Red
}

Write-Host ""

# Rename resume
Write-Host "Step 2: Renaming resume..." -ForegroundColor Yellow
if (Test-Path ".\public\SW_resume.pdf") {
    Rename-Item ".\public\SW_resume.pdf" -NewName "AdarshResume.pdf"
    Write-Host "✓ Renamed 'SW_resume.pdf' to 'AdarshResume.pdf'" -ForegroundColor Green
} elseif (Test-Path ".\public\AdarshResume.pdf") {
    Write-Host "✓ AdarshResume.pdf already exists" -ForegroundColor Green
} else {
    Write-Host "✗ Resume PDF not found!" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run 'npm install' to install dependencies" -ForegroundColor White
Write-Host "2. Create .env.local file with email credentials (see .env.local.example)" -ForegroundColor White
Write-Host "3. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host ""
Write-Host "For detailed instructions, see SETUP.md" -ForegroundColor Gray
Write-Host ""
