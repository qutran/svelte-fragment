export default function fragment(node) {
  node.parentElement.appendChild(document.adoptNode(node).content);
}
