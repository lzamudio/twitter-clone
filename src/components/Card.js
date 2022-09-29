function Card({ title, children }) {
  return (
    <div>
      <div className='rounded-lg p-4 m-1 bg-[#f7f9f9] '>
        <h1 className="font-bold text-xl">{title}</h1>
        {children}
        <p className='text-blue-500 mt-5'>Show more</p>
        { }
      </div>
    </div>
  )
}

export default Card