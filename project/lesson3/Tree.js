class TreeNode {
  constructor(element) {
    this.element = element;
    this.children = [];
  }

  addChild(element) {
    const node = new TreeNode(element);

    this.children.push(node);

    return node;
  }
}

class Tree {
  constructor(element) {
    this.root = new TreeNode(element);
  }

  traverse() {
    const values = [];

    function visit(node) {
      // Read this node's value.
      values.push(node.element);

      // Visit each child's branch.
      for (const child of node.children) {
        visit(child);
      }
    }

    visit(this.root);

    return values;
  }
}

// Create the tree with 10 as its root.
const tree = new Tree(10);

// Add children to node 10.
const node20 = tree.root.addChild(20);
tree.root.addChild(30);

// Add children to node 20.
node20.addChild(40);
node20.addChild(50);

console.log(tree.traverse());
// [10, 20, 40, 50, 30]