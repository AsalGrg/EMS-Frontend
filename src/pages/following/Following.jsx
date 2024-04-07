import React, { useEffect, useState } from 'react'
import get_followings from '../../services/user/get_followings';
import VendorSnippets from '../../components/global/VendorSnippets';
import { Title } from '@mantine/core';
import NoOrders from '../../components/global/NoOrders';

const Following = () => {
    const [followings, setfollowings] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    
    useEffect(() => {

        async function getFollowings() {
          const res = await get_followings();
          if (res.ok) {
            const data = await res.json();
            setfollowings(data);
            console.log(data);
            setisLoading(false);
          }
        }
        getFollowings();
      }, []);


  return (
    <main className='fonts'>
      <Title>Following</Title>

      <div className="mt-5">

          {isLoading ? (
            <p>Loading</p>
          ) : followings.length > 0 ? (
           <VendorSnippets vendors={followings}/>
          ) : (
            <NoOrders message={"No followed vendors."}/>
          )}
      </div>
    </main>
  )
}

export default Following