import test from 'ava';
import {capitalise} from '../app/utils';

test('capitalise a string', (t) => {
    t.is(capitalise("themoooon"), "THEMOOOON");
    t.is(capitalise("themoooon"), "NOTTHEMOOOON");
})