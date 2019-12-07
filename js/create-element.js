function getKeyAlias(key) {
  const lookup = {
    className: "class",
    htmlFor: "for"
  };
  return lookup[key];
}

function createEl(type, props, children) {
  const el = document.createElement(type);

  if (props) {
    for (let key in props) {
      const value = props[key];
      let _key = getKeyAlias(key);
      el.setAttribute(_key || key, value);
    }
  }

  if (typeof children === "string") {
    el.innerText = children;
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
