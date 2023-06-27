const determineWinner = require('./RPS');

test('Player chooses Rock and opponent chooses Paper, opponent should win', () => {
  expect(determineWinner('Rock', 'Paper')).toBe('Opponent');
});

test('Player chooses Rock and opponent chooses Scissors, player should win', () => {
  expect(determineWinner('Rock', 'Scissors')).toBe('Player');
});

test('Player chooses Rock and opponent chooses Rock, it should be a tie', () => {
  expect(determineWinner('Rock', 'Rock')).toBe('Tie');
});

test('Player chooses Paper and opponent chooses Scissors, opponent should win', () => {
  expect(determineWinner('Paper', 'Scissors')).toBe('Opponent');
});

test('Player chooses Paper and opponent chooses Rock, player should win', () => {
  expect(determineWinner('Paper', 'Rock')).toBe('Player');
});

test('Player chooses Paper and opponent chooses Paper, it should be a tie', () => {
  expect(determineWinner('Paper', 'Paper')).toBe('Tie');
});

test('Player chooses Scissors and opponent chooses Rock, opponent should win', () => {
  expect(determineWinner('Scissors', 'Rock')).toBe('Opponent');
});

test('Player chooses Scissors and opponent chooses Paper, player should win', () => {
  expect(determineWinner('Scissors', 'Paper')).toBe('Player');
});

test('Player chooses Scissors and opponent chooses Scissors, it should be a tie', () => {
  expect(determineWinner('Scissors', 'Scissors')).toBe('Tie');
});
