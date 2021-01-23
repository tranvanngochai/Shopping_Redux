import { combineReducers } from 'redux';
import CategoryReducer from './category';
import ChoosenCategoryReducer from './choosenCategory';
import ModelReducer from './model';
import ProductReducer from './product';

const RootReducer = combineReducers({
    //danh sách state lưu trư trên store
    products: ProductReducer,
    categories: CategoryReducer,
    choosenCategory: ChoosenCategoryReducer,
    model: ModelReducer
});

export default RootReducer;
