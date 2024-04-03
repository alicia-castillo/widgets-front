
export const widgetReducer = (initialState, action) => {


    switch (action.type) {
        case '[WIDGET] Fetch success':
            return action.payload;

        case 'Error fetching widgets useffect':
            return [];

        case '[WIDGET] Add Widget':
            alert("widget added");
            return [...initialState, action.payload]

        case '[WIDGET] Add Widget Error':
            alert("error adding widget");
            return;

        case '[WIDGET] Delete Widget':
            alert("widget " + action.payload + " eliminado");
            return initialState.filter(widget => widget.name !== action.payload);

        case '[WIDGET] Delete Widget Error':
            alert("error deleting widget");
            return;

        case '[WIDGET] Edit Widget':
            alert("widget " + action.payload.name + " has been edited");

            return initialState.map((widget) => {
                if (widget.name === action.payload.name) widget = action.payload
                return widget;
            })

        case '[WIDGET] Edit Widget Error':
            alert("widget " + action.payload + " could not be edited");
            return;

        case '[WIDGET] Get By ID':
            return initialState.filter(widget => widget.name === action.payload.name);

        case '[WIDGET] Get By ID Error':
            alert("Error getting Widget");
            return initialState;

        default:
            return initialState;
    }
}