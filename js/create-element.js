function createEl(type, props, children) {
  if (type === "#text") {
    const el = document.createTextNode(props);
    return el;
  }

  const el = document.createElement(type);

  if (props) {
    for (let key in props) {
      const value = props[key];
      el.setAttribute(key, value);
    }
  }

  if (children && typeof children === "object" && children.length) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child && child.nodeType === HTMLElement.ELEMENT_NODE) {
        el.appendChild(child);
      }
    }
  }

  return el;
}
