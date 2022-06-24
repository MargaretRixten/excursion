const smart = [{
        'letter': 'S',
        'decoding': 'specific',
        'translation': 'Конкретная цель',
        'img': 'img/smart/S.png',
    },
    {
        'letter': 'M',
        'decoding': 'measurable',
        'translation': 'Критерии успеха',
        'img': 'img/smart/M.png',
    },
    {
        'letter': 'A',
        'decoding': 'achievable',
        'translation': 'Достижимая цель',
        'img': 'img/smart/A.png',
    },
    {
        'letter': 'R',
        'decoding': 'relevant',
        'translation': 'Цель, имеющая значение',
        'img': 'img/smart/R.png',
    },
    {
        'letter': 'T',
        'decoding': 'time bound',
        'translation': 'Четкие сроки',
        'img': 'img/smart/T.png',
    },
];

const smartList = document.querySelector('.smart-approach__list'),
      smartItem = document.querySelector('.smart-approach__item');


smart.map((item, index) => {
    smartList.innerHTML += `
        <li style="background: url('${item.img}') top center no-repeat" class="smart-approach__item">
            <p class="description smart-approach__decoding">${item.decoding}</p>
            <p class="subtitle smart-approach__translation">${item.translation}</p>
        </li>
    `;
})
