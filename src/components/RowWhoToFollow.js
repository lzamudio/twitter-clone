import ProfilePic from './ProfilePic';
import Useritem from './Useritem';


function RowWhoToFollow({ User, isAd,  showFollowButton }) {

    const handleFollowButton = () => {
        // if(showFollowButton) {
        //     return <button className='text-base rounded-full bg-black text-white h-10 w-20'>Follow</button>
        // }

        return showFollowButton ? <button className='text-base rounded-full bg-black text-white h-10 w-20'>Follow</button> : <p>No se puede seguir</p>;
        
    }


    return (
        <div className='flex space-x-4 p-3 text-xs'>
            <ProfilePic Photo={'https://pbs.twimg.com/profile_images/1483096740588924931/MtXXBLR-_400x400.jpg'} />
            <Useritem User={User} user={'@Ramsesgt1708'}  isAd={isAd}/>
            {/* <button className='text-base rounded-full bg-black text-white h-10 w-20'>Follow</button> */}

            {/* {
                handleFollowButton()
            } */}
            {
                showFollowButton && <button className='text-base rounded-full bg-black text-white h-10 w-20'>Follow</button>
                // handleFollowButton()
            }

            {
                !showFollowButton && <p>No se puede seguir</p>
            }


        </div >
    )
}

export default RowWhoToFollow