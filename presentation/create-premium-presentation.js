const pptxgen = require('pptxgenjs');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

// Brand Colors (no # prefix for PptxGenJS)
const COLORS = {
    cream: 'FBF7F4',
    forest: '2B3D39',
    gold: 'D4B896',
    white: 'FFFFFF',
    darkText: '1A1A1A',
    lightText: '5A6A66'
};

// Image paths
const IMAGES_DIR = path.join(__dirname, 'images');

async function getImageDimensions(imagePath) {
    const metadata = await sharp(imagePath).metadata();
    return { width: metadata.width, height: metadata.height };
}

async function createPresentation() {
    const pptx = new pptxgen();

    // Presentation metadata
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = '4EverGreen';
    pptx.title = '4EverGreen - Nature Meets Design';
    pptx.subject = 'Luxury Bespoke Trees for Exceptional Spaces';
    pptx.company = '4EverGreen Ltd';

    // ============================================
    // SLIDE 1: TITLE SLIDE (Full-bleed image with overlay)
    // ============================================
    const slide1 = pptx.addSlide();
    slide1.addImage({
        path: path.join(IMAGES_DIR, 'tree2.jpg'),
        x: 0, y: 0, w: '100%', h: '100%',
        sizing: { type: 'cover', w: 10, h: 5.625 }
    });
    // Dark overlay
    slide1.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.forest, transparency: 50 }
    });
    // Gold accent line
    slide1.addShape(pptx.shapes.RECTANGLE, {
        x: 0.5, y: 2.2, w: 0.08, h: 1.2,
        fill: { color: COLORS.gold }
    });
    // Title text
    slide1.addText('4EverGreen', {
        x: 0.8, y: 2, w: 8, h: 0.8,
        fontSize: 54, fontFace: 'Georgia', color: COLORS.white, bold: true
    });
    slide1.addText('Nature Meets Design', {
        x: 0.8, y: 2.7, w: 8, h: 0.5,
        fontSize: 24, fontFace: 'Georgia', color: COLORS.gold, italic: true
    });
    slide1.addText('Luxury Bespoke Trees for Exceptional Spaces', {
        x: 0.8, y: 3.4, w: 6, h: 0.4,
        fontSize: 16, fontFace: 'Arial', color: COLORS.white
    });
    // Contact
    slide1.addText('4evergreen.co.uk', {
        x: 0.8, y: 5, w: 3, h: 0.3,
        fontSize: 12, fontFace: 'Arial', color: COLORS.gold
    });

    // ============================================
    // SLIDE 2: THE CHALLENGE
    // ============================================
    const slide2 = pptx.addSlide();
    slide2.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.cream }
    });
    // Header bar
    slide2.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 1.2,
        fill: { color: COLORS.forest }
    });
    slide2.addText('The Challenge', {
        x: 0.5, y: 0.35, w: 9, h: 0.5,
        fontSize: 32, fontFace: 'Georgia', color: COLORS.white
    });
    // Content
    const challenges = [
        { title: 'Constant Maintenance', desc: 'Live plants require daily watering, pruning, and care' },
        { title: 'Light Requirements', desc: 'Most indoor spaces lack adequate natural light' },
        { title: 'Inconsistent Appearance', desc: 'Seasonal changes, wilting, and leaf drop' },
        { title: 'Allergies & Pollen', desc: 'Not suitable for allergy-sensitive environments' },
        { title: 'Ongoing Costs', desc: 'Plant replacement, specialist gardeners, irrigation systems' }
    ];
    challenges.forEach((item, i) => {
        const y = 1.5 + (i * 0.75);
        slide2.addShape(pptx.shapes.OVAL, {
            x: 0.7, y: y + 0.1, w: 0.25, h: 0.25,
            fill: { color: COLORS.gold }
        });
        slide2.addText(item.title, {
            x: 1.1, y: y, w: 3.5, h: 0.35,
            fontSize: 16, fontFace: 'Arial', color: COLORS.forest, bold: true
        });
        slide2.addText(item.desc, {
            x: 1.1, y: y + 0.3, w: 4, h: 0.35,
            fontSize: 12, fontFace: 'Arial', color: COLORS.lightText
        });
    });
    // Side image
    slide2.addImage({
        path: path.join(IMAGES_DIR, 'tree3.jpg'),
        x: 5.5, y: 1.4, w: 4.2, h: 4,
        rounding: true
    });

    // ============================================
    // SLIDE 3: OUR SOLUTION
    // ============================================
    const slide3 = pptx.addSlide();
    slide3.addImage({
        path: path.join(IMAGES_DIR, 'tree4.jpg'),
        x: 0, y: 0, w: 5, h: 5.625,
        sizing: { type: 'cover', w: 5, h: 5.625 }
    });
    // Right panel
    slide3.addShape(pptx.shapes.RECTANGLE, {
        x: 5, y: 0, w: 5, h: 5.625,
        fill: { color: COLORS.forest }
    });
    slide3.addText('Our Solution', {
        x: 5.5, y: 0.8, w: 4, h: 0.6,
        fontSize: 32, fontFace: 'Georgia', color: COLORS.white
    });
    // Gold divider
    slide3.addShape(pptx.shapes.RECTANGLE, {
        x: 5.5, y: 1.5, w: 1.5, h: 0.04,
        fill: { color: COLORS.gold }
    });
    slide3.addText('Semi-Natural Trees', {
        x: 5.5, y: 1.8, w: 4, h: 0.4,
        fontSize: 20, fontFace: 'Georgia', color: COLORS.gold, italic: true
    });
    slide3.addText([
        { text: 'Genuine preserved wood trunks\n', options: { bullet: true, color: COLORS.white } },
        { text: 'Premium UV-resistant foliage\n', options: { bullet: true, color: COLORS.white } },
        { text: 'Timeless beauty\n', options: { bullet: true, color: COLORS.white } },
        { text: 'Zero maintenance', options: { bullet: true, color: COLORS.white } }
    ], {
        x: 5.5, y: 2.4, w: 4, h: 2,
        fontSize: 14, fontFace: 'Arial', color: COLORS.white,
        paraSpaceAfter: 12
    });
    slide3.addText('The perfect union of nature and craftsmanship', {
        x: 5.5, y: 4.8, w: 4, h: 0.4,
        fontSize: 12, fontFace: 'Arial', color: COLORS.gold, italic: true
    });

    // ============================================
    // SLIDE 4: HOW WE'RE DIFFERENT (3 Pillars)
    // ============================================
    const slide4 = pptx.addSlide();
    slide4.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.cream }
    });
    slide4.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 1.2,
        fill: { color: COLORS.forest }
    });
    slide4.addText('How We\'re Different', {
        x: 0.5, y: 0.35, w: 9, h: 0.5,
        fontSize: 32, fontFace: 'Georgia', color: COLORS.white
    });

    const pillars = [
        { num: '01', title: 'Authentic Trunks', desc: 'Sustainably sourced, naturally-textured real wood with unique character' },
        { num: '02', title: 'Zero Maintenance', desc: 'No watering, pruning, or sunlight needed. Ever.' },
        { num: '03', title: 'Bespoke Creations', desc: 'Tailored sizes and styles crafted for your exact space' }
    ];
    pillars.forEach((pillar, i) => {
        const x = 0.5 + (i * 3.15);
        // Number circle
        slide4.addShape(pptx.shapes.OVAL, {
            x: x + 0.9, y: 1.6, w: 0.8, h: 0.8,
            fill: { color: COLORS.gold }
        });
        slide4.addText(pillar.num, {
            x: x + 0.9, y: 1.75, w: 0.8, h: 0.5,
            fontSize: 18, fontFace: 'Georgia', color: COLORS.white, align: 'center', bold: true
        });
        // Card
        slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: x, y: 2.6, w: 2.9, h: 2.5,
            fill: { color: COLORS.white },
            shadow: { type: 'outer', blur: 8, offset: 2, angle: 45, opacity: 0.15 }
        });
        slide4.addText(pillar.title, {
            x: x + 0.2, y: 2.8, w: 2.5, h: 0.5,
            fontSize: 16, fontFace: 'Georgia', color: COLORS.forest, bold: true
        });
        slide4.addText(pillar.desc, {
            x: x + 0.2, y: 3.4, w: 2.5, h: 1.5,
            fontSize: 12, fontFace: 'Arial', color: COLORS.lightText
        });
    });

    // ============================================
    // SLIDE 5: KEY BENEFITS
    // ============================================
    const slide5 = pptx.addSlide();
    slide5.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.forest }
    });
    slide5.addText('Key Benefits', {
        x: 0.5, y: 0.4, w: 9, h: 0.6,
        fontSize: 32, fontFace: 'Georgia', color: COLORS.white
    });
    slide5.addShape(pptx.shapes.RECTANGLE, {
        x: 0.5, y: 1.05, w: 1.5, h: 0.04,
        fill: { color: COLORS.gold }
    });

    const benefits = [
        { title: 'Zero Maintenance', desc: 'Save time and money with no ongoing care requirements' },
        { title: 'Hypoallergenic', desc: 'No pollen - ideal for allergy-sensitive spaces' },
        { title: 'Year-Round Beauty', desc: 'Consistent, stunning appearance every day' },
        { title: 'Cost-Effective', desc: 'One investment vs. perpetual plant replacement' },
        { title: 'Authentic Luxury', desc: 'Real wood trunks indistinguishable from live trees' }
    ];
    benefits.forEach((benefit, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + (col * 4.7);
        const y = 1.4 + (row * 1.3);

        slide5.addShape(pptx.shapes.OVAL, {
            x: x, y: y + 0.15, w: 0.3, h: 0.3,
            fill: { color: COLORS.gold }
        });
        slide5.addText('✓', {
            x: x, y: y + 0.1, w: 0.3, h: 0.3,
            fontSize: 14, fontFace: 'Arial', color: COLORS.white, align: 'center'
        });
        slide5.addText(benefit.title, {
            x: x + 0.5, y: y, w: 3.8, h: 0.35,
            fontSize: 16, fontFace: 'Arial', color: COLORS.white, bold: true
        });
        slide5.addText(benefit.desc, {
            x: x + 0.5, y: y + 0.4, w: 3.8, h: 0.5,
            fontSize: 12, fontFace: 'Arial', color: COLORS.gold
        });
    });

    // ============================================
    // SLIDE 6: PORTFOLIO
    // ============================================
    const slide6 = pptx.addSlide();
    slide6.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.cream }
    });
    slide6.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 1,
        fill: { color: COLORS.forest }
    });
    slide6.addText('Our Portfolio', {
        x: 0.5, y: 0.3, w: 9, h: 0.5,
        fontSize: 28, fontFace: 'Georgia', color: COLORS.white
    });

    // Grid of images (3 across)
    const imgW = 2.9, imgH = 2;
    slide6.addImage({
        path: path.join(IMAGES_DIR, 'tree1.jpg'),
        x: 0.5, y: 1.2, w: imgW, h: imgH,
        sizing: { type: 'cover', w: imgW, h: imgH }
    });
    slide6.addText('Private Residence, London', {
        x: 0.5, y: 3.25, w: imgW, h: 0.3,
        fontSize: 10, fontFace: 'Arial', color: COLORS.forest, bold: true
    });

    slide6.addImage({
        path: path.join(IMAGES_DIR, 'tree5.jpg'),
        x: 3.55, y: 1.2, w: imgW, h: imgH,
        sizing: { type: 'cover', w: imgW, h: imgH }
    });
    slide6.addText('Manor House, Cotswolds', {
        x: 3.55, y: 3.25, w: imgW, h: 0.3,
        fontSize: 10, fontFace: 'Arial', color: COLORS.forest, bold: true
    });

    slide6.addImage({
        path: path.join(IMAGES_DIR, 'tree6.jpg'),
        x: 6.6, y: 1.2, w: imgW, h: imgH,
        sizing: { type: 'cover', w: imgW, h: imgH }
    });
    slide6.addText('Corporate HQ, Zurich', {
        x: 6.6, y: 3.25, w: imgW, h: 0.3,
        fontSize: 10, fontFace: 'Arial', color: COLORS.forest, bold: true
    });

    // Additional locations
    slide6.addText('Also featured in: Private Villa, Aix-en-Provence  •  Historic Palazzo, Tuscany  •  Superyacht interiors', {
        x: 0.5, y: 4, w: 9, h: 0.4,
        fontSize: 11, fontFace: 'Arial', color: COLORS.lightText, italic: true
    });

    // Bottom gold bar
    slide6.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 5.5, w: 10, h: 0.125,
        fill: { color: COLORS.gold }
    });

    // ============================================
    // SLIDE 7: WHO WE SERVE
    // ============================================
    const slide7 = pptx.addSlide();
    slide7.addImage({
        path: path.join(IMAGES_DIR, 'tree3.jpg'),
        x: 0, y: 0, w: 4.5, h: 5.625,
        sizing: { type: 'cover', w: 4.5, h: 5.625 }
    });
    // Right panel
    slide7.addShape(pptx.shapes.RECTANGLE, {
        x: 4.5, y: 0, w: 5.5, h: 5.625,
        fill: { color: COLORS.cream }
    });
    slide7.addText('Who We Serve', {
        x: 5, y: 0.5, w: 4.5, h: 0.6,
        fontSize: 28, fontFace: 'Georgia', color: COLORS.forest
    });
    slide7.addShape(pptx.shapes.RECTANGLE, {
        x: 5, y: 1.1, w: 1.2, h: 0.04,
        fill: { color: COLORS.gold }
    });

    const clients = [
        'Private Residences',
        'Corporate Offices',
        'Heritage Properties',
        'Superyachts',
        'Interior Design Firms'
    ];
    clients.forEach((client, i) => {
        const y = 1.5 + (i * 0.7);
        slide7.addShape(pptx.shapes.RECTANGLE, {
            x: 5, y: y + 0.08, w: 0.15, h: 0.15,
            fill: { color: COLORS.gold }
        });
        slide7.addText(client, {
            x: 5.4, y: y, w: 4, h: 0.35,
            fontSize: 14, fontFace: 'Arial', color: COLORS.forest
        });
    });
    slide7.addText('From London penthouses to Mediterranean villas, we bring nature\'s beauty to exceptional spaces worldwide.', {
        x: 5, y: 4.8, w: 4.5, h: 0.6,
        fontSize: 11, fontFace: 'Arial', color: COLORS.lightText, italic: true
    });

    // ============================================
    // SLIDE 8: TESTIMONIALS
    // ============================================
    const slide8 = pptx.addSlide();
    slide8.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.forest }
    });
    slide8.addText('Client Testimonials', {
        x: 0.5, y: 0.4, w: 9, h: 0.5,
        fontSize: 28, fontFace: 'Georgia', color: COLORS.white
    });
    slide8.addShape(pptx.shapes.RECTANGLE, {
        x: 0.5, y: 0.95, w: 1.5, h: 0.04,
        fill: { color: COLORS.gold }
    });

    const testimonials = [
        { quote: '"The olive tree in our penthouse has become an absolute talking point. Guests always assume it\'s real."', author: 'Private Client, London' },
        { quote: '"We needed greenery for our heritage property without the maintenance headache. 4EverGreen delivered exactly what we envisioned."', author: 'Estate Manager, Cotswolds' },
        { quote: '"The craftsmanship is exceptional. Our corporate atrium now has a living presence without a single irrigation system."', author: 'Facilities Director, Zurich' }
    ];
    testimonials.forEach((t, i) => {
        const x = 0.5 + (i * 3.1);
        // Quote card
        slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: x, y: 1.3, w: 2.95, h: 3.5,
            fill: { color: COLORS.cream },
            shadow: { type: 'outer', blur: 10, offset: 3, angle: 45, opacity: 0.2 }
        });
        // Quote mark
        slide8.addText('"', {
            x: x + 0.15, y: 1.4, w: 0.5, h: 0.6,
            fontSize: 48, fontFace: 'Georgia', color: COLORS.gold
        });
        // Quote text
        slide8.addText(t.quote, {
            x: x + 0.2, y: 2, w: 2.55, h: 2,
            fontSize: 11, fontFace: 'Arial', color: COLORS.forest, italic: true
        });
        // Author
        slide8.addText('— ' + t.author, {
            x: x + 0.2, y: 4.2, w: 2.55, h: 0.4,
            fontSize: 10, fontFace: 'Arial', color: COLORS.gold, bold: true
        });
    });

    // ============================================
    // SLIDE 9: OUR PROCESS
    // ============================================
    const slide9 = pptx.addSlide();
    slide9.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.cream }
    });
    slide9.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 1,
        fill: { color: COLORS.forest }
    });
    slide9.addText('Our Process', {
        x: 0.5, y: 0.3, w: 9, h: 0.5,
        fontSize: 28, fontFace: 'Georgia', color: COLORS.white
    });

    const steps = [
        { num: '1', title: 'Consultation', desc: 'We discuss your vision, space, and requirements' },
        { num: '2', title: 'Design', desc: 'Bespoke designs tailored to your environment' },
        { num: '3', title: 'Crafting', desc: 'Each tree handcrafted by our artisan team' },
        { num: '4', title: 'Installation', desc: 'Professional fitting with attention to detail' },
        { num: '5', title: 'Enjoyment', desc: 'Years of maintenance-free beauty' }
    ];
    steps.forEach((step, i) => {
        const x = 0.3 + (i * 1.92);
        // Step number in circle
        slide9.addShape(pptx.shapes.OVAL, {
            x: x + 0.55, y: 1.3, w: 0.7, h: 0.7,
            fill: { color: COLORS.gold }
        });
        slide9.addText(step.num, {
            x: x + 0.55, y: 1.42, w: 0.7, h: 0.5,
            fontSize: 20, fontFace: 'Georgia', color: COLORS.white, align: 'center', bold: true
        });
        // Connecting line (except last)
        if (i < 4) {
            slide9.addShape(pptx.shapes.RECTANGLE, {
                x: x + 1.3, y: 1.63, w: 1.2, h: 0.04,
                fill: { color: COLORS.gold }
            });
        }
        // Title
        slide9.addText(step.title, {
            x: x, y: 2.2, w: 1.8, h: 0.4,
            fontSize: 13, fontFace: 'Arial', color: COLORS.forest, align: 'center', bold: true
        });
        // Description
        slide9.addText(step.desc, {
            x: x, y: 2.6, w: 1.8, h: 1.2,
            fontSize: 10, fontFace: 'Arial', color: COLORS.lightText, align: 'center'
        });
    });

    // Image strip at bottom
    slide9.addImage({
        path: path.join(IMAGES_DIR, 'tree2.jpg'),
        x: 0, y: 4, w: 10, h: 1.625,
        sizing: { type: 'cover', w: 10, h: 1.625 }
    });
    // Overlay
    slide9.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 4, w: 10, h: 1.625,
        fill: { color: COLORS.forest, transparency: 60 }
    });

    // ============================================
    // SLIDE 10: WHY CHOOSE US
    // ============================================
    const slide10 = pptx.addSlide();
    slide10.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.cream }
    });
    slide10.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 1,
        fill: { color: COLORS.forest }
    });
    slide10.addText('Why Choose 4EverGreen', {
        x: 0.5, y: 0.3, w: 9, h: 0.5,
        fontSize: 28, fontFace: 'Georgia', color: COLORS.white
    });

    const reasons = [
        { title: 'London-Based Artisan Workshop', desc: 'Crafted with care in our UK studio' },
        { title: 'Sustainably Sourced Materials', desc: 'Environmentally responsible practices' },
        { title: 'Bespoke Designs', desc: 'Every piece tailored to your space' },
        { title: 'Premium Quality Guaranteed', desc: 'Exceptional craftsmanship standards' },
        { title: 'Expert Installation Included', desc: 'Professional fitting service' },
        { title: 'European-Wide Service', desc: 'Installations across the continent' }
    ];
    reasons.forEach((reason, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + (col * 4.7);
        const y = 1.3 + (row * 1.3);

        slide10.addShape(pptx.shapes.OVAL, {
            x: x, y: y + 0.1, w: 0.35, h: 0.35,
            fill: { color: COLORS.gold }
        });
        slide10.addText('✓', {
            x: x, y: y + 0.05, w: 0.35, h: 0.35,
            fontSize: 14, fontFace: 'Arial', color: COLORS.white, align: 'center'
        });
        slide10.addText(reason.title, {
            x: x + 0.5, y: y, w: 4, h: 0.35,
            fontSize: 14, fontFace: 'Arial', color: COLORS.forest, bold: true
        });
        slide10.addText(reason.desc, {
            x: x + 0.5, y: y + 0.4, w: 4, h: 0.4,
            fontSize: 11, fontFace: 'Arial', color: COLORS.lightText
        });
    });
    // Gold bar
    slide10.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 5.5, w: 10, h: 0.125,
        fill: { color: COLORS.gold }
    });

    // ============================================
    // SLIDE 11: CONTACT
    // ============================================
    const slide11 = pptx.addSlide();
    slide11.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 5.625,
        fill: { color: COLORS.forest }
    });
    // Gold bar at bottom
    slide11.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 5.5, w: 10, h: 0.125,
        fill: { color: COLORS.gold }
    });
    // CTA
    slide11.addText('Request Your Free Consultation', {
        x: 0, y: 1.5, w: 10, h: 0.7,
        fontSize: 36, fontFace: 'Georgia', color: COLORS.white, align: 'center'
    });
    slide11.addText('Let\'s bring nature into your exceptional space', {
        x: 0, y: 2.2, w: 10, h: 0.4,
        fontSize: 16, fontFace: 'Arial', color: COLORS.gold, align: 'center', italic: true
    });
    // Gold divider
    slide11.addShape(pptx.shapes.RECTANGLE, {
        x: 4.2, y: 2.8, w: 1.6, h: 0.04,
        fill: { color: COLORS.gold }
    });
    // Contact details
    const contacts = [
        { label: 'EMAIL', value: 'contact@4evergreen.co.uk' },
        { label: 'PHONE', value: '+44 7822 011 814' },
        { label: 'LOCATION', value: 'London, UK' }
    ];
    contacts.forEach((c, i) => {
        const x = 1.5 + (i * 2.5);
        slide11.addText(c.label, {
            x: x, y: 3.2, w: 2.3, h: 0.3,
            fontSize: 10, fontFace: 'Arial', color: COLORS.gold, align: 'center', bold: true
        });
        slide11.addText(c.value, {
            x: x, y: 3.5, w: 2.3, h: 0.35,
            fontSize: 13, fontFace: 'Arial', color: COLORS.white, align: 'center'
        });
    });
    // Website
    slide11.addText('4evergreen.co.uk', {
        x: 0, y: 4.4, w: 10, h: 0.5,
        fontSize: 22, fontFace: 'Georgia', color: COLORS.gold, align: 'center'
    });

    // Save
    const outputPath = path.join(__dirname, '4EverGreen-Premium-Presentation.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`\n✓ Premium presentation saved: ${outputPath}`);
    console.log('  - 11 slides with native text (no pixelation)');
    console.log('  - High-resolution tree images');
    console.log('  - Luxury brand colors');
}

createPresentation().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
