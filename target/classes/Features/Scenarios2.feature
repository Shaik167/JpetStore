Feature: TestCase
    Scenario: Remove and update cart
	Given User Launch browser with JpetStorePage
	When User Update Cart
	Then User close browser
	
	Scenario: Return to Main Menu 
	Given User Launch browser with JpetStorePage 
	When User click on Birds 
	And click on Return to Main Menu 
	Then Assert for Presence of Sign In and close browser
	
	
	Scenario: Remove
	Given User Launch browser with JpetStorePage
	When User Update Cart
	Then User close browser
	
	Scenario: Jpet store Demo
	Given User Launch browser with JpetStorePage 
	When Click on jpetstore demo in home page
	Then user close the browser
	
	Scenario: Shopping Cart
	Given User Launch browser with JpetStorePage 
	When User click on fish
	And select product and fillany check in shopping cart
	Then User Close browser 
	
	
	
	