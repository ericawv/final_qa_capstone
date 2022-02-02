/* Note: Test case name: Test Case_Automated: Test Links in Navigation Bar
*Test plan and test case location: https://trello.com/b/wnP1VJm2/universal-orlando-test-plan-capstone
*/


//Required to cresate a new driver, for selectors, for selenium webdriver
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Chrome driver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Driver for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const NavigatePages = require('../pageObjects/navigatePages')

const navigate = new NavigatePages(driver, 'https://www.universalorlando.com/web/en/us',)


//Sets the default timeout interval for each test
jest.setTimeout(80000)


beforeEach(async () => {
    await navigate.navigationBar()

    // await navigate.manage().window().maximize()

// //Opens browser window in maximize mode
    await driver.manage().window().maximize() 

})

afterAll(async () => {
    await navigate.driver.quit()
})

// Accessess the Park Tickets page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Park Tickets', async () => {
    
    await navigate.getTickets('Park Tickets')

    await navigate.clickTicket('Park Tickets')

    await driver.sleep(5000)

})

// Accessess the Express Passes  page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Express Passes', async () => {
    
    await navigate.getPasses('Express Passes')

    await navigate.clickPasses('Express Passes')

    await driver.sleep(5000)
})

// Accessess the Deals & Specials page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Deals & Specials', async () => {
    
    await navigate.getDeals('Deals & Specials')

    await navigate.clickDeals('Deals & Specials')

    await driver.sleep(5000)
})

// Accessess the Hotels page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Hotels', async () => {
    
    await navigate.getHotels('Hotels')

    await navigate.clickHotels('Hotels')

    await driver.sleep(5000)
})

// Accessess the Annual Passes page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Annual Passes', async () => {
    
    await navigate.getAnnual('Annual Passes')

    await navigate.clickAnnual('Annual Passes')

    await driver.sleep(5000)
})

// Accessess the Vacation Packages page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Vacation Packages', async () => {
    
    await navigate.getPackages('Vacation Packages')

    await navigate.clickPackages('Vacation Packages')

    await driver.sleep(5000)
})

// Accessess the Safety Guidelines page with async to use await, by locating the Parks Tickets link and click on the link. 
test('Navigate Safety Guidelines', async () => {
    
    await navigate.getSafety('Safety Guidelines')

    await navigate.clickSafety('Safety Guidelines')

    await driver.sleep(5000)
})










