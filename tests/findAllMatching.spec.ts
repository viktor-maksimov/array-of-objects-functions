import { findAllMatching } from "../src/array-of-objects"

const arrayOfObjects: Record<string, any>[] = [
  {
    id: 7,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  },
  {
    id: 11
  },
  {
    id: 15,
    data: {}
  },
  {
    id: 17,
    data: {
      title: "Test 2",
      description: "Lorem ipsum 2"
    }
  },
  {
    id: 19,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  }
]

describe("Find All Matching - Get all matching", () => {
  const result = findAllMatching(arrayOfObjects, "data", {
    title: "Test 1",
    description: "Lorem ipsum 1"
  })
  const expectedResult = [
    {
      id: 7,
      data: {
        title: "Test 1",
        description: "Lorem ipsum 1"
      }
    },
    {
      id: 19,
      data: {
        title: "Test 1",
        description: "Lorem ipsum 1"
      }
    }
  ]
  const notExpectedResult = null

  it("Equal", () => {
    expect(result).toEqual(expectedResult)
  })
  it("Not equal", () => {
    expect(result).not.toEqual(notExpectedResult)
  })
})
