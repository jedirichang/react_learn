const { createSlice, current } = require("@reduxjs/toolkit");
const initialCartState = {
    items: []
}
const cartSlice = createSlice({
    initialState: initialCartState,
    name: 'cart',
    reducers: {
        addItem(state, action) {
            debugger;
            const items = JSON.parse(JSON.stringify(current(state).items));
            const itemIndex = items.findIndex(item => item.id === action.payload.id);
            if (items[itemIndex]) {
                const item = items[itemIndex];
                item.totalAmount = action.payload.price;
                item.quantity += 1;
                state.items = items;
                return;
            }
            state.items.push({
                totalAmount: action.payload.price,
                quantity: 1,
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price
            });
        },
        removeItem(state, action) {
            const items = JSON.parse(JSON.stringify(current(state).items));
            const itemIndex = items.findIndex(item => item.id === action.payload.id);
            if (items[itemIndex]) {
                const item = items[itemIndex];
                if (item.quantity === 1) {
                    items.splice(itemIndex, 1);
                }
                else {
                    item.quantity -= 1;
                }
            }
            state.items = items;
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;