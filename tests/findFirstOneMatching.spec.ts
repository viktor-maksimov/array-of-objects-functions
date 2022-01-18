import { findFirstOneMatching } from "../src/array-of-objects"

const arrayOfObjects: Record<string, any>[] = [
  {
    id: 7,
    data: {
      title: "Test 3",
      description: "Lorem ipsum 3"
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
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  },
  {
    id: 19,
    data: {
      title: "Test 2",
      description: "Lorem ipsum 2"
    }
  }
]

describe("Find First One Matching - Get the only result", () => {
  const result = findFirstOneMatching(arrayOfObjects, "data", {
    title: "Test 1",
    description: "Lorem ipsum 1"
  })
  const expectedResult = {
    id: 17,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  }
  const notExpectedResult = null

  it("Equal", () => {
    expect(result).toEqual(expectedResult)
  })
  it("Not equal", () => {
    expect(result).not.toEqual(notExpectedResult)
  })
})

const arrayOfObjects2: Record<string, any>[] = [
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
    id: 19,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  }
]

describe("Find First One Matching - Get the first result", () => {
  const result = findFirstOneMatching(arrayOfObjects2, "data", {
    title: "Test 1",
    description: "Lorem ipsum 1"
  })
  const expectedResult = {
    id: 7,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  }
  const notExpectedResult = null
  const notExpectedResult2 = {
    id: 19,
    data: {
      title: "Test 1",
      description: "Lorem ipsum 1"
    }
  }

  it("Equal", () => {
    expect(result).toEqual(expectedResult)
  })
  it("Not equal", () => {
    expect(result).not.toEqual(notExpectedResult)
  })
  it("Not equal", () => {
    expect(result).not.toEqual(notExpectedResult2)
  })
})

describe("Find First One Matching - not finding property name", () => {
  const result = findFirstOneMatching(arrayOfObjects2, "parentId", {
    title: "Test 1",
    description: "Lorem ipsum 1"
  })
  const expectedResult = null

  it("Equal", () => {
    expect(result).toEqual(expectedResult)
  })
})
