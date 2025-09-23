    let text = prompt("Mətn daxil edin:");
      let reversed = "";
      for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
      }
      console.log(reversed);