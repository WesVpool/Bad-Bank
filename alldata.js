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

  // function cardsUsers () {
  //   return(
  //     ctx.users.map((variations, index) => (
  //       <Card
  //         txtcolor="black"
  //         header={ctx.users[index].name}
  //         title={dollar(index)}s
  //         body={<h5>All Data in Store {ctx.users[index].name}</h5>
  //         }
  // />    
  //     )));
  // }

  return (
    <>
    <h3>Users</h3>
    <br/>
      {ctx.users.map((variations, index) => (
        <Card
          key="users"
          txtcolor="black"
          header={info(index)}
          title={dollar(index)}
          body={
            <div>
              <h5>{ctx.users[index].name}'s Transactions:</h5>

              {ctx.users[index].trans.map((vary, i) => (
                <div key={i}>
                  <p>{ctx.users[index].trans[i]}</p>
                </div>
              ))}            

            </div>
          }/>    
      ))}
    </>
  )
}