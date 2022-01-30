/* Note: Test case name: Test Case_Automated: Test the Menu functionality on the main page
*Test plan and test case location: https://trello.com/b/wnP1VJm2/universal-orlando-test-plan-capstone
*/


//Required to cresate a new driver, for selectors, for selenium webdriver
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Chrome driver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Driver for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(80000)

test('Universal Menu Test', async () => {

//Driver.get will navigate to a website.
        await driver.get('https://www.universalorlando.com/web/en/us')
    
//Opens browser window in maximize mode
        await driver.manage().window().maximize() 

//Wait for page to load   
        await driver.sleep(5000)
    
//Locate and click on banner button to remove message from the top of the home page 
        await driver.findElement(By.xpath('/html/body/app-component/header/div/div[1]/div/div/button')).click()
    
//Locate and click on the Menu toggle on the home page 
        await driver.findElement(By.xpath('/html/body/app-component/header/div/div[2]/div[2]/button[2]/div')).click()

//Wait for page to load   
        await driver.sleep(5000)        

//Locate and click on the Things to Do link
        let thingsToDo = await driver.findElement(By.xpath('/html/body/app-component/header/nav/div/div[2]/div/button[1]')).click()

//Locate the Mardi Gras link title
        let menuHeader = await driver.findElement(By.xpath('/html/body/app-component/header/nav/div/div[3]/div[2]/a[10]/span'))
             
//Get the Mardi Gras text    
        let thingsList = await menuHeader.getText()

//Checks the assertion of the Mardi Gras text    
        expect(thingsList).toBe("Mardi Gras")

//Close the browser when the test has completed       
        await driver.quit()
})        
