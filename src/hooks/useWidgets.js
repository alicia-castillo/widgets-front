import { widgetReducer } from "../widgetReducer";
import { useReducer, useEffect } from "react";
import { fetchAllWidgets, DeleteWidget, addNewWidget, editWidget, getById } from '../lib/apiConnect';


const initialState = [];

export const useWidget = () => {

    const [widgets, dispatch] = useReducer(widgetReducer, initialState);

    useEffect(() => {
        getAllWidgets();
    }, [])
    
    const getAllWidgets = ()=>{
        fetchAllWidgets()
      .then((resp)=>{
        dispatch({
            type: '[WIDGET] Fetch success',
            payload: resp
        });
      })
      .catch((error) => {
        dispatch({
            type: '[WIDGET] Fetch error'
        });
    
    })
    }

    const handleNewWidget = (widget)=>{
        addNewWidget(widget).then((resp)=>{
            if(!resp) {
                alert("there's already a widget with that ID");
                return;
            }
            dispatch({
                type: '[WIDGET] Add Widget',
                payload: resp
            });

        }).catch((error) => {
            dispatch({
                type: '[WIDGET] Add Widget Error'
            });
        
        });
    }

    const handleDeleteWidget = (name) =>{
        DeleteWidget(name).then((resp)=>{
         dispatch({
            type: '[WIDGET] Delete Widget',
            payload: name
        });
        }).catch((error) => {
            alert('Error deleting widgets');
            dispatch({
                type: '[WIDGET] Delete Widget Error'
            });
        
        })
        }

    

    const handleEditWidget = (widget, name)=>{
        editWidget(name, widget).then((resp)=>{
            dispatch({
                type: '[WIDGET] Edit Widget',
                payload: resp
            });
        }).catch((error)=>{
            dispatch({
                type: '[WIDGET] Edit Widget Error'
            })
        });
    }

    const handleSearchWidget = (name) =>{
        getById(name).then((resp)=>{
            dispatch({
                type: '[WIDGET] Get By ID',
                payload: resp
            });
        }).catch(()=>{
            dispatch({
                type: '[WIDGET] Get By ID Error'
            })
        });

    }

  return {
    widgets,
    handleDeleteWidget,
    handleEditWidget,
    handleNewWidget,
    handleSearchWidget,
    getAllWidgets
  }
}
