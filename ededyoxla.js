function yoxlaEded() {
  let eded = prompt("Bir ədəd daxil edin:");
  eded = Number(eded);

  if (0 < eded) {
    alert(" ədəd mənfidir")
  }
  else if (0  > eded) {
    alert(" ədəd müsbətdir")
  }
  else if (0  = eded) {
    alert(" ədəd sıfıra bərabərdir")
  }
  else  {
    alert(" ədəd deyil")
  }
}
yoxlaEded();