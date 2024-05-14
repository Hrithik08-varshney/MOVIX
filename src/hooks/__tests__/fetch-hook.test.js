import { renderHook } from "@testing-library/react";
import useFetch from "../useFetch";

const mockApiObj = {
  fetchDataFromApi: jest.fn().mockResolvedValue({}),
};
jest.mock("../../utils/api", () => {
  return mockApiObj;
});

describe("test suites for fetch-hooks", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function getHookWrapper() {
    const { result } = renderHook(() => useFetch);
    return { result };
  }
  it("fetchs the data from api", () => {
    const { result } = getHookWrapper();
    console.log(result,"here is my result");
  });
});
