

#  Project features

- Course Catalog: Display a list of available courses with details like course name, description etc.
- Course Details: Provide detailed information about each course, credit-hour and fees.
- Add Course in your Bookmarks: Enable students to register for courses online, selecting specific course and add into bookmarks if applicable.

# Discuss about state 

Here, we use some `state` in our project--
The `state` is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
`useState` is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

```
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [creditHour, setCreditHour] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0)

```
So, we use some state to store data like courses,selected course, course fees, course credit hour and remaing credit hour. And also pass it from parents to child components as a props when we needed.In our project, we need  pass some value into parent(Card.jsx) to child (Cart.jsx) components. And here we use state for this.