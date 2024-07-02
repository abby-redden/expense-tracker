import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './tracker.css'

let d = new Date()


export default function Tracker() {
    const [history, setHistory] = useState([]);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
    const [income, setIncome] = useState(0.00);
    const [balance, setBalance] = useState(0.00);
    const [expense, setExpense] = useState(0.00);
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);


    useEffect(() => {
        if (isActive && history.length > 0) {
            setIsActive(false)
            let num = Math.floor(parseFloat(history[history.length - 1].amnt))
           

            if (num < 0) {
                setExpense(num + expense)
                setBalance(balance + num)
            }
            if (num > 0) {
        
                setIncome(num + income)
                setBalance(balance + num)
            }
        }
    }, [history])
   


function closeItem(id){
    let filt = history.filter((item)=> item.id !== id)
    let tempArr= history.filter((item)=> item.id === id)
    let subAmnt = parseFloat(tempArr[0].amnt)
    let totalBal = 0;
    let totalExpense = 0;
    let totalIncome = 0;
   setHistory(filt)
    totalBal = balance - subAmnt
    setBalance(totalBal)
  
        
  if( subAmnt > 0){
   totalIncome = income - subAmnt
   setIncome(totalIncome)
   setIsActive2(false)
   
  }
  else if(subAmnt < 0){
    totalExpense = expense + Math.abs(subAmnt)
    setExpense(totalExpense)
    setIsActive2(false)
    
    }
}
//Catergorize the things that I am spending money
//relational 
//Summary of expenses 
//Optional date entry
//Google Doc to jot down ideas

    return (
        <div id="tracker">
            <h1>Expense Tracker</h1>
            <div id="balance">
               <u><h3>Your balance</h3></u>
                <h1>${balance}.00</h1>
            </div>

            <div id="inc-exp">
                <h4 className="inc">Income<br/><span id="income">${income}.00</span></h4>
               
                <h4 className="ex">Expense <br/><span id="expense">${expense}.00</span></h4>
            </div>

            <div id="his-sal">
                <h3 className="hist-new">History</h3>
                <div id="hist-box">
                {history.map(item => (
                    <ul className={item.amnt > 0 ? "inco" : "expe"}>
                    <li id="li" key={item.id}>
                        <span id="date">{item.date}</span>
                        <span id="text">{item.text}</span>
                        <span className={item.amnt > 0 ?  'green' : 'red'}>${item.amnt}.00</span>
                        <span className="close" onClick= {() => {

                            closeItem(item.id) 
                            setIsActive2(true)
                            }}>&times;</span>
                    </li>
                    </ul>
                    
                ))}
              
                </div>
            </div>

            <div id="new-trans">
               <u> <h3 className="hist-new">Add a new transaction</h3></u>
                <br/>
                <label>Income/Expense
                    <br />
                    <input type="text" placeholder="Enter expense/income" value={text} onChange={e => setText(e.target.value)}>
                    </input>
                </label>
                <br />
                <br />
                <label>
                    Amount
                    <br/>
                   
                    (negative- expense, positive - income)
                    <br />
                    <input type="number" placeholder="Enter $$$" value={amount} onChange={e => setAmount(e.target.value)}>
                    </input>
                </label>
            </div>
            <br />

            <button className="btn default" onClick={() => {
                setIsActive(true)
                setHistory([...history, {
                    id: Date.now(),
                    date: d.toDateString(),
                    text: text,
                    amnt: parseInt(amount)
                }])
                setText('');
                setAmount('')

            }}>
                Add transaction

            </button>
        </div>
    )
}