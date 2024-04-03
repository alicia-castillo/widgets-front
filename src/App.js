import React from 'react'
import './App.css'
import Stack from '@mui/material/Stack'
import { Routes, Route } from "react-router-dom";
import WidgetList from './components/WidgetList';
import { useWidget } from './hooks/useWidgets';
import WidgetAdd from './components/WidgetAdd';
import WidgetEdit from './components/WidgetEdit';

const App = () => {

  const {widgets, handleDeleteWidget, handleNewWidget, handleEditWidget, handleSearchWidget, getAllWidgets} = useWidget();

  return (<Stack>
    <Routes>
    <Route path="/" element={<WidgetList widgets={widgets} onDeleteWidget={handleDeleteWidget} onSearchWidget={handleSearchWidget} onGetAll={getAllWidgets} />} />
    <Route path="/AddWidget" element={<WidgetAdd onNewWidget={handleNewWidget}/>} />
    <Route path="/EditWidget/:widget" element={<WidgetEdit onEditWidget={handleEditWidget}/>} />
    </Routes>
  </Stack>)
}

export default App
