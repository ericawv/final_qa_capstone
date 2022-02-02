/* Note: Test case name: Test Case_Automated: Test the functionality of the Certified Pre-Owned feature
*Test plan and test case location: https://trello.com/b/ovLKqAcc/hyundai-test-plan-capstone
*/


//Import Builder,Capabilities, By, until
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Chrome driver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Drive for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(30000)

//This test ensures that the user lands on te Certified Pre-Owned page based on location 
test('Certified Pre-Owned Link Test', async () => {

//Opens the Hyundai USA website
    await driver.get('https://www.hyundaiusa.com/us/en') 

//Opens browser window in maximize mode
   await driver.manage().window().maximize() 

//Accepts the cookies policy 
    await driver.findElement(By.xpath('/html/body/div[1]/div/button')).click()

//Locate and click on the Certified Pre-Owned link
    await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[1]/div/div[2]/a[1]')).click()

//Locate and click on the Search CPO inventory button    
    await driver.findElement(By.xpath('//*[@id="main"]/div[6]/div/div[2]/div/div/a')).click()

//Locate the zip code on the left side of the screen    
    let location = await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[1]/div/div[1]/p/button[1]/span'))

    await driver.sleep(5000)

    //Get the zip code text    
    let zipCode = await location.getText()

//Check the zip code assertion    
    expect(zipCode).toBe('48201')

//Closes the browser window when the test has completed    
    await driver.quit()
})