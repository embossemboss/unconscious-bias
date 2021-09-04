define(['timeAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat8.js'], function (APIConstructor, iatExtension) {
    var API = new APIConstructor();

    return iatExtension({
        category1: {
            name: 'Black people', //Will appear in the data.
            title: {
                media: { word: 'Black people' }, //Name of the category presented in the task.
                css: { color: '#31940F', 'font-size': '2em' }, //Style of the category title.
                height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
                { image: 'black1.jpg' },
                { image: 'black2.jpg' },
                { image: 'black3.jpg' },
                { image: 'black4.jpg' },
                { image: 'black5.jpg' },
                { image: 'black6.jpg' }
            ],
            //Stimulus css (style)
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
        },
        category2: {
            name: 'White people', //Will appear in the data.
            title: {
                media: { word: 'White people' }, //Name of the category presented in the task.
                css: { color: '#31940F', 'font-size': '2em' }, //Style of the category title.
                height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
                { image: 'yf1.jpg' },
                { image: 'yf4.jpg' },
                { image: 'yf5.jpg' },
                { image: 'ym2.jpg' },
                { image: 'ym3.jpg' },
                { image: 'ym5.jpg' }],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
        },

        attribute2:
        {
            name: 'Good words',
            title: {
                media: { word: 'Good words' },
                css: { color: '#0000FF', 'font-size': '1.8em' },
                height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
                { word: '笑顔' },
                { word: '楽しい' },
                { word: 'すばらしい' },
                { word: '楽しい' },
                { word: '素晴らしい' },
                { word: '平和' },
                { word: '栄光' },
                { word: '愛' }
            ],
            //Stimulus css
            stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
        },
        attribute1:
        {
            name: 'Bad words',
            title: {
                media: { word: 'Bad words' },
                css: { color: '#0000FF', 'font-size': '1.8em' },
                height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
                { word: 'ひどい' },
                { word: '失敗' },
                { word: '苦しみ' },
                { word: '傷' },
                { word: '最悪' },
                { word: 'ひどい' },
                { word: '汚い' },
                { word: '悪' }
            ],
            //Stimulus css
            stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
        },

        base_url: {//Where are your images at?
            image: 'https://baranan.github.io/minno-tasks/images/'
        }
    });
});
