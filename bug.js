```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Component mounted');
    return () => {
      // Cleanup function
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // This effect runs every time the 'count' state changes
    console.log('Count changed:', count);
  }, [count]); // Dependency array includes 'count'

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```