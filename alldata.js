function AllData(){
  const ctx = React.useContext(UserContext);

  function cardsUsers () {
    return(
      ctx.users.map((variations, index) => (
        <Card
          txtcolor="black"
          header={ctx.users[index].name}
          title="Welcome to United Bad Bank"
          text="You can move around using the navigation bar."
          body={<h5>All Data in Store {ctx.users[index].name}</h5>
          }
  />    
      )));
  }

  return (
    <>
    <h3>Users</h3>
    <br/>
    {cardsUsers()}
    </>
  )
}
//<h5>All Data in Store</h5>
//      {JSON.stringify(ctx)}<br/>