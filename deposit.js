function Deposit(){
  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState(ctx.users[0].name);
  const [amount, setAmount]     = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);

  function validate(field) {
    if (!Number(field)) {
      alert("Input type not valid. Please enter a number");
      setAmount('');
      return false;
    }
    if (Number(field) <= 0) {
      alert("Please enter a positive value");
      setAmount('');
      return false;
    }
    return true;
  }

  
  function clearForm(){
    setAmount('');
    setShow(true);
  }

  function handleDeposit(){
    if (!validate(amount, "amount")) return;
    ctx.users[0].trans.push(`+ Deposited $${amount}`);
    setBalance(ctx.users[0].balance += Number(amount));
    setShow(false);
  }

  const persHeader = `${name}, Make A Deposit`
  return (
    <Card
    bgcolor="primary"
    header= {persHeader}
    status={status}
    body={show ? (  
            <>
            Current Balance: ${balance}<br/>
            <br/>
            Deposit Amount<br/>
            <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={!amount}>Deposit</button>
            </>
          ):(
            <>
            <h5>Success, {name}!</h5>
            ${amount} has been deposited to your acount.<br/>
            <h5>Your new account balance is: ${balance}</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
            </>
          )}
  />
  )
}
