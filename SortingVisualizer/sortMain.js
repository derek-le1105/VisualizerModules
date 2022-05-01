var sortingBars = document.getElementById('sorting-bars');
let currArray = [];

const newArrayBtn = document.getElementById('new-array');
const selectionSortBtn = document.getElementById('selection-sort');
const bubbleSortBtn = document.getElementById('bubble-sort');
const insertionSortBtn = document.getElementById('insertion-sort');
const mergeSortBtn = document.getElementById('merge-sort');
const quickSortBtn = document.getElementById('quick-sort');
const sortBtn = document.getElementById('initiate-sort');

class sortType{
    static selection = new sortType("selection");
    static bubble = new sortType("bubble");
    static insertion = new sortType("insertion");
    static merge = new sortType("merge");
    static quick = new sortType("quick");
    static none = new sortType("none");

    constructor(name){
        this.name = name;
    }
}

let sortDecision = sortType.none;

selectionSortBtn.addEventListener('click', function(){
    sortDecision = sortType.selection;
})
bubbleSortBtn.addEventListener('click', function(){
    sortDecision = sortType.bubble;
})
insertionSortBtn.addEventListener('click', function(){
    sortDecision = sortType.insertion;
})
mergeSortBtn.addEventListener('click', function(){
    sortDecision = sortType.merge;
})
quickSortBtn.addEventListener('click', function(){
    sortDecision = sortType.quick;
})

createNewArray();
generateBars();

newArrayBtn.addEventListener('click', createNewArray);

function createNewArray(){
    temp = [];
    currArray = [];
    for(let i = 0; i < 50; i++){
        let rand = Math.floor(Math.random() * (550 - 20) + 20);
        while(temp.includes(rand))
            rand = Math.floor(Math.random() * (550 - 20) + 20);
        temp.push(rand);
    }
    currArray = temp;
    generateBars();
}

function generateBars(){
    while(sortingBars.firstChild){
        sortingBars.removeChild(sortingBars.firstChild);
    }
    for(let i = 0; i < currArray.length; ++i){
        const newRect = document.createElement("div");
        newRect.classList.add("sort");
        newRect.classList.add("sortItem");
        newRect.style.height = currArray[i] + 'px';
        sortingBars.appendChild(newRect);
    }
}

sortBtn.addEventListener('click', function(){
    let barsToSort = document.getElementsByClassName('sortItem')
    for(let i = 0; i < barsToSort.length-1; ++i){
        for(let j = 0; j < barsToSort.length-1; ++j){
            if(barsToSort[j].offsetHeight > barsToSort[j+1].offsetHeight){
                let temp = barsToSort[j+1].offsetHeight + 'px'
                barsToSort[j+1].style.height = barsToSort[j].offsetHeight +'px'
                barsToSort[j].style.height = temp
            }
        }
    }
})