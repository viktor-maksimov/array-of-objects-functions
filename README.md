# Array of Objects

Useful functions to help working with Javascript Array of Objects

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

### getUniqueValues(arrayOfObjects, propertyName)

This function returns an array containing only the unique values of a specific property in the objects. It accepts as parameters first the ArrayOfObjects and second - a string of the property name.

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