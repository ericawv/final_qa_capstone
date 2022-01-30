/* Note: Test case name: Test Case_Automated: Accessing the Vehicle page via the vehicle link
*Test plan and test case location: https://trello.com/b/ovLKqAcc/hyundai-test-plan-capstone
*/


// Import Builder,Capabilities, By, until for Selenium Webdriver testing
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Import Chromedriver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Builds the driver for opening an instance of the Chrome browser.
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(80000)

//This test ensures that the user lands on te Vehicle page when the Vehicle is slected from the home page
test('Vehicle Link Test', async () => {

//Opens the Hyundai USA website
    await driver.get('https://www.hyundaiusa.com/us/en') 

//Opens browser window in maximize mode
    await driver.manage().window().maximize()    

//Accepts the cookies policy
    await driver.findElement(By.xpath('/html/body/div[1]/div/button')).click()

//Clicks on the Vehicle link in the navigation bar on the home page
    await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[2]/div/div/div[1]/nav/a[1]/span[1]')).click()

//Locates the 2022 Venue vehicle image
    let vehicle = await driver.findElement(By.xpath('//*[@id="main"]/div[6]/div/div/section/div[2]/div[1]/div[1]/div/a/img'))

//Clicks on the 2022 Venue vehicle image    
    await vehicle.click()

//Waits for the page images for load
    await driver.sleep(5000)

//Locates the Shop button   
    let shop = await driver.findElement(By.xpath('//*[@id="main"]/div[6]/div/div[1]/div/div/div/div[3]/div[1]/button'))

//Gets the Shop text of the button    
    let shopButton = await shop.getText()

//An assertion check of the text Shop   
    expect(shopButton).toBe('Shop')
 
//Closes the browser when the test is complete  
    await driver.quit()
})
