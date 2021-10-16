import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';

const App = function(){
    return(
        <>
        <ApprovalCard>
        <CommentDetail name = {'Honey'} comment = {'Nice blog post'} time = {'@ 7:30pm'} avatar = {faker.image.avatar()}/></ApprovalCard>
       <ApprovalCard> <CommentDetail name = {'sunny'} comment = {'Wonderful post.keep it up!'} time = {'@ 8:00pm'} avatar = {faker.image.avatar()}/></ApprovalCard>
       <ApprovalCard><CommentDetail name = {'lovely'} comment = {'Good Job.'}  time = {'@ 5:15pm'} avatar = {faker.image.avatar()}/></ApprovalCard>
       </>
    );
}
ReactDOM.render(<App/>,document.querySelector('#root'));