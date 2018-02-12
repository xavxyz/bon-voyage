import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// hide error boundaries warning,
// see https://github.com/facebook/react/issues/11098#issuecomment-350369568
console.error = err => {
  throw new Error(err);
};
console.warn = warning => {
  throw new Error(warning);
};

// window.matchMedia is not defined in node, even with the jsdom environment
window.matchMedia = function() {
  return {
    matches: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
