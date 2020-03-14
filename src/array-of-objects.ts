export function getUniqueValues(
  arrayOfObjects: Record<string, any>[],
  propertyName: string
): Array<any> {
  const output: Array<any> = []

  arrayOfObjects.map(obj => {
    if (obj[propertyName] !== undefined) {
      if (
        output.find(val => JSON.stringify(obj[propertyName]) === JSON.stringify(val)) === undefined
      ) {
        output.push(obj[propertyName])
      }
    }
  })

  return output
}

export function findFirstOneMatching(
  arrayOfObjects: Record<string, any>[],
  propertyName: any,
  propertyValue: any
): Record<string, any> | null {
  let output: Record<string, any> | null = null

  arrayOfObjects.some(obj => {
    if (obj[propertyName] !== undefined) {
      if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
        output = obj

        return true
      }
    }

    return false
  })

  return output
}

export function findLastOneMatching(
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

export function findManyMatching(
  arrayOfObjects: Record<string, any>[],
  propertyName: any,
  propertyValue: any
): Record<string, any>[] {
  let output: Record<string, any>[] = []

  arrayOfObjects.map(obj => {
    if (obj[propertyName] !== undefined) {
      if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
        output.push(obj)
      }
    }
  })

  return output
}

export function removeFirstOneMatching(
  arrayOfObjects: Record<string, any>[],
  propertyName: any,
  propertyValue: any
): Record<string, any>[] {
  let flag: boolean = false

  return arrayOfObjects.filter(obj => {
    if (obj[propertyName] !== undefined && !flag) {
      if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
        flag = true

        return false
      }
    }

    return true
  })
}

export function removeLastOneMatching(
  arrayOfObjects: Record<string, any>[],
  propertyName: any,
  propertyValue: any
): Record<string, any>[] {
  let lastOneMatchingIndex: number = -1

  arrayOfObjects.map((obj, index) => {
    if (obj[propertyName] !== undefined) {
      if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
        lastOneMatchingIndex = index
      }
    }
  })

  return lastOneMatchingIndex != -1 ? arrayOfObjects.splice(lastOneMatchingIndex, 1) : arrayOfObjects
}

export function removeAllMatching(
  arrayOfObjects: Record<string, any>[],
  propertyName: any,
  propertyValue: any
): Record<string, any>[] {
  return arrayOfObjects.filter(obj => {
    if (obj[propertyName] !== undefined) {
      if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
        return false
      }
    }

    return true
  })
}
