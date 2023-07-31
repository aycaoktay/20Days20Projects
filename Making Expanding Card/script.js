const panels = document.querySelectorAll(".panel");
// ".panel" sınıfına sahip tüm öğeleri bir NodeList olarak "panels" değişkenine atayalım

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});


//"panels" NodeList'i üzerinde forEach döngüsü kullanarak her bir öğeden "active" sınıfını kaldıralım
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
