import React from 'react'
import '../../style/Wallpaper.css'
import { Link} from 'react-router-dom'



export default function MealTypeItem(props) {
    const {name,content,image}=props.item
  return (
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                    <div className="tileComponent1">
                       <img src={require('../../' + image)} height="150" width="140" />
                    </div>
                    <div className="tileComponent2">
                    <div className="componentHeading">
                      <Link to={'/filter'}> {name}</Link>
                        
                    </div>
                    <div className="componentSubHeading">
                    <Link to={'/filter'}>  {content}</Link >
                    
                    </div>
                </div>
            </div>
        </div>



                
                
                
                
                
              
  )
}
