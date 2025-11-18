# Quick Deployment Script for Adarsh Portfolio
# Run this script to deploy to Vercel

Write-Host "🚀 Adarsh Portfolio - Quick Deploy Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
Write-Host "Checking Vercel CLI..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
    Write-Host "✅ Vercel CLI installed!" -ForegroundColor Green
} else {
    Write-Host "✅ Vercel CLI found!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Choose deployment option:" -ForegroundColor Cyan
Write-Host "1. Deploy to Preview (test deployment)" -ForegroundColor White
Write-Host "2. Deploy to Production (live site)" -ForegroundColor White
Write-Host "3. Cancel" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-3)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "🔨 Building and deploying to preview..." -ForegroundColor Yellow
        vercel
        Write-Host ""
        Write-Host "✅ Preview deployment complete!" -ForegroundColor Green
        Write-Host "Check the URL above to view your site" -ForegroundColor Cyan
    }
    "2" {
        Write-Host ""
        Write-Host "🔨 Building and deploying to production..." -ForegroundColor Yellow
        vercel --prod
        Write-Host ""
        Write-Host "✅ Production deployment complete!" -ForegroundColor Green
        Write-Host "Your portfolio is now LIVE! 🎉" -ForegroundColor Cyan
    }
    "3" {
        Write-Host "Deployment cancelled." -ForegroundColor Yellow
        exit
    }
    default {
        Write-Host "Invalid choice. Exiting." -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Need help? Check DEPLOY_GUIDE.md" -ForegroundColor White
Write-Host "==========================================" -ForegroundColor Cyan
