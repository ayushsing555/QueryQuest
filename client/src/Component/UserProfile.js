import React from 'react'

const UserProfile = () => {
  return ( 
<div class="dropdown">
                                <button class="btn text-white rounded-full  bg-red-900 btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown" aria-expanded="false">
                                    <img class="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"  src="/image/boy1.jpg" alt="Bordered avatar" />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="a">profile</a></li>
                                    <li>
                                        <a class="dropdown-item" href="a">Edit Profile</a>
                                    </li>

                                </ul>
                            </div>
  )
}

export default UserProfile