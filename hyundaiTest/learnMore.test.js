/* Note: Test case name: Test Case_Automated: Accessing the Learn More button from the main page
*Test plan and test case location: https://trello.com/b/ovLKqAcc/hyundai-test-plan-capstone
*/


//Import Builder,Capabilities, By, until, for selectors, for selenium webdrive
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

// Chromedriver for running test using the Chrome browser 
const chromedriver = require('chromedriver')
//const { headersToString } = require('selenium-webdriver/http')

//Drive for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(80000)

//Test Hyundaia USA Learn More button with async to use await. Wait until element is located. 
test('Learn More Button Test', async () => {

//Driver (using .get) will navigate to a website.
    await driver.get('https://www.hyundaiusa.com/us/en') 

//Opens browser window in maximize mode
    await driver.manage().window().maximize()  

//Accepts the cookies policy 
    await driver.findElement(By.xpath('/html/body/div[1]/div/button')).click()

//Locate and click on the Learn More button 
    await driver.findElement(By.xpath('//*[@id="main"]/div[6]/div/div[2]/div[2]/div[1]/div/div/div/div[2]/div/a')).click()

//Locate the 2022 SANTA CRUZ header on the left side of the screen    
    let header = await driver.findElement(By.xpath('//*[@id="main"]/div[6]/div/div[1]/div/div/div/div[1]/div/span[1]'))

//Waits for page to load   
    await driver.sleep(5000)

//Gets the header text    
    let vehicleHearder = await header.getText()

//Checks assertion of 2022 SANTA CRUZ hearder
    expect(vehicleHearder).toBe('2022')

//Closes the browser window with the test is complete     
    await driver.quit()
})