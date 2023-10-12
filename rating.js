const form = document.querySelector("#rating-form");
const radioBtns = document.querySelectorAll("input[type='radio']");
let rating = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            rating = radioBtn.value;
        }
    }        

    if (rating !== "") { 
        clearPage();
        showThankyou(rating);
    }
    
});

function clearPage() {
    const main = document.querySelector("main");
    main.innerHTML = "";
}

function showThankyou(rating) {            
    const main = document.querySelector("main");
    const container = document.createElement("div");
    const image = document.createElement("img");
    const output = document.createElement("p");
    const heading = document.createElement("h1");
    const para = document.createElement("p");

    main.setAttribute("aria-live", "assertive")
    container.setAttribute("class", "rating-component thankyou");
    image.setAttribute("src", "./images/illustration-thank-you.svg");
    image.setAttribute("alt", "");
    output.setAttribute("class", "output");
    output.textContent = `You selected ${rating} out of 5`;
    heading.textContent = "Thank you!";
    para.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

    main.append(container);
    container.append(image);
    container.append(output);
    container.append(heading);
    container.append(para);
}