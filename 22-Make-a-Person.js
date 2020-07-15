var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let name = firstAndLast;

  this.getFirstName = function() {
    return name.split(' ')[0];
  };

  this.getLastName = function() {
    return name.split(' ')[1];
  }

  this.getFullName = function() {
    return name;
  }

  this.setFirstName = function(firstName) {
    name = firstName + ' ' + name.split(' ')[1];
  }

  this.setLastName = function(lastName) {
    name = name.split(' ')[0] + ' ' + lastName;
  }

  this.setFullName = function(fullName) {
    name = fullName;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
