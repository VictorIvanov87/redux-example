1. run `npm install`
2. run `npm start`
3. have fun!

Hints:
1. Create a `counter.js` file in store folder
2. Inside this file, create the counter slice, similar to the auth slice
3. Don't forget to export reducer and actions at the end of the file, you will need them.
4. Add the counter slice in the store (store/index.js)
5. In `Counter` component we need to dispatch the apropiate actions when we click on buttons. Use `Auth` and `Header` components for reference if needed.
6. Get the data from redux store in `Counter` component (you can try to get it in some other component as well, experiment). Use `useSelector` hook. 
