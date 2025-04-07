import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first class', () => {
    expect(classNames('mainClass')).toBe('mainClass');
  });

  test('with additional classes', () => {
    const expected = 'mainClass class1 class2';
    expect(classNames('mainClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'mainClass class1 class2 selected scrollable';
    expect(
      classNames(
        'mainClass',
        { selected: true, scrollable: true },
        ['class1', 'class2'],
      ),
    )
      .toBe(expected);
  });

  test('with mods with false', () => {
    const expected = 'mainClass class1 class2 selected';
    expect(
      classNames(
        'mainClass',
        { selected: true, scrollable: false },
        ['class1', 'class2'],
      ),
    )
      .toBe(expected);
  });

  test('with mods with undefined', () => {
    const expected = 'mainClass class1 class2 selected';
    expect(
      classNames(
        'mainClass',
        { selected: true, scrollable: undefined },
        ['class1', 'class2'],
      ),
    )
      .toBe(expected);
  });
});
