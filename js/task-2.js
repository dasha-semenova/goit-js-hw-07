const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

let ulContainer = document.querySelector(".gallery");

if (!ulContainer) {
  console.warn("Элемент с классом .gallery в DOM не найден!");

  ulContainer = document.createElement("ul");
  ulContainer.classList.add("gallery");

  const divContainer = document.querySelector(".container");
  divContainer.append(ulContainer);

  console.log("Элемент с классом .gallery в DOM создан!");
} 

const liElements = images.map((element) => {
  const liContainer = document.createElement("li");
  liContainer.classList.add("gallery-item-li");

  const imgElement = document.createElement("img");
  imgElement.src = element.url;
  imgElement.alt = element.alt;
  imgElement.classList.add("gallery-item");
  imgElement.loading = "lazy";

  liContainer.append(imgElement);

  return liContainer;
})

ulContainer.append(...liElements);

// const ulContainer = document.querySelector(".gallery");

// const imgElement = images.forEach(element => {  
//   const liContainer = document.createElement("li");
//   liContainer.classList.add("gallery-item-li");

//   const imgElement = document.createElement("img");
//   imgElement.src = element.url;
//   imgElement.alt = element.alt;
//   imgElement.classList.add("gallery-item");
  
//   liContainer.appendChild(imgElement);
//   ulContainer.appendChild(liContainer);
// });



