let book = {
  title: "Alice in Wonderland",
  author: "Lewis Carroll",
  pages: 264,
  isRead: true,

  readBook: function() {
    if (this.isRead) {
      console.log("Bu kitab oxunub.");
    } else {
      console.log("Kitabı oxuyursan...");
      this.isRead = true;
    }
  },

  enterPrint: function() {
    return `Kitab: "${this.title}", müəllifi ${this.author}, səhifə sayı: ${this.pages}`;
  }
};


console.log(book.enterPrint());
book.readBook(); 