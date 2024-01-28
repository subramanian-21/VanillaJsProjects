
(function(){
    generateBoard();
    const board = document.getElementById('board')

    board.addEventListener('mouseover',(e)=>{
        if(e.target.tagName === 'DIV'){
            e.target.classList.remove("green")
           let row = e.target.dataset.row;
           let col = e.target.dataset.col;
           generateBoard();
            leftUpDiagonal(row,col);
            rightUpDiagonal(row,col);
            leftDownDiagonal(row,col);
            rightDownDiagonal(row,col);
        }
    })
    board.addEventListener('mouseleave',()=>{
        generateBoard()
        console.log("mouse")
    })
})()

function generateBoard(){
    const board = document.getElementById('board')
    board.innerHTML = ""
    for(i = 0;i<8;i++){
        const row = document.createElement('div');
        row.classList.add('flex')
        for(j = 0;j<8;j++){
            const col = document.createElement('div');
            col.classList.add("box")
            col.dataset.row = i;
            col.dataset.col = j;
            col.classList.remove("green")
            if(i%2 == 0){
                if(j%2 == 0){
                    col.classList.add('black')
                }
            }else{
                if(j%2 ==1){
                    col.classList.add('black')
                }
            }
            col.innerHTML = `${i}-${j}`
            row.appendChild(col);
        }
        board.appendChild(row)
    }
}
function  leftUpDiagonal(row,col){

    while (row>=0 && col>=0) {
       const element = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
       element.classList.add("green");
       row--;
       col--; 
    }
}
function rightUpDiagonal(row,col){
    while (row>=0 && col<=7) {
        const element = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
        element.classList.add("green");
        row--;
        col++; 
     }
}
function leftDownDiagonal(row,col){
    while (row<=7 && col>=0) {
        const element = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
        element.classList.add("green");
        row++;
        col--; 
     }
}
function rightDownDiagonal(row,col){
    while (row<=7 && col<=7) {
        const element = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
        element.classList.add("green");
        row++;
        col++; 
     }
}
