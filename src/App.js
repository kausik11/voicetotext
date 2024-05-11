import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

const App = () => {
const [textcopy, settextcopy] = useState()
  const [isCopied, setCopied] = useClipboard(textcopy);

  const startListning = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className='container'>
        <h1>Speech Text Converter</h1>
        <h2>A react hook converts <span>realtime speech to text</span></h2>

        <div className='main-content' onClick={()=>settextcopy(transcript)}>

          <b>{transcript}</b>
          <div className='btn-style'>
            <button onClick={setCopied}>
             {isCopied ? 'copied' : 'click to copy'}
            </button>
            <button onClick={startListning}>start Listning</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listining</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
