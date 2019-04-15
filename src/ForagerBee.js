var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype); //Creates an empty object that has access to bee's prototypes
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(value) {
  this.treasureChest.push(value);
};
