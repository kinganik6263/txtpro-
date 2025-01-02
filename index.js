const puppeteer = require('puppeteer');

async function createTextEffect(name) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the TextPro website
  await page.goto('https://textpro.me/green-neon-text-effect-874.html');
  
  // Wait for the name input field to load and type the name
  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', name);
  
  // Wait for the "Generate" button and click it
  await page.waitForSelector('#submit');
  await page.click('#submit');
  
  // Wait for the result to appear
  await page.waitForSelector('#main-image');
  
  // Get the generated image URL
  const imageUrl = await page.$eval('#main-image', img => img.src);
  
  // Close the browser
  await browser.close();
  
  return imageUrl;
}

// Example usage
createTextEffect('Your Name').then(imageUrl => {
  console.log('Generated Image URL:', imageUrl);
}).catch(error => {
  console.error('Error:', error);
});
