<<<<<<< HEAD
function Card({title, children}){
return(
  <div>
  <div className='rounded-lg p-4 m-1 bg-[#f7f9f9] '> 
    <h1 className="font-bold text-xl">{title}</h1>
    {children}
    <p className='text-blue-500 mt-5'>Show more</p>
    {}
  </div>
  </div>
)
}
export default Card;
=======


function Card({ title, children }) {
  return (
    <div className="rounded-lg bg-slate-300 p-4 mb-4">
        <h1 className="font-bold">{title}</h1>
        {children}
    </div>
  )
}

export default  Card;
>>>>>>> fe643d093e0ceb348c77ddf90ae5489a9cfacc14
