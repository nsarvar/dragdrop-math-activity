let allCards = document.querySelectorAll('.g-card');
allCards.forEach(function(card) {
    card.addEventListener('dragstart', handleCardDragStart, false);
});

function handleCardDragStart(e) {
    e.dataTransfer.setData("cardId", e.target.id);
}

let board_rows = document.querySelectorAll('.g-board__cell');

board_rows.forEach(function(item) {
    item.addEventListener('dragover', itemOnDragOver);
    item.addEventListener('drop', itemOnDrop);
});

function itemOnDragOver(e) {
    e.preventDefault();
}

function itemOnDrop(e) {
    e.preventDefault();
    // e.target.setAtribute('atrName', 'value');

    var draggedCardId = e.dataTransfer.getData("cardId");
    var draggedCard = document.getElementById(draggedCardId);

    e.target.appendChild(draggedCard);
}