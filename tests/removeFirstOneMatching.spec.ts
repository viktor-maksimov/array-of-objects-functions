import { removeFirstOneMatching } from "../src/array-of-objects"

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

describe("Remove First One Matching", () => {
  const result = removeFirstOneMatching(arrayOfObjects, "data", {
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

  it("Equal", () => {
    expect(result).toEqual(expectedResult)
  })
  it("Not equal", () => {
    expect(result).not.toEqual(arrayOfObjects)
  })
})
