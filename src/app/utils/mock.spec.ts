describe('mocks', () => {
  it('mock functions', () => {
    function map<T>(items: T[], callback: (x: T) => T) {
      return items.map(item => callback(item));
    }

    const mockCallback = jest.fn(x => x * 2);
    const newList = map([1, 2, 3], mockCallback);

    // The mock function is called once
    expect(mockCallback.mock.calls.length).toBe(3);
    expect(mockCallback).toHaveBeenCalledTimes(3);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback).nthCalledWith(1, 1);
    expect(mockCallback).nthCalledWith(2, 2);
    expect(mockCallback).nthCalledWith(3, 3);


    // The return value of the first call to the function was 0
    expect(mockCallback.mock.results[0].value).toBe(2);
    expect(mockCallback).nthReturnedWith(1, 2);
    expect(mockCallback).nthReturnedWith(2, 4);
    expect(mockCallback).nthReturnedWith(3, 6);

    expect(newList).toMatchSnapshot();
  });

  it('Mock return values', () => {
    const vikingMock = jest.fn();
    console.log(vikingMock());
    // > undefined

    vikingMock
      .mockReturnValueOnce('ng-vikings')
      .mockReturnValueOnce('is')
      .mockReturnValueOnce('so')
      .mockReturnValueOnce('cool')
      .mockReturnValue(true);

    console.log(vikingMock(), vikingMock(), vikingMock(), vikingMock(), vikingMock(), vikingMock());
    // > ng-vikings is so cool true true
  });
});
