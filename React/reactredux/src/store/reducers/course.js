const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                {id: 1, title: "Primeira Aula"},
                {id: 2, title: "Segunda Aula"}
            ]
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                {id: 3, title: "Terceira Aula"},
                {id: 4, title: "Quarta Aula"}
            ]
        }
    ]
}

// Funçao que cria o estado inicial da aplicaçao
export default function course(state = INITIAL_STATE, action){
    console.log('State: ', state);
    console.log("Action:", action);

    if(action.type === "TOGGLE_LESSON"){
        return({
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        });
    };
    return (
        state
    );
}