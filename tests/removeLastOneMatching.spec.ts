import { removeLastOneMatching } from "../src/array-of-objects"

const arrayOfObjects: Record<string, any>[] = [
  {
    id: 7
  },
  {
    id: 11,
    data: {}
  },
  {
    id: 15,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
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

describe("Remove Last One Matching", () => {
  const result = removeLastOneMatching(arrayOfObjects, "data", {
    title: "Test 1",
    description: "Lorem ipsum 1"
  })
  const expectedResult = [
    {
      id: 7
    },
    {
      id: 11,
      data: {}
    },
    {
      id: 15,
      data: {
        title: "Test 1",
        description: "Lorem ipsum 1"
      }
    },
    {
      id: 17,
      data: {
        title: "Test 2",
        description: "Lorem ipsum 2"
      }
    },
  ]

  it("Equal", () => {
    expect(result).toEqual(expectedResult)
  })
  it("Not equal", () => {
    expect(result).not.toEqual(arrayOfObjects)
  })
})

describe("Remove Last One Matching - not finding result", () => {
  const result = removeLastOneMatching(arrayOfObjects, "data", {
    title: "Test 3",
    description: "Lorem ipsum 3"
  })

  it("Equal", () => {
    expect(result).toEqual(arrayOfObjects)
  })
})
