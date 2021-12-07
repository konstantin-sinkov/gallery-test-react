import React from 'react';
import './AssetsGallery.css';
import AssetCard from "../asset-card/AssetCard";

const AssetsGallery = ({assets}) => {
  // console.log(assets);
  return (
   <div className="assets-wrapper">
       {
           assets.map(el =>
               <AssetCard
                   asset={el}
                   previewImage={el['preview-image']}
                   key = {el.id}/>
           )
       }
   </div>
  );
 }

export default AssetsGallery;