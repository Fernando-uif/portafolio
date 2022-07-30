window.addEventListener("scroll", () => {
  const element: HTMLDivElement =
    document.querySelector(".tecnologies__cards") || document.createElement("div");
  const position = element.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  if(position < tamanioPantalla){
    element.classList.add( "tecnologies__fade_in");
    element.classList.remove( "tecnologies__fade_out");
  }else{
        element.classList.remove( "tecnologies__fade_in");
        element.classList.add( "tecnologies__fade_out");
    }
});