function feedCaterpillar(fruitName, parentElement) {
    const span = document.createElement('span');
    span.classList.add('part', fruitName);

    parentElement.appendChild(span);
    return parentElement.innerHTML;
}

export default feedCaterpillar;