

function UserItem({ User, user, isAd}) {
    return (
        <div className="grow">
            <h1 className='font-bold'>{User}</h1>
            <h2 className='text-gray-400'>{user}</h2>
            {
                isAd && <h2 className='text-gray-400'>Promocionado</h2>
            }
        </div>
    )
}
export default UserItem;