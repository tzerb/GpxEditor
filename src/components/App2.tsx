import * as React from 'react';


export interface App2Props {
}

export interface App2State {
}

class App2 extends React.Component<App2Props, App2State> {
  constructor(prop : App2Props, context: any)
  {    
      super(prop, context);
  }
  render() {
    return (   <div>hello from App22</div>);
  }  
}

export default App2;