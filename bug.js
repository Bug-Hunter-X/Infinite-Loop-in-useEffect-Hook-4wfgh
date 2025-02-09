```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here, causing infinite loop
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```