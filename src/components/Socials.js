import {ImFacebook, ImInstagram, ImPinterest, ImTwitter, ImYoutube} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex flex-row gap-x-3 cursor-pointer'>
      <li> <a href='' target='_blank'></a><ImFacebook /></li>
      <li> <a href='' target='_blank'></a><ImInstagram /></li>
      <li> <a href='' target='_blank'></a><ImPinterest /></li>
      <li> <a href='' target='_blank'></a><ImTwitter />      </li>
      <li> <a href='' target='_blank'></a><ImYoutube/></li>
    </ul>
  </div>;
};

export default Socials;
