import { calculateWinner } from './App';

describe('calculateWinner', () => {
  it('returns the correct winner for rows', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('returns the correct winner for columns', () => {
    const squares = ['O', null, null, 'O', null, null, 'O', null, null];
    expect(calculateWinner(squares)).toBe('O');
  });

  it('returns the correct winner for diagonals', () => {
    const squares = ['X', null, null, null, 'X', null, null, null, 'X'];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('returns null when there is no winner', () => {
    const squares = Array(9).fill(null);
    expect(calculateWinner(squares)).toBeNull();
  });

  it('returns null when there is a draw', () => {
    const squares = ['X','O','X','O','X','X','O','X','O'];
    expect(calculateWinner(squares)).toBeNull();
  });
});