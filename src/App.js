import { useState } from 'react';
import './App.css';

function App() {
  let [b1, setb1] = useState('');

  let [b2, setb2] = useState('');

  let [b3, setb3] = useState('');

  let [b4, setb4] = useState('');

  let [b5, setb5] = useState('');

  let [b6, setb6] = useState('');

  let [b7, setb7] = useState('');

  let [b8, setb8] = useState('');

  let [b9, setb9] = useState('');

  let [temp, settemp] = useState('x')
  let [disp, setdisp] = useState();
  let [num, setnum] = useState(0);
  let [di, setdi] = useState(false);
  let t1, t2, t3, t4, t5, t6, t7, t8, t9, nu;
  const change = (id) => {
    t1 = b1
    t2 = b2
    t3 = b3
    t4 = b4
    t5 = b5
    t6 = b6
    t7 = b7
    t8 = b8
    t9 = b9
    nu = num
    switch (id) {
      case '1':
        if (b1 === '') {
          setb1(temp);
          t1 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '2':
        if (b2 === '') {
          setb2(temp);
          t2 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '3':
        if (b3 === '') {
          setb3(temp);
          t3 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '4':
        if (b4 === '') {
          setb4(temp);
          t4 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '5':
        if (b5 === '') {
          setb5(temp);
          t5 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '6':
        if (b6 === '') {
          setb6(temp);
          t6 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '7':
        if (b7 === '') {
          setb7(temp);
          t7 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '8':
        if (b8 === '') {
          setb8(temp);
          t8 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
      case '9':
        if (b9 === '') {
          setb9(temp);
          t9 = temp
          if (temp === 'x') {
            settemp('o');
          } else {
            settemp('x');
          }
          nu++
        }
        break;
    }

    chak(t1, t2, t3, 'x')
    chak(t1, t2, t3, 'o')
    chak(t4, t5, t6, 'x')
    chak(t4, t5, t6, 'o')
    chak(t7, t8, t9, 'x')
    chak(t7, t8, t9, 'o')
    chak(t1, t4, t7, 'x')
    chak(t1, t4, t7, 'o')
    chak(t2, t5, t8, 'x')
    chak(t2, t5, t8, 'o')
    chak(t3, t6, t9, 'x')
    chak(t3, t6, t9, 'o')
    chak(t1, t5, t9, 'x')
    chak(t1, t5, t9, 'o')
    chak(t3, t5, t7, 'x')
    tai()
    if (t1 === 'x' && t5 === 'x' && t8 === 'x') {
      setdisp('match is draw');
    } else if (t1 === 'o' && t5 === 'o' && t8 === 'o') {
      setdisp('match is draw');
    }
  }
  const chak = (x, y, z, shin) => {
    if (x === shin && y === shin && z === shin) {
      setdisp(shin + ' win')
      let te = true
      setdi(te)
    }
  }
  const tai = () => {

  }
  return (
    <>
      <div className="main">
        <div className="box">
          <div className="line">
            <input type="button" disabled={di} className='br bb' value={b1} onClick={() => { change('1') }} />
            <input type="button" disabled={di} className='bb' value={b2} onClick={() => { change('2') }} />
            <input type="button" disabled={di} className='bl bb' value={b3} onClick={() => { change('3') }} />
          </div>
          <div className="line">
            <input type="button" disabled={di} className='br bb' value={b4} onClick={() => { change('4') }} />
            <input type="button" disabled={di} className='bb' value={b5} onClick={() => { change('5') }} />
            <input type="button" disabled={di} className='bl bb' value={b6} onClick={() => { change('6') }} />
          </div>
          <div className="line">
            <input type="button" disabled={di} className='br' value={b7} onClick={() => { change('7') }} />
            <input type="button" disabled={di} className='' value={b8} onClick={() => { change('8') }} />
            <input type="button" disabled={di} className='bl ' value={b9} onClick={() => { change('9') }} />
          </div>
        </div>
        <input type="text" value={disp} style={{ textAlign: 'center' }} className='disp' />
        <input type="button" value='reset' className='res' onClick={(e1) => {
          setb1('')
          setb2('')
          setb3('')
          setb4('')
          setb5('')
          setb6('')
          setb7('')
          setb8('')
          setb9('')
          let te = false
          setdi(te)
        }} />
      </div>
    </>
  );
}

export default App;
