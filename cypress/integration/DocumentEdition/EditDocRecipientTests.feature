Feature: Edit document recipient

    Scenario: Every submitted document appears in the list
    Given A user is successfully authenticated
    When He submits a document 
    Then The document is anlysed by AI

    Scenario: Edit the recipient for a document
    Given A document ready to send in the main list 
    When The document recipient is edited
    Then Document information is updated