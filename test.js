import test from 'ava';
import makeador from './build/main';

test('is a function', t => {
  t.is(typeof makeador, 'function');
});

test('returns "Makea" when Math.random is stubbed to return 0.3', t => {
  Math.random = () => 0.3;
  t.is(makeador(), 'Makea');
});

test('returns "No makea" when Math.random is stubbed to return 0.6', t => {
  Math.random = () => 0.6;
  t.is(makeador(), 'No makea');
});

test('returns "Not sure if makea" when Math.random is stubbed to return 0.9', t => {
  Math.random = () => 0.9;
  t.is(makeador(), 'Not sure if makea');
});
