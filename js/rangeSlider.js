//Слайдер цены
const rangeInput = document.querySelectorAll('.range-slider__range-input input');
const progress = document.querySelector(".range-slider__slider .range-slider__progress");
const priceInput = document.querySelectorAll('.range-slider__block input');

//минимальный диапазон между значениями
let priceGap = 1;

//Инпуты минимальная - максимальная цена
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className.indexOf("range-slider__input-min") != -1) {
                rangeInput[0].value = minPrice;
                progress.style.left = ((minPrice / rangeInput[0].max) * 100) + '%';
            } else {
                rangeInput[1].value = maxPrice;
                progress.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
            }
        }
    });
});

//Диапазон - кружки
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className.indexOf("range-slider__min") != -1) {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
    });
});

var allCheckBox = document.querySelectorAll('.price__checkbox-block input');
var inputField = document.querySelectorAll('.range-slider__field input');
var inputRange = document.querySelectorAll('.range-slider__range-input input');

allCheckBox.forEach(checkBox => {
    checkBox.addEventListener('change', function () {
        if (checkBox.checked == true) {
            inputField.forEach(input => {
                input.readOnly = true;
                input.style.color = 'grey';
                input.previousElementSibling.style.color = 'grey';
            });

            inputRange.forEach(input => {
                input.readOnly = true;
                input.style.display = 'none';
            });

        } else if (checkBox.checked == false) {
            var checkedCount = 0;

            for (let i = 0; i < allCheckBox.length; i++) {
                if (allCheckBox[i].checked == false) checkedCount += 1;
            }

            if (checkedCount == allCheckBox.length) {
                inputField.forEach(input => {
                    input.readOnly = false;
                    input.style.color = 'white';
                    input.previousElementSibling.style.color = 'white';
                });

                inputRange.forEach(input => {
                    input.readOnly = false;
                    input.style.display = 'block';
                });
            } else {
                inputField.forEach(input => {
                    input.readOnly = true;
                    input.style.color = 'grey';
                    input.previousElementSibling.style.color = 'grey';
                });

                inputRange.forEach(input => {
                    input.readOnly = true;
                    input.style.display = 'none';
                });
            }
        }

    });
});