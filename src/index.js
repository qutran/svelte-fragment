export default function fragment(node) {
  // We need to keep the reference of the parent because of the adoption
  const parent = node.parentElement;

  // As appening a fragment as node child remove its content, we need to save the
  // children references
  const children = Array.prototype.slice.call(node.content.childNodes);

  parent.appendChild(node.content);

  // Svelte except an used node to have parent, so a fragment should adopt the node
  document.createDocumentFragment().appendChild(document.adoptNode(node));

  return {
    destroy() {
      // Node content fragment doesnt longer have the references to the children
      // so its content need to be removed reference by reference
      requestAnimationFrame(function() {
        for (let i in children) {
          if (parent && parent.contains(children[i])) {
            parent.removeChild(children[i]);
          }
        }
      });
    },
  };
}
