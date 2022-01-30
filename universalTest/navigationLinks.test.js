//Required to cresate a new driver, for selectors, for selenium webdriver
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Chrome driver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Driver for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(80000)


beforeEach(async () => {
    await driver.get('https://www.universalorlando.com/web/en/us')
    await driver.wait(until.elementLocated(By.xpath('/html/body/app-component/header/div/div[2]/div[1]/a/img')))

//Opens browser window in maximize mode
    await driver.manage().window().maximize() 

})

afterAll(async () => {
    await driver.quit()
})

//Accessess the Park Tickets page with async to use await. Wait until element is located. Driver.get will navigate to a website.
test('Park Tickets Links', async () => {

//Locate the Park Tickets link
    let parkTickets = await driver.findElement(By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[1]/tcm-anchor/a/span/div'))
    
//Click on the Park Tickets link    
    await parkTickets.click()

//Waits for page to load    
    await driver.sleep(5000)

//Locate the 3 Amazing Parks. Find the Ticket for You. hearder
    let header = await driver.findElement(By.xpath('//*[@id="hash-id-ousticketingpagecontentintro-contentintrosimple"]/div/h2'))
             
//Get the 3 Amazing Parks. Find the Ticket for You.text    
    let ticketHeader = await header.getText()
    
//Checks the assertion of the Find Tickets text     
    expect(ticketHeader).toBe("3 Amazing Parks. Find the Ticket for You.")

})

test('Express Passes', async () => {

//Locate the Express Passes link
    let expressPasses = await driver.findElement(By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[2]/tcm-anchor/a/span/div'))

    await driver.sleep(5000)    
    
//Click on the Express Passes link   
    await expressPasses.click()

 //Waits for page to load    
    await driver.sleep(5000)

//Locate the Get to the Fun Faster. header
    let shop = await driver.findElement(By.xpath('//*[@id="hash-id-universalexpresspassesseopagemetadata-contentintrosimple"]/div/h2'))
             
//Get the Get to the Fun Faster. header   
    let shopExpress = await shop.getText()
    
//Checks the assertion of the Get to the Fun Faster. text    
    expect(shopExpress).toBe("Get to the Fun Faster.")

})

test('Deals & Specials', async () => {

//Locate the Express Passes link
    let dealsSpecials = await driver.findElement(By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[3]/tcm-anchor/a/span/div'))
    
    await driver.sleep(5000)

//Click on the Express Passes link   
    await dealsSpecials.click()

//Waits for page to load    
    await driver.sleep(5000)

//Locate the Ticket Deals & Special Offers header
    let ticket = await driver.findElement(By.xpath('//*[@id="hash-id-dealsandspecialspagetitle-headingpagetitlebarfullwidth"]/div/div/h1'))
             
//Get the Ticket Deals & Special Offers header   
    let ticketDeals = await ticket.getText()
    
//Checks the assertion of the Get to the Fun Faster. text    
    expect(ticketDeals).toBe("Ticket Deals & Special Offers")

})

test('Hotels', async () => {

//Locate the Hotles link
    let hotels = await driver.findElement(By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[4]/tcm-anchor/a/span/div'))
 
//Click on the Hotels link     
    await hotels.click()

//Waits for page to load     
    await driver.sleep(5000)

//Locate the Universal Orlando Resort Hotels title
    let resorts = await driver.findElement(By.xpath('//*[@id="hash-id-hotelsoverviewpagetitle-headingpagetitlebarfullwidth"]/div/div/h1'))
             
//Get the Universal Orlando Resort Hotels text    
    let hotelHeader = await resorts.getText()
    
//Checks the assertion of the Universal Orlando Resort Hotels text    
    expect(hotelHeader).toBe("Universal Orlando Resort Hotels")

})

// test('Annual Passes', async () => {

// //Locate the Annual Passes link
//     let annualPasses = await driver.findElement(By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[5]/tcm-anchor/a/span/div'))
 
//     await driver.sleep(5000)

// //Click on the Hotels link     
//     await annualPasses.click()

// //Waits for page to load     
//     await driver.sleep(5000)

// //Locate the Annual Passes title
//     let passes = await driver.findElement(By.xpath('//*[@id="hash-id-promopagetitle-headingpagetitlebarfullwidth"]/div/div/h1'))
             
// //Get the Annual Passes text    
//     let passesHeader = await passes.getText()
    
// //Checks the assertion of the Annual Passes text    
//     expect(passesHeader).toBe("Annual Passes")

// })

// test('Vacation Packages', async () => {

//     //Locate the Hotles link
//         let vacationPackages = await driver.findElement(By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[6]/tcm-anchor/a/span/div'))
     
//     //Click on the Hotels link     
//         await vacationPackages.click()
    
//     //Waits for page to load     
//         await driver.sleep(5000)
    
//     //Locate the Bundle & Save on Vacation Packages title
//         let packages = await driver.findElement(By.xpath('//*[@id="page-content"]/upr-vacation-packages/div[2]/div/h1'))
                 
//     //Get the Universal Bundle & Save on Vacation Packagestext    
//         let vacation = await packages.getText()
        
//     //Checks the assertion of the Bundle & Save on Vacation Packages text    
//         expect(vacation).toBe("Bundle & Save on Vacation Packages")
    
//     })

