# useCounter Hook

Example 1:
```js
    const { counter, increment, decrement, reset } = useCounter(10)


    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}> +1 </button>
            <button onClick={decrement}> -1 </button>
            <button onClick={reset}> Reset </button>
        </>
    )
```

Example 2: (it also can be call without initial value)
```js
    const { counter, increment, decrement, reset } = useCounter();
```