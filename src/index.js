export default function fragment(node) {
  node.parentElement.appendChild(node.content);
  node.setAttribute('style', 'display: none;');

  return {
    destroy() {
      if (
        node &&
        node.parentElement &&
        node.parentNode.contains(node.content)
      ) {
        node.parentElement.removeChild(node.content);
      }
    },
  };
}
