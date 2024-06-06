export default (target, parent, choose = true) => {
  if (!target) return;
  if (choose === "all") {
    if (parent) return [...parent.querySelectorAll(target)]; 
    else return [...document.querySelectorAll(target)]
  }

  if (parent) return parent.querySelector(target);
  return document.querySelector(target)
};