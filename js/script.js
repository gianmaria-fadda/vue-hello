const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Hello Vue!',
                imageSrc: './img/ronaldo-cristiano-2017-real-madrid-ballon-d-or-2016-0026751808hjpg-1698686328-120749.jpg'
            }
        }
    })
    .mount('#app')