// Would be cool to use but had a hard time syncing it with my table instead of week picker using date picker
// Mabye later I could use this to view table week of meals but not store it use it like a button

const dateReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATE':
            return action.payload;
        default:
            return state;
    }
};


export default dateReducer;