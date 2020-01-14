import React from 'react';
import logo from './logo.svg';
import './App.css';

enum ResponseStatus {
  Failure = 'failure',
  Success = 'success',
  Clear = 'clear',
}

class App extends React.Component {
  state: { status: ResponseStatus; };

  constructor(props: any) {
    super(props);

    this.state = {
      status: ResponseStatus.Clear,
    }
  }

  componentDidMount(): void {
    fetch('/checkStatus')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((_) => this.setState({ status: ResponseStatus.Success }))
      .catch((_) => this.setState({ status: ResponseStatus.Failure }))
  }

  renderBasedOnStatus = () => {
    switch (this.state.status) {
      case (ResponseStatus.Success):
        return <h1 data-at='success' style={{ color: 'green' }}>Success!</h1>;
      case (ResponseStatus.Failure):
        return <h1 data-at='failure' style={{ color: 'red' }}>Failure!</h1>;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {this.renderBasedOnStatus()}
        </header>
      </div>
    );
  }
}

export default App;
