function getCSS() {
    let element_id = document.getElementById("element");
    let margin = document.getElementById("margin");
    let padding = document.getElementById("padding")
    let font_size = document.getElementById("font-size")
    let font_family = document.getElementById("font-family")
    let color = document.getElementById("color")
    let backgroundColor = document.getElementById("background-color")
    let p = prompt("Enter the tag name (e.g., 'h1', 'p', 'div', etc.):");
    if (p == "") {
        alert("blank")
        return
    }
    let tag = document.createElement(p);
    document.body.appendChild(tag);

    let element = document.querySelector(p);

    let computedStyle = window.getComputedStyle(element);
    console.log("Computed style:", computedStyle);

    let color_val = computedStyle.color;
    let fontSize = computedStyle.fontSize;
    let backgroundColor_val = computedStyle.backgroundColor;
    let fontFamily_val = computedStyle.fontFamily;
    let margin_val = computedStyle.margin;
    let padding_val = computedStyle.padding;

    element_id.innerText = "Element: " + tag.outerHTML;
    margin.innerText = "Margin: " + margin_val;
    padding.innerText = "Padding: " + padding_val;
    font_size.innerText = "Font Size: " + fontSize;
    font_family.innerText = "Font Family: " + fontFamily_val;
    color.innerText = "Color: " + color_val;
    backgroundColor.innerText = "Background Color: " + backgroundColor_val;
}

window.addEventListener("load", function () {
    getCSS();
});