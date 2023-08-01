function Time(){
    const date = new Date().getHours();
    return(
        <div>
               <p>It's now about {date} o'clock.</p>
        </div>
    );
}
export default Time;