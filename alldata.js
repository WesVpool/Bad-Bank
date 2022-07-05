function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx.users[0].balance);

  function dollar (index) {
    return `Current Balance: $${ctx.users[index].balance}`;
  }

  function info (index) {
    return(
      <div>
        <h5 className="fw-bold">Name: {ctx.users[index].name}</h5>
        <h5 className="fw-bold">Email: {ctx.users[index].email}</h5>
        <h5 className="fw-bold">Password: {ctx.users[index].password}</h5>
      </div>
    )
  }
  function users() {
    return(
    ctx.users.map((variations, index) => (
      <Card
        key={variations.name}
        txtcolor="black"
        header={info(index)}
        title={dollar(index)}
        body={
          <div>
            <h5>{variations.name}'s Transactions:</h5>

            {variations.trans.map((vary, i) => (
              <p key={i}>{vary}</p>
            ))}
                       
          </div>
        }/>    
    ))
  )}
  // function transactions (index) {
  //   const user1 = ctx.users[index];
  //   user1.trans.map((vary, i) => (
  //     <div>
  //       <p>{vary}</p>
  //     </div>
  //     )
  //   )
  // }

  return (
    <>
    <h3>Users</h3>
    <br/>
      {users()}
    </>
  )
}