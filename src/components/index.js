import React, {useMemo, useState} from 'react';
import data from '../data/data.json';
import Pagination from '../components/Pagination';

let PageSize = 12;

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

return (
  <>
  
       <header>
         <div className="HeaderName"><h1>Spark Mind</h1><p><a href="https://codepen.io/collection/DRVxQE" className="HeaderLink" target="_blank" rel="noreferrer">More examples</a></p></div>
       </header>
       <div className="aks-note-box">

       </div>
        <h2 style={{marginLeft: '10px'}}>DIY | Electronic | LifeHacks</h2>
      
      <div className="p-2 startGrid">
        {currentTableData.map(item => {
            return (
  <div className="whitesmoke">
    <h3 className="videotitle">{item.id}</h3>
    <div className="videolayout">
      <iframe className="iframclass" src={item.image} title={item.id} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    </div>
    <p className="pstyle"><strong><u>Description:</u></strong> {item.title}</p>
  </div>
            );})}
</div>
      
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
</>
    );
}