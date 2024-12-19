import React, { useState } from 'react';
import './App.css';
import Message from './components/Message'; /** Messageコンポーネントを配置。 */
import NameForm from './components/NameForm';

function App() {
  const message = "Hello, React!";
  const libraries = [
    "jQuery",
    "React",
    "Vue.js"
  ];
  // ユーザー情報を入力
  const [name, setName] = useState("");
  const handleTextInput = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className='App-header'>
        {/* 定義したmessageを表示。 */}
        <p>{message}</p>

        {/* 定義した配列を表示。 */}
        {libraries.map(item => <p>{item}</p>)}

        {/* Messageコンポーネントを配置。 */}
        <Message name="tanaka" />
        <Message name="hashimoto" />
        <Message name="sato" />

        {/* テキストを入力 */}
        {/* <input type='text' onChange={handleTextInput} />
        <Message name={name} /> */}

        {/* NameFormコンポーネント */}
        <NameForm name={name} onChangeName={value => setName(value)} />
        <Message name={name} />

      </header>
    </div>
  );
}

export default App;
