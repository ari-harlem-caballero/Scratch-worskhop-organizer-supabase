# Workshops List Page

## HTML Setup
- 'destination' div for all the workshops
  - we will dynamically create workshops. Each workshop also has a list of participants. That list will _also_ need to be dynamically generated
- link to create page

## Event
- On load
  - Fetch all workshops (with participants)
    - for each workshop:
      - loop through participants. for each participant, render and append participant element to workshop element
    - render and append workshop element to list element
- On click of participant
  - delete the participant
  - rerender the list

# Create Page
## HTML Setup
- We need a form!

## Event
- On submit
  - Create the participant
  - then navigate back to the workshop list
- On load
  - Fetch workshops from supabase
  - Loop through workshops
    - For each workshop, render and append an option to the dropdown

## `TDD` PURE: renderParticipant(participant) : 
  --/// returns a DOM node the participant (don't worry about this passing in github CI. 
    ---//// Use the `skip instead of test` when you push it to github. That way github actions won't count it against you.
    ---//// do `run the test locally` and 
    ---//// include a `screenshot` of the passing test in your repo.

## ASYNC: getWorkshops() : 
  --/// `fetch all participants` in supabase. (These workshops are the same for everybody in the cohort and do not 'belong' to any particular user. Your participants will show up only for you)

## ASYNC: createParticipant(participant) : 
  --/// `create participant` in supabase and attach it to a workshop

## ASYNC: deleteParticipant(id) : 
  --/// `delete a participant` in supabase