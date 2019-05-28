import {listImages} from './image.utils';

describe('image.utils', () => {
  describe('on list images', () => {
    it('should return a complete list', () => {
      expect(listImages(3, 2)).toMatchSnapshot();
    });
  });

  // @ts-ignore
  describe.each([[1, 1], [5, 2], [3, 2]])(
    '.listImages(%i, %i)',
    (totalElement: number, maxCols: number) => {
      it(`match snapshot`, () => {
        expect(listImages(totalElement, maxCols)).toMatchSnapshot();
      });
    }
  );

  describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    '.add(%i, %i)',
    (a, b, expected) => {
      test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
      });

      test(`returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected);
      });

      test(`returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected);
      });
    }
  );


  test.todo('add test getRows');
});
