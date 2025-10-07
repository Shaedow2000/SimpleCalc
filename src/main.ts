const btns: NodeListOf<Element> = document.querySelectorAll( '.btn' );
const calcScreen = document.getElementById( 'calc' ) as HTMLHeadingElement;
const resultScreen = document.getElementById( 'result' ) as HTMLHeadingElement;

function BtnCLickEvent(): void {
  for ( let i: number = 0; i < btns.length; i++ ) {
    const btn: Element = btns[ i ];

    btn.addEventListener( 'click', (): void => {
      const symbol: string = btn.innerHTML.trim();

      if ( symbol !== '=' && symbol !== 'AC' && symbol !== 'DEL' ) {
        calcScreen.innerHTML += symbol;
      } else if ( symbol === 'AC' ) {
        calcScreen.innerHTML = '';
      } else if ( symbol === 'DEL' ) {
        calcScreen.innerHTML = calcScreen.innerHTML.slice( 0, -1 );
      } else if ( symbol === '=' ) {
        resultScreen.innerHTML = eval( calcScreen.innerHTML.trim() );
      }
    } );
  }
}

const main = (): void => {

  BtnCLickEvent();

}


main();
