Feature: Authentication tests

    Scenario: Authentication attempt with wrong credentials
    Given The authentication form is displayed
    When User submits wrong credentials
    Then The authentication fails