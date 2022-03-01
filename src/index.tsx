const React = require('./react.development.js');
const ReactDom = require('./react-dom.development.js');

function MyButton() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="my-button" style={{ marginTop: 16 }}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click To Count</button>
    </div>
  )
}

function App() {
  return (
    <div className="app-container" style={{ padding: 24 }}>
      App
      <MyButton />
    </div>
  )
}

ReactDom.render(
  React.createElement(App),
  document.querySelector('#root')
);
