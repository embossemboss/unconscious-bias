define(['questAPI'], function (Quest) {
    var API = new Quest();

    API.addQuestionsSet('basicSelect', {
        type: 'selectOne',
        style: 'multiButtons',
        errorMsg: { required: "Please select an answer, or click 'decline to answer'" },
        answers: ['まったくそう思わない', 'そう思わない', 'そう思う', '非常にそう思う']
    });

    API.addQuestionsSet('item', [
        {inherit : 'basicSelect', name:'item1', stem : '全体的に、私は自分自身に満足しています。'},
        {inherit : 'basicSelect', name:'item2', stem : '時々、私は全然ダメだと考えます。'},
        {inherit : 'basicSelect', name:'item3', stem : '私にはたくさんの良い資質があると感じています。'},
        {inherit : 'basicSelect', name:'item4', stem : '私は他のほとんどの人と同じように物事を行うことができます。'},
        {inherit : 'basicSelect', name:'item5', stem : '私には誇りに思うことはあまりない気がします。'},
        {inherit : 'basicSelect', name:'item6', stem : '私は確かに時々役に立たないと感じます。'},
        {inherit : 'basicSelect', name:'item7', stem : 'もっと自分を尊敬できたらいいのにと思います。'},
        {inherit : 'basicSelect', name:'item8', stem : '全体として、私は自分が失敗だと感じがちです。'},
        {inherit : 'basicSelect', name:'item9', stem : '私は自分に対して前向きな姿勢をとっています。'},
        {inherit : 'basicSelect', name:'item10', stem : "私は、少なくとも他の人と同様に、価値のある人だと感じています。"}
    ]);

    API.addSequence([
        {
            mixer: 'repeat',
            times: 10,
            data: [
                {
                    progressBar: '<%= pagesMeta.number %> out of 10',
                    questions: { inherit: { set: 'item' } }
                }
            ]
        }
    ]);

    return API.script;
});
