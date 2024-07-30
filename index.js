gsap.registerPlugin(ScrollTrigger);

if(typeof gsap === "undefined")
{
    console.error("it didnt work");
}
else
{
    console.log("its working");
}

function startLoader(){
    let counter = document.querySelector(".counter");
    let currVal = 0;

    function updateCounter()
    {
        if(currVal === 100)
        {
            return;
        }
        
        currVal += Math.floor(Math.random() * 10) + 1;

        if(currVal > 100)
        {
            currVal = 100;
        }
        counter.textContent = currVal;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}

startLoader();

gsap.to(".counter",{delay: 3.5, opacity: 0, duration: 0.25});

gsap.to(".bar", 1.5 ,{ delay: 3.5, height: 0,
    stagger: { amount: 0.5,},
    ease: "power4.inOut",
});

gsap.from(".h1", 1.5, {delay: 4, y:700, 
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut"
})
gsap.from(".hero", 2, {
    delay: 4.5,
    y: 400,
    ease: "power4.inOut",
})