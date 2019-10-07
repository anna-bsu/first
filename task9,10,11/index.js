import createAutoComplete from '../task4,5/index.js';

const WORDS = [
    'sanya',
    'annya',
    'sanyaaaaaa',
    'Annyyaaa',
    'sanyyyyyaaaaaa',
    'человек дядюк :D',
    'женщина дядюда :)',
];

const autocomplete = createAutoComplete(WORDS);

const body = document.getElementsByTagName('body')[0];
const main = document.createElement('main');
const ul = document.createElement('ul');

const input = document.createElement('input');
input.setAttribute('type', 'text');

body.appendChild(main);
main.appendChild(input);
main.appendChild(ul);

input.addEventListener('input', ({ target }) => {
    const word = target.value;
    const predictions = autocomplete(word);
    const fragment = document.createDocumentFragment();

    ul.innerHTML = '';

    predictions.forEach(prediction => {
        const li = document.createElement('li');

        li.innerText = prediction;

        fragment.appendChild(li);
    });

    ul.appendChild(fragment);
});
