import {compareIsoDateInReverseOrder} from './compare-iso-date-in-reverse-order';

describe('test compareIsoDateInReverseOrder', () => {

  const initialArray = [
    '2022-09-09T13:24:57.980Z',
    '2022-07-09T13:24:57.980Z',
    '2022-05-09T13:24:57.980Z',
    '2022-07-09T13:24:57.980Z'
  ];

  test('should sort an array in ascending order', () => {
    const expected = [
      '2022-09-09T13:24:57.980Z',
      '2022-07-09T13:24:57.980Z',
      '2022-07-09T13:24:57.980Z',
      '2022-05-09T13:24:57.980Z',
    ];
    const actual = initialArray.sort((a, b) => compareIsoDateInReverseOrder(a, b));
    expect(actual).toEqual(expected);
  });
});
