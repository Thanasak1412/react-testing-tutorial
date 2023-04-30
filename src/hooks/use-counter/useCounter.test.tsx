import { act, renderHook } from '@testing-library/react';

import useCounter from './useCounter';

describe('useCounter', () => {
  test('the count state have initial state with default value of initialCount props', () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  test('the count state have initial state with value of initialCount', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 20 },
    });

    expect(result.current.count).toBe(20);
    expect(result.current.count).not.toBe(0);
  });

  test('should increment the count when the increment function called', () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });

  test('should decrement the count when the decrement function called', () => {
    const { result } = renderHook(useCounter, { initialProps: { initialCount: 20 } });

    act(() => result.current.decrement());

    expect(result.current.count).toBe(19);
  });
});
