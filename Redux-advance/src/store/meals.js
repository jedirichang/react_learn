const { createSlice } = require("@reduxjs/toolkit");

const initialMealState = {
    items: [
        {
            id: 1,
            name: 'Meal 1',
            description: 'Description for meal 1',
            price: 29.88
        },
        {
            id: 2,
            name: 'Meal 2',
            description: 'Description for meal 2',
            price: 30.88
        },
        {
            id: 3,
            name: 'Meal 3',
            description: 'Description for meal 3',
            price: 25
        },
        {
            id: 4,
            name: 'Meal 4',
            description: 'Description for meal 4',
            price: 28
        },
        {
            id: 5,
            name: 'Meal 5',
            description: 'Description for meal 5',
            price: 12
        },
    ],
}
const mealSlice = createSlice({
    initialState: initialMealState,
    name: 'meals',
    reducers: {}
});

export default mealSlice.reducer;