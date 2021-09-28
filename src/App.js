
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main'
import Footer from './Component/Footer'
import Adress from './Component/Adress';
import Country from './Component/Country'
import Account from './Component/Account';

import Product1 from './Component/Product1'
import Product2 from './Component/Product2'

import Cart from './Component/Cart'
import Payment from './Component/Payment'



import Electronics from './Component/Electronics';
import MyOrder from './Component/MyOrder';
import Cleaning from './Component/Cleaning';
import Grooming from './Component/Grooming';
import Immunity from './Component/Immunity'
import Helmates from './Component/Helmates';
import Things from './Component/Things'
import Tyre from './Component/Tyre';
import Vaccum from './Component/Vaccum';
import Bedsheets from './Component/Bedsheets';
import Decor from './Component/Decor';
import Storage from './Component/Storage';
import Lights from './Component/Lights';
import Fresh from './Component/Fresh';
import Fashion from './Component/Fashion';
import Ac from './Component/Ac'
import Fridge from './Component/Fridge';
import Microwaves from './Component/Microwaves';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// import Essential from './Component/Essential';

function App() {




  return (
    <div>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </Route>
          <Route path='/adress'>
            <Header></Header>
            <Main></Main>
            <Adress></Adress>
            <Footer></Footer>
          </Route>
          <Route path='/country'>
            <Header></Header>
            <Country></Country>
            <Footer></Footer>
          </Route>
          <Route path='/accounts'>

            <Account></Account>

          </Route>
          <Route path='/orders'>
            <Header></Header>
            <MyOrder></MyOrder>
            <Footer></Footer>
          </Route>
          <Route path='/product1'>
            <Header></Header>
            <Product1></Product1>
            <Footer></Footer>
          </Route>
          <Route path='/product2'>
            <Header></Header>
            <Product2></Product2>
            <Footer></Footer>
          </Route>
          <Route path='/Electronics'>
            <Header></Header>
            <Electronics></Electronics>
            <Footer></Footer>
          </Route>
          <Route path='/Vaccum'>
            <Header></Header>
            <Vaccum></Vaccum>
            <Footer></Footer>
          </Route>
          <Route path='/cleaning'>
            <Header></Header>
            <Cleaning></Cleaning>
            <Footer></Footer>
          </Route>
          <Route path='/grooming'>
            <Header></Header>
            <Grooming></Grooming>
            <Footer></Footer>
          </Route>
          <Route path='/immunity'>
            <Header></Header>
            <Immunity></Immunity>
            <Footer></Footer>
          </Route>
          <Route path='/helmates'>
            <Header></Header>
            <Helmates></Helmates>
            <Footer></Footer>
          </Route>
          <Route path='/things'>
            <Header></Header>
            <Things></Things>
            <Footer></Footer>
          </Route>
          <Route path='/tyre'>
            <Header></Header>
            <Tyre></Tyre>
            <Footer></Footer>
          </Route>
          <Route path='/Bedsheets'>
            <Header></Header>
            <Bedsheets></Bedsheets>
            <Footer></Footer>
          </Route>
          <Route path='/Decor'>
            <Header></Header>
            <Decor></Decor>
            <Footer></Footer>
          </Route>
          <Route path='/Storage'>
            <Header></Header>
            <Storage></Storage>
            <Footer></Footer>
          </Route>
          <Route path='/Lights'>
            <Header></Header>
            <Lights></Lights>
            <Footer></Footer>
          </Route>
          <Route path='/Fresh'>
            <Header></Header>
            <Fresh></Fresh>
            <Footer></Footer>
          </Route>
          <Route path='/Fashion'>
            <Header></Header>
            <Fashion></Fashion>
            <Footer></Footer>
          </Route>
          <Route path='/Ac'>
            <Header></Header>
            <Ac></Ac>
            <Footer></Footer>
          </Route>
          <Route path='/Fridge'>
            <Header></Header>
            <Fridge></Fridge>
            <Footer></Footer>
          </Route>
          <Route path='/Microwaves'>
            <Header></Header>
            <Microwaves></Microwaves>
            <Footer></Footer>
          </Route>
          <Route path='/cart'>
            <Header></Header>
            <Cart></Cart>
            <Footer></Footer>

          </Route>
          <Route path='/payment'>
            <Header></Header>
            <Payment></Payment>
            <Footer></Footer>
          </Route>

        </Switch>
      </Router>




    </div>

  );
}

export default App;
