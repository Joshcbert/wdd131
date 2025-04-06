//meljen.js

import packages from "./packages.mjs";

const postContainer = document.querySelector('#packages');

packages.forEach(package_deats => {
	const newPackage = document.createElement('div',);
    newPackage.classList.add('package-card')

	newPackage.innerHTML = `
                    <div class="package-main">
                        <h2>${package_deats.title}</h2>
                        <h3>${package_deats.subtitle}</h3>
                        <img src="${package_deats.image}" alt="${package_deats.alt_text}" width="400" height="400">
                    </div>
            
                    <div class="package-info">
                        <h3>${package_deats.price}</h3>
                        <p>${package_deats.coverage_time}</p>
                        <p>${package_deats.coverage_details}</p>
                        <p>${package_deats.video_details}</p>
                    </div>`;

	postContainer.appendChild(newPackage);

})

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("reception");
    const receptionItems = document.querySelectorAll(".item_reception");

    checkbox.addEventListener("change", function () {
      receptionItems.forEach(item => {
        if (checkbox.checked) {
          item.style.display = "none";
          item.setAttribute("aria-hidden", "true");
        } else {
          item.style.display = "block";
          item.setAttribute("aria-hidden", "false");
        }
      });
    });
  });
