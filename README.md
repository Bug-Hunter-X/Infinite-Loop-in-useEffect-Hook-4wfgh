# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly including the state variable in the dependency array.  The `useEffect` function keeps triggering re-renders, infinitely incrementing the `count` state.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the browser console for errors and rapidly increasing counter.