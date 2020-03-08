# Array of Objects

Useful functions to help working with Javascript Array of Objects

<br />

<a href="https://www.npmjs.com/package/array-of-objects-functions">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="78" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h47v20H0z"/><path fill="#007ec6" d="M47 0h31v20H47z"/><path fill="url(#b)" d="M0 0h78v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="245" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="370">license</text><text x="245" y="140" transform="scale(.1)" textLength="370">license</text><text x="615" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="210">MIT</text><text x="615" y="140" transform="scale(.1)" textLength="210">MIT</text></g> </svg>
</a>

<a href="https://www.npmjs.com/package/array-of-objects-functions">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="106" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="106" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h63v20H0z"/><path fill="#4c1" d="M63 0h43v20H63z"/><path fill="url(#b)" d="M0 0h106v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="325" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="530">Coverage</text><text x="325" y="140" transform="scale(.1)" textLength="530">Coverage</text><text x="835" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="330">100%</text><text x="835" y="140" transform="scale(.1)" textLength="330">100%</text></g> </svg>
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