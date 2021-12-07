import './App.css';
import store from "./store";
import {useEffect, useState} from "react";
import {getAssets} from "./services/assets.service";
import AssetsGallery from "./components/assets-gallery/AssetsGallery";
import assets from './data.json';
import SidebarFilter from "./components/sidebar-asset-filter/SidebarFilter";


function App() {
  // let [assets, setAssets] = useState([]);
  //
  // useEffect(() => {
  //     // debugger;
  //     getAssets().then(value => {
  //         setAssets([...value]);
  //     })
  // }, []);

  return (
    <div className="wrapper">
        <SidebarFilter />
        <AssetsGallery assets={assets}/>
    </div>
  );
}

export default App;