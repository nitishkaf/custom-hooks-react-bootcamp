# custom-hooks-react-bootcamp

- useState: This hook allows a functional component to have state. It returns a pair of values: the current state value and a function that updates it.

- useEffect: This hook allows a functional component to perform side effects. It is called after every render, including the first render. This is similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined in a class-based component.

- useContext: This hook allows a functional component to access the context, which is an object containing global state that can be shared between components. This is similar to the contextType property in a class-based component.

- useRef: This hook creates a mutable reference to a value. This is similar to createRef in a class-based component.

- useReducer: This hook allows a functional component to have a reducer, which is a function that takes in the current state and an action, and returns a new state. This is similar to reducer in a class-based component.

- useMemo: This hook allows a functional component to memoize a value. This means that the value is calculated and stored, and if the inputs remain the same, the stored value is returned. This can improve performance by avoiding expensive calculations on every render.

- useCallback: This hook allows a functional component to memoize a callback function. This means that the function is only created if the inputs change, and the stored function is returned if the inputs remain the same. This can improve performance by avoiding the creation of unnecessary functions.

Overall, the purpose of React hooks is to make it easier to reuse state and logic between components, and to make functional components have the same capabilities as class-based components.

<img src="https://repository-images.githubusercontent.com/196048036/5fae96d6-a1e5-43bc-8556-4ab9d83d4ff2" alt="react hooks" />
