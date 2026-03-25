document.addEventListener('DOMContentLoaded', ()=>{
    const gameBoard = document.getElementById('game-board');
    const playButton = document.getElementById('play-button');
    const levelSelect = document.getElementById('level-select');

    const tubes=[];
    let levelcount = 1;

    levelSelect.addEventListener('change', (event) =>{
        const levelcount = parseInt(event.target.value);
        document.getElementById('level-count').textContent = levelcount;
    });

    playButton.addEventListener('click', ()=>{
        tubes.length = 0;
        createTubes();
        
    });

    function createTubes(){
        //alert('依照選擇關卡產生試管');
        gameBoard.innerHTML = "";

        for (let i=0; i<levelcount+1;i++) {
            const tube = document.createElement('div');
            tube.classList.add('tube')
            gameBoard.appendChild(tube);
            tube.push
        }
    }
});