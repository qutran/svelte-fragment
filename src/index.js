export default function fragment(node) {
  // We need to keep the reference of the parent because of the adoption
  const parent = node.parentElement;

  // As appening a fragment as node child remove its content, we need to save the
  // children references
  const children = Array.prototype.slice.call(
    (node.content || node).childNodes,
  );

  // As the given node could not be a template tag we need to create a fragment
  // for non template node
  if (!node.content || node.content.nodeType !== 11) {
    node.content = document.createDocumentFragment();

    for (let i in children) {
      node.content.appendChild(children[i]);
    }
  }

  // By appending a fragment, its content will be spread inside the parrent
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
