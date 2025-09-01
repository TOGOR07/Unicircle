document.addEventListener('DOMContentLoaded', function() {
    const brandName = document.querySelector('.brand-name');
    if (!brandName) {
        return;
    }

    const brandNameWidth = brandName.offsetWidth;
    brandName.style.width = brandNameWidth + 'px';

    const originalText = brandName.textContent;
    const chars = '!<>-_\/[]{}—=+*^?#________';

    let interval = null;

    brandName.addEventListener('mouseover', () => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            brandName.textContent = originalText.split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if(iteration >= originalText.length){
                clearInterval(interval);
                brandName.textContent = originalText;
            }

            iteration += 1 / 3;
        }, 30);
    });

    brandName.addEventListener('mouseleave', () => {
        clearInterval(interval);
        brandName.textContent = originalText;
    });
});