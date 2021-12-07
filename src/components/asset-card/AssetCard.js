import React from 'react';
import './AssetCard.css';

const AssetCard = ({asset}) => {
  let path = '/images/svg/';
  const pathArr = [
      'text-document.svg',
      'text-document.svg',
      'video-asset.svg',
      'pdf-asset.svg',
      'gif-asset.svg',
      'article-asset.svg'
  ];

  return (
   <div className="asset-card">
       {
           // console.log(asset['preview-image'])
       }
        <picture>
            <source srcSet={asset['preview-image']}  />
            <img src={asset['preview-image']} alt={asset.title}/>
        </picture>
        <h6><img src={path + pathArr[asset.type]} alt="ico"/> {asset.title}</h6>
        <p>some tags</p>
   </div>
  );
 }

export default AssetCard;