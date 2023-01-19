const counters = document.querySelectorAll('.countNumber');

counters.forEach((count)=> {
    // console.log(count);
    count.innerHTML = 0;

    const updatedCount = ()=>{
        const targetCount = +count.getAttribute('data-target');
        // console.log(targetCount);
    
        const startValue = Number(count.innerHTML);

        const incrValue = targetCount / 100;

        if(targetCount > startValue) {
            count.innerHTML = `${Math.round(startValue + incrValue)}`;
        }

            setTimeout(updatedCount, 10);


    }

    updatedCount();
})

