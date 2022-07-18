import fs from 'fs';
import path from 'path';

import {replaceSassSpacing} from '../replace-sass-spacing';

const fixtures = ['legacy-sass-spacing'];
const fixturesDir = path.resolve(__dirname, '../fixtures/replace-sass-spacing');

describe('replace-sass-spacing', () => {
  it('replaces Sass spacing function with the mapped CSS custom property', () => {
    fixtures.forEach((fixture) => {
      const oldContent = fs.readFileSync(
        `${fixturesDir}/${fixture}.input.scss`,
        'utf-8',
      );
      const newContent = fs.readFileSync(
        `${fixturesDir}/${fixture}.output.scss`,
        'utf-8',
      );
      const result = replaceSassSpacing(oldContent);

      expect(result).toBe(newContent);
    });
  });
});
