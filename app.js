function CounterView() {

    /* Count part */
    let [count, setCount] = React.useState(0)

     /* Notes part */
     let [note, setNote] = React.useState("")
     let handleNoteChange = function(event) {
         setNote((note)=>{
             return event.target.value
         })
     }

    /* Saved part */
    let initialSave = []
    let [saved, setSave] = React.useState(initialSave)
    let handleSave = function(event) {
        setSave((saved)=>{
            /*saved.push({"count": count, "notes": note})
            return saved*/
            return [...saved, {"count": count, "notes": note}] 
            /* React wasn't redrawing immediately with push, 
            using spread operator to copy all elements from saved 
            into a new array, in order to add new entry.
            */
        })
        setCount(count=> 0)
        setNote(note=> "")
    }

    return (
        <div>
        <h3 class="section-heading">Feral Cat Batching: Counter Tool for T/N/R Volunteers</h3>
        <a href="https://www.alleycat.org/our-work/trap-neuter-return/">Learn more about Trap/Neuter/Return!</a>
        
        <h1 id="count-heading">Number of Cats:</h1>
        <h1 id="count-display">{count}</h1>
        <button class="btn plus-btn" onClick={() => setCount(count=> count + 1)}>
            I got one! (+1 Cat)
        </button>
        <button class="btn minus-btn" onClick={() => setCount(count - 1)}>
            Oops (-1 Cat)
        </button>
        <input class="notes-box" type="text" placeholder="batch notes, i.e. injuries" value={note} onChange={handleNoteChange}></input>
        <button class="btn save-btn" onClick={handleSave}>Save</button>
        <h3 class="section-heading">Batch count & notes: </h3>
        {
            saved.map((item)=><p class="stored-notes">{item.count} {item.notes}</p>)
        }
        </div>
    )
}

let root = ReactDOM.createRoot(document.querySelector(".root"))
root.render(<CounterView />)

/* 

Additional features to consider adding, going forward:

    - A place to add date
    - A way to distinguish between # of cats trapped & # seen but not trapped
    - A general notes section for other volunteers about the area, conditions, etc.
    - Ability to delete previous notes
    - Ability to edit previous notes?
    - Storing data in local storage or other way for users to share data with each other

*/