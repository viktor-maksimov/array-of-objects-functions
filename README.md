# Array of Objects

Useful functions to help working with Javascript Array of Objects

<br />

<a href="https://www.npmjs.com/package/array-of-objects-functions">
  <img src="https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667" />
</a>

<a href="https://www.npmjs.com/package/array-of-objects-functions">
  <img src="https://camo.githubusercontent.com/cf80a63dc680fa3e0d2f6b729fea1a0a14ae5a1e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f7665726167652d3130302532352d627269676874677265656e2e737667" />
</a>

<a href="https://www.npmjs.com/package/array-of-objects-functions">
  <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
</a>

## Usage

### Install the package

package.json
```
{
  "dependencies": {
    "array-of-objects-functions": "latest"
  }
}
```

After that (with Yarn):
```
yarn install
```

Or with NPM:
```
npm install
```

And finally you can use it in your project:
```
import { getUniqueValues } from "array-of-objects-functions"

const arrayOfObjects = [
  {
    name: "John"
  },
  {
    name: "James"
  },
  {
    name: "John"
  }
]

const uniqueNames = getUniqueValues(arrayOfObjects, "name")
```

## Functions

### 1) getUniqueValues(arrayOfObjects, propertyName)

This function returns an array containing only the unique values of a specific property in the objects. It accepts as parameters first the ArrayOfObjects and second - a string of the property name.

### 2) findFirstOneMatching(arrayOfObjects, propertyName, propertyValue)

### 3) findLastOneMatching(arrayOfObjects, propertyName, propertyValue)

### 4) findAllMatching(arrayOfObjects, propertyName, propertyValue)

### 5) removeFirstOneMatching(arrayOfObjects, propertyName, propertyValue)

### 6) removeLastOneMatching(arrayOfObjects, propertyName, propertyValue)

### 7) removeAllMatching(arrayOfObjects, propertyName, propertyValue)

## Contribution

Everybody can contribute

### Useful commands (examples with yarn)

Build your code:
```
yarn build
```

Run tests:
```
yarn test
```

Generate test coverage:
```
yarn test:coverage
```

Run ESLint:
```
yarn lint
```

### Important

Please before opening a PR for this package - run tests and eslint and fix the errors in your code.
Also for new functions - please add tests.

## License

MIT