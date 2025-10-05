const btns: NodeListOf<Element> = document.querySelectorAll( '.btn' );
const calcScreen = document.getElementById( 'calc' ) as HTMLHeadElement;
const resultScreen = document.getElementById( 'result' ) as HTMLHeadElement;


function BtnCLickEvent(): void {
  for ( let i: number = 0; i < btns.length; i++ ) {
    const btn: Element = btns[ i ];

    btn.addEventListener( 'click', (): void => {
      const symbol: string = btn.innerHTML.trim();

      if ( symbol !== '=' && symbol !== 'AC' && symbol !== 'DEL' ) {
        calcScreen.innerHTML += symbol;
      }
    } );
  }
}

const main = (): void => {

  BtnCLickEvent();

}


main();
