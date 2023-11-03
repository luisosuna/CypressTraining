Feature: Amazon Home Page

Scenario: I want to verify content in Home Page
Given I navigate to the Website
When I open the home page and validate the title
Then Validate the menus in home page


Scenario: I want to search for different items
Given I navigate to the Website
When I search in the page for multiple items
|   Item    |
|   Iphone 14 prox Max  |
|   Microsoft Surface Pro   |
|   Wireless Headset  |