const btns: NodeListOf<Element> = document.querySelectorAll( '.btn' );
const calcScreen = document.getElementById( 'calc' ) as HTMLInputElement;
const resultScreen = document.getElementById( 'result' ) as HTMLHeadingElement;

function CalculateInp(): void {
  let calc: string = calcScreen.value;

  if ( calc.trim() !== '' ) {
    resultScreen.innerHTML = eval( calc.trim() );
  }

}

function BtnCLickEvent(): void {
  for ( let i: number = 0; i < btns.length; i++ ) {
    const btn: Element = btns[ i ];

    btn.addEventListener( 'click', (): void => {
      const symbol: string = btn.innerHTML.trim();

      if ( resultScreen.innerHTML.trim() !== '' ) {
          resultScreen.innerHTML = '';
          calcScreen.innerHTML = '';
      }

      if ( symbol !== '=' && symbol !== 'AC' && symbol !== 'DEL' ) {
        calcScreen.innerHTML += symbol;
      } else if ( symbol === 'AC' ) {
        calcScreen.innerHTML = '';
      } else if ( symbol === 'DEL' ) {
        calcScreen.innerHTML = calcScreen.innerHTML.slice( 0, -1 );
      } else if ( symbol === '=' ) {
        CalculateInp();
      }
    } );
  }
}


const main = (): void => {

  BtnCLickEvent();

}


main();
