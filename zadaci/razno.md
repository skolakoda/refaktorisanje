```
${({ error, theme, focused }) => {
    if (error) {
      return `border: 3px solid ${theme.danger}`;
    }
    if (focused) {
      return `border: 1px solid ${theme.primaryColor}`;
    }
    return `border: 1px solid ${theme.borderColor}`;
  }};

  ${({ error, theme, focused }) => {
    if (error) {
      return `
        border: 3px solid ${theme.danger}
      `;
    } else if (focused) {
      return `border: 1px solid ${theme.primaryColor}`;
    }
    return `border: 1px solid ${theme.borderColor}`;
  }};
```

```
handleKeyPress = e => {
    const { expanded, focused, selected } = this.state;
    if (e.keyCode === 40 && focused) {
      // Arrow Down
      if (!expanded) {
        this.toggleExpand();
        this.handlePropagation(e);
      }
      if (expanded) {
        this.tabNextValue();
        this.handlePropagation(e);
      }
    } else if (e.keyCode === 38 && focused) {
      // Arrow Up
      if (expanded) {
        this.tabPreviousValue();
        this.handlePropagation(e);
      }
    } else if (e.keyCode === 9 && expanded && focused) {
      // Tab
      this.handleOnClickOrTab(selected);
    } else if (e.keyCode === 13 && focused) {
      // Enter
      this.handleOnClickOrTab(selected);
    }
  };
```
