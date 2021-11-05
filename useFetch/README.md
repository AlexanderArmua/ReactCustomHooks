# useFetch Hook

Example 1:
```js
    const url = 'https://some_api_url.com/data'
    const { data, loading, error } = useFetch(url)
    // data: null | {}, loading: boolean, error: null | {}

    if (loading) {
        return <Spinner text='Loading' />
    }

    if (error !== null) {
        return <div>An error has ocurred: { JSON.stringify(error, null, 4) }</div>
    }

    return (
        <>
            <ul>
                {
                    data.map(element => <li>{ element.some_variable }</li>)
                }
            </ul>
        </>
    )
```
