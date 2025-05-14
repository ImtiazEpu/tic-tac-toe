import { useState } from 'react';

function Square ( { value, onSquareClick } ) {

    return (
        <button className="bg-white border border-gray-400 rounded-xl h-12 w-12 m-1 leading-9 text-lg"
                onClick={ onSquareClick }>{ value }
        </button>
    );
}

function Board ( { xIsNext, squares, onPlay } ) {

    const winner = calculateWinner( squares );
    let status;
    if ( winner ) {
        status = `Winner: ${ winner }`;
    } else {
        status = `Next player: ${ xIsNext ? 'X' : 'O' }`;
    }

    function handleClick ( i ) {
        if ( squares[ i ] || winner ) {
            return;
        }
        const newSquares = squares.slice();
        if ( xIsNext ) {
            newSquares[ i ] = 'X';
        } else {
            newSquares[ i ] = 'O';
        }
        onPlay( newSquares );
    }

    return (
        <>
            <div className="flex justify-center my-4">
                <div className={ "text-lg" }>{ status }</div>
            </div>
            <div className="flex justify-center">
                <Square value={ squares[ 0 ] } onSquareClick={ () => handleClick( 0 ) }/>
                <Square value={ squares[ 1 ] } onSquareClick={ () => handleClick( 1 ) }/>
                <Square value={ squares[ 2 ] } onSquareClick={ () => handleClick( 2 ) }/>
            </div>
            <div className={ "flex justify-center" }>
                <Square value={ squares[ 3 ] } onSquareClick={ () => handleClick( 3 ) }/>
                <Square value={ squares[ 4 ] } onSquareClick={ () => handleClick( 4 ) }/>
                <Square value={ squares[ 5 ] } onSquareClick={ () => handleClick( 5 ) }/>
            </div>
            <div className={ "flex justify-center" }>
                <Square value={ squares[ 6 ] } onSquareClick={ () => handleClick( 6 ) }/>
                <Square value={ squares[ 7 ] } onSquareClick={ () => handleClick( 7 ) }/>
                <Square value={ squares[ 8 ] } onSquareClick={ () => handleClick( 8 ) }/>
            </div>
        </>
    );
}

export default function Game () {
    const [ history, setHistory ] = useState( [ Array( 9 ).fill( null ) ] );
    const [ xIsNext, setXIsNext ] = useState( true );

    const currentSquares = history[ history.length - 1 ];

    function handelPlay ( nextSquares ) {
        setXIsNext( !xIsNext );
        setHistory( [ ...history, nextSquares ] )
    }

    return (
        <div className="container mx-auto">
            <div>
                <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handelPlay }/>
            </div>
            <div>
                <ol>{/*TBD*/ }</ol>
            </div>
        </div>

    );
}

function calculateWinner ( squares ) {
    const lines = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ]
    ];
    for ( let i = 0; i < lines.length; i++ ) {
        const [ a, b, c ] = lines[ i ];
        if ( squares[ a ] && squares[ a ] === squares[ b ] && squares[ a ] === squares[ c ] ) {
            return squares[ a ];
        }
    }
    return null;
}