import React from 'react';
import {DisplayText} from '@shopify/polaris';

export function TextComponentTest() {
  return (
    <section>
      <div>
        <DisplayText size="small">Small Display Text</DisplayText>
        <DisplayText size="medium">Medium Display Text</DisplayText>
        <DisplayText size="large">Large Display Text</DisplayText>
        <DisplayText size="extraLarge">Extra Large Display Text</DisplayText>
      </div>
    </section>
  );
}
