let count = 1
const theForm = document.querySelector("#registrationForm");

import { submitForm, participantTemplate } from "./Templates.mjs";

document.querySelector("#add").addEventListener("click", () => { 
    count++;
    participantTemplate(count);
})

theForm.addEventListener("submit",submitForm);
 
