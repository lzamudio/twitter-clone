

function Card({ title, children }) {
  return (
    <div className="rounded-lg bg-slate-300 p-4 mb-4">
        <h1 className="font-bold">{title}</h1>
        {children}
    </div>
  )
}

export default  Card;