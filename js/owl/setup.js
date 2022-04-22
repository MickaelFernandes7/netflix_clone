// efeito de animação do carousel do Jquery
$('.owl-carousel').owlCarousel({
    // se o loop for true, podera fazer um scroll sempre
    loop: true,
    // sepração entre os itens
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})