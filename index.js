window.addEventListener('load', ()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394",
        "#d36060",
        "#c737a3",
        "rgb(40, 40, 180)",
        "rgb(164, 189, 24)",
        "rgb(95, 24, 187)"
    ];

    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            if(Math.floor(Math.random()*6)!=index){
                document.body.style.backgroundColor=colors[Math.floor(Math.random()*6)];
            }
            
            createBubble(index);
        });
    });

    const createBubble=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);

        bubble.style.backgroundColor=colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    }
});