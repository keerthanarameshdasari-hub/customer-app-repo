import { describe, expect, it } from '@jest/globals';

import { formatBuildLabel } from '../buildInfo';

describe('formatBuildLabel', () => {
  it('adds the variant name for dev and sit', () => {
    expect(formatBuildLabel('dev', '1.0.0', '7')).toBe('v1.0.0 (7) DEV');
    expect(formatBuildLabel('sit', '1.0.0', '7')).toBe('v1.0.0 (7) SIT');
  });

  it('shows no variant name for prod', () => {
    expect(formatBuildLabel('prod', '1.0.0', '7')).toBe('v1.0.0 (7)');
  });
});
