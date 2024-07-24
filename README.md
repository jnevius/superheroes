# README:  Superpowered! 
### A Marvel-themed teambuilding app for teams.
*A design/dev project for Showit, by Joel Nevius*

## 1. Built With
- Framework: NextJS
- Styling: Tailwind
- UI Library:  shad-cn/ui

## 2. Basic Features Designed
- Sign Up / Login
  - Email / Password
  - w/ Google
- Search bar for finding Marvel characters
- Basic bio & 1 photo of characters
- Ability to select up to 4 characters to your team to describe your personality
- Ability to remove characters from team
- Ability to generate a Superpowered version of yourself
- Ability to save team or reset your progress

## 3. Constraints & Caveats per Page
### a. General
- Didn't have time to hardcore optimize for mobile - design/built primarily for desktop

### b. Login / Sign Up
- Sign Up / Login:  no real auth, buttons just link to pages (no experience with auth)

### c. Builder Pages
- Add & Remove buttons are not functional, a bit beyond me at this point to know how to populate cards at the top by clicking on cards at the bottom. Same with removing.
  - To see the difference I built two pages: '/builder' as the empty state view, and '/builder-filled' to see the team filled out.
  - There's a button in the top bar toggle these views ("Filled Out & Empty, respectively). These buttons would be not be included in the actual product.
- Search bar is functional, but I relied a lot on my copilot for that.
- Did not invest much time to understand how to hook up API. I indexed on the design, as I looked at the available data fields from the API to build the cards. Created my own JSON file for data.

## 4. Next Versions of Product

## 5. What new things did I learn how to do?
