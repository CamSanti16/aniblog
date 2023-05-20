import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import './articles.scss'

const Articles = () => {
  const [showMore, setShowMore] = useState(false)

  return <div>
    <div class="three-columns-grid">
    <div>1</div>
    <div>2


    </div>
    <div>
      <div className='newsSection'>
        <div className='newsBox'>
            <p className='newsTitle'> AniBlog News </p>
            <ul>
              <div className='listItem'>
                <li> Hello There</li>
                <hr/>
              </div>
              <div className='listItem'>
                <li> Hello There</li>
                <hr/>
              </div>
              <div>
                <p>
                  <a className="btn btn-primary showMoreBtn" onClick={() => setShowMore(!showMore)} style={showMore ? {display : 'none'} : { }} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Show More <IoIosArrowDown /> 
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className='listItem'>
                    <li> Obi Wan was Here </li>
                    <hr/>
                  </div>
                  <div className='listItem'>
                    <li> Obi Wan was There</li>
                    <hr/>
                  </div>
                </div>
                <p>
                  <a className="btn btn-primary showMoreBtn" onClick={() => setShowMore(!showMore)} style={showMore ? {} : {display : 'none'}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Show Less <IoIosArrowUp /> 
                  </a>
                </p>
              </div>
            </ul>
            
        </div>
      </div>
      3
    </div>
</div>
    
    
    </div>
}

export default Articles
