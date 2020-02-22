import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { setDefaultOptions } from 'jsdom-screenshot';

// Docker requires --no-sandbox to be able to run the tests
setDefaultOptions({
  launch: { args: ['--no-sandbox'] }
});

// Make sure jest has enough time to capture the screenshots
jest.setTimeout(15000);

expect.extend({ toMatchImageSnapshot });
