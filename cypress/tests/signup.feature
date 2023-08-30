Feature: Signup

    Scenario: Access Automation Exercise Signup page
        Given I access Automation Exercise page
        And I fill the Signup fields
        When I click on Signup button
        Then I should see the title of the page