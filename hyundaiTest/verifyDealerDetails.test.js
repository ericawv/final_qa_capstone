/* Note: Test case name: Test Case_Automated: Verify details for a local dealer
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

//Opens the Hyundai USA home page will be executed before all test
beforeAll(async () => {
    await driver.get('https://www.hyundaiusa.com/us/en')

//Opens browser window in maximize mode
    await driver.manage().window().maximize()

//Accepts and closes the cookies policy by clicking on the Accept & Close in the footer of the home page
    await driver.findElement(By.xpath('/html/body/div[1]/div/button')).click()
})

// Closes the test window after all of the test have ran 
afterAll(async () => {
    await driver.quit()
})

//This funtion asynchronously checks the assertions of each paramenter/element
    let checkLocation = async (dealer, phone, address) => {

//Locates the dealership's name element    
    let dealerElement = await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[1]/div/div[1]/p/span[2]/span[1]')) 

    let locationDealer = await dealerElement.getText()

    expect(locationDealer).toBe(dealer)

 //Locates the dealership's phone number element   
    let dealerPhone = await driver.findElement(By.xpath('//*[@id="find-a-dealer-nav"]/div/div[1]/div[2]/div/div/div[2]/div[2]/div[5]/div/div[1]/div[2]/a[2]/span'))

    let phoneNumber = await dealerPhone.getText()

    expect(phoneNumber).toBe(phone)
 
//Locates the dealership's street address element 
    let dealerAddress = await driver.findElement(By.xpath('//*[@id="find-a-dealer-nav"]/div/div[1]/div[2]/div/div/div[2]/div[2]/div[5]/div/div[1]/div[1]/div[1]'))

    let streetAddress = await dealerAddress.getText()

    expect(streetAddress).toBe(address)
}

//This test checks that the detials (dealer name, phone number, and address) for a dealer are displayed on the screen
test('Function Testing', async () => {
    let location = await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[1]/div/div[1]/p/button[2]/span[1]'))

    await location.click()

    await checkLocation('Dealer:', '(313) 880-1110', '1847 S. Telegraph Road')
})

