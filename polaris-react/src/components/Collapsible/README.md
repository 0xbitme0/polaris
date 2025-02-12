---
name: Collapsible
category: Behavior
keywords:
  - hide
  - show
  - low priority
  - less important
  - disclosure
  - accordion
  - accordian
  - expand content
  - toggle
  - toggleable
  - reveal
  - show more
  - show all button
  - show hide
  - expanding view
  - collapse
---

# Collapsible

The collapsible component is used to put long sections of information under a block that merchants can expand or collapse.

---

## Best practices

The collapsible component should:

- Be used for information that is lower priority or that merchants don’t need to see all the time
- Not be used to hide error messages or other critical information that requires an immediate action

---

## Content guidelines

Collapsible containers are cards with expandable and collapsible functionality, and should follow the content guidelines for [cards](https://polaris.shopify.com/components/card#section-content-guidelines).

---

## Examples

### Default

Use for a basic “show more” interaction when you need to display more content.

```jsx
function CollapsibleExample() {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  return (
    <div style={{height: '200px'}}>
      <Card sectioned>
        <Stack vertical>
          <Button
            onClick={handleToggle}
            ariaExpanded={open}
            ariaControls="basic-collapsible"
          >
            Toggle
          </Button>
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{
              duration: 'var(--p-duration-150)',
              timingFunction: 'var(--p-ease-in-out)',
            }}
            expandOnPrint
          >
            <TextContainer>
              <p>
                Your mailing list lets you contact customers or visitors who
                have shown an interest in your store. Reach out to them with
                exclusive offers or updates about your products.
              </p>
              <Link url="#">Test link</Link>
            </TextContainer>
          </Collapsible>
        </Stack>
      </Card>
    </div>
  );
}
```

---

## Related components

- To control a collapsible component, use the [button](https://polaris.shopify.com/components/button) component
- To put long sections of information in a container that allows for scrolling, [use the scrollable component](https://polaris.shopify.com/components/scrollable)

---

## Accessibility

Use the collapsible component in conjunction with a [button](https://polaris.shopify.com/components/button). Place the collapsible content immediately after the button that controls it, so merchants with vision or attention issues can easily discover what content is being affected.

- Use the required `id` prop of the collapsible component to give the content a unique `id` value
- Use the `ariaExpanded` prop on the button component to add an `aria-expanded` attribute, which conveys the expanded or collapsed state to screen reader users
- Use the `ariaControls` prop on the button component, and set its value to the `id` value of the collapsible component
