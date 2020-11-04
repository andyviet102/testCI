function randomNumberFromAToB(a, b) {
    let randomNumber = Math.floor(Math.random() * (b - a));
    return randomNumber + a;
}
let maxInput = 3;
let typeWrong = false;
let numberType = document.getElementById(`number`);
let spinBtn = document.getElementById(`spin_btn`);
spinBtn.onclick = () => {
    let randomNumber = Number(numberType.value);
    if (randomNumber > 10 || randomNumber < 1) {
        alert(`Bạn đã nhập sai, vui lòng nhập lại`);
        typeWrong = true;
    }
    if (!typeWrong) {
        let proRandomNumber = randomNumberFromAToB(1, 10);
        if (randomNumber == proRandomNumber) {
            alert(`LUCKY NUMBER :))): ${proRandomNumber}`);
            maxInput = 3;
        } else {
            alert(`Bạn đã đoán sai, số đúng là: ${proRandomNumber}`);
            maxInput--;

            alert(`Số lần quay còn lại là: ${maxInput}`);
            check();
        }
    }
    numberType.value = ``;
}

function check() {
    if (maxInput < 1) {
        alert(`Bạn đã hết 3 lần quay`);
        maxInput = 3;
        return;
    }
}