// hooks not have dom  any element  beacuse use renderHook

import { renderHook, act } from "@testing-library/react";

import { useCounter } from "./useCounter";

describe("use counter", () => {
  test("should render the initail count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should render the initail count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
  // testing custum hooks
  //   update state before made
  test("should  the increament count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should  the decreament count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
