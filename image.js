let fileUpload = document.querySelector("#imgUp");
let validImgExt = ["jpeg", "jpg", "png", "gif", "tiff"];
fileUpload.addEventListener("change", function () {
    let imgSrc = fileUpload.value;
    let arrExt = imgSrc.split(".");
    let ext = arrExt[arrExt.length - 1];
    console.log(ext);
    if (validImgExt.includes(ext)) {
        stickyElem = document.createElement("div");
        stickyElem.innerHTML = `<div class="sticky-header" id="note${elemid}header">
                                <i class="fas fa-minus" id="minus${elemid}"></i>
                                <i class="fas fa-times" id="plus${elemid}"></i>
                            </div>
                            <div class="sticky-body" contenteditable="true">
                                <img src="${imgSrc}" />
                            </div>`;
        stickyElem.classList.add("sticky-note");
        stickyElem.setAttribute("id", `note${elemid}`);
        stickyBoard.appendChild(stickyElem);
        notes.push(stickyElem);

        elemid++;

        for (let i = 0; i < notes.length; i++) {
            dragElement(notes[i]);
        }

        deleteBtn = document.querySelectorAll(".fa-times");
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener("click", deleteSticky);
        }

        minBtn = document.querySelectorAll(".fa-minus");
        for (let i = 0; i < minBtn.length; i++) {
            minBtn[i].addEventListener("click", minSticky);
        }
    } else {
        alert("Image File not Valid");
    }
});
