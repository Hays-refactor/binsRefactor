import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddInventory from './Components/AddInventory/AddInventory';
import BinList from './Components/BinList/BinList';
import ShelfList from './Components/ShelfList/ShelfList';
import ViewInventory from './Components/ViewInventory/ViewInventory';

export default (
    <Switch>
        <Route exact path='/' component={ShelfList} />
        <Route path='/binlist/:shelf' component={BinList} />
        <Route path='/bin/:id' component={ViewInventory} />
        <Route path='/create/:binId' />
    </Switch>
)