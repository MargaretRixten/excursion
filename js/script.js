const smart = [{
        'letter': 'S',
        'decoding': 'specific',
        'translation': 'Конкретная цель',
    },
    {
        'letter': 'M',
        'decoding': 'measurable',
        'translation': 'Критерии успеха',
    },
    {
        'letter': 'A',
        'decoding': 'achievable',
        'translation': 'Достижимая цель',
    },
    {
        'letter': 'R',
        'decoding': 'relevant',
        'translation': 'Цель, имеющая значение',
    },
    {
        'letter': 'T',
        'decoding': 'time bound',
        'translation': 'Четкие сроки',
    },
];

console.log(smart);

const smartList = document.querySelector('.smart-approach__list'),
      smartListBefore = document.querySelector('.smart-approach__item:before');


smart.map((item, index) => {
    smartList.innerHTML += `
        <li class="smart-approach__item">
            <p class="description smart-approach__decoding">${item.decoding}</p>
            <p class="subtitle smart-approach__translation">${item.translation}</p>
        </li>
    `
})

console.log(document.querySelector('.smart-approach__item'));