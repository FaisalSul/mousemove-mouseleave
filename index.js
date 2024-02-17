var rectCenter = document.querySelector('.center');

rectCenter.addEventListener('mousemove', (details)=>{
    var rectLocation = rectCenter.getBoundingClientRect();
    var insideRect =  details.clientX - rectLocation.left;
    
    if(insideRect < rectLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 66, insideRect);
        gsap.to(rectCenter, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });


    }else if(insideRect === rectLocation.width/2){
        var greenColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 255, 66, insideRect);
        gsap.to(rectCenter, {
            backgroundColor: `rgb(0, ${greenColor}, 0)`,
            ease: Power4,
        });

    }else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 66, 255, insideRect);
        gsap.to(rectCenter, {
            backgroundColor: `rgb(0, 0, ${blueColor}`,
            ease: Power4,
        });
    }
});

rectCenter.addEventListener('mouseleave', ()=>{
    gsap.to(rectCenter, {
        backgroundColor: 'whitesmoke',
    })
})

