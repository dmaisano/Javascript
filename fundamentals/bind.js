let dog = {
  sound: 'arf',
  talk: function() {
    console.log(this.sound);
  }
};

// dog.talk(); // arf

let talk = dog.talk;
// talk(); //undef

let boundTalk = talk.bind(dog);
boundTalk(); // arf
