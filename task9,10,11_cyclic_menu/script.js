function initialization() {
    function findCurrentElement(currentSelectedElement) {
        for (let index = 0; index < menuElements.length; index++) {
            if (menuElements[index] == currentSelectedElement) {
                return index;
            }
        }

        return -1;
    }

    function calculateNewSelectedElementIndex(keyCode, currentSelectedElementIndex, numberOfMenuElements) {
        if (keyCode == 37) {
            return (currentSelectedElementIndex - 1 + numberOfMenuElements) % numberOfMenuElements;
        }
        if (keyCode == 39) {
            return (currentSelectedElementIndex + 1) % numberOfMenuElements;
         }
    }

    function onKeyUp(event) {
        if (event.keyCode != 37 && event.keyCode != 39) {
            return;
        }

        let currentSelectedElement = document.body.querySelector(".selected");
        let currentSelectedElementIndex = findCurrentElement(currentSelectedElement);
        let numberOfMenuElements = menuElements.length;
        let newSelectedElementIndex =
            calculateNewSelectedElementIndex(event.keyCode, currentSelectedElementIndex, numberOfMenuElements);

        currentSelectedElement.classList.toggle("selected");
        let newSelectedElement = menuElements[newSelectedElementIndex];
        newSelectedElement.classList.toggle("selected");
    }

    let menuElements;
    let div = document.createElement("div");
    document.body.appendChild(div);

    for (let index = 0; index < 5; index++) {
        let item = document.createElement("span");
        item.innerText = index;
        div.appendChild(item);
    }

    menuElements = div.children;
    menuElements[0].classList.toggle("selected", true)

    document.body.addEventListener("keydown", onKeyUp);
}

initialization();