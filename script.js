const container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    addHoverEffect(); // 在生成新的方块后重新添加悬停效果
}

// 初始创建16x16的网格
createGrid(16);

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'pink'; // 悬停时改变颜色
        });
    });
}

// 调用函数给当前网格添加悬停效果
//addHoverEffect();


document.getElementById('resize').addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter new grid size (max 100):"));
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize); // 根据用户输入生成新网格
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});
