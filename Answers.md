1. What problem does the context API help solve?

It tries to take away excessive 'prop-drilling'. It allows you to access a piece of state, from different branches in the state tree (as long as it has the same parent). 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds the main state for your application. Reducers keep the logic for your state, and connect to the store when needed to update the state. Actions tell us about changes from an event, and sends those changes to the reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state that lives within that specific component. Application state is across the entire app. For example, you'd like to keep the state for a form inside the component. There's no need to manage that state in the store, when the state is specific to that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is used to make asynchronous calls to an API. Since JavaScript is synchronous, thunk is used for async processes. It changes action creators, by altering the syntax needed to make API calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think the Context API is pretty cool. Makes prop drilling not as important, despite me not using it as much in projects. But I'm probably still most comfortable with Redux. It has a nice state management system, stored in one area, so you can access it from multiple components. 