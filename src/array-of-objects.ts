export function getUniqueValues(arrayOfObjects: Object[], propertyName): Array<any> {
  const output: Array<any> = []

  arrayOfObjects.map(obj => {
    if (obj[propertyName] !== undefined) {
      if (output.find(val => obj[propertyName] === val) === undefined) {
        output.push(obj[propertyName])
      }
    }
  })

  return output
}
