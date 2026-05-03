"use client";
 
import UpdateProfile from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import toast from 'react-hot-toast';
 

const  profilePage = () => {
   const userData = authClient.useSession();
  const user = userData.data?.user;
    return (
         <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <div className="flex flex-col items-center gap-1">
        <Avatar className='h-30 w-30'>
                         <Avatar.Image
                           alt="John Doe"
                           src={user?.image}
                           referrerPolicy="no-referrer"
                         />
                         <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                       </Avatar>

        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-gray-500 mb-4">{user?.email}</p>

        
       <UpdateProfile></UpdateProfile>
      </div>
    </div>
    );
};

export default  profilePage;