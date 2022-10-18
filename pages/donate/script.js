const prices = document.querySelectorAll('.price');
const amountValue = document.querySelector('.amount-value');

const choosePrice = function(i) {

    prices.forEach( price => {

        price.querySelector('.circle-outer').style.border = 'none';
        price.querySelector('.circle-inner').style.border = 'none';
        price.querySelector('.donation-value').style.color = '#333B41';
        price.querySelector('.donation-value').classList.remove('dollar-orange-icon');

    });

    prices[i].querySelector('.circle-outer').style.border = '1px solid #FE9013';
    prices[i].querySelector('.circle-inner').style.border = '1px solid #FE9013';
    prices[i].querySelector('.donation-value').style.color = '#FE9013';
    prices[i].querySelector('.donation-value').classList.add('dollar-orange-icon');

}

prices.forEach((price, i, prices) => {

    price.addEventListener('click', () => {

        choosePrice(i);

        amountValue.value = price.querySelector('.donation-value').textContent;
    })

    if (price.querySelector('.donation-value').textContent === amountValue.value) {

        choosePrice(i);

    }

});

amountValue.oninput = () => {

    if (amountValue.value.length > 4) amountValue.value = amountValue.value.slice (0,4);

    amountValue.value = amountValue.value.replace(/[e,+,-]/g, '');

    prices.forEach((price, i, prices) => {

        if (price.querySelector('.donation-value').textContent == amountValue.value) choosePrice(i);

        if (price.querySelector('.donation-value').textContent != amountValue.value || amountValue.value.length == 0) {

                price.querySelector('.circle-outer').style.border = 'none';
                price.querySelector('.circle-inner').style.border = 'none';
                price.querySelector('.donation-value').style.color = '#333B41';
                price.querySelector('.donation-value').classList.remove('dollar-orange-icon');

        }

    })
}