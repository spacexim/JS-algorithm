Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else break;
      j--;
    }
    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();
