import { validZipCode } from './utils.js';

describe('Utility functions: validZipCode', () => {
    test('validZipCode returns true for valid input: 12345', () => {
        const zipCode = '12345';
        const actual = validZipCode(zipCode);

        expect(actual).toBe(true);
    });

    test('validZipCode returns false for invalid length: 123', () => {
        const zipCode = '123';
        const actual = validZipCode(zipCode);

        expect(actual).toBe(false);
    });

    test('validZipCode returns false for invalid characters but correct length: #21a4', () => {
        const zipCode = '#21a4';
        const actual = validZipCode(zipCode);

        expect(actual).toBe(false);
    });

    test('validZipCode returns false for empty input', () => {
        const zipCode = '';
        const actual = validZipCode(zipCode);

        expect(actual).toBe(false);
    });
});
