import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Pages/Lading';
import TeacherList from './Pages/TeacherList';
import TeacherForm from './Pages/TeacherForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}