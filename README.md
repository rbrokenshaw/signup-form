# Ware - Technical Assessment - Signup Form

## Usage

-   `npm run dev` to run the app locally
-   `npm run test` to run the unit tests
-   `npm run storybook` to run storybook

## Notes

-   To keep the file structure organised, I have split the components between two folders, `/components` and `/views`. The `/components` folder contains the truly reusable components (form), and the `/views` folder contains the 'single use' components used by the Signup page.
-   Usually I like to store Storybook stories in a `/__stories__` folder alongside their components in their respective folders, but I have opted to keep the default `/stories` folder provided by Storybook this time for convenience. I know this is a personal/team preference so I will always follow a project's convention for this one!
-   I considered creating the section that reads "Try it free 7 days..." as a button variation to cut down on code repetition. It looks very similar to the form submit button, however, I noticed a slight difference in some of the styles. I think it could easily have been created as a variant of the 'button' component if it should be clickable, but in this instance I created it as a 'call to action' component, with the assumption that this element isn't clickable by the user.
-   I also considered utilising a form library such as `react-hook-form` to handle the form and validation, but opted for a more manual approach to meet the brief of including an example of Context implementation to share data between the form components.
