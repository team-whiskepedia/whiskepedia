# whiskepedia

**Authors**: Dave Trost (DaveTrost @ github), Donna Lambert (Sanvean74 @ github), John Nelson (john4850 @ github)
**Version**: 2.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Project Description

The Whiskepedia app is for finding and researching whiskeys

(TBD: include notes bout the overall problem domain and how the project solves those problems ...)

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
Clone the repository from GitHub: <https://github.com/team-whiskepedia/whiskepedia>
Run ```npm i```
Run ```npm i -D```
Create a local postgres database with the name 'whiskepedia', and link to it in your .env file (DATABASE_URL= postgres://localhost:5432/whiskepedia)

(TBD: A list of any libraries, frameworks, or packages that your application requires in order to properly function)

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Clearly defined API endpoints with sample responses
Clearly defined database schemas

## Components list

- Splash Page
  - Header component - DONE

- Login page
  - Header component - DONE
  - Authorization container
    - Login component
    - Register component

- Browse page
  - Header component - DONE
  - Search component
  - Sort component
  - Whiskey cards container - DONE
    - Whiskey card component

- User Bottles page
  - Header component - DONE
  - Profile component
  - Sort component
  - Whiskey cards container
    - Whiskey card component

- Detailed view page
  - Header component - DONE
  - Details component
  - Comparables container
    - Comparable item component
