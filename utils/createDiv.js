/**
 * Permet de créer une div et d'ajouter les caractéristiques convoitées.
 * @param {string} tag
 * @param {HTMLElement} parent
 * @param {string} className
 * @param {string} text
 * @param {Object} style
 * @returns {HTMLElement}
 */

export default (tag, parent, className, text, style, attribute) => {
  const element = document.createElement(tag);
  if (!element) return;
  if (parent) parent.appendChild(element);
  if (className) element.className = className;
  if (text) element.innerHTML = text;
  if (style) {
    Object.entries(style).forEach(
      ([key, value]) => (element.style[key] = value)
    );
  }

  if (attribute) {
    Object.entries(attribute).forEach(([key, value]) => (element[key] = value));
  }

  return element; 
};
