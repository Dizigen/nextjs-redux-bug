## This repo describes a nextjs redux bug.

### Summary:
dispatch actions do not update redux state if placed inside a useEffect in dynamic routes or routes with url params.

### Setup:
```
yarn
yarn dev (runs on port 3000)
```

### To Reproduce:
```
1. navigate to /test -> email redux state is set as expected
2a. add a url param to /test (ie /test?foo=bar) -> email redux state is not set
also:
2b. navigate to a dynamic route (ie /helloWorld) -> email redux state is not set
```
