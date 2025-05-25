function enBoyuk(a, b, c) {
  let boyuk;

  if (a >= b && a >= c) {
    boyuk = a;
  } else if (b >= a && b >= c) {
    boyuk = b;
  } else {
    boyuk = c;
  }

  console.log("Ən böyük ədəd:", boyuk);
}