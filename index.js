var i = 0;
var txt = '-A (future) software engineer'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */
const faders = document.querySelectorAll(".fadeIn");

const scrollops={
  threshold:1
}

const scroll= new IntersectionObserver(function(entries,scroll){
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("appear");
      scroll.unobserve(entry.target);
    }
  })
},scrollops);

faders.forEach(fader =>{
  console.log(fader);
  scroll.observe(fader);
})

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("temp").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
