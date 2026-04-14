const btns: NodeListOf<Element> = document.querySelectorAll(".btn");
const calcScreen = document.getElementById("calc") as HTMLInputElement;
const resultScreen = document.getElementById("result") as HTMLHeadingElement;

function CalculateInp(): void {
  let calc: string = calcScreen.value;

  if (calc.trim() !== "") {
    try {
      resultScreen.innerHTML = eval(calc.trim());
    } catch (err: Error | unknown) {
      resultScreen.innerHTML = "SyntaxError";
    }
  }
}

function BtnCLickEvent(): void {
  for (let i: number = 0; i < btns.length; i++) {
    const btn: Element = btns[i];

    btn.addEventListener("click", (): void => {
      const symbol: string = btn.innerHTML.trim();

      if (resultScreen.innerHTML.trim() !== "") {
        resultScreen.innerHTML = "";
        calcScreen.value = "";
      }

      if (symbol !== "=" && symbol !== "AC" && symbol !== "DEL") {
        calcScreen.value += symbol;
      } else if (symbol === "AC") {
        calcScreen.value = "";
      } else if (symbol === "DEL") {
        calcScreen.value = calcScreen.value.slice(0, -1);
      } else if (symbol === "=") {
        CalculateInp();
      }
    });
  }
}

const main = (): void => {
  BtnCLickEvent();
};

main();
