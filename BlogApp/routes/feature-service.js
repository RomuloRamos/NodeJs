const LocalFeatures = [
    {
        name:"POPCORN_CAPABILITY",
        pretty_name:"Fazedor de pipopca oficial",
        descriptio:"Este usuário pode fazer pipoca",
    },
    {
        name:"COFFEBREAK_REQUEST",
        pretty_name:"Requerer coffe break para eventos",
        descriptio:"Este usuário pode emitir requisições de coffe-break",
    },
    {
        name:"BREAK_TO_SMOKE",
        pretty_name:"Sair para fumar",
        descriptio:"Este usuário pode parar suas atividades para fumar",
    },
    // {
    //     name:"POP_CORN_CAPABILITY",
    //     pretty_name:"Fazedor de pipopca oficial",
    //     descriptio:"Este usuário pode fazer pipoca",
    // },
    // {
    //     name:"POP_CORN_CAPABILITY",
    //     pretty_name:"Fazedor de pipopca oficial",
    //     descriptio:"Este usuário pode fazer pipoca",
    // }
];

module.exports = {
    getAll: function() {
        let features = LocalFeatures;

        return features;
    },
}