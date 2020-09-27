import React from 'react';
import {connect} from 'react-redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({modules, dispatch}) =>{
    return(    
        <aside>
            {
                modules.map((module) => {
                        return(
                            <div key={module.id}>
                                <strong>{module.title}</strong>
                                <ul>
                                    {   
                                        module.lessons.map((lesson)=>{
                                            return (
                                                <li key={lesson.id}>
                                                    {lesson.title}
                                                    <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>Selecionar</button>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                })
            }
        </aside>                
    );
}
//Aqui, ele está chamando a funçao Sidebar, passando como argumento o objeto modules do objeto state, atribuindo a variavel modules (nome que Sidebar espera receber)
export default connect((state) => ({modules:state.course.modules}))(Sidebar);