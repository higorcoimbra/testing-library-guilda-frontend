import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';

configure({
    defaultHidden: true
});

Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
        getPropertyValue: (prop) => {
            return '';
        }
    })
});