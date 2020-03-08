export function getUniqueValues(arrayOfObjects: Record<string, any>[], propertyName: string): Array<any> {
  const output: Array<any> = []

  arrayOfObjects.map(obj => {
    if (obj[propertyName] !== undefined) {
      if (output.find(val => JSON.stringify(obj[propertyName]) === JSON.stringify(val)) === undefined) {
        output.push(obj[propertyName])
      }
    }
  })

  return output
}

export function findOne(
  arrayOfObjects: Record<string, any>[],
  propertyName: any,
  propertyValue: any
): Record<string, any> | null {
  let output: Record<string, any> | null = null

  arrayOfObjects.map(obj => {
    if (obj[propertyName] !== undefined) {
      if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
        output = obj
      }
    }
  })

  return output
}
