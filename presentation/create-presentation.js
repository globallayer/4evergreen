const pptxgen = require('pptxgenjs');
const path = require('path');
const { chromium } = require('playwright');
const fs = require('fs');

// Configuration
const SLIDE_WIDTH_PT = 720;
const SLIDE_HEIGHT_PT = 405;
const PT_TO_INCHES = 1 / 72;

async function convertHtmlToSlide(htmlPath, pptx, browser) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // Create a new page
    const page = await browser.newPage();
    await page.setViewportSize({
        width: Math.round(SLIDE_WIDTH_PT * 96 / 72),
        height: Math.round(SLIDE_HEIGHT_PT * 96 / 72)
    });

    // Load the HTML file
    await page.goto(`file://${htmlPath.replace(/\\/g, '/')}`);
    await page.waitForLoadState('networkidle');

    // Take a screenshot of the slide
    const screenshotPath = htmlPath.replace('.html', '.png');
    await page.screenshot({
        path: screenshotPath,
        type: 'png'
    });

    await page.close();

    // Create slide with the screenshot as background
    const slide = pptx.addSlide();
    slide.addImage({
        path: screenshotPath,
        x: 0,
        y: 0,
        w: '100%',
        h: '100%'
    });

    return slide;
}

async function createPresentation() {
    const pptx = new pptxgen();

    // Set presentation properties
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = '4EverGreen';
    pptx.title = '4EverGreen - Nature Meets Design';
    pptx.subject = 'Luxury Bespoke Trees for Exceptional Spaces';
    pptx.company = '4EverGreen Ltd';

    const slidesDir = path.join(__dirname, 'slides');

    // Define all slides in order
    const slideFiles = [
        'slide01-title.html',
        'slide02-problem.html',
        'slide03-solution.html',
        'slide04-different.html',
        'slide05-benefits.html',
        'slide06-portfolio.html',
        'slide07-clients.html',
        'slide08-testimonials.html',
        'slide09-process.html',
        'slide10-why.html',
        'slide11-contact.html'
    ];

    // Launch browser
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });

    try {
        // Process each slide
        for (const slideFile of slideFiles) {
            const htmlPath = path.join(slidesDir, slideFile);
            console.log(`Processing: ${slideFile}`);
            await convertHtmlToSlide(htmlPath, pptx, browser);
        }
    } finally {
        await browser.close();
    }

    // Save the presentation
    const outputPath = path.join(__dirname, '4EverGreen-Client-Presentation.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`\nPresentation saved to: ${outputPath}`);

    // Clean up temporary PNG files
    for (const slideFile of slideFiles) {
        const pngPath = path.join(slidesDir, slideFile.replace('.html', '.png'));
        if (fs.existsSync(pngPath)) {
            fs.unlinkSync(pngPath);
        }
    }
}

createPresentation().catch(err => {
    console.error('Failed to create presentation:', err);
    process.exit(1);
});
