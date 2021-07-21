
function Message() {
    let line = [];
    for(let i=1;i<=100;i++){
        line.push(<p class='line'>I will never mutate state or props directly. I will never mutate state or props directly. I will never mutate state or props directly. I will never mutate state or props directly. </p>)}
  return (
      <div>
        <p>{line}</p>  
     </div>
  )
}

export default Message;
