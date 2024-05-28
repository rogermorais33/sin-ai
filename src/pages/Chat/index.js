import './index.css';
import * as React from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SendIcon from '@mui/icons-material/Send';


function Chat() {
  
  return (
    <div className='chat'>
      <div className='menu'>
        ola
      </div>
      <div className='chat-area'>
        ola
      </div>
      <div className='chat-input'>
        <div className='input-area'>
          <input type='text' placeholder='Solicite a analise do produto'></input>
          <div className='icons'>
            <div className='icon'>
              <FileUploadIcon fill='313131' fontSize='medium'></FileUploadIcon>
            </div>
            <div className='icon'>
              <SendIcon fill='313131' fontSize='medium'></SendIcon>
            </div>
          </div>
        </div>
        <span className='text-small'>
          Sin-AI pode cometer erros. Considere verificar informações importantes.
        </span>
      </div>
    </div>
  )
}

export default Chat;