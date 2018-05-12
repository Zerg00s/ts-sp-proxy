import * as React from 'react';
import { Link } from 'react-router-dom';
import * as toastr from 'toastr';
import './App.scss';
import { IFooTextProps } from './FooText';
import FooText from './FooText';

import logo from './logo.svg';

// const GlobalContext = React.createContext<string>()
const store = {
  value: 'hello from store'
}

export const AppContext = React.createContext(store);


class App extends React.Component {
  private fooProps: IFooTextProps;
  private fields: any;

  constructor(props: any) {
    super(props)
    this.fields = {};
    this.fooProps = {
      onChangeCallback: (name: string, newValue: string) => {
        this.fields[name] = newValue;
      }
    }
  }


  public render() {
    toastr.info('rendered!');
    return (
      <div className="App" >
        <AppContext.Provider value={store}>

          <FooText {...this.fooProps} name='field1' />
          <FooText {...this.fooProps} name='field2' />
          <FooText {...this.fooProps} name='field3' />
          <FooText {...this.fooProps} name='field4' />

          <button type='button' onClick={this.handleCick}>Click me!</button>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <div dangerouslySetInnerHTML={{ __html: '<h3>unsafe!!</h3>' }} />
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Link to='/about'>About</Link>
        </AppContext.Provider>
      </div>
    );
  }

  private handleCick = (e: any) => {
    // tslint:disable-next-line:no-console
    console.log(this.fields);
  }

}




export default App;
