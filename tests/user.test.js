const User = require('../src/User')


describe('User object', () => {
    test('User age', ()=> {
        const newUserTest = new User('testname', '', '');
        expect(newUserTest.age).toThowError('User must have numeric age input');
    })
    test('User name should be a string input', () => {
        const newUserTest = new User('testname', '', '');
        expect(newUserTest.name).toEqual('testname');
    })
    test('name length', () => {
        expect(() => (new User('', '', ''))).toThrowError('User must have a name');
    })
    //last name test
    test('User last name should be a string input', () => {
        expect(() => (new User('', '', ''))).toEqual('');
    })
    test('last name length', () => {
        expect(() => (new User('', '', ''))).toThrowError('User must have a last name');
    })
})

describe('', () => {
    test('', ()=> {
        expect()
    })
})