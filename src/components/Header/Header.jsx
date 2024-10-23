import profile from '../../../images/profile.png'

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center p-5 border-b-2'>
            <h1 className='text-4xl font-bold bg-green-200 rounded-lg border-0 p-4'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;