class TrieNode {
  constructor() {
    this.children = {};
    this.wordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.wordEnd = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.wordEnd;
  }

  startwith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  autoComplete(prefix) {
    let node = this.root;
    let result = [];

    for (let char of prefix) {
      if (!node.children[char]) {
        return result;
      }
      node = node.children[char];
    }
    this.dfs(node, prefix, result);
    return result;
  }

  dfs(node, prefix, result) {
    if (node.wordEnd) {
      result.push(prefix);
    }

    for (let char in node.children) {
      this.dfs(node.children[char], prefix + char, result);
    }
  }

  delete(word) {
    const stack = [];
    let node = this.root;

    // Traverse the Trie and collect nodes
    for (const char of word) {
      if (!node.children[char]) return; // Word not found, exit
      stack.push([node, char]);
      node = node.children[char];
    }

    // Unmark the end of the word
    if (!node.isEndOfWord) return; // Word not found
    node.isEndOfWord = false;

    // Clean up nodes if they are unnecessary
    while (stack.length > 0) {
      const [parent, char] = stack.pop();
      const child = parent.children[char];

      // If child has no children and is not the end of another word, delete it
      if (Object.keys(child.children).length === 0 && !child.isEndOfWord) {
        delete parent.children[char];
      } else {
        break; // Stop cleanup if a node is still needed
      }
    }
  }
}

let trie = new Trie();







trie.insert("abhi");
trie.insert("apple");
trie.insert("aaaaa");

console.log(trie.search("abhi"));



