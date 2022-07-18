import {getJSXAttributes} from '@codeshift/utils';
import type {API, FileInfo} from 'jscodeshift';

const displayTextReplacements = {
  small: 'headingXl',
  medium: 'heading2xl',
  large: 'heading3xl',
  extraLarge: 'heading4xl',
};

export default function replaceTextComponent(
  file: FileInfo,
  {jscodeshift: j}: API,
) {
  const source = j(file.source);

  source.findJSXElements('DisplayText').forEach((element) => {
    // Replace size with variant prop
    getJSXAttributes(j, element, 'size').forEach((attribute) => {
      // change the name of the prop to variant
      j(attribute)
        .find(j.JSXIdentifier)
        .replaceWith(j.jsxIdentifier('variant'));

      // map the size to the correct variant
      j(attribute)
        .filter(
          (attr) =>
            attr.node.value && attr.node.value.value in displayTextReplacements,
        )
        .replaceWith((attr) => {
          const size = attr.node.value
            .value as keyof typeof displayTextReplacements;

          return j.jsxAttribute(
            j.jsxIdentifier('variant'),
            j.stringLiteral(displayTextReplacements[size]),
          );
        });
    });
  });

  return source.toSource();
}
