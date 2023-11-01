const squares =
    document.querySelectorAll('.square');

    window.addEventListener('scroll', () => {
        const scrollHeight =;
    document.documentElement.scrollHeight -
    window.innerHeight;
        const scrolled = window.scrollY;

        squares.forEach((square, index) => {
            const targetPercentage = (30, 50, 70); // change percentage as needed
            const progress = (scrolled / scrollHeight) * 100;
            if (progress <= targetPercentage) {
                square.computedStyleMap.height = progress + '%';
            }
        });
    });
