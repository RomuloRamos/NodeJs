import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker';


const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Last weekend at 4:45PM"
                    content="Nice blog"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Daniel"
                    timeAgo="Yesterday at 4:45PM"
                    content="A very sheet"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Susan"
                    timeAgo="Today at 4:45PM"
                    content="Go out Bolsonaro"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Adamastor"
                    timeAgo="Tomorrow at 4:45PM"
                    content="Go to Cuba"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <p>WARNING!</p>
                    This is other exemplo about to how reuse the components
                </div>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));