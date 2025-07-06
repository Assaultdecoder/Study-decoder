window.onload = function () {
  showPopup();
  loadBatches();
};

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function loadBatches() {
  const container = document.getElementById("batchContainer");

  Object.keys(DATA).forEach(batch => {
    const bDiv = document.createElement("div");
    bDiv.innerHTML = `<h2>${batch}</h2>`;
    
    Object.keys(DATA[batch]).forEach(subject => {
      const sDiv = document.createElement("div");
      sDiv.innerHTML = `<h3>➤ ${subject}</h3>`;

      DATA[batch][subject].forEach(lecture => {
        const lDiv = document.createElement("div");
        lDiv.innerHTML = `
          <p><strong>${lecture.title}</strong></p>
          <iframe width="100%" height="315" src="${lecture.url}" frameborder="0" allowfullscreen></iframe>
        `;
        sDiv.appendChild(lDiv);
      });

      bDiv.appendChild(sDiv);
    });

    container.appendChild(bDiv);
  });
}
