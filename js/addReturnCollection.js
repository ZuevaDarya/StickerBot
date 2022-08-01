$(document).ready(function () {
    //Выставить на аукцион, увеличить/уменьшить
    $('#auctionAddNext').click(function () {
        let addNum = document.getElementById('auctionAddNum');
        let userNum = document.getElementById('userStickNum');

        if (parseInt(userNum.innerText) > 0) {
            //Увеличить число Выставить на аукцион (0)
            let changeNum = Number(addNum.innerText) + 1;
            if(changeNum <= parseInt(userNum.innerText)) addNum.textContent = String(changeNum);   
        }
    });

    $('#auctionAddPrev').click(function () {
        let addNum = document.getElementById('auctionAddNum');

        if (Number(addNum.innerText) != 0) {
            //Уменьшить число Выставить на аукцион (0)
            let changeNum = Number(addNum.innerText) - 1;
            addNum.textContent = String(changeNum);
        }
    });

    //Вернуть с аукциона (1), увеличить/уменьшить
    $('#auctionReturnNext').click(function () {
        let returnNum = document.getElementById('auctionReturnNum');
        let auctionNum = document.getElementById('auctionStickNum');

        if (parseInt(auctionNum.innerText) > 0) {
            //Увеличить число Вернуть с аукциона (0)
            let changeNum = Number(returnNum.innerText) + 1;
            if(changeNum <= parseInt(auctionNum.innerText)) returnNum.textContent = String(changeNum);
        }
    });

    $('#auctionReturnPrev').click(function () {
        let returnNum = document.getElementById('auctionReturnNum');

        if (Number(returnNum.innerText) != 0) {
            //Уменьшить число Вернуть с аукциона  (0)
            let changeNum = Number(returnNum.innerText) - 1;
            returnNum.textContent = String(changeNum);
        }
    });
});