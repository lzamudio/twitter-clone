import Navbar from './components/Navbar';
import Card from "./components/Card";
import RowWhoToFollow from './components/RowWhoToFollow';


function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3" >
          <Navbar />
        </div>
        <div className="col-span-6 ">

        </div>
        <div className="col-span-3 ">
          <Card title={'What s happening'}>

          </Card>
          <Card title={'Who to follow'} >
            <RowWhoToFollow User='User 1' isAd={true}  />
            <RowWhoToFollow User={'User 2'} showFollowButton={true} />
            <RowWhoToFollow User='User 3' />
            <RowWhoToFollow User='User 4' />
            {/* <ul className='flex space-x-4 p-3 text-xs'>
              <ProfilePic Photo={'https://pbs.twimg.com/profile_images/1570046570170650624/0ScRNEBU_400x400.jpg'} />
              <Useritem User={'Shion Rosenthal'} user={'@ShionRosenthal'} />
              <button className='text-base rounded-full bg-black text-white h-10 w-20'>Follow</button>
            </ul >
            <ul className='flex space-x-4 p-3 text-xs'>
              <ProfilePic Photo={'https://pbs.twimg.com/profile_images/1451578083249688576/XLJ2h3SE_400x400.jpg'} />
              <Useritem User={'Lolweapon'} user={'@Lolweapon'} />
              <button className='text-base rounded-full bg-black text-white h-10 w-20'>Follow</button>
            </ul > */}

            {/* <Card title={'Qué esta pasando'}>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Card>
            <Card title={'A quién seguir'} >
              <ul>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </Card> */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
