import { getUniqueValues } from "../src/array-of-objects"

const arrayOfObjects = [
  {
    id: 7,
    name: "John",
    surname: "Travolta"
  },
  {
    id: 11,
    name: "John",
    surname: "Doe"
  },
  {
    id: 15,
    name: "Jim",
    surname: "Beam"
  },
  {
    id: 19,
    name: "Johnnie",
    surname: "Walker"
  }
]

describe("Get Unique Values", () => {
  const uniqueNames = getUniqueValues(arrayOfObjects, "name")
  const expectedUniqueNames = ["John", "Jim", "Johnnie"]
  const notExpectedUniqueNames = ["John", "John", "Jim", "Johnnie"]

  it("Equal", () => {
    expect(uniqueNames).toEqual(expectedUniqueNames)
  })
  it("Not equal", () => {
    expect(uniqueNames).not.toEqual(notExpectedUniqueNames)
  })
})

describe("Get Unique Values - not finding property name", () => {
  const uniqueNames = getUniqueValues(arrayOfObjects, "address")
  const expectedUniqueNames = []

  it("Equal", () => {
    expect(uniqueNames).toEqual(expectedUniqueNames)
  })
})
