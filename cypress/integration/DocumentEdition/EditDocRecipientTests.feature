Feature: Edit document recipient

    Scenario: Add new recipient to document after analysis
        Given An authenticated user uploads a document
        And The document status changes to A vérifier or Prêt à l'envoi
        When I open precision vue of the document
        And I search for "William ECLANCHER" as a new recipient
        And I find it as "Dr William ECLANCHER" with speciality "Spécialiste en Médecine Générale" in "Paris"
        Then I add it as a recipient
        And It is added succesfully to the recipients list of the doc
