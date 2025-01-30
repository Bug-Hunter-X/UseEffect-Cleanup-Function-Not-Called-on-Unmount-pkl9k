```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        console.log('Count changed:', count);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```