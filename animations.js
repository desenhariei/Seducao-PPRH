document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in, .animate-slide-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para a animação ocorrer apenas uma vez
            }
        });
    }, { threshold: 0.1 }); // A animação será ativada quando 10% do elemento estiver visível

    animatedElements.forEach(element => {
        // Inicializa os elementos escondidos antes de observar
        // Isso garante que a animação ocorra na primeira vez também
        element.classList.remove('is-visible'); // Garante que a animação inicie do estado inicial
        observer.observe(element);
    });
});