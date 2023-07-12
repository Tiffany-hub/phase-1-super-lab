// Write your classes here
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  const tree = new Tree ('Oak');
  console.log(tree.species);
  console.log(Tree.definition());

  const deciduousTree = new Deciduous('Maple', 'Red Maple');
  console.log(deciduousTree.species);
  console.log(deciduousTree.name);
  console.log(Deciduous.definition());

  const evergreenTree = new Evergreen('Pine','Scots Pine');
  console.log(evergreenTree.species);
  console.log(evergreenTree.name);
  console.log(Evergreen.definition);