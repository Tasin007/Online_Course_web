𝐘𝐨𝐮 𝐜𝐚𝐧 𝐬𝐞𝐞 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐢𝐦𝐚𝐠𝐞 𝐭𝐡𝐚𝐭 𝐜𝐞𝐫𝐭𝐚𝐢𝐧 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐚𝐝𝐝𝐞𝐝. 𝐈'𝐯𝐞 𝐮𝐬𝐞𝐝 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 𝐭𝐨 𝐝𝐞𝐯𝐞𝐥𝐨𝐩 𝐟𝐨𝐮𝐫 𝐢𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐟𝐨𝐫 𝐭𝐡𝐢𝐬 𝐜𝐨𝐮𝐫𝐬𝐞 𝐖𝐞𝐛𝐬𝐢𝐭𝐞
Live Link: https://6505e3705d971a3573e266c4--sweet-cucurucho-1bbea9.netlify.app/

1.When you click on the Select Button, the credit hour, Course name feature, total credit hour and total price will be added to the right side.

2.Credit Hour Remaining will be 0 or more than 0. But it can not be less than 0. If it happens, there will be shown a toast alert.

3.Total Credit Hours can not be more than 20.

4.Total Price will be updated step by step depending on clicking the select button.

Question 2:
useState Hook: React's useState hook is used for managing state in functional components.

App Component State: The App component manages the selectedCourses state, which keeps track of the courses selected by the user for their cart.

Course Selection: The handleCourseSelect function in the App component is responsible for adding courses to the cart. It checks for duplicates and credit hour limits before adding a course.

Courses Component: The Courses component fetches course data from an external JSON file and stores it in the courses state.

Prop Passing: The onCourseSelect function is passed as a prop from the App component to the Courses component, enabling course selection.

Course Component: The Course component renders individual course cards. It calls the onCourseSelect function when the "Select" button is clicked and updates the button label based on whether the course is already selected.

Cart Component: The Cart component displays selected courses, calculates total credit hours and prices based on the selected courses, and shows remaining credit hours. It receives the selectedCourses prop from the App component for dynamic rendering.

Toast Notifications: Toast notifications are used to provide user feedback for course selection actions.
