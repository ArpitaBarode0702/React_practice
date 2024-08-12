import React from 'react';

function ImageCard(props) {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-md">
        <img className="w-full" src=""></img>
        <div className="px-5 py-5 text-purple-400">
          <div className="font-medium">Photo By Arpita</div>
        </div>
        <ul className="py-4">
          <li><strong>View:</strong>4000</li>
          <li><strong>Downloads:</strong>4000</li>
          <li><strong>Likes:</strong>4000</li>
        </ul>
        <div className="inline-block rounded-md bg-gray-400 m-4 p-2">
          #tag
        </div>
        <div className="inline-block rounded-md bg-gray-400 m-4 p-2">
          #tag
        </div>
        <div className="inline-block rounded-md bg-gray-400 m-4 p-2">
          #tag
        </div>
      </div></>
  );
}

export default ImageCard;
